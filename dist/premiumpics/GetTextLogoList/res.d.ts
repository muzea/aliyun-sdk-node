export interface GetTextLogoListResponse {
    /**
     * 请求id
     * @example `88E0B72B-7EA8-5D8F-BDA5-27A01E0539F4`
     */
    RequestId: string;
    /**
     * 此次操作是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 日志最后修改时间。
     * @example `5d6716ceb8cd4370a05e0a0e30f4cb78`
     */
    LogoVersion: string;
    /**
     * 具体内容，请参见[textlogolist](~~28935~~)。
     */
    Logos: {
        /**
         * 商品id
         * @example `812f1855fa8d2b1e31ec2653eebe0702`
         */
        GoodsId: string;
        /**
         * 可公开访问的地址。
         * @example `https://edu.aliyun.com/clouder/gdpr/showResourceAlert?token=fftdXk12sf3dHrp%2BukTT87K%2BDXM%3D`
         */
        Url: string;
    }[];
}
