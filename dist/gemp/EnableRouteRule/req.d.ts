export interface EnableRouteRuleRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 规则ID
         * @example `1`
         */
        routeRuleId: number;
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
    };
}
