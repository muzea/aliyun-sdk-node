export interface ListSupportedProductsResponse {
    /**
     * 支持的云产品列表。
     */
    Products: {
        /**
         * 云产品英文名称。
         * @example `Elastic Compute Service`
         */
        ProductNameEn: string;
        /**
         * 支持的云产品资源类型列表。
         */
        ResourceTypeList: {
            /**
             * 资源类型标识。
             * @example `ACS::ECS::Instance`
             */
            ResourceType: string;
            /**
             * 资源类型英文名称。
             * @example `Ecs Instance`
             */
            TypeNameEn: string;
            /**
             * 资源类型中文名称。
             * @example `ECS实例`
             */
            TypeNameZh: string;
            /**
             * 资源类型控制台跳转链接。
             * @example `https://ecs.console.aliyun.com/#/server/@{ResourceId}/detail?regionId=@{RegionId}`
             */
            TypePageLink: string;
        }[];
        /**
         * 云产品中文名称。
         * @example `云服务器ECS`
         */
        ProductNameZh: string;
    }[];
    /**
     * 请求ID。
     * @example `610B0276-ABEE-57DF-9C13-C2324FADA9D7`
     */
    RequestId: string;
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `D3AjqMNSy0ls7zBNCf3a****`
     */
    NextToken: string;
    /**
     * 单次请求返回结果的最大条数。取值范围：1~500。
     * @example `200`
     */
    MaxResults: string;
}
