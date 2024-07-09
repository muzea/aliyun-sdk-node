export interface DescribeVodRefreshTasksResponse {
    /**
     * 请求ID。
     * @example `174F6032-AA26-470D-****-36F0EB205BEE`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 整页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `2`
     */
    TotalCount: number;
    Tasks: {
        /**
         * TaskItem组成的Task任务列表。
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
             * 任务对象创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2014-11-27T08:23:22Z`
             */
            CreationTime: string;
            /**
             * 任务类型。取值：
             * - **file**默认：文件刷新。
             * - **directory**：目录刷新。
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
             * 刷新预热失败返回的错误描述。目前有三种：
             * - **Internal Error**：内部错误。
             * - **Origin Timeout**：源站响应超时。
             * - **Origin Return StatusCode 5XX**：源站返回5XX状态码。
             * @example `Internal Error`
             */
            Description: string;
            /**
             * 刷新对象路径。
             * @example `http://example.com/****.txt`
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
