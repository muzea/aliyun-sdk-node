export interface CreateSkillGroupConfigRequest {
    /**
     * 一个JSON格式的字符串，具体内容参见以下详细信息。
     * @example `{"skillGroupFrom":0,"qualityCheckType":0,"modelId":746,"name":"test","rid":"2493","vocabId":"267","skillGroupList":[{"skillGroupId":"0903","skillGroupName":"0903"}]}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
