WatchFace({     
  
  build() {     
  
    const timeSensor = hmSensor.createSensor(hmSensor.id.TIME)  
  
    hmUI.createWidget(hmUI.widget.FILL_RECT, {  
      x: 0,  
      y: 0,  
      w: 192,  
      h: 490,  
      color: 0xB7D7A8  
    })  
  
    hmUI.createWidget(hmUI.widget.IMG, {  
      x: 75,  
      y: 20,  
      w: 24,  
      h: 30,  
      src: 'battery.png'  
    })  
  
    hmUI.createWidget(hmUI.widget.TEXT, {  
      x: 105,  
      y: 20,  
      w: 50,  
      h: 25,  
      text: '85%',  
      text_size: 18,  
      color: 0x287A32  
    })  
  
    const weekText = hmUI.createWidget(hmUI.widget.TEXT, {  
      x: 0,  
      y: 50,  
      w: 192,  
      h: 25,  
      text: '',  
      text_size: 18,  
      color: 0x5A8F55,  
      align_h: hmUI.align.CENTER_H  
    })  
  
    const dateText = hmUI.createWidget(hmUI.widget.TEXT, {  
      x: 0,  
      y: 75,  
      w: 192,  
      h: 25,  
      text: '',  
      text_size: 16,  
      color: 0x5A8F55,  
      align_h: hmUI.align.CENTER_H  
    })  
  
    const clockText = hmUI.createWidget(hmUI.widget.TEXT, {  
      x: 0,  
      y: 100,  
      w: 192,  
      h: 55,  
      text: '',  
      text_size: 48,  
      color: 0x287A32,  
      align_h: hmUI.align.CENTER_H,  
      align_v: hmUI.align.CENTER_V  
    })  
  
    function updateTime() {  
  
      let hour = timeSensor.hour  
      let minute = timeSensor.minute  
      let day = timeSensor.day  
      let week = timeSensor.week  
  
      clockText.setProperty(
        hmUI.prop.TEXT,
        (hour < 10 ? '0' : '') + hour + ':' +
        (minute < 10 ? '0' : '') + minute
      )  
  
      let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]  
  
      weekText.setProperty(
        hmUI.prop.TEXT,
        days[week]
      )  
  
      dateText.setProperty(
        hmUI.prop.TEXT,
        day + ' Sep'
      )  
    }  
  
    updateTime()  
  
    hmUI.createWidget(hmUI.widget.IMG, {  
      x: 0,  
      y: 155,  
      w: 192,  
      h: 200,  
      src: 'cat.png'  
    })  
  
    // Steps number
    hmUI.createWidget(hmUI.widget.TEXT, {  
      x: 0,  
      y: 315,  
      w: 192,  
      h: 20,  
      text: '5234',  
      text_size: 16,  
      color: 0x287A32,  
      align_h: hmUI.align.CENTER_H  
    })  
  
    // Walking icon
    hmUI.createWidget(hmUI.widget.IMG, {  
      x: 84,  
      y: 335,  
      w: 24,  
      h: 30,  
      src: 'walking.png'  
    })  
  
    // Heart number
    hmUI.createWidget(hmUI.widget.TEXT, {  
      x: 0,  
      y: 370,  
      w: 192,  
      h: 20,  
      text: '78',  
      text_size: 16,  
      color: 0x287A32,  
      align_h: hmUI.align.CENTER_H  
    })  
  
    // Heart icon
    hmUI.createWidget(hmUI.widget.IMG, {  
      x: 84,  
      y: 390,  
      w: 24,  
      h: 30,  
      src: 'heart.png'  
    })  
  
    // Calories number
    hmUI.createWidget(hmUI.widget.TEXT, {  
      x: 0,  
      y: 425,  
      w: 192,  
      h: 20,  
      text: '320',  
      text_size: 16,  
      color: 0x287A32,  
      align_h: hmUI.align.CENTER_H  
    })  
  
    // Fire icon
    hmUI.createWidget(hmUI.widget.IMG, {  
      x: 84,  
      y: 445,  
      w: 24,  
      h: 30,  
      src: 'fire.png'  
    })  
  
  }  
  
})