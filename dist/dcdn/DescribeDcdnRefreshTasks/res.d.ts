export interface DescribeDcdnRefreshTasksResponse {
    /**
     * 请求ID。
     * @example `174F6032-AA26-470D-B90E-36F0EB205BEE`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `2`
     */
    PageNumber: number;
    /**
     * 整页大小。
     * @example `2`
     */
    PageSize: number;
    /**
     * 任务数量。
     * @example `20`
     */
    TotalCount: number;
    Tasks: {
        /**
         * 任务列表。
         */
        Task: {
            /**
             * 状态。
             * - **Complete**：完成。
             * - **Refreshing**：刷新中。
             * - **Failed**：刷新失败。
             * @example `Complete`
             */
            Status: string;
            /**
             * 任务对象创建时间。为UTC时间。
             * @example `2014-11-27T08:23:22Z`
             */
            CreationTime: string;
            /**
             * 任务类型。
             * - **file**：刷新URL。
             * - **path**：刷新目录。
             * - **regex**：正则刷新。
             * - **preload**：预热URL。
             * @example `file`
             */
            ObjectType: string;
            /**
             * 进度百分比。
             * @example `10`
             */
            Process: string;
            /**
             * 刷新预热失败返回错误描述。
             * - **InternalError**：内部错误。
             * - **OriginTimeout**：源站响应超时。
             * - **OriginReturn StatusCode 5XX**：源站响应5xx错误码。
             * @example `InternalError`
             */
            Description: string;
            /**
             * 刷新对象路径。
             * @example `http://example.com/examplefile.txt`
             */
            ObjectPath: string;
            /**
             * 任务ID。
             * @example `123`
             */
            TaskId: string;
        }[];
    };
}
