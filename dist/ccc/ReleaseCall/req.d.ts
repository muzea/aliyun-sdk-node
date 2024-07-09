export interface ReleaseCallRequest {
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
    /**
     * 通话ID。
     * @example `job-6538214103685****`
     */
    "JobId": string;
    /**
     * 待挂断的话务通道ID，非必填，不填默认为当前UserId对应坐席所在的话务通道。
     * @example `ch:user:1390501****->8032****:1609138902226:job-6538214103685****`
     */
    "ChannelId"?: string;
}
