export interface StartRemediationResponse {
    /**
     * 请求ID。
     * @example `C7817373-78CB-4F9A-8AFA-E7A88E9D64A2`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Data: boolean;
}
