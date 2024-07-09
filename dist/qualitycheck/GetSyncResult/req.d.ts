export interface GetSyncResultRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"pageNumber":1,"pageSize":10,"requiredFields":"asrResult,agent,status,errorMessage,reviewStatus,reviewResult,score,taskId,reviewer,resolver,recording.name,recording.duration,recording.url,hitResult,business","startTime":"2020-12-25 00:00:00","endTime":"2020-12-31 23:59:59"}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
