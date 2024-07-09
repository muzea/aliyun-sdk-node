export interface UpdateSkillGroupConfigRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"skillGroupFrom":0,"name":"test","qualityCheckType":0,"rid":"2493,4098","vocabId":267,"skillGroupList":[{"skillGroupId":"090311","skillGroupName":"09031"}],"id":553}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
