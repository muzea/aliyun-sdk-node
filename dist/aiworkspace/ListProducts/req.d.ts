export interface ListProductsRequest {
    /**
     *
     * @example `PAI_isolate`
     */
    "ProductCodes"?: string;
    /**
     *
     * @example `oss`
     */
    "ServiceCodes"?: string;
    "Verbose"?: boolean;
}
