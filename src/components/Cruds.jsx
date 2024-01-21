import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Cruds.css";

export default function Cruds() {
  const [number, setNumber] = useState("");
  const [firstName, setNames] = useState("");
  const [department, setDeprement] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [data, setdata] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState(null); 
  const [select, setSelect] = useState("it")

  const [currentPage,setCurrentPage] = useState(1);
  const [itemsPerPage,setitemsPerPage] = useState(6);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        const response = await axios.put(`http://localhost:8000/users/${editingId}`, {
          number,
          firstName,
          department,
          gender,
          age
        });
        const updatedData = data.map(item => {
          if (item.id === editingId) {
            return response.data;
          }
          return item;
        });
        setdata(updatedData);
        setEditingId(null); 
      } else {
        const response = await axios.post("http://localhost:8000/users", {
          number,
          firstName,
          department,
          gender,
          age
        });
        setdata([...data, response.data]);
      }

    
      setNumber("");
      setNames("");
      setDeprement("");
      setGender("");
      setAge("");
    } catch (error) {
      console.log("error " + error);
    }
  };

  const handleEdit = (item) => {
    setNumber(item.number);
    setNames(item.firstName);
    setDeprement(item.department);
    setGender(item.gender);
    setAge(item.age);
    setEditingId(item.id);
    setIsOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      const updatedData = data.filter(item => item.id !== id);
      setdata(updatedData);
    } catch (error) {
      console.log("error " + error);
    }
  };

  useEffect(() => {
    axios("http://localhost:8000/users")
      .then(res => {
        setdata(res.data);
      })
      .catch((err) => console.log("error " + err));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = data.slice(indexOfFirstItem,indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber)

  console.log(gender);

  return (

    <>
      <div className='container'>
        <div className='wraper'>
        <select onChange={(e) => setSelect(e.target.value)} className='btn btn-success'>
          <option value="it">IT</option>
          <option value="accounting">Accounting</option>
          <option value="marketing">Marketing</option>
        </select>

        <div className='modal-btn'>
          <button onClick={() => setIsOpen(true)} className='btn btn-success'>Add User</button>

          {isOpen && (
            <>
              <div className='modalka'>
                <form onSubmit={handleSubmit} className='needs-validation flex g-5'>
                  <input className='form-control' placeholder='index' type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                  <input className='form-control' placeholder='Name...' type="text" value={firstName} onChange={(e) => setNames(e.target.value)} />
                  <input className='form-control' placeholder='department' type="text" value={department} onChange={(e) => setDeprement(e.target.value)} />
                  <input className='form-control' id='male' placeholder='gender...' type="text" name='name' value={gender} onChange={(e) => setGender(e.target.value)} />
                  {/* <div>
                  <label htmlFor="male">Male</label>
                  <input id='male' placeholder='gender...' type="radio" name='name' value={gender} onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="female">Female</label>
                  <input id='female'  placeholder='gender...' type="radio" name='name' value={gender} onChange={(e) => setGender(e.target.value)} />
                  </div> */}
                  <input className='form-control' placeholder='age...' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                  <button  type="submit" class="btn btn-primary" >{editingId ? "Update" : "Submit"}</button>

                  <button type="button" onClick={() => setIsOpen(false)} class="btn btn-primary" >Close</button>
                </form>
              </div>
            </>
          )}
        </div>
        </div>

        <table className='table table-bordered table-hover table-striped mt-5'>
          <thead>
            <tr>
              <th>N%</th>
              <th>Name</th>
              <th>Department</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Actions</th> 
              <th>Delet</th>
            </tr>
          </thead>
          <tbody className=''>
            {currentCountries.filter(a => a.department.toLowerCase().indexOf(select) != -1).map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.number}</td>
                  <td>{item.firstName}</td>
                  <td>{item.department}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                  <td >
                    <button onClick={() => handleEdit(item)} >Edit</button>
                  </td>
                  <td className='bg-danger'>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="paginationAlbums">
        {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(number => (
                    <button className='btn btn-primary' key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
        </div>
      </div>
    </>
  );
}