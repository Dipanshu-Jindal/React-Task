import React, { useState } from 'react';
import './Form.css'
const Form = () => {
    const [sprint, setSprint] = useState("");
    const [ticketNo, setTicketNo] = useState("");
    const [effortHours, setEffortHours] = useState("");
    const [parentTicketNumber, setParentTicketNumber] = useState("");
    const [sprintWeek, setSprintWeek] = useState("");
    const [ticketType, setTicketType] = useState("");
    const [status, setStatus] = useState("");
    const [comments, setComments] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        //validate form fields
        const errors = {};

        if (!sprint) {
            errors.sprint = 'Please enter the sprint';
        }

        if (!ticketNo) {
            errors.ticketNo = 'Please enter a Ticket No.';
        }

        if (!effortHours) {
            errors.effortHours = 'Please enter an Effort Hours value.';
        } else if (isNaN(effortHours)) {
            errors.effortHours = 'Effort Hours value must be a number.';
        }

        if (!sprintWeek || sprintWeek === 'Sprint Week') {
            errors.sprintWeek = 'Please select a Sprint Week.';
        }

        if (!ticketType || ticketType === 'Ticket Type') {
            errors.ticketType = 'Please select a Ticket Type.';
        }

        if (!status || status === 'Status') {
            errors.status = 'Please select a Status.';
        }

        if (!comments) {
            errors.comment = 'Please enter a Comment.';
        }

        if (!parentTicketNumber) {
            errors.parentTicketNumber = 'Please enter a Parent Ticket Number.';
        } else if (isNaN(parentTicketNumber)) {
            errors.parentTicketNumber = 'Parent Ticket Number must be a number.';
        }

        if (Object.keys(errors).length === 0) {
            //form is valid , submit data
            console.log("Form Data:", {
                sprint,
                ticketNo,
                effortHours,
                sprintWeek,
                ticketType,
                status,
                parentTicketNumber,
                comments,
            });

            //clear form data

            setSprint("");
            setTicketNo("");
            setEffortHours("");
            setSprintWeek("");
            setTicketType("");
            setStatus("");
            setParentTicketNumber("");
            setComments("");

            //clear form
            setErrors({});
        } else {
            //form is invalid, update state with errors
            setErrors(errors);
        }
    }
    return (
        <div className="container">
            <div>
                <form className='formStyle' onSubmit={handleSubmit}>

                    <div className='column'>
                        <div className='field'>
                            <label for="Sprint">Sprint</label>
                            <input
                                type='text'
                                id='Sprint'
                                // placeholder='Sprint*'
                                value={sprint}
                                onChange={(e) => setSprint(e.target.value)}
                            />
                            {errors.sprint && <span>{errors.sprint}</span>}
                        </div>
                        <div className='field'>
                            <label for="Ticket Number">Ticket No.</label>
                            <input
                                type='text'
                                id='Ticket Number'
                                // placeholder='Ticket No.*'
                                value={ticketNo}
                                onChange={(e) => setTicketNo(e.target.value)}
                            />
                            {errors.ticketNo && <span>{errors.ticketNo}</span>}
                        </div>
                        <div className='field'>
                            <label for="Effort Hours">Effort Hours</label>
                            <input
                                type="text"
                                id="Effort Hours"
                                // placeholder="Effort Hours*"
                                value={effortHours}
                                onChange={(e) => setEffortHours(e.target.value)}
                            />
                            {errors.effortHours && <span>{errors.effortHours}</span>}
                        </div>
                        <div className='field'>
                            <label for="Parent Ticket Number">Parent Ticket Number</label>
                            <input
                                type="text"
                                id="Parent Ticket Number"
                                // placeholder="Parent Ticket Number*"
                                value={parentTicketNumber}
                                onChange={(e) => setParentTicketNumber(e.target.value)}
                            />
                            {errors.parentTicketNumber && <span>{errors.parentTicketNumber}</span>}
                        </div>
                    </div>
                    <div className='column'>
                        <div className='field'>
                            <label for="Sprint Week">Sprint Week</label>
                            <select
                                name="Sprint Week"
                                id="Sprint Week"
                                value={sprintWeek}
                                onChange={(e) => setSprintWeek(e.target.value)}
                            >
                                <option value="Sprint Week">Sprint Week*</option>
                                <option value="Week 1">Week 1</option>
                                <option value="Week 2">Week 2</option>
                                <option value="Week 3">Week 3</option>
                                <option value="Week 4">Week 4</option>
                            </select>
                            {errors.sprintWeek && <span >{errors.sprintWeek}</span>}
                        </div>
                        <div className='field'>
                            <label for="Ticket Type">Ticket Type</label>
                            <select
                                name="Ticket Type"
                                id="Ticket Type"
                                value={ticketType}
                                onChange={(e) => setTicketNo(e.target.value)}
                            >
                                <option value="Ticket Type">Ticket Type*</option>
                                <option value="Story">Story</option>
                                <option value="Task">Task</option>
                                <option value="Defect">Defect</option>
                                <option value="Bug">Bug</option>
                            </select>
                            {errors.ticketType && <span className="error">{errors.ticketType}</span>}
                        </div>
                        <div className='field'>
                            <label for="Status">Status</label>
                            <select
                                name="Status"
                                id="Status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="Status">Status*</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Blocked">Blocked</option>
                            </select>
                            {errors.status && <span className="error">{errors.status}</span>}
                        </div>
                        <div className='field'>
                            <label for="Comment">Comment</label>
                            <textarea
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                            >
                                Comment*
                            </textarea>
                            {errors.comments && <span className="error">{errors.comments}</span>}
                        </div>

                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            {Object.keys(errors).length === 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Sprint</th>
                            <th>Sprint Week</th>
                            <th>Ticket Number</th>
                            <th>Ticket Type</th>
                            <th>Parent Ticket Number</th>
                            <th>Status</th>
                            <th>Effort Hours</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{sprint}</td>
                            <td>{sprintWeek}</td>
                            <td>{ticketNo}</td>
                            <td>{ticketType}</td>
                            <td>{parentTicketNumber}</td>
                            <td>{status}</td>
                            <td>{effortHours}</td>
                            <td>{comments}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>

    )
}

export default Form;