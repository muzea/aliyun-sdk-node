export interface DescribeInvocationsResponse {
    /**
     * 请求ID。
     * @example `440D7342-5E7C-B2DB-D0B4EAC2BDF1****`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `10`
     */
    TotalCount: string;
    /**
     * 返回结果列表。
     */
    Data: {
        /**
         * 命令执行ID。
         * @example `t-15775dc8****`
         */
        InvocationId: string;
        /**
         * 命令开始执行时间。
         * @example `2022-08-11 17:45:03`
         */
        StartTime: string;
        /**
         * 命令结束执行时间。
         * @example `2022-08-11 17:45:03`
         */
        FinishTime: string;
        /**
         * 命令执行输出的结果。
         * @example `success`
         */
        Output: string;
        /**
         * 执行当前命令的实例ID。
         * @example `acp-uto81vfd8t8z****`
         */
        InstanceId: string;
        /**
         * 命令执行进度状态。
         * @example `RUNNING`
         */
        InvocationStatus: string;
    }[];
}
