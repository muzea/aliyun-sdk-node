export interface GetSupportedResourceRelationConfigResponse {
    /**
     * 资源关系列表。
     */
    ResourceRelationConfigList: {
        /**
         * 关系目标资源类型。
         * @example `ACS::ECS::Disk`
         */
        TargetResourceType: string;
        /**
         * 资源关系类型。取值：
         * - IsContained：包含在。
         * - IsAttachedTo：挂载到。
         * - IsAssociatedIn：关联到。
         * - Contains：包含。
         * @example `IsAttachedTo`
         */
        RelationType: string;
    }[];
    /**
     * 请求ID。
     * @example `409D022F-394C-5AAB-A74A-2F1DC9F6375E`
     */
    RequestId: string;
}
