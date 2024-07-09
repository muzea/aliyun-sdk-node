export interface DescribeInstanceStatusResponse {
    /**
     * 输入时设置的每页行数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 实例列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例总个数。
     * @example `58`
     */
    TotalCount: number;
    InstanceStatuses: {
        /**
         * 实例状态集类型（InstanceStatus）。
         */
        InstanceStatus: {
            /**
             * 实例状态。可能值：
             * - Pending：创建中。
             * - Running：运行中。
             * - Starting：启动中。
             * - Stopping：停止中。
             * - Stopped：已停止。
             * @example `Running`
             */
            Status: string;
            /**
             * 实例ID。
             * @example `i-bp1j4i2jdf3owlhe****`
             */
            InstanceId: string;
        }[];
    };
}
