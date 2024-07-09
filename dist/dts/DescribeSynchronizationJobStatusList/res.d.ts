export interface DescribeSynchronizationJobStatusListResponse {
    /**
     * 请求ID。
     * @example `1413460B-138A-48D1-836C-B24EDDC1****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 一页展示的同步实例数量。
     * @example `2`
     */
    PageRecordCount: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 所查询的同步实例总数。
     * @example `2`
     */
    TotalRecordCount: number;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 同步任务状态列表。
     */
    SynchronizationJobListStatusList: {
        /**
         * 数据同步实例ID。
         * @example `dtsexjk1alb116****`
         */
        SynchronizationJobId: string;
        /**
         * 同步方向详情列表。
         */
        SynchronizationDirectionInfoList: {
            /**
             * 同步实例在该方向上的同步状态，返回值：
             * - **NotStarted**：未启动
             * - **Prechecking**：预检查中
             * - **PrecheckFailed**：预检查失败
             * - **Initializing**：同步初始化
             * - **InitializeFailed**：同步初始化失败
             * - **Synchronizing**：同步中
             * - **Failed**：同步失败
             * - **Suspending**：暂停
             * - **Modifying**：同步对象变更中
             * - **Finished**：完成
             * @example `InitializeFailed`
             */
            Status: string;
            /**
             * 同步方向，返回值：
             * - **Forward**：正向。
             * - **Reverse**：反向。
             * @example `Forward`
             */
            SynchronizationDirection: string;
            /**
             * 同步最新一条数据的时间戳，格式为Unix时间戳。
             * > Unix时间戳转换工具可用搜索引擎获取。
             * @example `1610524452`
             */
            Checkpoint: string;
        }[];
    }[];
}
