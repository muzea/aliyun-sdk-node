export interface ListOTATaskByJobResponse {
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `A59D3BE1-E9A3-43F3-9B50-B7C8DE165D9B`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。
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
     * 每页显示的设备升级作业数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 设备升级作业数量总计。
     * @example `2`
     */
    Total: number;
    Data: {
        /**
         * 调用成功时，返回的设备升级作业信息。更多信息，请参见**SimpleOTATaskInfo**下的参数。
         */
        SimpleOTATaskInfo: {
            /**
             * 设备升级超时时间，单位是分钟。
             * > 如果发起批量升级未设置超时时间，该参数返回值为空。
             * @example `1440`
             */
            Timeout: string;
            /**
             * 设备所属产品的名称。
             * @example `MyProduct`
             */
            ProductName: string;
            /**
             * 当前的升级进度。
             * @example `0.00`
             */
            Progress: string;
            /**
             * 设备名称。
             * @example `testDevice2`
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
             * 设备升级状态。
             * - **CONFIRM**：待确认。
             * - **QUEUED**：待推送。
             * - **NOTIFIED**：已推送。
             * - **IN_PROGRESS**：升级中。
             * - **SUCCEEDED**：升级成功。
             * - **FAILED**：升级失败。
             * - **CANCELED**：已取消。
             * @example `FAILED`
             */
            TaskStatus: string;
            /**
             * 升级作业最后一次修改时的时间，UTC格式。
             * @example `2019-11-04T03:38:22.000Z`
             */
            UtcModified: string;
            /**
             * 升级批次ID。
             * @example `7glPHmaDYLAYMD1HHutT02****`
             */
            JobId: string;
            /**
             * 设备的原固件版本。
             * @example `1.0.0`
             */
            SrcVersion: string;
            /**
             * 升级作业描述信息。当设备升级超时、升级作业被取消等场景下，该参数承载具体的错误信息。
             * @example `report version is not conform`
             */
            TaskDesc: string;
            /**
             * 设备升级作业ID。
             * @example `y3tOmCDNgpR8F9jnVEzC01****`
             */
            TaskId: string;
            /**
             * 升级的目标OTA升级包版本。
             * @example `1.0.1`
             */
            DestVersion: string;
            /**
             * 升级包ID。
             * @example `q3j9OYBjUAZMv1hlMgdo03****`
             */
            FirmwareId: string;
            /**
             * 设备ID。
             * @example `nadRdeffljdEndlfadgadfse****`
             */
            IotId: string;
        }[];
    };
}
