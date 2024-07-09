export interface ListResourceTypeRegistrationsResponse {
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6`
     */
    RequestId: string;
    /**
     * 资源注册记录列表。
     */
    Registrations: {
        /**
         * 注册ID。
         * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****
        `
         */
        RegistrationId: string;
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
         * 版本ID。
         * @example `v1`
         */
        VersionId: string;
        /**
         * 注册状态。取值：
         * - IN_PROGRESS：进行中。
         * - COMPLETE：成功。
         * - FAILED：失败。
         * @example `COMPLETE`
         */
        Status: string;
        /**
         * 状态原因。
         * @example `Module is created successfully`
         */
        StatusReason: string;
        /**
         * 创建时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ss。
         * @example `2023-03-02T07:28:35`
         */
        CreateTime: string;
    }[];
    /**
     * 分页查询时设置的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 注册记录总数。
     * @example `1`
     */
    TotalCount: number;
}
