export interface ListWarningConfigRequest {
    /**
     * 完整JSON字符串信息，具体内容参见下方详细信息。
     * @example `{"pageNumber":1,"pageSize":10}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
