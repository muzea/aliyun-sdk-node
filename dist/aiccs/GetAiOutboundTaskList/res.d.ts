export interface GetAiOutboundTaskListResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 状态码。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务列表。
     */
    Data: {
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 是否有下一页。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        HasNextPage: boolean;
        /**
         * 数据总量。
         * @example `10`
         */
        TotalResults: number;
        /**
         * 当前页数。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 任务信息。
         */
        List: {
            /**
             * 任务ID。
             * @example `1763****`
             */
            TaskId: number;
            /**
             * 任务状态。取值：
             * - **0**：未开始。
             * - **1**：进行中。
             * - **2**：系统暂停。
             * - **3**：手动暂停。
             * - **4**：已完成。
             * - **5**：已终止。
             * @example `0`
             */
            Status: number;
            /**
             * 任务状态描述。
             * @example `未开始`
             */
            StatusDesc: string;
            /**
             * 任务名称。
             * @example `xxxx外呼任务`
             */
            Name: string;
            /**
             * 任务描述。
             * @example `房产销售`
             */
            Description: string;
            /**
             * 技能组ID（预测式）或者IVR ID（自动外呼）。
             * @example `2468****`
             */
            HandlerId: number;
            /**
             * 技能组名称或IVR名称。
             * @example `热线技能组`
             */
            HandlerName: string;
            /**
             * 外呼并发。
             * > 自动外呼特有参数。
             * @example `1`
             */
            ConcurrentRate: number;
            /**
             * 任务总量。
             * @example `100`
             */
            TotalCount: number;
            /**
             * 任务已完成量。
             * @example `70`
             */
            FinishCount: number;
            /**
             * 任务完成率。
             * @example `0.7`
             */
            FinishRate: number;
            /**
             * 任务创建截止时间。时间戳格式，单位：毫秒。
             * @example `1615083365000`
             */
            CreateTime: number;
        }[];
    };
}
