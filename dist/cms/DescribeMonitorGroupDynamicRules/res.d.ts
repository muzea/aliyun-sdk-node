export interface DescribeMonitorGroupDynamicRulesResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `2170B94A-1576-4D65-900E-2093037CDAF3`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Resource: {
        /**
         * 关联资源。
         */
        Resource: {
            /**
             * 动态规则对应的云服务类型。取值：
             * - ecs：云服务器。
             * - rds：关系型数据库。
             * - slb：负载均衡。
             * @example `ecs`
             */
            Category: string;
            /**
             * 筛选条件。取值：
             * - and：应用分组中满足所有报警规则的实例。
             * - or：应用分组中满足任意报警规则的实例。
             * @example `and`
             */
            FilterRelation: string;
            Filters: {
                /**
                 * 应用分组的动态规则。
                 */
                Filter: {
                    /**
                     * 动态规则值。
                     * @example `1`
                     */
                    Value: string;
                    /**
                     * 计算方法。取值：
                     * - contains：包含。
                     * - startWith：前缀。
                     * - endWith：后缀。
                     * @example `contains`
                     */
                    Function: string;
                    /**
                     * 实例名称。
                     * @example `hostName`
                     */
                    Name: string;
                }[];
            };
        }[];
    };
}
