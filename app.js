const addNotesBtn = document.querySelector('#add');


const storeUpdateLocalStorageData=()=>{
    const textAreaData=document.querySelectorAll('textarea');   
    const notesData=[];
    textAreaData.forEach((note)=>{
        return notesData.push(note.value);
    })
    // console.log(notesData);
    localStorage.setItem('notesData',JSON.stringify(notesData));
};

const addNewNotes = (text=' ') => {

    const note = document.createElement('div');
    note.classList.add('note');
    // <label for="note" class="lab_Not">Leave a Note </label>
    const htmlData = ` 
                     <div class="operation">
                         <button  title="edit" class="edit"><i class="fa-solid fa-user-pen"></i></button>
                         <button   title="delet" class="delete"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <div class="main ${text ? " ": "hidden"}" >${text}</div>  
                    <textarea class="${text ? "hidden": " "}">${text}</textarea>
                    </div>  `;
    note.insertAdjacentHTML('afterbegin', htmlData);

    // console.log(note);
    document.body.appendChild(note);
    // console.log(document.body.appendChild(note));

    // getting reference 

    const btnEdit = note.querySelector('.edit');
    const btnDelete = note.querySelector('.delete');
    const tagMainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');
    // console.log(btnDelete, btnEdit,tagMainDiv.textArea);
      
    btnEdit.addEventListener('click',()=>{
        tagMainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })
    // Static put text value
    //  textArea.value=text;
    // tagMainDiv.innerHTML=`Arka`;
    // textArea.addEventListener('input',(event)=>{
    //     const userValue=event.target.value;
    //     console.log(userValue);

    // })

    textArea.addEventListener('change',(event)=>{
        const userValue=event.target.value;
        // console.log(userValue);
        tagMainDiv.innerHTML=userValue;     
        //Save   data in  local storage(session )
        storeUpdateLocalStorageData();

    }) 
    // element.addEventListener('click', function(event) {
    //     // The 'event' argument contains information about the click event.
    //     // You can access event properties like event. target, event.type, etc.
    //     // Perform actions based on the event.
    // });
    btnDelete.addEventListener('click', () => {
        note.remove();
        storeUpdateLocalStorageData();
    })
 
}
//   getting localStorage data return

// Retrieve data from localStorage
const returnNotesData = JSON.parse(localStorage.getItem('notesData'));
console.log(returnNotesData);
// Check if there's data in localStorage
if (returnNotesData) {
    // Iterate through each item in the data and call addNewNotes
    returnNotesData.forEach((noteData) => {
        // Call addNewNotes function with the noteData as an argument
        addNewNotes(noteData);
    });
}


// const returnNotesData=JSON.parse(localStorage.getItem('notesData'));
//   console.log(returnNotesData);
// if(returnNotesData){returnNotesData.forEach((note)=>addNewNotes(note))};




addNotesBtn.addEventListener('click', () => addNewNotes());









