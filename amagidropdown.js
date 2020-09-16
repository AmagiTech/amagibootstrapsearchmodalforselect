const amagiDropdownTimers = {};

function setValue(el, elementId) {
    if (el.className.indexOf('active') < 0) {
        el.className += ' active';
        for (i = 0; i < el.parentElement.childElementCount; i++) {
            if (el.parentElement.children[i] != el)
                el.parentElement.children[i].className = 'list-group-item list-group-item-action';
        }
    }else{
        var targetElement = document.getElementById(el.parentElement.dataset.element);
        targetElement.value = el.dataset.val;   
        $(`#${el.parentElement.dataset.modalid}`).modal("hide");
    }
    
}
function amagiDropdown(elementId, dt, selectedValue) {

    var searchId = elementId + '_' + Math.floor(Math.random() * 1000);
    var options = '';
    if (selectedValue == null || selectedValue.length < 1)
        options += '<option selected>Choose...</option>';
    var modalButton = '';
    for (var i = 0; i < dt.length; i++) {
        var o = dt[i];
        options += `<option value="${o.value}" ${o.value == selectedValue ? ' selected' : ''}>${o.display}</option>`;
        modalButton += `<button type="button" data-val="${o.value}" onclick="setValue(this)" class="list-group-item list-group-item-action${o.value == selectedValue ? ' active' : ''}">${o.display}</button>`
    }
    var el = document.getElementById(elementId);
    el.outerHTML = `
    <div class="input-group">
        <select class="custom-select" id="${elementId}">
            ${options}
        </select>
        <div class="input-group-append" >
            <button id="btn_${searchId}" class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#modal_${searchId}">Search</button>
        </div>
    </div>`

    document.body.innerHTML += `
    <div class="modal fade bd-example-modal-lg" id="modal_${searchId}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Search and Select</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
         </button>
        </div>
        <div class="modal-body">
            <form>
                <p>Please first search and later double click the option you selected.</p>
                <div class="form-row">
                    <input id="src_${searchId}" class="form-control form-control-lg" type="text" placeholder="">
                </div>
                <hr>
                <div id="list_${elementId}" class="list-group" data-element="${elementId}" data-modalid="modal_${searchId}">
                    ${modalButton}
                </div>
            </form>
            </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`;
    amagiDropdownTimers['tmr_' + searchId] = null;
    document.getElementById(`src_${searchId}`).addEventListener('input', function (ev) {
        clearTimeout(amagiDropdownTimers['tmr_' + searchId]);
        amagiDropdownTimers['tmr_' + searchId] = setTimeout(
            function () {
                var searchText = ev.srcElement.value.toLowerCase();
                var list  = document.getElementById(`list_${elementId}`);
                for (i = 0; i < list.childElementCount; i++) {
                    list.children[i].style.display = (searchText==null || searchText.length<1) ? ""
                    :((list.children[i].innerHTML.toLowerCase().indexOf(searchText)<0)?"none":"");
                }
            }, 1000);
    })
}