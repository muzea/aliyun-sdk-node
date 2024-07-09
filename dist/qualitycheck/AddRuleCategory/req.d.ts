export interface AddRuleCategoryRequest {
    /**
     * 一个JSON格式的字符串，具体内容参见以下详细信息。
     * @example `{"typeName":"规则类型A"}`
     */
    "JsonStr": string;
    /**
     * baseMeAgentId
     */
    "BaseMeAgentId"?: number;
}
