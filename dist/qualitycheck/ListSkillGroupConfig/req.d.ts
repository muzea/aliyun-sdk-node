export interface ListSkillGroupConfigRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"pageNumber":1,"pageSize": 1}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
