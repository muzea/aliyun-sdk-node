export interface DegradeVideoFileRequest {
    /**
     * 通话ID。您可以在[SingleCallByVideo](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-singlecallbyvideo?spm)接口返回参数中获取CallId。
     * @example `116012354148^1028137841****`
     */
    "CallId"?: string;
    /**
     * 媒体类型。固定取值：video。
     * @example `video`
     */
    "MediaType"?: string;
    /**
     * 预留给调用方使用的ID。最终会通过在回执消息中将此ID带回给调用方。
     * 字符串类型，长度为1~15个字节。
     * @example `225869*****`
     */
    "OutId"?: string;
    /**
     * 接收语音通知的手机号码。
     * @example `159****0000`
     */
    "CalledNumber": string;
}
