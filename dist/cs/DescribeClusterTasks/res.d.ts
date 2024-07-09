export interface DescribeClusterTasksResponse {
    /**
     * 分页信息。
     */
    page_info: {
        /**
         * 每页数量。
         * @example `10`
         */
        page_size: number;
        /**
         * 页数。
         * @example `1`
         */
        page_number: number;
        /**
         * 结果总数。
         * @example `10`
         */
        total_count: number;
    };
    /**
     * 任务数组。
     */
    tasks: {
        /**
         * 任务ID。
         * @example `install-addons-c3xxxxxx`
         */
        task_id: string;
        /**
         * 任务类型。
         * @example `cluster_addon_install`
         */
        task_type: string;
        /**
         * 任务状态。
         * @example `success`
         */
        state: string;
        /**
         * 创建时间。
         * @example `2022-08-03T10:11:33+08:00`
         */
        created: string;
        /**
         * 更新时间。
         * @example `2022-08-03T10:12:03.482+08:00`
         */
        updated: string;
        /**
         * 任务错误信息。
         */
        error: {
            /**
             * 错误信息。
             * @example `Addon status not match`
             */
            message: string;
            /**
             * 错误码。
             * @example `BadRequest`
             */
            code: string;
        };
    }[];
    /**
     * 请求ID。
     * @example `0527ac9a-c899-4341-a21a-xxxxxxxxx`
     */
    requestId: string;
}
