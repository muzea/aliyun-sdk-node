export interface GetDataTrackOrderDetailResponse {
    /**
     * 请求ID。
     * @example `283C461F-11D8-48AA-B695-DF092DA32AF3`
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
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 工单详情。
     */
    DataTrackOrderDetail: {
        /**
         * 数据库ID。
         * @example `3431****`
         */
        DbId: number;
        /**
         * 是否为逻辑库，取值：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        Logic: boolean;
        /**
         * 数据库搜索名。
         * @example `xxx@yyy:3306`
         */
        DatabaseSearchName: string;
        /**
         * 追踪的表名列表。
         */
        TableNames: string[];
        /**
         * 追踪类型列表。
         */
        TrackTypes: string[];
        /**
         * 数据追踪范围的起始时间，格式为yyyy-MM-dd HH:mm:ss。
         * @example `2023-04-23 00:00:00`
         */
        JobStartTime: string;
        /**
         * 数据追踪范围的结束时间，格式为yyyy-MM-dd HH:mm:ss。
         * @example `2023-04-23 10:00:00`
         */
        JobEndTime: string;
        /**
         * 数据库名。
         * @example `as_task`
         */
        SchemaName: string;
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
         * 任务状态的描述信息。
         * @example `searching success`
         */
        StatusDesc: string;
    };
}
