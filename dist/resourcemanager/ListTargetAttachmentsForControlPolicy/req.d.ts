export interface ListTargetAttachmentsForControlPolicyRequest {
    /**
     * 管控策略ID。
     * @example `cp-jExXAqIYkwHN****`
     */
    "PolicyId": string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据条数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
