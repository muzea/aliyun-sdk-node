export interface DescribePrefixListAssociationsResponse {
    /**
     * 本次调用返回的查询凭证（Token）。当该返回值为空时，表示无更多返回的数据信息。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `38793DB8-A4B2-4AEC-BFD3-111234E9188D`
     */
    RequestId: string;
    PrefixListAssociations: {
        /**
         * 前缀列表已关联的资源信息组成的数组。
         */
        PrefixListAssociation: {
            /**
             * 资源ID。
             * @example `sg-bp11ujym6xsff6l0****`
             */
            ResourceId: string;
            /**
             * 资源类型。
             * @example `securitygroup`
             */
            ResourceType: string;
        }[];
    };
}
