export interface VideoModerationCancelRequest {
    /**
     * 审核服务类型
     * @example `videoDetection`
     */
    "Service"?: string;
    /**
     * 待取消任务TaskId
     * @example `{\"taskId\":\"vi_s_4O9gp7GfNQdx9GOqdekFmk-1z2RJT\"}`
     */
    "ServiceParameters"?: string;
}
