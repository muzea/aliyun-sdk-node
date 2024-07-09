export interface ListOTAModuleVersionsByDeviceResponse {
    /**
     * 当前页面号。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `291438BA-6E10-4C4C-B761-243B9A0D324F`
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
     * 每页显示的模块版本数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回的总页数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 设备上报的模块版本总数。
     * @example `10`
     */
    Total: number;
    Data: {
        /**
         * 调用成功时，返回的设备上报的模块版本信息。更多信息，请参见以下**SimpleOTAModuleInfo**信息。
         */
        SimpleOTAModuleInfo: {
            /**
             * 模块名称。
             * @example `barcodeScanner`
             */
            ModuleName: string;
            /**
             * 设备所属产品的**ProductKey**。
             * @example `aluctKe****`
             */
            ProductKey: string;
            /**
             * 设备名称。
             * @example `newDevice`
             */
            DeviceName: string;
            /**
             * 设备上报的模块版本。
             * @example `1.0`
             */
            ModuleVersion: string;
            /**
             * 设备ID。
             * @example `QjIFT***000101`
             */
            IotId: string;
        }[];
    };
}
