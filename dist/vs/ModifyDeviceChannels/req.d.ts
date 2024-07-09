export interface ModifyDeviceChannelsRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 设备序列号。
     * @example `210235C3GN32090008286cf17e130d`
     */
    "Dsn"?: string;
    /**
     * 设备状态。取值：
     * - on（在线）
     * - off（离线）
     * @example `on`
     */
    "DeviceStatus"?: string;
    /**
     * Channel数组，JSON格式字符串。
     * @example `[{"ChannelId":12333,"Name":"测试","DeviceStatus":"on"}]`
     */
    "Channels": string;
}
