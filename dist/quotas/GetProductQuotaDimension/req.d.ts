export interface GetProductQuotaDimensionRequest {
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProducts](~~440555~~)中的`ProductCode`。
     * @example `disk`
     */
    "ProductCode": string;
    /**
     * 目标配额维度的Key。
     * > 当目标配额维度有依赖配额维度时，依赖配额维度的Key和Value必须设置，且需要同时设置。
     * @example `zoneId`
     */
    "DimensionKey"?: string;
    /**
     * 目标配额维度依赖的配额维度。
     */
    "DependentDimensions"?: {
        /**
         * 目标配额维度依赖的配额维度的Key。
         * > - N的取值范围取决于目标配额维度依赖的配额维度的个数。
         * > - 依赖配额维度的Key和Value必须同时设置。
         * @example `regionId`
         */
        Key: string;
        /**
         * 目标配额维度依赖的配额维度的Value。
         * > - N的取值范围取决于目标配额维度依赖的配额维度的个数。
         * > - 依赖配额维度的Key和Value必须同时设置。
         * @example `cn-hangzhou`
         */
        Value: string;
    }[];
}
