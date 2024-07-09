export interface UpgradeVideoFileRequest {
    /**
     * 通话ID。您可以在[SingleCallByVideo](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-singlecallbyvideo?spm)接口返回参数中获取CallId。
     * @example `116012354148^10281378****`
     */
    "CallId"?: string;
    /**
     * 媒体类型。固定取值：**video**。
     * @example `video`
     */
    "MediaType"?: string;
    /**
     * 预留给调用方的ID，最终会通过回执消息将此ID带回给调用方。
     * 字符串类型，长度限制为1~15个字符。
     * @example `225869*****`
     */
    "OutId"?: string;
    /**
     * 接收视频通话的手机号码。
     * @example `159****0000`
     */
    "CalledNumber": string;
}
