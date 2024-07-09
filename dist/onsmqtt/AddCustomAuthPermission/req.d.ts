export interface AddCustomAuthPermissionRequest {
    /**
     * 消息队列MQTT版实例的ID。
     * @example `mqtt-cn-0pp12gl****`
     */
    "InstanceId": string;
    /**
     * 身份类型，USER: 仅用户名，CLIENT: 具体到客户端
     * @example `USER`
     */
    "IdentityType": string;
    /**
     * 用户名或客户端ID。
     * @example `test`
     */
    "Identity": string;
    /**
     * 授权操作。
     * @example `PUB_SUB`
     */
    "PermitAction": string;
    /**
     * 允许或拒绝。
     * @example `ALLOW`
     */
    "Effect": string;
    /**
     * 授权的topic，支持mqtt多级topic与通配符。
     * @example `test/t1`
     */
    "Topic": string;
}
