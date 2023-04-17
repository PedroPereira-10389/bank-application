import { IonBadge, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonLabel, IonRow, IonText, } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../style/App.css'
import { makeRequest } from '../utilities/requests';
import { SERVER_URL } from '../env/environment'
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [data, setData] = useState<any>({});

  const OnSubmit = () => {
    const loggedIn = makeRequest(SERVER_URL, 'POST', data)
    console.log(loggedIn)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    });
  }

  return (
    <>
      <IonContent class="scroll-content">
        <IonGrid class='fullHeight'>
          <IonRow class="ion-align-items-center fullHeight">
            <IonCol class="ion-padding">
              <form onSubmit={handleSubmit(OnSubmit)}>
                <div className='ion-text-center ion-margin-bottom'>
                  <IonIcon
                    style={{ fontSize: "90px", color: "#0040ff" }}
                    icon={personCircle}
                  />
                </div>
                <div>
                  <IonInput {...register("username", { required: true })} name="username" label="Username" labelPlacement="floating" fill="outline" type='text' onIonInput={handleChange}></IonInput>
                </div>
                {errors.username && <IonBadge color="danger">username is required</IonBadge>}
                <div className="ion-margin-top">
                  <IonInput {...register("email", { required: true })} name="email" label="Email" labelPlacement="floating" fill="outline" type='email' onIonInput={handleChange}></IonInput>
                </div>
                {errors.email && <IonBadge color="danger">email is required</IonBadge>}
                <div className="ion-margin-top">
                  <IonInput {...register("phone_number", { required: true })} name="phone_number" label="Phone Number" labelPlacement="floating" fill="outline" type='text' onIonInput={handleChange}></IonInput>
                </div>
                {errors.phone_number && <IonBadge color="danger">Phone Number is required</IonBadge>}
                <div className="ion-margin-top">
                  <IonInput {...register("password", { required: true })} name="password" label="Password" labelPlacement="floating" fill="outline" type='password' onIonInput={handleChange}></IonInput>
                </div>
                {errors.password && <IonBadge color="danger">password is required</IonBadge>}

                <div className="ion-margin-top">
                  <IonButton shape='round' expand="full" type='submit'>Register</IonButton>
                </div>
              </form>
              <div className='ion-text-center ion-margin-top'>
                <span>Already have an account? <Link to="/login">SignIn</Link></span>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Register;
