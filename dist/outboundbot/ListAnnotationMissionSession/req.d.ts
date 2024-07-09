export interface ListAnnotationMissionSessionRequest {
    /**
     * 任务id
     * @example `8434a4b0-41fc-41b1-aa75-bbd1f2ab0c8d`
     */
    "AnnotationMissionId"?: string;
    /**
     * 标注任务chat实例ID
     * @example `8434a4b0-41fc-41b1-aa75-bbd1f2ab0c8d
    `
     */
    "AnnotationMissionSessionId"?: string;
    /**
     * 页号
     * @example `3`
     */
    "PageIndex"?: number;
    /**
     * 每页显示的记录数。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 环境
     * @example `0`
     */
    "Environment"?: number;
    /**
     * 包含的状态列表
     * @example `[1]`
     */
    "IncludeStatusListJsonString"?: string;
}
