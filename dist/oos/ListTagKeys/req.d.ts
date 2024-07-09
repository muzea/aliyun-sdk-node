export interface ListTagKeysRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 单页返回结果最大数量10到100，默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻下一页口令
     * @example `djsdlkasd`
     */
    "NextToken"?: string;
    /**
     * 查询被打标签的资源类型
     * @example `template`
     */
    "ResourceType"?: string;
}
