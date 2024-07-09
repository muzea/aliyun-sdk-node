export interface ModifyLiveMessageAppCallbackRequest {
    /**
     * 需要修改的互动消息应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 用户登录、登出、加入、离开群组等事件回调地址。若为空则不开启回调。事件回调地址以http://或https://开头，不包含私有IP，不允许带端口号。
     * @example `http://example.aliyundoc.com/examplecallback`
     */
    "EventCallbackUrl"?: string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
