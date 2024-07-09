export interface UnmuteCallRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 需要取消静音的坐席ID，不填默认使用当前RAM账户映射的坐席。
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
     * @example `job-6538214103685****
    `
     */
    "JobId"?: string;
    /**
     * 待取消静音的话务通道ID，非必填，默认为空，为空表示取消静音UserId对应的坐席的话务通道。
     * @example `ch:user:1390501****->8032****:1609138902226:job-6538214103685****`
     */
    "ChannelId"?: string;
}
