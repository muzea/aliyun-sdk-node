export interface DeleteILMPolicyResponse {
    /**
     * 返回结果：
     * - true：成功删除指定的生命周期策略定义。
     * - false：删除指定的生命周期策略定义失败。
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `694FDC20-0FDD-47C4-B921-BFF902FA****`
     */
    RequestId: string;
}
