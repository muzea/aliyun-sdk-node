export interface SwitchToConferenceRequest {
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
     * 无效字段，可以随便填写。
     * @example `device`
     */
    "DeviceId"?: string;
    /**
     * 通话ID。
     * @example `job-24114064019637****`
     */
    "JobId": string;
}
