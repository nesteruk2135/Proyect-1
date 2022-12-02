import React, { useEffect, useState } from 'react';
import { Link, useNavigate,  } from 'react-router-dom';
import { postCharacter, getOccupations } from '../../actions/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import create from "../img/create.jpg"
import "./create.css"

const validationForm = (input) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (!input.name.trim()) {
        errors.name = "Name is required"
    }
    if (!regexName.test(input.name.trim())) {
        errors.name = "The name field only acceps letters and blanks spaces"
    }
    if (!input.nickName) {
        errors.nickName = "nickName required"
    }
    if (!input.birthday) {
        errors.birthday = "birthday is required"
    }
    
    if (!input.status) {
        errors.season = "status required"
    }
    if (input.occupation.length === 0) {
        errors.countries = "occupations or occupation required"
    }
    return errors
};

export default function AddCharacter() {
    
   const navigate = useNavigate()
    const dispatch = useDispatch();    
    
    const [input, setInput] = useState({
        name: '',
        nickName: '',
        birthday: '',
        status: '',
        image:'',
        occupation: []
    });

    const [errors, setErrors] = useState({});
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };

    function handleCheck(e) {
        if(e.target.checked) {
            setInput({
                ...input,
                status: e.target.value
            });
        };
    };

    function handleSelect(e) {
        setInput({
            ...input,
            occupation: [
                ...input.occupation,
                e.target.value
            ]
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(validationForm(input))
        const errors = validationForm(input)
        if(Object.values(errors).length===0){
            dispatch(postCharacter(input))
        alert("Personaje creado!")
        navigate("/home")
        }
        else{
            alert("please complete all the entries before creating a character")
        }
        
        setInput({
            name: '',
            nickName: '',
            birthday: '',
            status: '',
            occupation: []
        });
        
    };

    useEffect(() => {
        dispatch(getOccupations());
    }, [dispatch])
    
    const occupations = useSelector((state) => state.occupations)

    


    return(
        <div className='create-container'>
            <img  className="create-image"
                            src={create}
                            alt='Background'
            />
            <Link className='create-content' to='/characters'>
                <button className='create-content'>Volver</button>
            </Link>
            <h1 className='create-title' >Crea tu personaje</h1>
            <form className='create-content'  onSubmit={e => {handleSubmit(e)}}>
                <div>
                    <label className='create-content'>Nombre:</label>
                    <input className='create-content' type='text' value={input.name} name='name'
                     onChange={e => handleChange(e)}>  
                    </input>{errors.name && <p className='form-error'>{errors.name}</p>}
                </div>
                <div>
                    <label className='create-content'>nickName:</label>
                    <input className='create-content' type='text' value={input.nickName} name='nickName'
                     onChange={e => handleChange(e)}>  
                    </input>{errors.nickName && <p className='form-error'>{errors.nickName}</p>}
                </div>
                <div>
                    <label className='create-content'>BirthDay:</label>
                    <input  className='create-content' type="date" value={input.birthday} name='birthday'
                     onChange={e => handleChange(e)}>  
                    </input>{errors.birthday && <p className='form-error'>{errors.birthday}</p>}
                </div>
                <div>
                    <label className='create-content'>Image:</label>
                    <input  className='create-content' type='image' alt ='this is a input image ' value={input.image} name='image'
                     onChange={e => handleChange(e)}>  
                    </input>{errors.image && <p className='form-error'>{errors.image}</p>}
                </div>
                <div>
                    <h3 className='create-content'>Status</h3>
                </div>
                <div>
                    <select name="status" 
                    className='create-content'
                    onChange={e => handleCheck(e)}
                    id="">
                        <option value="Deceased">Deceased</option>
                        <option value="Unknown">Unknown</option>
                        <option value="Alive">Alive</option>
                    </select>{errors.status && <p className='form-error'>{errors.status}</p>}
                   </div>
                <select className='create-content' onChange={e => handleSelect(e)}>
                    {
                        occupations.map(i => (
                            <option className='create-content' value={i.name}>{i.name}</option>
                        ))
                    }
                    <ul  className='create-content'> 
                        <li  className='create-content'>{input.occupation.map(i => i + ", ")}</li>
                    </ul>
                </select>{errors.occupation && (
              <p className='form-error'>{errors.occupation}</p>
            )}
                <button type='submit'>Crear Personaje</button>
            </form>
        </div>
    );
};

