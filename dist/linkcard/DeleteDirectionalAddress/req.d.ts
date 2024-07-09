export interface DeleteDirectionalAddressRequest {
    /**
     * 分组ID。
     * @example `10000002595`
     */
    "GroupId": string;
    /**
     * 目标地址。
     * @example `*.aliyun.com`
     */
    "Address": string;
    /**
     * 请求编号，支持幂等。
     * @example `123123`
     */
    "SerialNo"?: string;
    /**
     * 执行成功后是否通过MQ推送，默认false：
     * false：不推送
     * true： 推送
     * @example `false`
     */
    "MsgNotify"?: boolean;
}
