export interface DescribeDomainViewTopCostTimeResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * 请求耗时TOP URL列表。
     */
    UrlList: {
        /**
         * 请求延时时长。单位：毫秒。
         * @example `3000`
         */
        CostTime: number;
        /**
         * URL。使用BASE64加密表示。
         * @example `Lw==`
         */
        Url: string;
        /**
         * 网站域名。
         * @example `www.aliyun.com`
         */
        Domain: string;
    }[];
}
