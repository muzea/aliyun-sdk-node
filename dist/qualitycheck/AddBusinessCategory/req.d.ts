export interface AddBusinessCategoryRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"name":"适用业务名称"}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
