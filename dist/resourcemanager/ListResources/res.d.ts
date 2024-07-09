export interface ListResourcesResponse {
    /**
     * 数据总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 分页时每页显示的数据条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Resources: {
        /**
         * 资源信息。
         */
        Resource: {
            /**
             * 云服务代码。
             * @example `ecs`
             */
            Service: string;
            /**
             * 资源类型。
             * @example `instance`
             */
            ResourceType: string;
            /**
             * 资源组ID。
             * @example `rg-uPJpP****`
             */
            ResourceGroupId: string;
            /**
             * 资源ID。
             * @example `i-23v38****`
             */
            ResourceId: string;
            /**
             * 资源创建时间（UTC时间）。
             * @example `2015-01-23T12:33:18Z`
             */
            CreateDate: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
