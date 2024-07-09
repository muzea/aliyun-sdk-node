export interface GetResultRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"pageNumber":1,"pageSize":10,"excludeFields":"hitResult.hits, recording.url","requiredFields":"agent,status,errorMessage,reviewStatus,reviewResult,score,taskId,reviewer,resolver,recording.name,recording.duration,hitResult,business","dataType":1,"sourceType":0,"startTime":"2020-06-25 00:00:00","endTime":"2020-07-01 23:59:59"}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
