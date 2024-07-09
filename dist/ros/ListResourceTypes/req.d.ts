export interface ListResourceTypesRequest {
    /**
     * 实体类型。取值：
     * - All：所有资源类型。
     * - Resource（默认值）：普通资源类型。更多信息，请参见[资源](~~28863~~)。
     * - DataSource：数据源资源类型。更多信息，请参见[数据源资源](~~404753~~)。
     * - Module：模块。
     * @example `Resource`
     */
    "EntityType"?: string;
    /**
     * 资源类型提供者。取值：
     * - ROS（默认值）：资源编排服务。
     * - Self：用户自己。
     * @example `ROS`
     */
    "Provider"?: string;
    /**
     * 资源类型。支持大小写字母、数字、冒号、星号。若使用星号则为模糊匹配。
     * @example `MODULE::MyOrganization::MyService::MyUsecase`
     */
    "ResourceType"?: string;
}
