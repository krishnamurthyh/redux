import { notification } from "antd";

export const infoNotification = (msg: string) => {
    notification.info({
        message: msg,
        duration: 3,
    });
};