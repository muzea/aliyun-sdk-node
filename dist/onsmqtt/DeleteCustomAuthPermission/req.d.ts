export interface DeleteCustomAuthPermissionRequest {
    /**
     * 微消息队列 MQTT 版实例的 ID。
     * @example `mqtt-cn-0pp1ldu****`
     */
    "InstanceId": string;
    /**
     * 身份类型。
     * - USER：仅用户名。
     * - CLIENT：具体到客户端。
     * @example `USER`
     */
    "IdentityType": string;
    /**
     * 用户名或客户端ID。
     * @example `test`
     */
    "Identity": string;
    /**
     * 授权的Topic，支持mqtt多级topic与通配符。
     * @example `test/t1`
     */
    "Topic": string;
}
