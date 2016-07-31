/**
 * Created by Tea on 7/31/2016.
 */
"use strict";
window.onload = function () {
    let productType = document.getElementsByClassName('pType')[0],
        productTypeValue,
        local = 0,
        newPhone = document.getElementById('newPhone'),
        button = document.getElementById('submitButton'),
        result = document.getElementById('bill');


    newPhone.addEventListener('click', function() {
        let parent = document.getElementsByClassName('orderPhones')[0],
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

    button.addEventListener('click', function(e) {
        e.preventDefault();
        let price = document.getElementById('price').value,
            number = document.getElementById('number').value;
        if (!productTypeValue) {
            let name = document.getElementById('productNameStandart').value,
                file = document.getElementById('productFileStandart').value;
            //call fucntion
        } else {
            let name = document.getElementById('productNameExclusive').value,
                file = document.getElementById('productFileExclusive').value,
                formFactor = document.getElementById('productFormFactorExclusive').options[document.getElementById('productFormFactorExclusive').selectedIndex].innerHTML,
                workFlow = document.getElementById('productWorkFlowExclusive').options[document.getElementById('productWorkFlowExclusive').selectedIndex].innerHTML,
                diameter = document.getElementById('productDiameterExclusive').value,
                matherial = document.getElementById('productMatherialExclusive').options[document.getElementById('productMatherialExclusive').selectedIndex].innerHTML,
                mountingBracket = document.getElementById('productMountingBracketExclusive').value,
                length = document.getElementById('productLengthExclusive').value;
        //    call fucniton
        }
    })
}

