export interface DescribeGrantSagVbrRulesResponse {
    /**
     * 授权规则总条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `46E98E69-FBA2-423E-9E5A-A3C6D843FED1`
     */
    RequestId: string;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    PageNumber: number;
    GrantRules: {
        /**
         * 授权规则详情。
         */
        GrantRule: {
            /**
             * 边界路由器实例ID。
             * @example `vbr-bp13gtbhdp0pfqg6s****`
             */
            VbrInstanceId: string;
            /**
             * 边界路由器实例所属实例UID。
             * @example `1231571212121212`
             */
            VbrUid: number;
            /**
             * 边界路由器实例所属地域ID。
             * @example `cn-hangzhou`
             */
            VbrRegionId: string;
            /**
             * 授权规则创建时间。
             * @example `1600743723000`
             */
            CreateTime: number;
            /**
             * 智能接入网关实例ID。
             * @example `sag-0nnteglltw6z4b****`
             */
            SmartAGId: string;
            /**
             * 智能接入网关实例和边界路由器实例绑定状态。
             * - **false**：未绑定。
             * - **true**：已经绑定。
             * @example `false`
             */
            Bound: boolean;
            /**
             * 授权规则ID。
             * @example `sgv-3x8djyem7vqh70****`
             */
            InstanceId: string;
            /**
             * 智能接入网关实例所属UID。
             * @example `1231571212121212`
             */
            SmartAGUid: number;
        }[];
    };
}
