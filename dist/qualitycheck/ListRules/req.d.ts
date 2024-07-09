export interface ListRulesRequest {
    /**
     * 一个JSON格式的字符串，完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"pageNumber":1,"pageSize":10}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
