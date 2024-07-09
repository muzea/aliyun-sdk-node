export interface BatchGetEdgeInstanceDeviceDriverResponse {
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
     * @example `E8D82F7A-0F84-4BD3-AE8A-5444A5B42800`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 子设备的驱动列表。
     */
    DeviceDriverList: {
        /**
         * 驱动ID。
         * @example `9c1ae7bd59f1469abbdccc9592******`
         */
        DriverId: string;
        /**
         * 子设备ID。
         * @example `Hathoyxglj9jpYPyw3WN******`
         */
        IotId: string;
    }[];
}
