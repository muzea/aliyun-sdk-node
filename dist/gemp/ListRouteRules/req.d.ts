export interface ListRouteRulesRequest {
    /**
     * 规则列表查询入参数
     */
    "body"?: {
        /**
         * 规则名称
         * @example `规则`
         */
        ruleName: string;
        /**
         * 服务名称
         * @example `服务`
         */
        serviceName: string;
        /**
         * 当前页
         * @example `1`
         */
        pageNumber: number;
        /**
         * 页大小
         * @example `10`
         */
        pageSize: number;
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
        /**
         * 路由类型：0触发事件 1仅触发报警 routeType
         * @example `0`
         */
        routeType: number;
        notFilterRouteRuleDeleted: boolean;
    };
}
