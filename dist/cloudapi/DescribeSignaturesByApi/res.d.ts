export interface DescribeSignaturesByApiResponse {
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    Signatures: {
        /**
         * 由 SignatureItem 组成的数组格式，返回后端签名密钥的信息项
         */
        SignatureItem: {
            /**
             * 绑定时间
             * @example `2016-07-23T08:28:48Z`
             */
            BoundTime: string;
            /**
             * 后端签名密钥ID
             * @example `dd05f1c54d6749eda95f9fa6d491449a`
             */
            SignatureId: string;
            /**
             * 后端签名密钥名称
             * @example `mysecret`
             */
            SignatureName: string;
        }[];
    };
}
