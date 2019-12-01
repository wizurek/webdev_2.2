window.onload = function () {

    let form = document.getElementById('formularz')

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let wartosc = document.getElementById('name').value;


        if (wartosc.length >= 3) {
            console.log('Poprawna wartość');
            document.getElementById('error').setAttribute('hidden', '');
            e.currentTarget.submit();

        } else {
            document.getElementById('error').removeAttribute('hidden');

        }

    });
};