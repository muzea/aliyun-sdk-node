export interface BatchGetEdgeInstanceDeviceChannelResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `029BC40B-8353-48B3-94C3-7ABF296F0AE5`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 子设备关联的驱动通道列表。
     */
    DeviceChannelList: {
        /**
         * 驱动通道ID。
         * @example `BE0BD49EF5EF4D119D09CC1B25******`
         */
        ChannelId: string;
        /**
         * 驱动通道名称。
         * @example `le_name_update`
         */
        ChannelName: string;
        /**
         * 子设备ID。
         * @example `Hathoyxglj9jpYPyw3WN0******`
         */
        IotId: string;
    }[];
}
