export interface SignOutGroupRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID，不填默认使用当前RAM账号映射的坐席。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，无意义，可以随便填写。
     * @example `device`
     */
    "DeviceId"?: string;
}
