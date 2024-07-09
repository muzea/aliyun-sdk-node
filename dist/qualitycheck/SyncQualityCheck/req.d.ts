export interface SyncQualityCheckRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"tid":"20200823-234234","dialogue":"{}"}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
