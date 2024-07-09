export interface GetDbExportDownloadURLResponse {
    /**
     * 导出文件下载地址。
     */
    DownloadURLResult: {
        /**
         * 是否有下载结果，返回值如下：
         * - **true**：有下载结果。
         * - **false**：没有下载结果。
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
     * 请求ID，用于定位日志，排查问题。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
