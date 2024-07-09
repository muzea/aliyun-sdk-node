export interface DescribeTasksResponse {
    /**
     * 请求ID。
     * @example `D6045D78-C119-5A17-9DEA-0F810394E008`
     */
    RequestId: string;
    /**
     * 分页页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页每页大小。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 分页总共条数。
     * @example `2`
     */
    TotalRecordCount: number;
    /**
     * 结果项列表。
     */
    Items: {
        /**
         * 任务状态：
         * - **RUNNING**: 任务运行中；
         * - **FAILED**：任务失败中断。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 任务结束时间，格式为yyyy-MM-dd'T'HH:mm:ss'Z'。
         * @example `2021-10-20T20:00:00Z`
         */
        FinishTime: string;
        /**
         * 任务进度，单位%。
         * @example `80`
         */
        Progress: string;
        /**
         * 任务开始时间，格式为yyyy-MM-dd'T'HH:mm:ss'Z'。
         * @example `2021-10-20T19:40:00Z`
         */
        BeginTime: string;
        /**
         * 任务失败的code。
         * @example `TaskErrorCode`
         */
        TaskErrorCode: string;
        /**
         * 任务相关的数据库名，一般为空。
         * @example `DBName`
         */
        DBName: string;
        /**
         * 任务进度详细情况，一般为空。
         * @example `ProgressInfo`
         */
        ProgressInfo: string;
        /**
         * 如果是扩容任务，则会有一个扩容ID，后台唯一键。
         * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
         */
        ScaleOutToken: string;
        /**
         * 任务ID。
         * @example `20089398`
         */
        TaskId: string;
        /**
         * 任务失败信息。
         * @example `TaskErrorMessage`
         */
        TaskErrorMessage: string;
        /**
         * 任务Action，后端任务类型唯一键。
         * @example `multi_scale_out`
         */
        TaskAction: string;
    }[];
}
