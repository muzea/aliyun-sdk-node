export interface QueryDataTrackResultDownloadStatusResponse {
    /**
     * 请求ID。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 下载进度信息。
     */
    StatusResult: {
        /**
         * 下载任务状态，取值和说明如下：
         * - **INIT**：任务初始化。
         * - **LISTING**：任务初始化中，短暂中间态。
         * - **DOWNLOADING**：下载中。
         * - **DOWNLOAD_SUCCESS**：下载成功。
         * - **DOWNLOAD_FAIL**：下载失败。
         * @example `DOWNLOAD_SUCCESS`
         */
        DownloadStatus: string;
        /**
         * 下载链接。仅当下载任务状态为DOWNLOAD_SUCCESS时返回。
         * @example `https://idbsaasstore.oss-cn-zhangjiakou.aliyuncs.com/****_REDO_31201_207.zip?Expires=1682239593&OSSAccessKeyId=****&Signature=****
        `
         */
        DownloadUrl: string;
        /**
         * 状态描述。
         * @example `SUCCESS`
         */
        StatusDesc: string;
        /**
         * 记录总数。
         * @example `69`
         */
        TotalCount: number;
    };
}
