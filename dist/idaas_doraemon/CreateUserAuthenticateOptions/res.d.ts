export interface CreateUserAuthenticateOptionsResponse {
    /**
     * 请求ID
     * @example `D0F570B0-89CE-07F2-B41E-F97E089E13C6`
     */
    RequestId: string;
    /**
     * 防重放挑战码
     * @example `2343246776`
     */
    ChallengeBase64: string;
    /**
     * 创建认证的Options，内容是JSON
     * @example `{\"subscribeEvent\":false,\"installAgent\":false}`
     */
    Options: string;
}
