import React, { Component } from 'react'
import { connect } from 'react-redux';
import { History } from 'react-router'
import {push} from 'react-router-redux/es';
import Font from './ui/Font'

import '../../ui/css/listnice.less'
import '../css/bgi.less'

function urlselect (state){
  return {url:state.routing.location.pathname};
}

export default connect(urlselect, {
  push,
})(class extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
    
    };
    this.index = 0;
    
  }
  
  toCustomer=()=> {
    this.props.push('/vs-vipBook');
  }
  
  toSelect=()=> {
    this.props.push('/vs-vipProgress');
  }
  toCenter=()=> {
    this.props.push('/vs-vipCounse');
  }
  toPackage=()=> {
    this.props.push('/vs-vipPackage');
  }
  toDetection=()=> {
    this.props.push('/vs-vipDetection');
  }
  toPool=()=> {
    this.props.push('/vs-vipPool');
  }
  toVipprogress=()=> {
    this.props.push('/vs-vipServeprogress');
  }
  toHealthy=()=> {
    this.props.push('/vs-vipBgiHealthy');
  }
  
  componentDidMount() {
    this.startX =0;this.startY = 0;this.moveEndX = 0;this.moveEndY =0;
    this.child = document.querySelectorAll(".banner-img");
    this.dis = document.querySelectorAll(".banner-box")[0].offsetWidth;
    this.slider = document.querySelectorAll(".banner-con");
    this.light = document.getElementById("light");
    this.time = setInterval(this.slide, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.time);
  }
  
  slide=()=>{
    this.index++;
    this.slider[0].style.cssText = 'left:'+ -this.index * this.dis + 'px';
    if(this.index >= this.child.length){
      this.slider[0].style.cssText='left:'+ 0 + 'px';
      this.index = 0;
    }
    this.light.getElementsByTagName("div")[this.index].style.cssText = 'background:rgba(251, 192, 14, 0.4)';
    var thissi = this.light.getElementsByTagName("div")[this.index];
    var syi = this.light.getElementsByTagName("div");
    for(var j=0; j<syi.length; j++){
      if(syi[j] != thissi){
        syi[j].style.cssText = 'background:rgba(212, 216, 219, 0.4)';
      }
    }
  };
  
  startPoint=(e)=>{
    e.preventDefault();
    this.startX = e.touches[0].pageX;
    this.startY = e.touches[0].pageY;
  }
  endPoint=(e)=>{
    e.preventDefault();
    this.moveEndX = e.changedTouches[0].pageX;;
    this.moveEndY = e.changedTouches[0].pageY;
    var X = this.moveEndX - this.startX;
    var Y = this.moveEndY - this.startY;
    if ( X > 0 ) {
      // alert("left 2 right");
      this.index--;
      this.slider[0].style.cssText = 'left:'+ -this.index * this.dis + 'px';
      if(this.index < 0){
        this.slider[0].style.cssText='left:'+ -750 + 'px';
        this.index = 2;
      }
      this.light.getElementsByTagName("div")[this.index].style.cssText = 'background:rgba(251, 192, 14, 0.4)';
      var thissi = this.light.getElementsByTagName("div")[this.index];
      var syi = this.light.getElementsByTagName("div");
      for(var j=0; j<syi.length; j++){
        if(syi[j] != thissi){
          syi[j].style.cssText = 'background:rgba(212, 216, 219, 0.4)';
        }
      }
    }
    else if ( X < 0 ) {
      // alert("right 2 left");
      this.slide();
    }
    else if ( Y > 0) {
      alert("top 2 bottom");
    }
    else if ( Y < 0 ) {
      alert("bottom 2 top");
    }
    else{
      alert("just touch");
    }
  }
  
  render(){
    return (
      <div className={'bgi-wrap'}>
        {/*logo 模块*/}
        <div className={'bgi-logo'}>
          <div className={'logo-img'}><img className={'icon-img'} src={require('../image/logo.png')} alt=""/></div>
          <div className={'logo-con'}><h1 className={'logo-title'}>健康实践-先行者</h1></div>
        </div>
        {/*banner 轮播*/}
        <div className={'bgi-banner'}>
          <div className={'banner-box'} onTouchStart={this.startPoint} onTouchEnd={this.endPoint}>
            <div className={'banner-con'}>
              <div className={'banner-img'} onClick={this.toHealthy}>
                <img className={'icon-img'} src={require('../image/banner-three.png')} alt=""/>
              </div>
              <div className={'banner-img'} onClick={this.toPool}>
                <img className={'icon-img'} src={require('../image/banner-two.png')} alt=""/>
              </div>
              <div className={'banner-img'} onClick={this.toVipprogress}>
                <img className={'icon-img'} src={require('../image/banner-one.png')} alt=""/>
              </div>
            </div>
            <div className={'banner-circle'}>
              <div className={'sele-ball'} id="light">
                <div className={'circle-img sele'} style={{ background: 'rgba(251, 192, 14, 0.5)' }}><h2 className={'banner-title'}>华大健康</h2></div>
                <div className={'circle-img sele'}><h2 className={'banner-title'}>国家基因库</h2></div>
                <div className={'circle-img sele'}><h2 className={'banner-title'}>VIP服务流程</h2></div>
              </div>
            </div>
          </div>
        </div>
        {/*vip服务模块*/}
        <div className={'bgi-serve'}>
          <div className={'vip-menu customer'} onClick={this.toCustomer}>
            <div className={'icon'}><img src={require('../image/icon-book.png')} alt=""/></div>
            <h2 className={'title'}>客户预定</h2>
          </div>
          <div className={'vip-menu search'} onClick={this.toSelect}>
            <div className={'icon'}><img src={require('../image/icon-oder.png')} alt=""/></div>
            <h2 className={'title'}>订单查询</h2>
          </div>
          <div className={'vip-menu serve-center'} onClick={this.toCenter}>
            <div className={'icon'}><img src={require('../image/icon-ceter.png')} alt=""/></div>
            <h2 className={'title'}>咨询中心</h2>
          </div>
        </div>
        {/*VIP套餐介绍*/}
        <div className={'bgi-introduce'}>
          <div className={'line'}></div>
          <div className={'vip-tab'} onClick={this.toPackage}>
            <div className={'img-bg'}><img className={'icon-img'} src={require('../image/package.png')} alt=""/></div>
            <div className={'img-intro'}>
              <h2 className={'serve-menu'}>VIP套餐</h2>
              <p className={'server-con con1'}>为您提供全方位，全周期健康管理</p>
            </div>
          </div>
          {/*分项检测介绍*/}
          <div className={'vip-tab'} onClick={this.toDetection}>
            <div className={'img-bg'}><img className={'icon-img'} src={require('../image/detec.png')} alt=""/></div>
            <div className={'img-intro'}>
              <h2 className={'serve-menu'}>分项检测</h2>
              <p className={'server-con con2'}>了解检测意义，关注检测前注意事项</p>
            </div>
          </div>
        </div>
        {/*footer menu*/}
        <Font url={this.props.url}/>
      </div>
    )
  }
  
});

