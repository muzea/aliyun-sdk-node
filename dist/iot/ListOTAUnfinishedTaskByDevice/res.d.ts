export interface ListOTAUnfinishedTaskByDeviceResponse {
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
     * @example `A59D3BE1-E9A3-43F3-9B50-B7C8DE165D9B`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 调用成功时，返回的升级作业信息。详细内容，请参见以下**SimpleOTATaskInfo**。
         */
        SimpleOTATaskInfo: {
            /**
             * OTA模块名称。
             * @example `WifiConfigModify`
             */
            ModuleName: string;
            /**
             * 设备所属产品的名称。
             * @example `MyProduct`
             */
            ProductName: string;
            /**
             * 设备名称。
             * @example `light`
             */
            DeviceName: string;
            /**
             * 升级作业创建时的时间，UTC格式。
             * @example `2019-11-04T03:38:22.000Z`
             */
            UtcCreate: string;
            /**
             * 设备所属产品的ProductKey。
             * @example `a1GUfrM****`
             */
            ProductKey: string;
            /**
             * 设备升级作业状态。
             * - **CONFIRM**：待确认。
             * - **QUEUED**：待推送。
             * - **NOTIFIED**：已推送。
             * - **IN_PROGRESS**：升级中。
             * @example `CONFIRM`
             */
            TaskStatus: string;
            /**
             * 升级作业最后一次修改时的时间，UTC格式。
             * @example `2021-11-04T03:38:22.000Z`
             */
            UtcModified: string;
            /**
             * 升级批次ID。
             * @example `7glPHmaDYLAYMD1HHutT02****`
             */
            JobId: string;
            /**
             * 设备的原版本。
             * @example `1.0.0`
             */
            SrcVersion: string;
            /**
             * 设备升级作业ID。
             * @example `y3tOmCDNgpR8F9jnVEzC01****`
             */
            TaskId: string;
            /**
             * 升级的目标版本。
             * @example `1.0.1`
             */
            DestVersion: string;
            /**
             * 升级包ID。
             * @example `q3j9OYBjUAZMv1hlMgdo03****`
             */
            FirmwareId: string;
            /**
             * 设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
             * @example `nadRdeffljdEndlfadgadfse****`
             */
            IotId: string;
        }[];
    };
}
