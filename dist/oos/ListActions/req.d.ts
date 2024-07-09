export interface ListActionsRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 动作名称。名称未包含关系，最终列出包含所填动作名称的所有动作。
     * @example `MyTemplate`
     */
    "OOSActionName"?: string;
    /**
     * 分页大小。取值范围：10-100。默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token。
     * @example `-`
     */
    "NextToken"?: string;
}
