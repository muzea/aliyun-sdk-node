export interface GetProductQuotaDimensionResponse {
    /**
     * 请求ID。
     * @example `1FA5F0E2-368E-4BA4-A8D0-6060FC6BB8F3`
     */
    RequestId: string;
    /**
     * 配额维度详情。
     */
    QuotaDimension: {
        /**
         * 配额维度的Key。取值：
         * - regionId：地域。
         * - zoneId：可用区。
         * - chargeType：付费类型。
         * - networkType：网络类型。
         * - resourceType：资源类型。
         * @example `zoneId`
         */
        DimensionKey: string;
        /**
         * 目标配额依赖云服务的配额维度。
         */
        DependentDimensions: string[];
        /**
         * 配额维度Value的列表。
         */
        DimensionValues: string[];
        /**
         * 配额维度Value的详情。
         */
        DimensionValueDetail: {
            /**
             * 配额维度Value的名称。
             * @example `cn-hangzhou-b`
             */
            Name: string;
            /**
             * 配额维度Value的值。
             * @example `cn-hangzhou-b`
             */
            Value: string;
        }[];
        /**
         * 配额维度的名称。
         * @example `可用区`
         */
        Name: string;
    };
}
