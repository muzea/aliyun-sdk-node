export interface DeleteCollectionPolicyRequest {
    /**
     * 规则名称。
     * @example `your_log_policy`
     */
    "policyName": string;
    /**
     * 产品编码。
     * @example `oss`
     */
    "productCode"?: string;
    /**
     * 日志类型编码。
     * @example `access_log`
     */
    "dataCode"?: string;
}
