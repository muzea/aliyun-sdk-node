export interface GetPrecisionTaskRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `"{"taskId":"593A04C0-E6E9-4CDC-8C9****"}"`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
