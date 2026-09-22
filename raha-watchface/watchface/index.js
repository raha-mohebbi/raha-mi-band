WatchFace({
  onInit() {
    console.log('index page.js on init invoke')
  },

  build() {
    const timeSensor = hmSensor.createSensor(hmSensor.id.TIME)
    const hour = timeSensor.hour
    const minute = timeSensor.minute
    const second = timeSensor.second
    // console.log('BUILD START')
    const timeWidget = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 0,
  y: 120,
  w: 192,
  color: 0xffffff,
  text_size: 32,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`,
})

timeSensor.addEventListener(
  hmSensor.event.UPDATE,
  () => {
    timeWidget.setProperty(hmUI.prop.TEXT, `${String(timeSensor.hour).padStart(2, '0')}:${String(timeSensor.minute).padStart(2, '0')}:${String(timeSensor.second).padStart(2, '0')}`)
  }
)
    
  },

  onDestroy() {
    console.log('index page.js on destroy invoke')
  },
})
