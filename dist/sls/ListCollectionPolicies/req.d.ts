export interface ListCollectionPoliciesRequest {
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
    /**
     * 规则名称。
     * @example `your_log_policy
    `
     */
    "policyName"?: string;
    /**
     * 分页查询时，设置的每页行数。默认值为 50，最多返回 100 个 规则信息。
     * @example `50`
     */
    "size"?: number;
    /**
     * 查询开始行，默认值为 0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 实例ID。如果配置实例ID，则可以根据实例ID反向查询实例命中的规则，必须和productCode、dataCode结合使用。
     * @example `your-test-bucket1
    `
     */
    "instanceId"?: string;
    /**
     * 中心化转投目的Project。如果配置中心化转投目的Project，则可以根据Project反向查询有多少规则配置了中心化转投到该centralProejct下。
     * @example `your-central-project1`
     */
    "centralProject"?: string;
}
