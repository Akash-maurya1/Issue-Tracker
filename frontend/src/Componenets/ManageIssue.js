import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const ManageIssue = () => {

    const [issueList, setissueList] = useState([]);
    

    const getissueData = async () => {

        const response = await fetch('http://localhost:5000/issue/getall')
        console.log(response.status);
        const data = await response.json();

        console.log(data);
        setissueList(data);
    }

    const deleteissue = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/issue/delete/'+id, {
            method: 'DELETE'
        })

        console.log(res.status);
        getissueData();
    }

    const closeIssue = async (id) => {
        const res = await fetch('http://localhost:5000/issue/update/'+id, {
            method : 'PUT',
            body : JSON.stringify({closed : true, status : 'solved'}),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if(res.status === 200){
            Swal.fire({
                icon : 'success',
                title : 'Issue Closed✅'
            })
            getissueData();
        }
        
    }

    const startIssue = async (id) => {
        const res = await fetch('http://localhost:5000/issue/update/'+id, {
            method : 'PUT',
            body : JSON.stringify({status : 'In Progress'}),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if(res.status === 200){
            Swal.fire({
                icon : 'success',
                title : 'Issue Closed✅'
            })
            getissueData();
        }
        
    }


    useEffect(() => {
        getissueData();
    }, [])

    const getStatus = (status) => {
        if(status.toLowerCase() === 'pending')
        return <span className="badge badge-danger rounded-pill d-inline">{status}</span>
        else if(status.toLowerCase() === 'solved')
        return <span className="badge badge-success rounded-pill d-inline">{status}</span>
        else if(status.toLowerCase() === 'in progress')
        return <span className="badge badge-warning rounded-pill d-inline">{status}</span>
    }


    const displayissue = () => {
        return (
        <div className="container-fluid h-custom">
        <div className='card'>
          <div className='card-body'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Added By</th>
                        <th>Assigned To</th>
                        <th>Create At</th>
                        <th>Team</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        issueList.map((issue) => (
                            <tr>
                                <td>{issue.title}</td>
                                <td>{issue.type}</td>
                                <td>{issue. addedBy}</td>
                                <td>{issue.assignedTo}</td>
                                <td>{new Date(issue.createdAt).toLocaleDateString()}</td>
                                <td>{issue.team}</td>
                                <td>{getStatus(issue.status)}</td>
                                <td>
                                    <button disabled={issue.closed} onClick={() => {closeIssue(issue._id)}} className={'btn btn-'+(issue.closed? 'secondary':'success')}>{issue.closed ? 'Closed' : 'Close'}</button>
                                </td>
                                <td>
                                    {issue.status == 'pending' && 
                                    <button onClick={() => {startIssue(issue._id)}} className='btn btn-primary'>Start</button>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
            </div>
            </div>
        )
    }


  return (
    <div className='' style={{height : '90vh'}}>
        <div className='container'>
            <h1 className='text-center'>Manage Issue</h1>
           
            <div className='row'>
                <div className="col">
                    {displayissue()}
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default ManageIssue;