export interface ResetAgentStateRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID，非必填，不填默认使用当前RAM账户映射的坐席。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，可以随便填写，无特殊作用，无特殊要求。
     * @example `device`
     */
    "DeviceId"?: string;
}
