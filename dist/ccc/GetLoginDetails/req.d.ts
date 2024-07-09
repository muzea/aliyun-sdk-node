export interface GetLoginDetailsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID，非必填，不填则默认使用当前RAM账户映射的坐席。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * Chat设备ID。
     * @example `4c51c9116c36537cb850dc1081d745df`
     */
    "ChatDeviceId"?: string;
}
