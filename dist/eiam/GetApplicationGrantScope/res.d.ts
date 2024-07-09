export interface GetApplicationGrantScopeResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 授权范围。
     */
    ApplicationGrantScope: {
        /**
         * API授权范围集合。
         */
        GrantScopes: string[];
    };
}
