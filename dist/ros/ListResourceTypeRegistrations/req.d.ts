export interface ListResourceTypeRegistrationsRequest {
    /**
     * 实体类型。取值：Module，模块。
     * @example `Module`
     */
    "EntityType"?: string;
    /**
     * 资源类型。支持大小字母、数字、冒号、星号。若使用星号则为模糊匹配。
     * @example `MODULE::MyOrganization::MyService::MyUsecase
    `
     */
    "ResourceType"?: string;
    /**
     * 注册ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "RegistrationId"?: string;
    /**
     * 注册状态。取值：
     * - IN_PROGRESS：进行中。
     * - COMPLETE：成功。
     * - FAILED：失败。
     * @example `COMPLETE`
     */
    "Status"?: string;
    /**
     * 分页查询时设置的页码。 起始值：1。 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。 取值范围：1~50。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
