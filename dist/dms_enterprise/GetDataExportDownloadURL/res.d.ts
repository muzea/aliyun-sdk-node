export interface GetDataExportDownloadURLResponse {
    /**
     * 导出文件下载地址。
     */
    DownloadURLResult: {
        /**
         * 是否有下载结果，返回值如下：
         * - **true**：有下载结果
         * - **false**：没有下载结果
         * @example `true`
         */
        HasResult: boolean;
        /**
         * 异常提示信息。
         * @example `tip message`
         */
        TipMessage: string;
        /**
         * 导出文件下载地址。
         * @example `https://dms-idb-hangzhou.oss-cn-hangzhou.aliyuncs.com/xxx.zip`
         */
        URL: string;
    };
    /**
     * 请求ID。
     * @example `4BF24EA5-9013-4C85-AE68-6C23AF5E0097`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
