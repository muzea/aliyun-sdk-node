export interface SubmitQualityCheckTaskRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `"{"jobName":"任务 2020-03-19 14:16:55","jobType":0,"jsonStr":{"dataSetIds":[123**],"modeCustomizationId":"046db35352904c5dbb0564****","ruleIds":[185**,185**],"vocabId":"0f0cd63546c747bcb306bb05***"}}"`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
