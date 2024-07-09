export interface BatchCheckVehicleDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见下文**错误码**。
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
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，如果有校验失败的数据，则返回对应的失败信息。
     */
    Data: {
        /**
         * 不合法设备列表信息。
         */
        InvalidDetailList: {
            /**
             * 设备校验失败，返回的出错信息。
             * @example `The device name is illegal.`
             */
            ErrorMsg: string;
            /**
             * JT/T 808协议云网关设备的设备型号。
             * @example `dm_*0001`
             */
            DeviceModel: string;
            /**
             * GB/T 32960协议云网关设备的设备名称。
             * @example `device_*0001`
             */
            DeviceName: string;
            /**
             * JT/T 808协议云网关设备的设备ID。
             * @example `di_*0001`
             */
            DeviceId: string;
            /**
             * JT/T 808协议云网关设备的设备厂商ID。
             * @example `mf_*0001`
             */
            Manufacturer: string;
        }[];
        /**
         * JT/T 808协议云网关设备信息校验失败时，不合法设备厂商ID的列表。
         */
        InvalidManufacturerList: string[];
        /**
         * JT/T 808协议云网关设备信息校验失败时，重复设备ID的列表。
         */
        RepeatedDeviceIdList: string[];
        /**
         * GB/T 32960协议云网关设备信息校验失败时，返回的重复设备名称的列表。
         */
        RepeatedDeviceNameList: string[];
        /**
         * JT/T 808协议云网关设备信息校验失败时，不合法设备ID的列表。
         */
        InvalidDeviceIdList: string[];
        /**
         * JT/T 808协议云网关设备信息校验失败时，不合法设备型号的列表。
         */
        InvalidDeviceModelList: string[];
        /**
         * GB/T 32960协议云网关设备信息校验失败时，返回的不合法设备名称的列表。
         */
        InvalidDeviceNameList: string[];
    };
}
