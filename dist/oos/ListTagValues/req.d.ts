export interface ListTagValuesRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 单页最大结果数
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻下一页的口令
     * @example `3272h923879hsaksad`
     */
    "NextToken"?: string;
    /**
     * 已打标签的资源类型
     * @example `template`
     */
    "ResourceType"?: string;
    /**
     * 要查询的标签键
     * @example `k1`
     */
    "Key"?: string;
}
