export interface AddFaceDeviceGroupResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `group already exist`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 系统为该设备组生成的唯一ID。
         * > 在人脸底库服务的其它接口调用中，会使用**DeviceGroupId**，请妥善保存。
         * @example `jvkv****`
         */
        DeviceGroupId: string;
        /**
         * 添加设备组的时间。
         * @example `2020-11-20 18:59:01`
         */
        ModifiedTime: string;
        /**
         * 设备组名称。
         * @example `TestDeviceGroup`
         */
        DeviceGroupName: string;
    };
}
