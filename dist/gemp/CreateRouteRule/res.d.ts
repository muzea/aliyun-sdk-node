export interface CreateRouteRuleResponse {
    /**
     * 请求
     * @example `请求ID`
     */
    requestId: string;
    /**
     * 返回结果
     * @example `65`
     */
    data: {
        /**
         * 规则ID
         * @example `1000`
         */
        routeRuleId: number;
    };
}
