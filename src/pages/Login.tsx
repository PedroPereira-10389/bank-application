import { IonBadge, IonButton, IonCol, IonGrid, IonIcon, IonInput, IonLabel, IonRow, IonText, } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../style/App.css'
import { makeRequest } from '../utilities/requests';
import { SERVER_URL } from '../env/environment'
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
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
                <IonInput {...register("password", { required: true })} name="password" label="Password" labelPlacement="floating" fill="outline" type='password' onIonInput={handleChange}></IonInput>
              </div>
              {errors.password && <IonBadge color="danger">password is required</IonBadge>}
              <div className='ion-text-end'>
                <IonText color="primary">
                  <a href='#'>Forgot Password</a>
                </IonText>
              </div>
              <div className="ion-margin-top">
                <IonButton shape='round' expand="full" type='submit'>Login</IonButton>
              </div>
            </form>
            <div className='ion-text-center ion-margin-top'>
              <span>Don't have an account?
                <Link to="/register">SignUp</Link></span>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default Login;
