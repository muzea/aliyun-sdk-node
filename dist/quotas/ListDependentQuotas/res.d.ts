export interface ListDependentQuotasResponse {
    /**
     * 请求ID。
     * @example `920D8A47-26BB-49FA-A09F-F98D7DAA55F3`
     */
    RequestId: string;
    /**
     * 目标配额依赖的配额列表。
     */
    Quotas: {
        /**
         * 目标配额依赖的配额ID。
         * @example `q_laxtn4`
         */
        QuotaActionCode: string;
        /**
         * 目标配额依赖的配额维度。
         */
        Dimensions: {
            /**
             * 目标配额依赖的配额维度的Key。
             * @example `[]`
             */
            DimensionKey: string;
            /**
             * 目标配额依赖的配额维度所依赖的配额维度。
             */
            DependentDimension: string[];
            /**
             * 目标配额依赖的配额维度所依赖的配额维度的Value。
             */
            DimensionValues: string[];
        }[];
        /**
         * 云产品名称缩写。
         * @example `ram`
         */
        ProductCode: string;
        /**
         * 目标配额与依赖配额的关系比例。
         * @example `100`
         */
        Scale: number;
    }[];
}
