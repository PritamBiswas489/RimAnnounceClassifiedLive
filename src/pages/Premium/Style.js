import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#fff',
  },
  listTop: {
    paddingHorizontal: 15,
  },
  container: {
    // display: 'flex',
    // height: '100%',
    // paddingHorizontal: 15,
    // backgroundColor: '#fff',
    // flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical:320,
    marginTop:20,
    
  },
  item: {
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    
  },
  activeItem: {
    backgroundColor: '#0e0a4a',
    borderColor: '#0e0a4a',
  },

  // item: {
  //   marginRight: 10,
  // },
  pressable: {
    // padding: 10,
    borderRadius: 20,
  },
  title: {
    color:'black',
    fontSize: 17,
    fontFamily: 'Mulish-Medium',
  },
  activeTitle: {
    color: '#ffffff', // Your active title color
  },
  sortedByPopular: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortedBy: {
    width: 200,
  },
  placeholderStyle: {
    color: 'black',
    fontFamily: 'Mulish-Bold',
    fontSize: 15,
  },
  selectedTextStyle: {
    color: 'black',
    fontFamily: 'Mulish-Bold',
  },
  mostPopularTitle: {
    color: '#0e0a4a',
    fontFamily: 'Mulish-Bold',
    fontSize: 15,
  },
  iconStyle: {
    color: '#f00',
  },
  mostPopular: {
    paddingHorizontal: 20,
  },
  mostPopularPress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    height: 10,
    width: 10,
    marginRight: 5,
  },
  listBox: {
    marginBottom: 15,
  },
  listBoxInner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#fff',
    // borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#666',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
        shadowOpacity: 0.1,
        shadowColor: '#666',
      },
    }),
  },
  listImageBox: {
    width: 150,
  },
  listImage: {
    width: 150,
    height: 120,
    borderRadius: 14,
    backgroundColor:'#08A7EB'
  },

  listDesc: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  listTitle: {
    color: '#0e0a4a',
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
  },
  listSubTitle: {
    color: '#0e0a4a',
    fontSize: 15,
    fontFamily: 'Mulish-Regular',
    marginBottom: 5,
  },
  listPrice: {
    color: '#08A7EB',
    fontSize: 16,
    fontFamily: 'Mulish-ExtraBold',
    marginBottom: 5,
  },
  dateTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
  },
  noDataText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 20,
     
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown:{
    color:'black'
  },
  header: {
    backgroundColor: '#08A7EB', // blue background color
    padding: 10,
    alignItems: 'center',
    marginBottom:10
  },
  headerText: {
    color: '#ffffff', // white text color
    fontSize: 20,
  },
});

export default styles;
