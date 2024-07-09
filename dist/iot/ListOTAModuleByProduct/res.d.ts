export interface ListOTAModuleByProductResponse {
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
     * @example `74C2BB8D-1D6F-41F5-AE68-6B2310883F63`
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
     * 调用成功时，返回的OTA模块列表。
     */
    Data: {
        /**
         * 模块名称。
         * @example `barcodeScanner`
         */
        ModuleName: string;
        /**
         * 产品的ProductKey。
         * @example `aluctKe****`
         */
        ProductKey: string;
        /**
         * 模块创建时间，GMT格式。
         * @example `2020-10-13T09:46Z`
         */
        GmtCreate: string;
        /**
         * 模块别名。
         * @example `条码扫描仪`
         */
        AliasName: string;
        /**
         * 模块信息最后一次更新时间，GMT格式。
         * @example `2020-10-19T09:46Z`
         */
        GmtModified: string;
        /**
         * 模块描述。
         * @example `这个模块对应于条码扫描仪的固件`
         */
        Desc: string;
    }[];
}
