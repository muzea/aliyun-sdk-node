export interface DescribeSignaturesResponse {
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
    SignatureInfos: {
        /**
         * 由 SignatureInfo 组成的数组格式，返回后端签名的信息项
         */
        SignatureInfo: {
            /**
             * 密钥最后修改时间
             * @example `2016-07-24T08:28:48Z`
             */
            ModifiedTime: string;
            /**
             * 后端签名密钥编号
             * @example `dd05f1c54d6749eda95f9fa6d491449a`
             */
            SignatureId: string;
            /**
             * 密钥Secret值
             * @example `asdfghjkl`
             */
            SignatureSecret: string;
            /**
             * 后端签名密钥名称
             * @example `backendsignature`
             */
            SignatureName: string;
            /**
             * 密钥Key值
             * @example `qwertyuiop`
             */
            SignatureKey: string;
            /**
             * 密钥创建时间
             * @example `2016-07-23T08:28:48Z`
             */
            CreatedTime: string;
            /**
             * 所在的region
             * @example `cn-qingdao`
             */
            RegionId: string;
        }[];
    };
}
