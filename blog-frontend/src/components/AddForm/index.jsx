import React from 'react';

import './AddForm.scss'

const AddForm = ({title, description, imageUrl}) => {
    return (
<div>

<form className="add-form">
    <div className="add-form__row">
      <h4>
        <label className="title">Title</label>
      </h4>
      <input 
        type="text"
        className="form-control"
        id="text"
        placeholder="Name title"
      />
    </div>

    <div className="add-form__row">
      <h4>
        <label className="image">Image URL</label>
      </h4>
      <input 
        type="text"
        className="form-control"
        id="image"
        placeholder="Enter image URL"
      />
    </div>

    <div className="add-form__row">
      <h4>
        <label for="description">Description</label>
      </h4>
      <textarea 
        rows="10"
        className="form-control"
        type="text"
        id="description"
        placeholder="Enter text"
      />
    </div>

    <button type="submit"> Create </button>
</form>
</div>

    )
}

export default AddForm;