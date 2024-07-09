export interface GetDecodeBlindWatermarkResultResponse {
    /**
     * 当次请求的 Request ID。
     * @example `93126E40-0296-4129-95E3-AFAC709372E5`
     */
    RequestId: string;
    /**
     * 项目名称。
     * @example `test-project`
     */
    ProjectName: string;
    /**
     * 事件ID。
     * @example `2C2-1I0EG57VR37J4rQ8oKG6C9*****`
     */
    EventId: string;
    /**
     * 任务运行状态。
     * @example `Succeeded`
     */
    Status: string;
    /**
     * 任务错误码。
     * @example `ResourceNotFound`
     */
    Code: string;
    /**
     * 任务错误消息。
     * @example `The specified resource project is not found.`
     */
    Message: string;
    /**
     * 任务开始时间。
     * @example `2024-03-03T09:44:31.029Z`
     */
    StartTime: string;
    /**
     * 任务结束时间。
     * @example `2024-03-03T09:45:56.87Z`
     */
    EndTime: string;
    /**
     * 用户自定义信息。
     * @example `{"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}`
     */
    UserData: string;
    /**
     * 任务类型。
     * @example `DecodeBlindWatermark`
     */
    TaskType: string;
    /**
     * 任务ID。
     * @example `DecodeBlindWatermark-c09b0943-ed79-4983-8dbe-7a882574****`
     */
    TaskId: string;
    /**
     * 水印内容
     * @example `阿里云版权所有`
     */
    Content: string;
}
