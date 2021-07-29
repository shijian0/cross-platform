/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import { Alert, Image } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [data, setData] = useState();

  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#F4F5F6',
  };

  useEffect(() => {
    fetch('https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp')
      .then((response) => response.json())
      .then(json => setData({
        status: '待收样',
        item: {
          title: '用于显示多种不同类型图片的 React 组件，包括网络图片、静态资源、临时的本地图片、以及本地磁盘上的图片（如相册）等。',
          price: '￥9999', commission: '30.2%', count: 24, sku: '颜色: 奶白色；尺码: S',
          img: 'https://qna.smzdm.com/202011/25/5fbdf9a2c8b205647.jpg_fo742.jpg'
        },
        addr: { name: '宋雨琦', phone: '18698665869', d: '浙江省 杭州市 滨江区 浦沿街道六合路贺田尚城8幢666室', date: '期望时间：5.20 周三' }
      }))
  })

  if (data == undefined) {
    return (<View></View>)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ backgroundColor: '#F20000', justifyContent: 'flex-end', height: 97 + 49 + 10, marginTop: -49 }}>
        <Text style={{ marginLeft: 16, marginBottom: 26, fontSize: 21, fontWeight: "500", color: 'white' }}>{data.status}</Text>
      </View>
      <View style={{ flex: 1, marginTop: -10, padding: 12.5, borderTopLeftRadius: 10, overflow: 'hidden', borderTopRightRadius: 10, backgroundColor: '#F4F5F6' }}>
        <View style={styles.card1}>
          <View style={{ marginTop: 2, flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#333333' }}>{data.addr.name}</Text>
            <Text style={{ fontSize: 14, color: '#666666', marginLeft: 6 }}>{data.addr.phone}</Text>
          </View>
          <Text style={{ marginTop: 11, color: '#666666', fontSize: 14 }}>{data.addr.d}</Text>
          <Text style={{ marginTop: 10, color: '#333333', fontSize: 14 }}>{data.addr.date}</Text>
        </View>
        <View style={styles.card2}>
          <Text style={{ marginLeft: 16, marginTop: 12.5, color: '#333333', fontSize: 16, fontWeight: '500', }}>共计
            <Text style={{ color: '#F20000' }}>{data.item.count}</Text>
            <Text>件</Text>
          </Text>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.06)', height: 0.5, marginTop: 12.5 }}></View>
          <View style={{ flex: 1, flexDirection: 'row', padding: 12 }}>
            <Image source={{ uri: data.item.img }} style={{ width: 70, height: 70, borderRadius: 4, backgroundColor: '#F5F5F6' }}></Image>
            <View style={{ flex: 1 }}>
              <Text style={{ marginLeft: 12, marginTop: 7, marginRight: 0 }} numberOfLines={1} ellipsizeMode={'tail'}>
                {data.item.title}
              </Text>
              <View style={{ marginLeft: 12, marginTop: 12, flexDirection: 'row', alignItems: 'center' }}>
                <Text>{data.item.price}</Text>
                <View style={{ height: 11.5, width: 0.5, margin: 6, backgroundColor: '#cccccc' }}></View>
                <Text style={{ color: '#F20000' }}>佣金 {data.item.commission}</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 12, marginTop: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F8F8F8', borderRadius: 4 }}>
                <Text style={{ marginLeft: 12, color: '#666666' }}>{data.item.sku}</Text>
                <Text style={{ fontSize: 9, marginRight: 4.5, color: '#999999' }}>x{data.item.count}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card3}>
          <Text style={{ marginLeft: 12, marginTop: 18, fontSize: 15 }}>申样单信息</Text>
          <View style={{ flex: 1, marginLeft: 12, marginRight: 12, marginTop: 17, marginBottom: 17, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: '#666666', fontSize: 13 }}>申请单号：2019040717471406334862866</Text>
              <Text style={{ color: '#666666', fontSize: 13 }}>申请时间：2019-04-07 17:47:29</Text>
              <Text style={{ color: '#666666', fontSize: 13 }}>关联直播：野荷君7.18白给节</Text>
            </View>
            <Text onPress={a => Alert.alert('按钮点击')} style={{ borderRadius: 10, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, fontSize: 12, paddingTop: 4, overflow: 'hidden', borderColor: '#F20000', color: '#F20000', borderWidth: 0.5, alignSelf: 'flex-start' }}>
              复制
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  card1: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
    height: 119,
    justifyContent: 'flex-start'
  },
  card2: {
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 6,
    height: 168,
    justifyContent: 'flex-start'
  },
  card3: {
    height: 135,
    marginTop: 8,
    backgroundColor: 'white'
  }
});

export default App;
