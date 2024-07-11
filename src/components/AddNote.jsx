import React, { useState } from 'react';

function AddNote({ id, note, trigger, setTrigger, onAddNote }) {
    const [ noteValue, setNoteValue ] = useState(note);

    const noteLimit = 50;

    if(noteLimit - noteValue.length <= 10) {
        document.querySelector('.cart__product-add-note-limit').style.color = 'red';
    }

    const onAddNoteHandler = (event) => {
        event.preventDefault();
        onAddNote(id, noteValue);
        setTrigger(false);
    };

    if(trigger === false) return;
        
    return (
        <div className="cart__product-add-note">
            <span className="cart__product-add-note-text">Place a note for the seller...</span>
            <form className="cart__product-add-note-form" onSubmit={onAddNoteHandler}>
                <div className="cart__product-add-note-input-n-limit">
                    <input
                        type="text" name="add-note" id={`add-note-${id}`}
                        className="cart__product-add-note-input"
                        value={noteValue} onChange={(event) => { noteValue.length < noteLimit && setNoteValue(event.target.value); }}
                    />
                    <span className="cart__product-add-note-limit">{noteLimit - noteValue.length} characters left</span>
                </div>
                <button type="submit" className="cart__product-add-note-submit">Confirm</button>
                <button className="cart__product-add-note-cancel" onClick={() => setTrigger(false)}>Cancel</button>
            </form>
        </div>
    );
}

export default AddNote;