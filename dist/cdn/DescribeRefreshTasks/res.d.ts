export interface DescribeRefreshTasksResponse {
    /**
     * 请求ID。
     * @example `174F6032-AA26-470D-B90E-36F0EB205BEE`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `10`
     */
    PageNumber: number;
    /**
     * 整页大小。
     * @example `1`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `2`
     */
    TotalCount: number;
    Tasks: {
        /**
         * 任务列表。
         */
        CDNTask: {
            /**
             * 状态。取值：
             * - **Complete**：完成。
             * - **Refreshing**：刷新中。
             * - **Failed**：刷新失败。
             * @example `Complete`
             */
            Status: string;
            /**
             * 任务对象创建时间，UTC+0时间。
             * @example `2014-11-27T08:23:22Z`
             */
            CreationTime: string;
            /**
             * 任务类型。
             * - **file**：文件刷新。
             * - **directory**：目录刷新。
             * - **regex**：正则刷新。
             * - **preload**：文件预热。
             * @example `file`
             */
            ObjectType: string;
            /**
             * 进度百分比。
             * @example `100%`
             */
            Process: string;
            /**
             * 刷新预热失败返回的错误描述。
             * - **InternalError**：内部错误。
             * - **OriginTimeout**：源站响应超时。
             * - **OriginReturnStatusCode 5XX**：源站响应5xx错误码。
             * @example `Internal Error`
             */
            Description: string;
            /**
             * 刷新对象路径。
             * @example `http://example.com/1.txt`
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
