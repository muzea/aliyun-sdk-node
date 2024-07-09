export interface ListSmartAGApiUnsupportedFeatureResponse {
    /**
     * 请求ID。
     * @example `7459545D-2F0D-43E6-9957-CB7E0223332B`
     */
    RequestId: string;
    /**
     * 不支持的功能特性列表。
     */
    Features: {
        /**
         * 不支持的功能特性。
         * 关于每个功能特性的描述信息，请您查看对应的OpenAPI文档。
         * @example `ISP`
         */
        Feature: string;
    }[];
}
