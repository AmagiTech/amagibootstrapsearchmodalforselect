const amagiDropdownTimers = {};

function setValue(el) {
    var searchId = el.parentElement.dataset.searchid;
    if (el.className.indexOf('active') < 0) {
        el.className += ' active';
        for (i = 0; i < el.parentElement.childElementCount; i++) {
            if (el.parentElement.children[i] != el)
                el.parentElement.children[i].className = 'list-group-item list-group-item-action';
        }
    } else {
        var targetElement = document.getElementById(el.parentElement.dataset.element);
        targetElement.value = el.dataset.val;
        var displayElement = document.getElementById(`display_${searchId}`);
        displayElement.value = el.dataset.text;
        if (targetElement.onchange != null)
            targetElement.onchange();
        $(`#modal_${searchId}`).modal("hide");
    }

}
function amagiDropdown(settings) {
    elementId = settings.elementId;
    data = settings.data;
    selectedValue = settings.selectedValue;
    searchButtonInnerHtml = settings.searchButtonInnerHtml;
    closeButtonInnerHtml = settings.closeButtonInnerHtmlcloseButtonInnerHtml;
    title = settings.title;
    bodyMessage = settings.bodyMessage;
    if (searchButtonInnerHtml == null || searchButtonInnerHtml.length < 1) {
        searchButtonInnerHtml = 'Search';
    }
    if (closeButtonInnerHtml == null || closeButtonInnerHtml.length < 1) {
        closeButtonInnerHtml = 'Close';
    }
    if (title == null || title.length < 1) {
        title = 'Search and Select';
    }
    if (bodyMessage == null || bodyMessage.length < 1) {
        bodyMessage = 'Please first search and later double click the option you selected.';
    }


    var el = document.getElementById(elementId);
    var searchId = elementId + '_' + Math.floor(Math.random() * 1000);
    var selectedDisplayText = '';
    var modalButton = '';
    if (data != null && data.length > 0) {

        for (var i = 0; i < data.length; i++) {
            var o = data[i];
            if (o.value == selectedValue)
                selectedDisplayText = o.display;
            modalButton += `<button type="button" data-val="${o.value}" data-text="${o.display}" onclick="setValue(this)" class="list-group-item list-group-item-action${o.value == selectedValue ? ' active' : ''}">${o.display}</button>`
        }
    } else {
        for (var i = 0; i < el.options.length; i++) {
            var o = el.options[i];
            if (o.selected == true) {
                selectedValue = o.value;
                selectedDisplayText = o.text;
            }
            modalButton += `<button type="button" data-val="${o.value}" data-text="${o.text}" onclick="setValue(this)" class="list-group-item list-group-item-action${o.selected == true ? ' active' : ''}">${o.text}</button>`
        }
    }
    var elOnchangeEvent = el.onchange;
    el.outerHTML = `
    <div class="input-group">
        <input id="display_${searchId}" type="text" readonly="readonly" class="form-control" style="background:white;" value="${selectedDisplayText}"/>
        <input id="${el.id}" name="${el.name}" type="hidden" value="${selectedValue}"/> 
        <div class="input-group-append" >
            <button id="btn_${searchId}" class="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#modal_${searchId}">${searchButtonInnerHtml}</button>
        </div>
    </div>`

    document.body.innerHTML += `
    <div class="modal fade bd-example-modal-lg" id="modal_${searchId}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">${title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
         </button>
        </div>
        <div class="modal-body">
            <form>
                <p>${bodyMessage}</p>
                <div class="form-row">
                    <input id="src_${searchId}" class="form-control form-control-lg" type="text" placeholder="">
                </div>
                <hr>
                <div id="list_${elementId}" class="list-group" data-element="${elementId}" data-searchid="${searchId}">
                    ${modalButton}
                </div>
            </form>
            </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">${closeButtonInnerHtml}</button>
                </div>
            </div>
        </div>
    </div>`;
    amagiDropdownTimers['tmr_' + searchId] = null;
    document.getElementById(elementId).onchange = elOnchangeEvent;
    document.getElementById(`src_${searchId}`).addEventListener('input', function (ev) {
        clearTimeout(amagiDropdownTimers['tmr_' + searchId]);
        amagiDropdownTimers['tmr_' + searchId] = setTimeout(
            function () {
                var searchText = ev.target.value.toLowerCase();
                var list = document.getElementById(`list_${elementId}`);
                for (i = 0; i < list.childElementCount; i++) {
                    list.children[i].style.display = (searchText == null || searchText.length < 1) ? ""
                        : ((list.children[i].innerHTML.toLowerCase().indexOf(searchText) < 0) ? "none" : "");
                }
            }, 1000);
    })
}