
//import liraries
import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image } from 'react-native';


// create a component
class ProfileImage extends Component {


    getPlaceHolderImage = gender => {
        var icon = gender == "female"
            ? require("../../assets/Silhouette_Female.png")
            : require("../../assets/Silhouette_Male.png")
        return icon
    }



    render() {
        return (
            <View >

                {/* {this.addProfilePic()} */}
            <Image
                style={styles.profileImage}
                defaultSource={this.getPlaceHolderImage(this.props.gender)}
                source={{ uri: this.props.imageLink }}
          />

            </View>
        );
    }
}


//make this component available to the app
export default ProfileImage;


const styles = StyleSheet.create({
    profileImage: {
      height: 60,
      width: 60,
      borderRadius: 25
    }
});
  