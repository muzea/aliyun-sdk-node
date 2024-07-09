export interface UpdateRuleRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"conditions":"所有条件的配置信息"}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
