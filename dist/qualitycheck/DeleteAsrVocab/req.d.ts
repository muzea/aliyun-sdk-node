export interface DeleteAsrVocabRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"vocabId":"指定热词Id"}`
     */
    "JsonStr": string;
    /**
     * baseMeAgentId
     */
    "BaseMeAgentId"?: number;
}
