export interface HoldCallRequest {
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
     * 座席端提供的唯一ID，用来表示一个座席工作台，一个座席可以有多个不同类型的座席台，比如浏览器，iOS, Android等， 但是在同一时间，只能有一个生效。
     * @example `ACC-YUNBS-1.0.10-****`
     */
    "DeviceId"?: string;
    /**
     * 话务ID。
     * @example `job-6582589278232****`
     */
    "JobId": string;
    /**
     * 待保持的通道ID。
     * @example `ch:customer:010123****->1318888****:1609255715825:job-6582589278232****`
     */
    "ChannelId": string;
    /**
     * 通话保持音乐的名称，非必填，默认为空。
     * @example `无`
     */
    "Music"?: string;
}
