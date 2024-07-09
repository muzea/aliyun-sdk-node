export interface DeletePrecisionTaskRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `"{"taskId": "7C1DEF5F-2C18-4D36-99C6*******"}"`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
