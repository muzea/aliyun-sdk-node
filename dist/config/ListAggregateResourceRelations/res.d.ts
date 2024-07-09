export interface ListAggregateResourceRelationsResponse {
    /**
     * 请求ID。
     * @example `7A25F9DE-4C8B-5AD3-A241-FFF5A259E5A1`
     */
    RequestId: string;
    /**
     * 资源关系结果。
     */
    ResourceRelations: {
        /**
         * 资源关系列表。
         */
        ResourceRelationList: {
            /**
             * 资源拥有者的阿里云账号ID。
             * @example `100931896542****`
             */
            AccountId: number;
            /**
             * 当前资源的资源类型。
             * @example `ACS::ECS::Instance`
             */
            SourceResourceType: string;
            /**
             * 当前资源的资源所属地域ID。
             * @example `cn-shanghai`
             */
            SourceResourceRegionId: string;
            /**
             * 当前资源的资源ID。
             * @example `i-j6cajg9yrfoh4sas****`
             */
            SourceResourceId: string;
            /**
             * 关联资源的资源类型。
             * @example `ACS::ECS::Disk`
             */
            TargetResourceType: string;
            /**
             * 关联资源的资源ID。
             * @example `d-j6c8k731qbrc7fxi****`
             */
            TargetResourceId: string;
            /**
             * 资源关系类型。
             * @example `IsAttachedTo`
             */
            RelationType: string;
        }[];
        /**
         * 查询下一页使用的Token。
         * @example `AcBjqMYSy0is7zSMGu16****`
         */
        NextToken: string;
        /**
         * 每页的最大记录数。
         * @example `10`
         */
        MaxResults: number;
    };
}
