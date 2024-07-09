export interface DeleteSubScoreForApiRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"scoreSubId":"评分小项id"}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
