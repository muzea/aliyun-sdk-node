export interface ListProductsResponse {
    /**
     *
     * @example `1e195c5116124202371861018d5bde`
     */
    RequestId: string;
    Products: {
        /**
         *
         * @example `https://common-buy.aliy`
         */
        PurchaseUrl: string;
        /**
         *
         * @example `DataWorks_isolate`
         */
        ProductCode: string;
        /**
         *
         * @example `true`
         */
        IsPurchased: boolean;
        HasPermissionToPurchase: boolean;
        ProductInstanceId: string;
    }[];
    Services: {
        /**
         *
         * @example `true`
         */
        IsOpen: boolean;
        OpenUrl: string;
        /**
         *
         * @example `oss`
         */
        ServiceCode: string;
    }[];
}
