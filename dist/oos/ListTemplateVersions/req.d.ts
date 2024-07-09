export interface ListTemplateVersionsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模版名称。
     * @example `describeinstances`
     */
    "TemplateName": string;
    /**
     * 最大结果数。取值范围10-100。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 用来翻页的Token字符串。
     * @example `H8xj9c-398djs9-39ajd9asdjjJ`
     */
    "NextToken"?: string;
    /**
     * 模版类型。取值范围Private或Public。
     * @example `Private`
     */
    "ShareType"?: string;
}
