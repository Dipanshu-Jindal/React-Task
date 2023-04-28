import React, { useState } from 'react'
import './random.css'

const Random = () => {
    const [formData, setFormData] = useState({
        sprint: '',
        ticketNo: '',
        effortHours: '',
        sprintWeek: '',
        ticketType: '',
        status: '',
        parentTicketNumber: '',
        comment: '',
    });

    const [formErrors, setFormErrors] = useState({
        sprint: '',
        ticketNo: '',
        effortHours: '',
        sprintWeek: '',
        ticketType: '',
        status: '',
        parentTicketNumber: '',
        comment: '',
    });

    const handleValidation = (event) => {
        event.preventDefault();

        //Validation Logic here

        let errors = {};
        let isValid = true;

        if (!formData.sprint) {
            errors.sprint = 'Please enter the sprint';
            isValid = false;
        }

        if (!formData.ticketNo) {
            errors.ticketNo = 'Please enter a Ticket No.';
            isValid = false;
        }

        if (!formData.effortHours) {
            errors.effortHours = 'Please enter an Effort Hours value.';
            isValid = false;
        } else if (isNaN(formData.effortHours)) {
            errors.effortHours = 'Effort Hours value must be a number.';
            isValid = false;
        }

        if (!formData.sprintWeek || formData.sprintWeek === 'Sprint Week') {
            errors.sprintWeek = 'Please select a Sprint Week.';
            isValid = false;
        }

        if (!formData.ticketType || formData.ticketType === 'Ticket Type') {
            errors.ticketType = 'Please select a Ticket Type.';
            isValid = false;
        }

        if (!formData.status || formData.status === 'Status') {
            errors.status = 'Please select a Status.';
            isValid = false;
        }

        if (!formData.comment) {
            errors.comment = 'Please enter a Comment.';
            isValid = false;
        }

        if (!formData.parentTicketNumber) {
            errors.parentTicketNumber = 'Please enter a Parent Ticket Number.';
            isValid = false;
        } else if (isNaN(formData.parentTicketNumber)) {
            errors.parentTicketNumber = 'Parent Ticket Number must be a number.';
            isValid = false;
        }


        setFormErrors(errors);

        if (isValid) {
            //submit form data
            console.log(formData);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="container">
            <div>
                <form className='formStyle' onSubmit={handleValidation}>

                    <div className='column'>
                        <div className='field'>
                            <label for="Sprint">Sprint</label>
                            <input
                                type='text'
                                name='Sprint'
                                placeholder='Sprint*'
                                value={formData.sprint}
                                onChange={handleChange}
                            />
                            {formErrors.sprint && <span className="error">{formErrors.sprint}</span>}
                        </div>
                        <div className='field'>
                            <label for="Ticket Number">Ticket No.</label>
                            <input
                                type='text'
                                name='Ticket Number'
                                placeholder='Ticket No.*'
                                value={formData.ticketNo}
                                onChange={handleChange}
                            />
                            {formErrors.ticketNo && <span className='error'>{setFormErrors.ticketNo}</span>}
                        </div>
                        <div className='field'>
                            <label for="Effort Hours">Effort Hours</label>
                            <input
                                type="text"
                                name="Effort Hours"
                                placeholder="Effort Hours*"
                                value={formData.effortHours}
                                onChange={handleChange}
                            />
                            {formErrors.effortHours && <span className='error'>{setFormErrors.effortHours}</span>}
                        </div>
                        <div className='field'>
                            <label for="Parent Ticket Number">Parent Ticket Number</label>
                            <input
                                type="text"
                                name="Parent Ticket Number"
                                placeholder="Parent Ticket Number*"
                                value={formData.parentTicketNumber}
                                onChange={handleChange}
                            />
                            {formErrors.parentTicketNumber && <span className='error'>{setFormErrors.parentTicketNumber}</span>}
                        </div>
                    </div>
                    <div className='column'>
                        <div className='field'>
                            <label for="Sprint Week">Sprint Week</label>
                            <select
                                name="Sprint Week"
                                id="Sprint Week"
                                value={formData.sprintWeek}
                                onChange={handleChange}
                            >
                                <option value="Sprint Week">Sprint Week*</option>
                                <option value="Week 1">Week 1</option>
                                <option value="Week 2">Week 2</option>
                                <option value="Week 3">Week 3</option>
                                <option value="Week 4">Week 4</option>
                            </select>
                            {formErrors.sprintWeek && <p className="error">{formErrors.sprintWeek}</p>}
                        </div>
                        <div className='field'>
                            <label for="Ticket Type">Ticket Type</label>
                            <select
                                name="Ticket Type"
                                id="Ticket Type"
                                value={formData.ticketType}
                                onChange={handleChange}
                            >
                                <option value="Ticket Type">Ticket Type*</option>
                                <option value="Story">Story</option>
                                <option value="Task">Task</option>
                                <option value="Defect">Defect</option>
                                <option value="Bug">Bug</option>
                            </select>
                            {formErrors.ticketType && <p className="error">{formErrors.ticketType}</p>}
                        </div>
                        <div className='field'>
                            <label for="Status">Status</label>
                            <select
                                name="Status"
                                id="Status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="Status">Status*</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Blocked">Blocked</option>
                            </select>
                            {formErrors.status && <p className="error">{formErrors.status}</p>}
                        </div>
                        <div className='field'>
                            <label for="Comment">Comment</label>
                            <textarea
                                value={formData.comment} onChange={handleChange}>Comment*</textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Random