export interface CreateActivationResponse {
    /**
     * 请求ID。
     * @example `4ECEEE12-56F1-4FBC-9AB1-890F1234****`
     */
    RequestId: string;
    /**
     * 激活码的代码。该代码仅在调用接口时返回一次，后续无法被查询。因此，请您务必妥善保存返回值。
     * @example `a-hz0ch3SwhOlE1234+Xo32lAZC****`
     */
    ActivationCode: string;
    /**
     * 激活码ID。
     * @example `4ECEEE12-56F1-4FBC-9AB1-890F1234****`
     */
    ActivationId: string;
}
