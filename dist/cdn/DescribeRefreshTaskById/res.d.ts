export interface DescribeRefreshTaskByIdResponse {
    /**
     * 任务总个数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `E0C2EF95-B1EC-4C93-855E-2059A7DA2B7B`
     */
    RequestId: string;
    /**
     * 任务列表。
     */
    Tasks: {
        /**
         * 任务状态。取值：
         * - **Complete**：已完成。
         * - **Refreshing**：刷新中。
         * - **Failed**：刷新失败。
         * @example `Complete`
         */
        Status: string;
        /**
         * 任务对象创建时间，使用UTC时间表示。
         * @example `2020-08-03T08:54:23Z`
         */
        CreationTime: string;
        /**
         * 任务类型。取值：
         * - **file**：单文件刷新。
         * - **directory**：目录刷新。
         * - **preload**：单文件预热。
         * - **regex**：正则刷新。
         * @example `file`
         */
        ObjectType: string;
        /**
         * 任务完成进度百分比。
         * @example `100%`
         */
        Process: string;
        /**
         * 刷新预热失败后返回的错误描述。取值：
         * - **Internal Error**：内部错误。
         * - **Origin Timeout**：源站响应超时。
         * - **Origin Return StatusCode 5XX**：源站响应5xx错误码。
         * @example `Internal Error`
         */
        Description: string;
        /**
         * 刷新对象的路径。
         * @example `http://example.com/abc.jpg`
         */
        ObjectPath: string;
        /**
         * 任务ID。
         * @example `24840`
         */
        TaskId: string;
    }[];
}
