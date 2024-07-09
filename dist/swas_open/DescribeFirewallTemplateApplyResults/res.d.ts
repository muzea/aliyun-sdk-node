export interface DescribeFirewallTemplateApplyResultsResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 分页查询时设置的每页行数。默认值：20。
     * @example `20`
     */
    PageSize: string;
    /**
     * 防火墙规则的总条数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 模板应用执行ID。
         * @example `aft-ikgt0bynitvs3****`
         */
        TaskId: string;
        /**
         * 防火墙模板ID。
         * @example `ft-bcf1a7hrdq717****`
         */
        FirewallTemplateId: string;
        /**
         * 防火墙模板应用到全部实例的状态。可能值：
         * - Running：防火墙模板正在应用中。
         * - Failed：防火墙模板应用全部失败。
         * - Success：防火墙模板应用成功。
         * - PartFailed：防火墙模板应用部分失败，有部分实例应用失败。
         * @example `Success`
         */
        Status: string;
        /**
         * 防火墙模板应用总数。
         * @example `1`
         */
        TotalCount: string;
        /**
         * 防火墙模板应用失败总数。
         * @example `0`
         */
        FailedCount: string;
        /**
         * 防火墙模板应用结果。
         */
        InstanceApplyResults: {
            /**
             * 轻量应用服务器实例ID。
             * @example `33774babccc84003a2b1ad47e8001233`
             */
            InstanceId: string;
            /**
             * 防火墙模板应用到某个实例的状态。可能值：
             * - Running：防火墙模板正在应用中。
             * - Failed：防火墙模板应用全部失败。
             * - Success：防火墙模板应用成功。
             * - PartFailed：防火墙模板应用部分失败，有部分实例应用失败。
             * @example `Success`
             */
            Status: string;
        }[];
        /**
         * 防火墙模板应用执行时间。
         * @example `Tue May 14 11:53:07 CST 2024`
         */
        CreateTime: string;
    }[];
}
