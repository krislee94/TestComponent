/**
 * Created by apple on 2017/4/10.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    CameraRoll
} from 'react-native';
let fetchParams={
    first:10,
    assetType:'Photos',
}

let imgUrl ='http://www.reactnative.vip/img/';

const first = '/Users/air/Desktop/TestComponent/imgs/IMG_4889.png';
const second = '/Users/air/Desktop/TestComponent/imgs/IMG_4890.png';


class Camera extends Component {
    constructor(props){
        super(props);
        this.state={
            images:[]
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.row}>
                    <View style={styles.flex_1}>
                        <Image resizeMode='stretch'
                               style={[styles.imgHeight, styles.m5]}
                               source={require('../../imgs/IMG_4890.png')}
                        />
                    </View>

                    <View style={styles.flex_1}>
                        <Image  resizeMode='stretch'
                                style={[styles.imgHeight, styles.m5]}
                                source={require('../../imgs/IMG_4889.png')}
                        />
                    </View>


                </View>

                <View>
                    <Text onPress={this.saveImg.bind(this, first, second) }
                          style={styles.saveImg}
                    >
                        保存图片到相册
                    </Text>
                </View>
                <View style={styles.haveimage}>
                {this.state.images ?this.renderImage():this.noimage()}
                </View>
            </ScrollView>
        );
    }


    //在组件渲染加载进去。已经存在的图片。
    //static getPhotos(params:object) ->可以得到手机中所有的图片。
    //params ：对象有 4个成员变量。
    // 1、 first 数值，希望取得的照片的数目，
    // 2、groupType 字符串，默认为【Album All Event Faces Library PhotoStream】
    // 3、assetType 字符串，默认为Photos表示只获取图片【All Videos】
    // 4、after 字符串 用来记录上一次获取图片的结束标志 方便可以接着上次的位置继续获取 它的值不能由开发者随意赋予，而是应当在上一次获取图片后保存其值。
    // 通常，在Android平台，一开始就给这个值为null，但是在IOS平台，设置为null会抛一个无法捕捉的异常，导致红屏。



    componentDidMount(){
        let _that = this;
        //使用Promise机制
        CameraRoll.getPhotos(fetchParams)
            .then((data)=>{
                console.log(data);
                let  edges = data.edges;
                let images = edges.map((edge)=>{
                    return edge.node.image;
                });
                _that.setState({
                    images:images,
                });
            })
            .catch(error =>{
                console.log('出错了：'+error);
            });
    }

    renderImage(){
        return(
            <View>
            <Text>有图片</Text>
                <View style={styles.imageGrid}>
                {
                    this.state.images.map((image) =>
                        <Image
                            style={styles.image}
                            resizeMode='stretch'
                            source={image}
                            key={image.uri}
                        />

                    )
                }
                </View>
            </View>
        )
    }
    noimage(){
        return(
            <Text>no image</Text>
        )
    }
    saveImg(img1, img2) {
        let _that = this;
        CameraRoll.saveToCameraRoll(img1).then(
            (url) => {
                if (url) {
                    let images = _that.state.images;
                    //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
                    images.unshift(
                        {
                            uri: url,
                        }
                    );
                    _that.setState({
                        images: images,
                    });
                    //继续保存第二张图片
                    CameraRoll.saveToCameraRoll(img2).then(
                        (url) => {
                            images.unshift(
                                {
                                    uri: url,
                                }
                            );
                            _that.setState({
                                images: images,
                            });
                            alert('图片全部保存成功');
                        }

                    ).catch(
                        error => {
                            console.log(error);
                            alert('保存第二张照片失败-error-' + error);
                        }
                    );

                }
            }
        ).catch(error => {
            console.log(error);
            alert('保存第一张照片失败-error-' + error);

        });



    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    haveimage:{
        marginTop:100,
    },
    flex_1: {
        flex: 1,
    },
    m5: {
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    row: {
        flexDirection: 'row',
    },
    imageGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
    imgHeight: {
        height: 180,
        width:200,
    },

    saveImg: {
        flex: 1,
        height: 30,
        textAlign: 'center',
        marginTop: 20,
        color: '#FFF',
        lineHeight: 20,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold',
        backgroundColor: '#3BC1FF',
    },

});

module.exports = Camera;