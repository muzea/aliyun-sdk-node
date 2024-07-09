export interface GetTaskResponse {
    /**
     * 请求ID。
     * @example `2C5C1E0F-D8B8-4DA0-8127-EC32C771****`
     */
    RequestId: string;
    /**
     * 项目名称。
     * @example `test-project`
     */
    ProjectName: string;
    /**
     * 事件ID。
     * @example `2F6-1Bz99Xi93EnRpNEyLudILJm****`
     */
    EventId: string;
    /**
     * 任务运行状态。取值范围如下：
     * - Running：任务运行中。
     * - Succeeded：任务执行完成，成功。
     * - Failed：任务执行完成，失败。
     * @example `Running`
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
     * @example `2021-12-24T03:01:41.662060377Z`
     */
    StartTime: string;
    /**
     * 任务结束时间。
     * @example `2021-12-24T03:01:49.480109219Z`
     */
    EndTime: string;
    /**
     * 用户自定义信息。
     * @example `{"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}`
     */
    UserData: string;
    /**
     * 任务的类型。取值范围请参见[任务类型列表](~~475313~~)。
     * @example `FileCompression`
     */
    TaskType: string;
    /**
     * 任务ID。
     * @example `c2b277b9-0d30-4882-ad6d-ad661382****`
     */
    TaskId: string;
    /**
     * 任务标签。用户在创建任务时传入的“Tag”标签。
     * @example `{"test": "val1"}`
     */
    Tags: any;
    /**
     * 创建任务的初始请求参数。
     * @example `{
        "ProjectName":"test-project",
        "CompressedFormat":"zip",
        "TargetURI":"oss://test-bucket/output/test.zip",
        "Sources":[{"URI":"oss://test-bucket/input/test.jpg"}]
    }`
     */
    TaskRequestDefinition: string;
    /**
     * 任务进度。取值范围为0~100，单位为百分比（%）。
     * > 该参数仅在任务运行状态`State`为`Running`时有意义。
     * @example `100`
     */
    Progress: number;
}
