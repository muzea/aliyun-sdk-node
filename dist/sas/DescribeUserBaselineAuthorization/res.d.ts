export interface DescribeUserBaselineAuthorizationResponse {
    /**
     * 结果的请求ID。
     * @example `0AF20EB0-EBBC-4B94-9B84-F3BAFAC53EDE`
     */
    RequestId: string;
    /**
     * 云基线配置检查授权信息。
     */
    UserBaselineAuthorization: {
        /**
         * 云平台配置检查授权状态。
         * - **0**：授权关闭。授权关闭的状态下，您无法使用云平台配置检查功能。
         * - **1**：授权开启。授权开启的状态下，才可以使用云平台配置检查功能。
         * @example `1`
         */
        Status: number;
    };
}
