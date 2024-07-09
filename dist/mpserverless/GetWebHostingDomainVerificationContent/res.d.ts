export interface GetWebHostingDomainVerificationContentResponse {
    /**
     * 请求ID。
     * @example `74374923-6536-46EB-8639-409384EAE980`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 域名归属校验记录值。
         * @example `verify_c28a8e24b4bc9fab22d949cebdb1d7ae`
         */
        Content: string;
        /**
         * 域名。
         * @example `example.com`
         */
        Domain: string;
    };
}
