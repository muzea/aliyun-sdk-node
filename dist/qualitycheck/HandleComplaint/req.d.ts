export interface HandleComplaintRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"taskId":"任务ID"}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
