import { Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
export default function pnotifyMessage(alert, message) {
    alert({
        text: `${message}`,
        delay: 2000,
        stack: new Stack({
            dir1:'up'
        })
    })
}