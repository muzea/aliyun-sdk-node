export interface MuteCallRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 被静音的坐席ID。
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
     * @example `job-6581536084722****`
     */
    "JobId": string;
    /**
     * 待静音的话务通道ID，非必填，默认为空，为空表示静音UserId对应的坐席的话务通道。
     * @example `ch:user:1318888****->8001****:1609253204816:job-6581536084722****`
     */
    "ChannelId"?: string;
}
