import React from 'react';
// 1. import `NativeBaseProvider` component
import { Ionicons } from "@expo/vector-icons"
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import HomeScreen from './Frontend/screens/HomeScreen';
import StudyMaterialListScreen from './Frontend/screens/StudyMaterialListScreen';
import SyllabusTimetableListScreen from './Frontend/screens/SyllabusTimetableListScreen';
import SignUpScreen from './Frontend/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  MaterialCommunityIcons
} from '@expo/vector-icons';
import {
  NativeBaseProvider,
  extendTheme,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  Container
} from 'native-base';
import { signout } from './Frontend/Actions';
import CrsListScreen from './Frontend/screens/CrsListScreen';
import MembersListScreen from './Frontend/screens/MembersListScreen';
import QpsResultsScreen from './Frontend/screens/QpsResultsScreen';
import ComplaintBoxScreen from './Frontend/screens/ComplaintBoxScreen';
import AdminListScreen from './Frontend/screens/AdminListScreen';
import ViewScreen from './Frontend/screens/ViewScreen';







const Drawer = createDrawerNavigator();
function Component(props) {

  const studentLogin = useSelector(state => state.studentLogin)
  const { studentInfo } = studentLogin


  return (
    <Box>
      <HStack bg="#597b7b" justifyContent="space-between" alignItems="center" mt={ 3 } py={ 4 }>
        <Pressable onPress={ () => props.navigation.toggleDrawer() } flexDirection="row" position="absolute" pl={ 2 } zIndex={ 1 }>
          <HamburgerIcon color="#94f1d8" pl={ 2 } size="sm" />
        </Pressable>
        <Center>

        </Center>

        <Center flex={ 1 }>
          <Heading color="#94f1d8" size="md">{ props.route.name === "UVCE_SS" ? `Welcome to ${props.route.name}` : props.route.name }</Heading>
        </Center>

      </HStack>
      <Center>
        {
          props.route.name === "UVCE_SS" ?
            <HomeScreen { ...props } /> : null
        }
        {
          props.route.name === "SignUp" ?
            <SignUpScreen { ...props } /> : null
        }
        {
          props.route.name === "Study-Material" ?
            <StudyMaterialListScreen { ...props } /> : null
        }
        {
          props.route.name === "Syllabuses&Timetable" ?
            <SyllabusTimetableListScreen { ...props } /> : null
        }
        {
          props.route.name === "QPs&Results" ?
            <QpsResultsScreen { ...props } /> : null

        }
        {
          props.route.name === "CRs" ?
            <CrsListScreen /> : null
        }
        {
          props.route.name === "Members" ?
            <MembersListScreen /> : null
        }
        {
          props.route.name === "Complaint_Box" ?
            <ComplaintBoxScreen /> : null
        }
        {
          props.route.name === "AdminControl" ?
            <AdminListScreen { ...props } /> : null
        }
        {
          props.route.name === "View" ?
            <ViewScreen{...props} /> : null
        }

      </Center>
    </Box>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case 'UVCE_SS':
      return "home"
    case 'Study-Material':
      return 'book-open'
    case 'Syllabuses&Timetable':
      return 'book-multiple'
    case 'SignUp':
      return 'login'
    case 'QPs&Results':
      return 'book-lock'
    case 'CRs':
      return 'format-list-checks'
    case 'Members':
      return 'account-supervisor'
    case 'Complaint_Box':
      return 'notebook'
    default:
      return undefined
  }
}

function CustomDrawerContent(props) {

  const studentLogin = useSelector(state => state.studentLogin)
  const { studentInfo } = studentLogin

  const dispatch = useDispatch()

  const signoutHandler = (e) => {
    dispatch(signout())
  }

  return (
    <DrawerContentScrollView { ...props } safeArea >
      <VStack space={ 6 } my={ 2 } mx={ 1 }>
        <Box px={ 4 }>
          <Text bold color="gray.700">{ `sourabh`.toUpperCase() }</Text>
          <Text fontSize={ 14 } mt={ 1 } color="gray.500" fontWeight={ 500 }>9079</Text>
        </Box>

        <VStack divider={ <Divider /> } space={ 4 }>
          <VStack space={ 3 }>
            { props.state.routeNames.map((name, index) => (
              name === "AdminControl" || name === "Class-Representative" || name === "Developer_team" || name === "SignUp" || name === "View" ? null :
                <Pressable
                  key={ index }
                  px={ 5 }
                  py={ 3 }
                  style={ {
                    cursor: "pointer"
                  } }
                  rounded="md"
                  bg={ index === props.state.index ? 'rgba(6, 182, 212, 0.1)' : 'transparent' }
                  onPress={ (event) => {
                    props.navigation.navigate(name);
                  } }
                >
                  <HStack space={ 7 } alignItems="center">
                    <Icon
                      color={ index === props.state.index ? '#3b7182' : '#7c9a89' }
                      size={ 5 } as={ <MaterialCommunityIcons name={ getIcon(name) } /> } />
                    <Text fontWeight={ 500 } color={ index === props.state.index ? '#3b7182' : '#7c9a89' }>
                      { name }
                    </Text>
                  </HStack>
                </Pressable>
            )) }
          </VStack>
        </VStack>
        <VStack space={ 5 }>
          <Text fontWeight={ 500 } fontSize={ 14 } px={ 5 } color="gray.500" bold>Controls</Text>
          <VStack space={ 3 }>

            <Pressable
              px={ 5 }
              py={ 3 }
              style={ {
                cursor: "pointer"
              } }
              onPress={ (event) => {
                props.navigation.navigate("SignUp");
              } }
            >
              <HStack space={ 7 } alignItems="center">
                <Icon
                  color='#be7dc5'
                  size={ 5 } as={ <MaterialCommunityIcons name='login' /> } />
                <Text color='#be7dc5' fontWeight={ 500 }>
                  Sign up
                </Text>
              </HStack>
            </Pressable>

            {
              studentInfo ?
                <Pressable
                  px={ 5 }
                  py={ 3 }
                  style={ {
                    cursor: "pointer"
                  } }
                  onPress={ (e) => signoutHandler(e) }
                >
                  <HStack space={ 7 } alignItems="center">
                    <Icon
                      color='#be7dc5'
                      size={ 5 } as={ <MaterialCommunityIcons name='logout' /> } />
                    <Text color='#be7dc5' fontWeight={ 500 }>
                      Log Out
                    </Text>
                  </HStack>
                </Pressable>
                : null
            }
            <Pressable
              px={ 5 }
              py={ 2 }
              style={ {
                cursor: "pointer"
              } }
              onPress={ (event) => {
                props.navigation.navigate("AdminControl");
              } }
            >
              <HStack space={ 7 } alignItems="center">
                <Icon
                  color='#be7dc5'
                  size={ 5 } as={ <MaterialCommunityIcons name='fingerprint' /> } />
                <Text color='#be7dc5' fontWeight={ 500 }>
                  Admin-Control
                </Text>
              </HStack>
            </Pressable>
            <Pressable
              px={ 5 }
              py={ 3 }
              style={ {
                cursor: "pointer"
              } }
              onPress={ (event) => {
                props.navigation.navigate("Class-Representative");
              } }
            >
              <HStack space={ 7 } alignItems="center">
                <Icon
                  color='#be7dc5'
                  size={ 5 } as={ <MaterialCommunityIcons name='lock' /> } />
                <Text fontWeight={ 500 } color='#be7dc5'>
                  Class-Representative
                </Text>
              </HStack>
            </Pressable>
            <Pressable
              px={ 5 }
              py={ 3 }
              style={ {
                cursor: "pointer"
              } }
              onPress={ (event) => {
                props.navigation.navigate("Developer_team");
              } }
            >
              <HStack space={ 7 } alignItems="center">
                <Icon
                  color='#be7dc5'
                  size={ 5 } as={ <MaterialCommunityIcons name='access-point' /> } />
                <Text fontWeight={ 500 } color='#be7dc5'>
                  Developer_team
                </Text>
              </HStack>
            </Pressable>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Box w="100%" h="100%" >
      <Drawer.Navigator
        drawerContent={ (props) => <CustomDrawerContent { ...props } /> }
      >
        <Drawer.Screen name="UVCE_SS" component={ Component } />
        <Drawer.Screen name="SignUp" component={ Component } />
        <Drawer.Screen name="Study-Material" component={ Component } />
        <Drawer.Screen name="Syllabuses&Timetable" component={ Component } />
        <Drawer.Screen name="QPs&Results" component={ Component } />
        <Drawer.Screen name="CRs" component={ Component } />
        <Drawer.Screen name="Members" component={ Component } />
        <Drawer.Screen name="Complaint_Box" component={ Component } />
        <Drawer.Screen name="Class-Representative" component={ Component } />
        <Drawer.Screen name="AdminControl" component={ Component } />
        <Drawer.Screen name="Developer_team" component={ Component } />
        <Drawer.Screen name="View" component={ Component } />
      </Drawer.Navigator>
    </Box>
  );
}



const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({ colors: newColorTheme });

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
}

export default function App() {


  // 2. Use at the root of your app
  return (
    <Provider store={ store }>
      <NavigationContainer >
        <NativeBaseProvider theme={ theme } config={ config }>
          <Box style={ { paddingTop: 30 } } flex={ 1 } bg="#f0fcf2" alignItems="center" justifyContent="center">

            <MyDrawer />

          </Box>
        </NativeBaseProvider>
      </NavigationContainer>

    </Provider>

  );
}





// };