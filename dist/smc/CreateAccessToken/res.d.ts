export interface CreateAccessTokenResponse {
    /**
     * 请求ID。
     * @example `DB4A7EA2-6FDA-5655-B067-854532FB****`
     */
    RequestId: string;
    /**
     * 激活码的代码。该代码仅在调用接口时返回一次，后续无法被查询。因此，请您务必妥善保存返回值。
     * @example `B57QoTXEA2Tytr0uZWoNY5Aju5Jt****`
     */
    AccessTokenCode: string;
    /**
     * 激活码ID。
     * @example `at-bp1akz2zp67r0k6r****`
     */
    AccessTokenId: string;
}
