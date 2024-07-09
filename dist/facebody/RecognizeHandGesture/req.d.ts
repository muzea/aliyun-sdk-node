export interface RecognizeHandGestureRequest {
    /**
     * 程序名称，固定为gesture_app。
     * @example `gesture_app`
     */
    "AppId": string;
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/cc/RecognizeHandGesture1.jpg`
     */
    "ImageURL": string;
    /**
     * 手势类型，固定为gesture_recognition。
     * @example `gesture_recognition`
     */
    "GestureType": string;
}
