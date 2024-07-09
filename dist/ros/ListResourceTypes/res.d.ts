export interface ListResourceTypesResponse {
    /**
     * 资源类型数组。
     */
    ResourceTypes: string[];
    /**
     * 请求ID。
     * @example `EA00860C-ECAF-5253-A1F9-8198695A7157`
     */
    RequestId: string;
    /**
     * 资源类型摘要列表。
     */
    ResourceTypeSummaries: {
        /**
         * 资源类型提供者。取值：
         * - ROS：资源编排服务。
         * - Self：用户自己。
         * @example `ROS`
         */
        Provider: string;
        /**
         * 实体类型。取值：
         * - Resource：普通资源类型。
         * - DataSource：数据源资源类型。
         * - Module：模块。
         * @example `Module`
         */
        EntityType: string;
        /**
         * 资源类型。
         * @example `MODULE::MyOrganization::MyService::MyUsecase`
         */
        ResourceType: string;
        /**
         * 默认版本ID。
         * @example `v1`
         */
        DefaultVersionId: string;
        /**
         * 最新版本ID。
         * @example `v10`
         */
        LatestVersionId: string;
        /**
         * 创建时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ss。
         * @example `2023-02-24T08:25:21`
         */
        CreateTime: string;
        /**
         * 更新时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ss。
         * @example `2023-02-24T08:25:21`
         */
        UpdateTime: string;
        /**
         * 资源类型描述。
         * @example `It is a demo.`
         */
        Description: string;
        /**
         * 版本数量。
         * @example `10`
         */
        TotalVersionCount: number;
    }[];
}
