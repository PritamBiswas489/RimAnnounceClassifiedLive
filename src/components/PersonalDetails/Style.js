import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#fff',
  },
  passwordcontainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#fff',
    borderRadius: 8, 
    paddingHorizontal: 14, 
    borderColor: '#EDEDED',
    borderWidth: 1,
}, 
paswordinput: { 
    backgroundColor: '#fff',
    flex: 1, 
    color: '#333', 
    paddingVertical: 10, 
    paddingRight: 10, 
    fontSize: 16, 
}, 
iconeye: { 
    marginLeft: 10, 
}, 
  container: {
    paddingHorizontal: 15,
    marginBottom:100,
    marginTop:20
  },
  loginTop: {
    paddingVertical: 20,
  },
  LoginTitle: {
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    color: '#0e0a4a',
    textAlign: 'center',
    marginBottom: 15,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImg: {
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  formWrap: {
    marginTop: 40,
  },
  formGroup: {
    position: 'relative',
    marginBottom: 20,
  },
  inputIconBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  labelIcon: {
    fontSize: 16,
    color: '#009DE0',
    marginRight: 5,
  },
  inputLabel: {
    fontSize: 16,
    color: '#030233',
    fontFamily: 'Mulish-Bold',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ededed',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#090b0c',
    fontSize: 16,
    height: 50,
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
  },

  textArea: {
    backgroundColor: '#fafafa',
    borderColor: '#ededed',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#090b0c',
    fontSize: 16,
    height: 150,
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
  },
  submit: {
    marginTop: 30,
  },
  signInBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    elevation: 3,
    backgroundColor: '#08A7EB',
    width: '100%',
    marginBottom: 5,
    borderRadius: 10,
    // fontFamily: 'Mulish-Black',
  },
  tcInBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    elevation: 3,
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 2,
    borderRadius: 10,
    // fontFamily: 'Mulish-Black',
  },
  deleteInBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    elevation: 3,
    backgroundColor: 'red',
    width: '100%',
    marginBottom: 2,
    borderRadius: 10,
    // fontFamily: 'Mulish-Black',

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
    fontFamily: 'Mulish-Black',
    textTransform: 'uppercase',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  walletInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  walletIcon: {
    fontSize: 30,
    color: '#009DE0',
    marginRight: 5,
  },
  
  walletAmount: {
    fontSize: 30,
    color: '#030233',
    fontFamily: 'Mulish-Bold',
  },
  
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  logoutIcon: {
    fontSize: 25,
    color: '#FF0000',
  },
  
  logoutText: {
    fontSize: 18,
    color: '#FF0000',
    fontFamily: 'Mulish-Bold',
  },
  
  
});
export default styles;
