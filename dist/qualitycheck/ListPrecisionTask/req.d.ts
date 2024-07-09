export interface ListPrecisionTaskRequest {
    /**
     * 完整**JSON字符串**信息，具体内容参见以下详细信息。
     * @example `"{"pageSize":10,"pageNumber":1}"`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
