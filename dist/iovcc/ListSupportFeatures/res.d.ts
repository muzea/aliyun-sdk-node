export interface ListSupportFeaturesResponse {
    /**
     * 请求ID
     * @example `1B0DA203-B3BA-43CD-9506-5DF33ACEFF26`
     */
    RequestId: string;
    /**
     * 已开通的服务模块
     */
    SupportFeatures: {
        /**
         * 服务名称
         * @example `OTA`
         */
        Name: string;
    }[];
}
