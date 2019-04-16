"use strict";

const wrapper = document.querySelector('.wrapper');
const newFolder = document.querySelector('.head');
const createFolder = document.querySelector('.newFolder');
const create = document.querySelector('.createButton');
const cancel = document.querySelector('.cancel');
const close = document.querySelector('.closed');
const textInput = document.querySelector('input');
const folderArea = document.querySelector('.folderMain');
const folderItem = document.querySelectorAll('.folderItem');



window.oncontextmenu = function(e)
{
	e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;

    wrapper.style.top = y + 'px';
    wrapper.style.left = x + 'px';
    wrapper.classList.add('d-block');
}

window.onclick = function()
{
	wrapper.classList.remove('d-block');
    wrapper.classList.add('d-none');
}

newFolder.onclick = function()
{
    createFolder.classList.add('d-block');
    create.onclick = function()
    {
        const userInput = textInput.value.trim();
        const div = document.createElement('div');
        const icon = document.createElement('i');
        const p = document.createElement('p');
        div.className = 'folderItem';
        icon.className = 'fas fa-folder';
        div.setAttribute("draggable", "true");

        p.innerText = userInput;
        div.appendChild(icon);
        div.appendChild(p);
        folderArea.appendChild(div);
        
        createFolder.classList.remove('d-block');
    }
    cancel.onclick = function()
    {
        createFolder.classList.remove('d-block');
    }
    close.onclick = function()
    {
    	createFolder.classList.remove('d-block');
    }
};
