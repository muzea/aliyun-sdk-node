export interface GetDataTrackJobDegreeResponse {
    /**
     * 请求ID。
     * @example `C51420E3-144A-4A94-B473-8662FCF4AD10`
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
     * 任务进度详情。
     */
    JobDegree: {
        /**
         * 获取日志处理进展。进度范围从0到1，1表示日志已处理完成。
         * @example `1`
         */
        ListCompletionDegree: number;
        /**
         * 下载日志文件进度。进度范围从0到1，1表示已完成下载日志文件。
         * @example `1`
         */
        DownloadCompletionDegree: number;
        /**
         * 解析日志文件进度。进度范围从0到1，1表示已完成解析日志文件。
         * @example `1`
         */
        FilterCompletionDegree: number;
        /**
         * 数据追踪任务状态，取值和说明如下：
         * - **INIT**：任务初始化。
         * - **LISTING**：正在获取Binlog列表。
         * - **LIST_SUCCESS**：获取Binlog列表完成。
         * - **DOWNLOADING**：正在下载Binlog。
         * - **DOWNLOAD_FAIL**：下载Binlog失败。
         * - **DOWNLOAD_SUCCESS**：下载Binlog完成。
         * - **FILTERING**：正在解析Binlog。
         * - **FILTER_FAIL**：解析Binlog失败。
         * - **FILTER_SUCCESS**：解析Binlog完成。
         * @example `FILTER_SUCCESS`
         */
        JobStatus: string;
        /**
         * 状态描述信息。
         * @example `searching success`
         */
        StatusDesc: string;
    };
}
