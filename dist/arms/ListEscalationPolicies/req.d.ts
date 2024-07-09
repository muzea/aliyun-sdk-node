export interface ListEscalationPoliciesRequest {
    /**
     * 升级策略名称。
     * @example `prod升级策略`
     */
    "Name"?: string;
    /**
     * 查询的页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 每页展示的数目。
     * @example `20`
     */
    "Size": number;
}
