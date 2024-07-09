export interface DescribeScdnRefreshTasksResponse {
    /**
     * 请求ID。
     * @example `174F6032-AA26-470D-B90E-36F0EB205BEE`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总个数。
     * @example `2`
     */
    TotalCount: number;
    Tasks: {
        /**
         * SCDNTask组成的任务列表。
         */
        Task: {
            /**
             * 状态。取值：
             * - **Complete**：完成。
             * - **Refreshing**：刷新中。
             * - **Failed**：刷新失败。
             * - **Pending**：等待刷新。
             * @example `Complete`
             */
            Status: string;
            /**
             * 任务对象创建时间，UTC时间。
             * @example `2014-11-27T08:18:38Z`
             */
            CreationTime: string;
            /**
             * 任务类型。取值：
             * - **file**
             * - **path**
             * - **preload**
             * @example `file`
             */
            ObjectType: string;
            /**
             * 进度百分比。
             * @example `100%`
             */
            Process: string;
            /**
             * 刷新预热失败返回错误描述。目前包含三种错误：
             * - **InternalError**
             * - **OriginTimeout**
             * - **OriginReturn StatusCode 5XX**
             * @example `Internal Error`
             */
            Description: string;
            /**
             * 刷新对象路径。
             * @example `http://example.com/examplefile.txt`
             */
            ObjectPath: string;
            /**
             * 任务ID。
             * @example `704225667`
             */
            TaskId: string;
        }[];
    };
}
