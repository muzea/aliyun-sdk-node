export interface ListQualityCheckSchemeRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{
          "name": "质检方案A"
    }`
     */
    "JsonStr": string;
    /**
     * baseMeAgentId
     */
    "BaseMeAgentId"?: number;
}
