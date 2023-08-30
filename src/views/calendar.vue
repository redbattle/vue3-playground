<template>
  <div>
    <van-button type="primary" @click="getCalenderFile">添加系统日历</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    getCalenderFile() {
      const startDateTime = '20230303T170000'

      const endDateTime = '20230303T180000'

      const datetime = '2023-03-02 14:00:00'

      const location = '武汉市洪山区'

      const icsMSG =
        'BEGIN:VCALENDAR\nPRODID:-//Microsoft Corporation//Outlook 16.0 MIMEDIR//EN\nVERSION:2.0\nMETHOD:REQUEST\nX-MS-OLK-FORCEINSPECTOROPEN:TRUE\nBEGIN:VEVENT\nDESCRIPTION:备注一下拉' +
        '\nDTSTART;TZID="China/Beijing":' +
        startDateTime +
        '\nDTEND;TZID="China/Beijing":' +
        endDateTime +
        '\nLOCATION:' +
        location +
        '\nSUMMARY;LANGUAGE=en-sg:日程主题内容\nX-MICROSOFT-CDO-BUSYSTATUS:TENTATIVE\nX-MICROSOFT-CDO-IMPORTANCE:1\nX-MICROSOFT-CDO-INTENDEDSTATUS:BUSY\nX-MICROSOFT-DISALLOW-COUNTER:FALSE\nX-MS-OLK-CONFTYPE:0\nBEGIN:VALARM\nTRIGGER:-PT15M\nACTION:DISPLAY\nDESCRIPTION:Reminder\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR\n'
      
        window.open('data:text/calendar;charset=utf8,' + encodeURIComponent(icsMSG));

      /**
        BEGIN:VCALENDAR
        PRODID:-//Microsoft Corporation//Outlook 16.0 MIMEDIR//EN
        VERSION:2.0
        METHOD:REQUEST
        X-MS-OLK-FORCEINSPECTOROPEN:TRUE
        BEGIN:VEVENT
        DESCRIPTION:When: Friday, 3rd April 2020, 5pm;Where: XXX street
        DTSTART;TZID="China/Beijing":20200403T170000
        DTEND;TZID="Australia/Sydney":20200403T180000
        LOCATION:XXX street
        SUMMARY;LANGUAGE=en-sg:You have a appointment
        X-MICROSOFT-CDO-BUSYSTATUS:TENTATIVE
        X-MICROSOFT-CDO-IMPORTANCE:1
        X-MICROSOFT-CDO-INTENDEDSTATUS:BUSY
        X-MICROSOFT-DISALLOW-COUNTER:FALSE
        X-MS-OLK-CONFTYPE:0
        BEGIN:VALARM
        TRIGGER:-PT15M
        ACTION:DISPLAY
        DESCRIPTION:Reminder
        END:VALARM
        END:VEVENT
        END:VCALENDAR
      */
    },
  },
}
</script>

<style></style>
