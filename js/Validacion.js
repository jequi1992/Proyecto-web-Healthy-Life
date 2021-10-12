var pristine;
window.onload = function () {

    var form = document.getElementById("form1");

    var pristine = new Pristine(form,{
        classTo: 'form-group',
        errorClass: 'has-danger',
        successClass: 'has-success',
        errorTextParent: 'form-group',
        errorTextTag: 'div',
        errorTextClass: 'text-help'
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = pristine.validate();
    });


};