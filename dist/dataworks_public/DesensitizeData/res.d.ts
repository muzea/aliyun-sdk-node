export interface DesensitizeDataResponse {
    /**
     * 脱敏后的结果数据。
     * @example `{     "desensData": "**198807120510**"   }`
     */
    DesensitizeData: string;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `BCA321BA-46C5-40E9-8A08-6******`
     */
    RequestId: string;
}
