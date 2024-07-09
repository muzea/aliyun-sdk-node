export interface CreateAuthenticatorRegistrationResponse {
    /**
     * 请求ID。
     * @example `DA0A9BF3-029D-5968-B876-0DF49777B22D`
     */
    RequestId: string;
    /**
     * 防重放挑战码
     */
    ChallengeBase64: string;
    /**
     * 创建认证器的Options
     */
    Options: string;
}
