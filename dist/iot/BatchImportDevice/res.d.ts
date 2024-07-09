export interface BatchImportDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 调用成功时，系统返回的申请批次ID。
         * @example `1295006`
         */
        ApplyId: number;
        InvalidDetailList: {
            /**
             * 导入设备失败时，不合法设备列表的详细信息。
             */
            InvalidDetailList: {
                /**
                 * 导入设备失败时，返回的出错信息。
                 * @example `The device name is illegal.`
                 */
                ErrorMsg: string;
                /**
                 * 设备SN码。
                 * @example `QC4001#`
                 */
                Sn: string;
                /**
                 * 设备名称。
                 * @example `light%`
                 */
                DeviceName: string;
                /**
                 * 设备密钥。
                 * @example `^67$`
                 */
                DeviceSecret: string;
            }[];
        };
        RepeatedDeviceNameList: {
            /**
             * 调用失败时，返回的重复设备名称的列表。
             */
            repeatedDeviceName: string[];
        };
        InvalidSnList: {
            /**
             * 调用失败时，返回的不合法设备SN码的列表。
             */
            invalidSn: string[];
        };
        InvalidDeviceSecretList: {
            /**
             * 调用失败时，返回的不合法设备密钥的列表。
             */
            invalidDeviceSecret: string[];
        };
        InvalidDeviceNameList: {
            /**
             * 调用失败时，返回的不合法设备名称的列表。
             */
            invalidDeviceName: string[];
        };
    };
}
