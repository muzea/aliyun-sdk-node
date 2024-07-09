export interface CopyConfigRulesResponse {
    /**
     * 请求ID。
     * @example `7BD81ECF-3194-5A6B-8719-9FC283167AD4`
     */
    RequestId: string;
    /**
     * 规则的复制结果。取值：
     * - true：成功。
     * - fasle：失败。
     * @example `true`
     */
    CopyRulesResult: boolean;
}
