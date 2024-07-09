export interface ListPredefinedScopesResponse {
    PredefinedScopes: {
        /**
         * 应用权限范围信息。
         */
        PredefinedScope: {
            /**
             * 范围描述。
             * @example `用于获取用户的OpenID（默认权限范围，不可移除）`
             */
            Description: string;
            /**
             * 范围名称。
             * @example `openid`
             */
            Name: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `955C096D-EC99-480B-AF37-3921109107D0`
     */
    RequestId: string;
}
