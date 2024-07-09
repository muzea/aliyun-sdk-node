export interface ListAnnotationMissionRequest {
    /**
     * 标注任务ID
     * @example `0943abcb-bd7d-4ace-8cf7-97d39d4dd0b9`
     */
    "AnnotationMissionId"?: string;
    /**
     * 标注任务名称
     * @example `全景服务场景-标注任务-20230316-103253`
     */
    "AnnotationMissionName"?: string;
    /**
     * 标注状态过滤条件
     */
    "AnnotationStatusListFilter"?: number[];
    /**
     * 标注状态过滤条件
     * @example `[1]`
     */
    "AnnotationStatusListStringFilter"?: string;
    /**
     * 标注任务创建过滤开始时间
     * @example `1661961600000`
     */
    "CreateTimeStartFilter"?: number;
    /**
     * 标注任务创建过滤截止时间
     * @example `1673280000000`
     */
    "CreateTimeEndFilter"?: number;
    /**
     * 页号
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页显示的条数
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例ID
     * @example `191ef468-75a2-4004-9441-a5c31bf5cd9d`
     */
    "InstanceId"?: string;
}
