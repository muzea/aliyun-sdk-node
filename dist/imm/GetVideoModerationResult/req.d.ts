export interface GetVideoModerationResultRequest {
    /**
     * 项目名称。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 任务类型。
     * @example `VideoModeration`
     */
    "TaskType": string;
    /**
     * 任务ID。
     * @example `VideoModeration-d0f0df1d-531d-4ab4-b353-e7f475******`
     */
    "TaskId": string;
}
