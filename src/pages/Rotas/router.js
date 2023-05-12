import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BemVindo from "../Welcome/index";
import Login from "../Logando/login";
import Home from '../Home';
import Event from '../Eventos/Event';
import Event2 from '../Eventos/Event2';
import Event3 from '../Eventos/Event3';
import Event4 from '../Eventos/Event4';
import Event5 from '../Eventos/Event5';
import Event6 from '../Eventos/Event6';
import Cadastro from '../Cadastro';
import Redefinir from "../Redefinir";
import Usuario from "../Usuario";
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="BemVindo"
                component={BemVindo}
                options={{headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false }}
            />
            <Stack.Screen
                name="Redefinir"
                component={Redefinir}
                options={{headerShown: false }}
            />
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Event" 
                component={Event}
                options={{headerShown: false }}
            />
            <Stack.Screen 
                name="Event2" 
                component={Event2}
                options={{headerShown: false }}
            />
            <Stack.Screen 
                name="Event3" 
                component={Event3}
                options={{headerShown: false }}
            />
            <Stack.Screen 
                name="Event4" 
                component={Event4}
                options={{headerShown: false }}
            />
            <Stack.Screen 
                name="Event5" 
                component={Event5}
                options={{headerShown: false }}
            />
            <Stack.Screen 
                name="Event6" 
                component={Event6}
                options={{headerShown: false }}
            />
            <Stack.Screen 
                name="Usuario" 
                component={Usuario}
                options={{headerShown: false }}
            />
        </Stack.Navigator>
    );
}