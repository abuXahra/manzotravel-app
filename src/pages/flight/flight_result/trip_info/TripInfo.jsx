
import React, { useState } from 'react'
import { ButtonWrapper, FormContent, FormWrapper, TripInfoBody, TripInfoContent, TripInfoHeader, TripInfoHeaderItems, TripInfoHeaderSteps, TripInfoHeaderTitle, TripInfoSideBar, TripInfoWrapper, TripPassenger } from './TripInfo.style'
import Button from '../../../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import Timeline from '../../../../components/timeline/Timeline';
import Input from '../../../../components/inputs/input/Input';
import SelectInput from '../../../../components/inputs/selectInput/SelectInput';
import { RadioWrapper } from '../../../../components/inputs/input_radio/RadioInput.style';
import RadioInput from '../../../../components/inputs/input_radio/RadioInput';
import { FaUser } from 'react-icons/fa';
import { Countries } from '../../../../data/object/countries';

export default function TripInfo() {

  // navigation
    const navigate = useNavigate();

    // error
    const [inputError, setInputError] = useState(false);
    const [genderError, setGenderError] =useState(false);
    const [selectedOptionError, setSelectedOptionError] = useState(false);

    // const []
    
    // firstnam variable
    const [firstName, setFirstName] = useState('');
    
    // First name Handler
    const firstNameOnchangeHandler = (e)=>{
      setFirstName(e.target.value);
        setInputError(false);
    }



    // Gender
    const [selectedOption, setSelectedOption] = useState('');
        const handleRadioChange = (value) => {
          setSelectedOption(value);
        };

        const gender = [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' },
        ];
        
        const userTitle = [
          { title: 'Mr.', value: 'Mr.' },
          { title: 'Mrs', value: 'Mrs.' },
        ];
        

    // value handle
    const handledSubmit = (e)=>{

      e.preventDefault();

      console.log('=====name: before ', firstName);

        if (firstName === "" || null) {
            setInputError(true);
        }else{
            setInputError(false)
            setFirstName(e.target.value);
            console.log('=====name: after: ',firstName);
        }

        if(selectedOption === "" || null){
          setGenderError(true);
        }

        if(!selectedOption){
          setSelectedOptionError(true);
        }

        setFirstName('');
        setSelectedOption('');
    }


  

  return (
    <TripInfoWrapper>
        
        {/* header */}
        <TripInfoHeader>
        <TripInfoHeaderItems >
            <TripInfoHeaderTitle>
                <span><Button text={'Back'} onClick={()=>navigate('/flight-result')}/></span>
                <h2>Proceed with your booking</h2>
            </TripInfoHeaderTitle>
            
            {/* timeline: Trip info steps */}
            <Timeline currentStep={2}/>
        </TripInfoHeaderItems>
        </TripInfoHeader>
         
          {/* body */}
        <TripInfoBody>
              {/* Sidebar */}
            <TripInfoSideBar>

            </TripInfoSideBar>

            {/* Main Content */}
            <TripInfoContent>
              <h2>Travel Detail</h2>

           {/* Passaenger */}
            <TripPassenger>
              <div>
                  <span><FaUser/></span>
                  <h3>Adult (40ys+)</h3> 
              </div>
                <div>
                  <p>0/1 added</p>
                </div>
            </TripPassenger>

            {/* Form */}
             <FormWrapper onSubmit={handledSubmit}>
                <FormContent>
                  {/* Title  */}
                  <SelectInput options={userTitle} title={'Title'} error={selectedOptionError}/>
                  
                  {/* Last name */}
                    <Input
                        title={'Last Name'}
                        value={firstName}
                        onChange={firstNameOnchangeHandler}
                        error={inputError}
                        requiredSymbol={'*'}
                      />

                      {/* First name */}
                      <Input
                        title={'First Name'}
                        value={firstName}
                        onChange={firstNameOnchangeHandler}
                        error={inputError}
                        requiredSymbol={'*'}
                      />
                </FormContent>

                <FormContent>
                  {/* Title  */}
                  <SelectInput options={Countries} title={'Nationality'} error={selectedOptionError}/>
                      {/* DOB */}
                      <Input
                        title={'Date of Birth'}
                        type={'date'}
                        value={firstName}
                        onChange={firstNameOnchangeHandler}
                        error={inputError}
                        requiredSymbol={'*'}
                      />

                  {/* Gender */}
                  <RadioInput
                    options={gender}
                    defaultValue={selectedOption}
                    onChange={handleRadioChange}
                    error={genderError}
                  />
                </FormContent>

                <FormContent>
                  {/* Title  */}
                  <SelectInput options={Countries} title={'Nationality'} error={selectedOptionError}/>
                      {/* DOB */}
                      <Input
                        title={'Email Address'}
                        type={'email'}
                        value={firstName}
                        onChange={firstNameOnchangeHandler}
                        error={inputError}
                        requiredSymbol={'*'}
                      />

      
                </FormContent>

                {/* Continue Button */}
              <ButtonWrapper>
                <Button text={"Continue"} />
                </ButtonWrapper>  
             </FormWrapper>


         

            </TripInfoContent>
        </TripInfoBody>
    </TripInfoWrapper>
  )
}
