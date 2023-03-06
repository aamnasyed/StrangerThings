const COHORT_NAME = '2301-FTB-MT-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

import React from "react"

import {useEfect, useState } from "react";

const RegisterUser = async () => {
    try {
        const response = await fetch( `${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                "Contenet-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                }
            })
        }) 

        const translatedData = await response.json();

        console.log(translatedData)
        if (!translatedData.success) {
            alert("Account not found, create new account");
        } else {
            const myJWT = translatedData.data.token
            localStorage.setItem("token", myJWT);
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <section>
            
        </section>
    )

export default RegisterUser











// const registerUser = async () => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}/users/register`, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           user: {
//             username: 'superman27',
//             password: 'krypt0n0rbust'
//           }
//         })
//       });
//       const result = await response.json();
// // You can log ▲▲▲ the result
// // here ▼▼▼ to view the json object before returning it
//       console.log(result)
//       return result
//     } catch (err) {
//       console.error(err);
//     }
//   }