export interface QueryDeviceListByDeviceGroupResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `B1A921D9-1061-4D45-9F12-EA6B0FDEDE30`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 每页所显示的设备数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 设备总数。
     * @example `3`
     */
    Total: number;
    /**
     * 总页数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    Page: number;
    Data: {
        /**
         * 调用成功时，返回的设备列表信息数据。详情请参见以下**SimpleDeviceInfo**。
         */
        SimpleDeviceInfo: {
            /**
             * 设备所属的产品Key。
             * @example `a1hWjHD****`
             */
            ProductKey: string;
            /**
             * 设备所属的产品名称。
             * @example `WIFIdevice`
             */
            ProductName: string;
            /**
             * 设备名称。
             * @example `ios_1207_08`
             */
            DeviceName: string;
            /**
             * 物联网平台为该设备颁发的ID，作为该设备的唯一标识符。
             * @example `TfmUAeJjQQhCPH84UVNn0010c6****`
             */
            IotId: string;
        }[];
    };
}
