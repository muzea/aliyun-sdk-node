export interface GetImageModerationResultRequest {
    /**
     * 项目名称。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 任务类型。
     * @example `ImageModeration`
     */
    "TaskType": string;
    /**
     * 任务ID。
     * @example `ImageModeration-ff207203-3f93-4645-a041-7b8f0f******`
     */
    "TaskId": string;
}
