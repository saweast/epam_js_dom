/**
 * Created by Tea on 7/31/2016.
 */
window.onload = function () {
    let productType = document.getElementsByClassName('pType')[0],
        productTypeValue,
        newPhone = document.getElementById('newPhone');

    newPhone.addEventListener('click', function() {
        let parent = document.getElementsByClassName('orderPhones')[0],
            local = 0,
            label = document.createElement('label'),
            input = document.createElement('input'),
            textNode = document.createTextNode('Phone number: ');
        label.setAttribute('for', 'orderPhone'+local);
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'orderPhone');
        input.setAttribute('id', 'orderPhone'+local);
        local++;
        label.appendChild(textNode);
        label.appendChild(input);
        parent.appendChild(label);
    })

    productType.addEventListener('click', function(event) {
        let target = event.target,
            radio = document.getElementsByName('productType'),
            standartBlock = document.getElementsByClassName('standart')[0],
            exclusiveBlock = document.getElementsByClassName('exclusive')[0];
        if (radio[0].checked) {
            standartBlock.style.display = 'block';
            exclusiveBlock.style.display = 'none';
            productTypeValue = 0;
        } else {
            standartBlock.style.display = 'none';
            exclusiveBlock.style.display = 'block';
            productTypeValue = 1;
        }
    });
}
