export interface DescribeDomainViewTopUrlResponse {
    /**
     * 本次请求的ID。
     * @example `C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E`
     */
    RequestId: string;
    /**
     * 网站业务的访问量TOP URL列表。
     */
    UrlList: {
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
        /**
         * 请求数量。
         * @example `3390671`
         */
        Count: number;
    }[];
}
