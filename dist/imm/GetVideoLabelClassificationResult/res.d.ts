export interface GetVideoLabelClassificationResultResponse {
    /**
     * 当次请求的Request ID。
     * @example `7F84C6D9-5AC0-49F9-914D-F02678E3****`
     */
    RequestId: string;
    /**
     * 项目名称。
     * @example `immtest`
     */
    ProjectName: string;
    /**
     * 事件ID。
     * @example `2F6-1Bz99Xi93EnRpNEyLudILJm****`
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
     * @example `2021-12-24T03:00:38.892462383Z`
     */
    StartTime: string;
    /**
     * 任务结束时间。
     * @example `2021-12-24T03:00:42.134971294Z`
     */
    EndTime: string;
    /**
     * 用户自定义信息。
     * @example `{"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}`
     */
    UserData: string;
    /**
     * 任务类型。
     * @example `VideoLabelClassification`
     */
    TaskType: string;
    /**
     * 任务ID。
     * @example `VideoLabelClassification-2f157087-91df-4fda-8c3e-232407ec****`
     */
    TaskId: string;
    /**
     * 标签列表。
     */
    Labels: any[];
}
