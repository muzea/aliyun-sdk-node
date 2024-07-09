export interface ModifyQuotaTemplateServiceStatusRequest {
    /**
     * 配额模板的状态。取值：
     * - -1：禁用。
     * - 1：开启。
     * @example `1`
     */
    "ServiceStatus": number;
}
