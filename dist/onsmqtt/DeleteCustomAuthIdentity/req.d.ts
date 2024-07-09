export interface DeleteCustomAuthIdentityRequest {
    /**
     * 微消息队列 MQTT 版实例的 ID。
     * @example `post-cn-0pp12gl****`
     */
    "InstanceId": string;
    /**
     * 用户名。
     * @example `test`
     */
    "Username": string;
    /**
     * 身份类型。
     * - USER：仅用户名。
     * - CLIENT：具体到客户端。
     * @example `USER`
     */
    "IdentityType": string;
    /**
     * 当身份类型是CLIENT时，指定设备的ClientID。
     * @example `GID_test@@@test`
     */
    "ClientId"?: string;
}
