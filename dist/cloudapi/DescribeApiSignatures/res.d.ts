export interface DescribeApiSignaturesResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `20`
     */
    TotalCount: number;
    ApiSignatures: {
        /**
         * 由 ApiSignatureItem 组成的数组格式，返回签名密钥的信息项
         */
        ApiSignatureItem: {
            /**
             * 后端签名密钥绑定时间
             * @example `2016-07-23T08:28:48Z`
             */
            BoundTime: string;
            /**
             * API编号
             * @example `46fbb52840d146f186e38e8e70fc8c90`
             */
            ApiId: string;
            /**
             * 后端签名密钥ID
             * @example `dd05f1c54d6749eda95f9fa6d491449a`
             */
            SignatureId: string;
            /**
             * 后端签名密钥名称
             * @example `backendsignature`
             */
            SignatureName: string;
            /**
             * API名称
             * @example `testapi`
             */
            ApiName: string;
        }[];
    };
}
