
import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import MyCarousel from '../../Components/Carousel';
import imagePath from '../../constants/imagePath';
import { Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default class ImageZoom1 extends Component {

    render() {
        return (
            <>
                <Text>cndljnkjl</Text>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={200}
                    imageHeight={200}>
                    <Image style={{ width: 200, height: 200 }}
                        source={{ uri: 'https://images.unsplash.com/photo-1617716464844-892ca425e55a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=345&q=80' }} />
                </ImageZoom>
            </>
        )
    }
}