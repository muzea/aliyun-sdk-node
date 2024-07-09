export interface RetrieveCallRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 坐席ID。
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
     * 待取回的话务通道ID。
     * @example `ch:user:1390501****->8032****:1609138902226:job-6538214103685****`
     */
    "ChannelId": string;
}
