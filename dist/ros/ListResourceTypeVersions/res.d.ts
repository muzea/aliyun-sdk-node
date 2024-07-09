export interface ListResourceTypeVersionsResponse {
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 资源类型版本信息列表。
     */
    ResourceTypeVersions: {
        /**
         * 资源类型提供者。取值：
         * - ROS：资源编排服务。
         * - Self：用户自己。
         * @example `ROS`
         */
        Provider: string;
        /**
         * 实体类型。取值：Module，模块。
         * @example `Module`
         */
        EntityType: string;
        /**
         * 资源类型。
         * @example `MODULE::MyOrganization::MyService::MyUsecase`
         */
        ResourceType: string;
        /**
         * 是否默认版本。取值：
         * - true：是默认版本。
         * - false：不是默认版本。
         * @example `true`
         */
        IsDefaultVersion: boolean;
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
         * 版本ID。
         * @example `v1`
         */
        VersionId: string;
        /**
         * 版本描述。
         * @example `It is a demo.`
         */
        Description: string;
    }[];
}
