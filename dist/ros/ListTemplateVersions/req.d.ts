export interface ListTemplateVersionsRequest {
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `caeba0bbb2be03f84eb48b699f0****`
     */
    "NextToken"?: string;
    /**
     * 使用NextToken方式查询时，每次最多返回的结果数。
     * 取值范围：1~100。
     * 默认值：50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 模板ID。支持共享模板和私有模板。
     * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
     */
    "TemplateId": string;
}
