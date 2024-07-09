export interface PushMessageRequest {
    /**
     * 消息归属客户端应用包名。
     * @example `com.aliyun.iovcc.cmns.test`
     */
    "AppPackage": string;
    /**
     * 通知内容详情，消息类型为通知时必传。
     * @example `this is desc test`
     */
    "Desc"?: string;
    /**
     * 广播侦听通道，为客户端与服务端约定配置。
     * @example `com.aliyun.iovcc.action`
     */
    "Act": string;
    /**
     * alios4.0专用，alios设备通知和透传消息时必传。
     * @example `page://broadcast.yunos.com`
     */
    "Uri"?: string;
    /**
     * android intent属性值参数，为json字符串，用户可选择设置"component"，"uri"，"type"，"package"，"category"等5个intent属性key。
     * @example `{"package":"com.aliyun.iovcc.cmns.test"}`
     */
    "PkgContent": string;
    /**
     * 用户自定义内容。
     * 为json字符串，json字符串中不得使用关键字"cmns"作为字段，消息类型为透传（type=1）时必传。
     * @example `{"key1":"value1","key2":"value2"}`
     */
    "CustomContent"?: string;
    /**
     * 消息接收对象类型。取值："**uuid**"、"**imei**"、"**kp**"、"**terminal**"。
     * - 按设备维度发送时，选择**uuid**或者**imei**。
     * - 按账号维度发送时，选择**kp**。
     * - 按设备类型维度时，选择**terminal**。
     * @example `uuid`
     */
    "ReceiverType": string;
    /**
     * 消息接收对象值，多个接收对象通过英文逗号拼接。
     * - 按照**uuid**或者**imei**的值拼接，最多限制1000个设备。
     * - 按照**kp**的值拼接，最多限制100个账号。
     * - 按照**terminal**的值拼接，最多限制10个机型。
     * @example `b81d39b0252a4ffdb750360b262cb442, b81d39b0252a4ffdb750360b262cb411`
     */
    "ReceiverValues": string;
    /**
     * 消息过期时间。
     * 相对时间（即多少秒后过期，单发最多7天，群发消息最多不能超过30天），单位为S，默认1小时过期。
     * @example `7200`
     */
    "ExpiredTime"?: number;
    /**
     * 通知标题，消息类型为通知时必传。
     * @example `this is test test`
     */
    "Title"?: string;
    /**
     * iovcc项目工程ID。
     * @example `sfgsghd6`
     */
    "ProjectId": string;
    /**
     * cmns客户端应用appKey。
     * @example `com.aliyun.aicc.test`
     */
    "AppKey": string;
    /**
     * 消息类型。取值：**1**表示透传消息，**2**表示通知。
     * @example `1`
     */
    "Type": number;
}
