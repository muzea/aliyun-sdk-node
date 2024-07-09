export interface InsertSubScoreForApiRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"scoreId":5119,"scoreSubName":"不耐心","scoreType":3,"scoreNum": 10}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
