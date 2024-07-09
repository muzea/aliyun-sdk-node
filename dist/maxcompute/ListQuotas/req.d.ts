export interface ListQuotasRequest {
    /**
     * 租户id
     * @example `280747109771520`
     */
    "tenantId"?: string;
    /**
     * 地域id
     * @example `cn-beijing`
     */
    "region"?: string;
    /**
     * 产品id
     * @example `ODPS`
     */
    "productId"?: string;
    /**
     * 付费模式
     * @example `subscription`
     */
    "billingType"?: string;
    /**
     * 可以根据费用标签来过滤quota 对象，费用标签是用户在标签云产品创建的。
     * @example `{"tag":"this_is_tag_demo"}`
     */
    "saleTags"?: string;
    /**
     * 设定结果从marker之后按字母排序的第一个开始返回。
     * @example `cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==`
     */
    "marker"?: string;
    /**
     * 限制返回的最大数。
     * @example `100`
     */
    "maxItem"?: number;
}
