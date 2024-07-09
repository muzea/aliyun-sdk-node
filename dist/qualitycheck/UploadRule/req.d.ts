export interface UploadRuleRequest {
    /**
     * 完整JSON字符串信息，具体内容参见下方详细信息。
     * @example `{“conditions”:“xxxxx”,"rules":"xxxx"}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
