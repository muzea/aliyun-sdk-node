export interface BatchImportVehicleDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见下文**错误码**。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * 设备导入失败时，会返回以下信息：
     * - **InvalidDeviceIdList**：不合法设备ID的列表。
     * - **InvalidDeviceModelList**：不合法设备型号的列表。
     * - **InvalidManufacturerList**：不合法设备厂商ID的列表。
     * - **RepeatedDeviceIdList**：重复设备ID的列表。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 调用成功时，系统返回的申请批次ID。
         * @example `1295006`
         */
        ApplyId: number;
        InvalidDetailList: {
            InvalidDetailList: {
                ErrorMsg: string;
                DeviceModel: string;
                DeviceName: string;
                DeviceId: string;
                Manufacturer: string;
            }[];
        };
        InvalidManufacturerList: {
            invalidManufacturerList: string[];
        };
        RepeatedDeviceIdList: {
            repeatedDeviceIdList: string[];
        };
        RepeatedDeviceNameList: {
            RepeatedDeviceNameList: string[];
        };
        InvalidDeviceIdList: {
            invalidDeviceIdList: string[];
        };
        InvalidDeviceModelList: {
            invalidDeviceModelList: string[];
        };
        InvalidDeviceNameList: {
            InvalidDeviceNameList: string[];
        };
    };
}
