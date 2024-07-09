export interface GetPayerForAccountResponse {
    /**
     * 结算账号名称。
     * @example `Alice`
     */
    PayerAccountName: string;
    /**
     * 请求ID。
     * @example `9B34724D-54B0-4A51-B34D-4512372FE1BE`
     */
    RequestId: string;
    /**
     * 结算账号ID。
     * @example `172841235500****`
     */
    PayerAccountId: string;
}
