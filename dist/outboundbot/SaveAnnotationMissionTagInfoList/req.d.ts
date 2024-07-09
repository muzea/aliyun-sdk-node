export interface SaveAnnotationMissionTagInfoListRequest {
    /**
     * Tag JSON数据
     * @example `[]`
     */
    "AnnotationMissionTagInfoListJsonString"?: string;
    /**
     * 标签列表
     */
    "AnnotationMissionTagInfoList"?: {
        /**
         * tag id
         * @example `bdbff6a5-1f68-4b41-8d37-6ff805ce165a
        `
         */
        AnnotationMissionTagInfoId: string;
        /**
         * 实例id
         * @example `bdbff6a5-1f68-4b41-8d37-6ff805ce165a`
         */
        InstanceId: string;
        /**
         * 租户ID。
         * @example `bdbff6a5-1f68-4b41-8d37-6ff805ce165a
        `
         */
        TenantId: string;
        /**
         * tag名称
         * @example `标签`
         */
        AnnotationMissionTagInfoName: string;
        /**
         * 标签描述
         * @example `标签描述`
         */
        AnnotationMissionTagInfoDescription: string;
        /**
         * 删除
         * @example `true`
         */
        Delete: boolean;
    }[];
    /**
     * 是否重置
     * @example `false`
     */
    "Reset"?: boolean;
    /**
     * 域名实例编号。
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId"?: string;
}
