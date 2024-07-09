export interface ListProductQuotaDimensionsResponse {
    /**
     * 配额维度。
     */
    QuotaDimensions: {
        /**
         * 查询配额维度时是否必选。取值：
         * - true：必选。
         * - false：非必选。
         * @example `false`
         */
        Requisite: boolean;
        /**
         * 配额维度的Key。取值：
         * - regionId：地域ID。
         * - zoneId：可用区ID。
         * - chargeType：付费类型。
         * - networkType：网络类型。
         * - resourceType：资源类型。
         * @example `zoneId`
         */
        DimensionKey: string;
        /**
         * 目标配额维度依赖的配额维度。
         */
        DependentDimensions: string[];
        /**
         * 配额维度value的列表。
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
             * @example `cn-hangzhou-b
            `
             */
            Value: string;
            /**
             * 目标配额维度依赖的配额维度。
             */
            DependentDimensions: {
                /**
                 * 目标配额维度依赖的配额维度的Key。
                 * @example `regionId`
                 */
                Key: string;
                /**
                 * 目标配额维度依赖的配额维度的Value。
                 * @example `cn-hangzhou`
                 */
                Value: string;
            }[];
        }[];
        /**
         * 配额维度的名称。
         * @example `可用区`
         */
        Name: string;
    }[];
    /**
     * 本次请求返回的全部记录条数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 用来标记返回查询数据的位置。未返回表示数据已经查询完毕。
     * @example `84`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `7ED584FB-ECBF-4A2A-969D-F54D25EFABF9`
     */
    RequestId: string;
    /**
     * 本次查询返回的最大记录条数。
     * @example `5`
     */
    MaxResults: number;
}
