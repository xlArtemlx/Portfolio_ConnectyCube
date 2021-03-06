import ConnectyCube from "react-native-connectycube";
import AsyncStorage from '@react-native-async-storage/async-storage';




const CREDENTIALS = {
    appId: 3722,
    authKey: "rORd-P85XUYCKMY",
    authSecret: "y3VgGCuDHK-kmR9",
  };

  
  
  


class Cube {
    constructor() {
        this._init()
    }


     _init() {
         ConnectyCube.init(CREDENTIALS);
    }


    async  SignUp(user){
        await ConnectyCube.createSession()
        await ConnectyCube.users.signup(user)
    }

    async  SignIn(user){
        await ConnectyCube.createSession(user)
        return await ConnectyCube.login(user)
    }

    async UpDate(user){
        return await ConnectyCube.users.update(user)
    }
    async logout() {
        await AsyncStorage.setItem('@avtoLogin', '')
        ConnectyCube.logout();
    }

        // return AsyncStorage.setItem()

    

}

export default new Cube();