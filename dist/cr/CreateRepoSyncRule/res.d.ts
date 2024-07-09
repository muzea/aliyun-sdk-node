export interface CreateRepoSyncRuleResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 同步规则ID
     * @example `crsr-gk5p2ns1kzns****`
     */
    SyncRuleId: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `8F8A0BA6-7F06-4BAE-B147-10BD6A25****`
     */
    RequestId: string;
}
