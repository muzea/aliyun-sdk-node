export interface GetTranscodeTaskRequest {
    /**
     * 转码任务ID，可通过以下方式获取：
     * - 通过[SubmitTranscodeJobs](~~68570~~)接口发起转码任务时，为返回参数TranscodeTaskId的值。
     * - 通过[ListTranscodeTask](~~109120~~)接口查询，为请求后返回参数TranscodeTaskId的值。
     * @example `b1b65ab107e14*****3dbb900f6c1fe0`
     */
    "TranscodeTaskId": string;
}
