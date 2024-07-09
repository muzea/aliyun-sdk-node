export interface ModifyAnnotationMissionRequest {
    /**
     * 标注任务ID
     * @example `c88cc004-de69-4eee-aa5f-2efed533a54e`
     */
    "AnnotationMissionId"?: string;
    /**
     * 标注状态
     * @example `询问卖车-标注任务-20230506-112934`
     */
    "AnnotationMissionName"?: string;
    /**
     * 标注任务名称
     * @example `2`
     */
    "AnnotationStatus"?: number;
    /**
     * 删除任务
     * @example `false`
     */
    "Delete"?: boolean;
}
