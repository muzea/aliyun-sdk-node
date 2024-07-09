export interface SaveConfigDataSetRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `"{"judgeType":1,"setId":851,"jsonStrForRule":{"conditions":[{"cid":"1","check_range":{},"lambda":"1","operators":[{"oid":1,"type":"HIT_ANY_KEYWORDS","param":{"keywords":["有什么可以帮您","客服中心"],"in_sentence":false}}]}],"rules":[{"externalProperty":0,"lambda":"1","rid":"1"}],"roleJudgeMethod":"keyword"},"channelType":1}"`
     */
    "JsonStr": string;
    /**
     * baseMeAgentId
     */
    "BaseMeAgentId"?: number;
}
