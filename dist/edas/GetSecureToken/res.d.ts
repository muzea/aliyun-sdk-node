export interface GetSecureTokenResponse {
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 接口请求返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 接口请求ID。
     * @example `D16979DC-4D42-*************`
     */
    RequestId: string;
    /**
     * 接口请求返回的接口SecureToken对象。
     */
    SecureToken: {
        /**
         * 该命名空间的AccessKey Secret（SK）。
         * @example `gOSgbgR2R*************`
         */
        SecretKey: string;
        /**
         * 该命名空间的AccessKey（AK）。
         * @example `f676f1**************`
         */
        AccessKey: string;
        /**
         * 所属的RegionID。
         * @example `cn-shenzhen`
         */
        BelongRegion: string;
        /**
         * 该命名空间的描述信息。
         * @example `”“`
         */
        Description: string;
        /**
         * 该命名空间所在地域的RegionName。
         * @example `x******`
         */
        RegionName: string;
        /**
         * 用户的EdasId，即阿里云UID。
         * @example `11727458********`
         */
        EdasId: string;
        /**
         * 该命名空间对应的地址服务器地址。
         * @example `addr-****-****.edas.aliyun.com`
         */
        AddressServerHost: string;
        /**
         * 用户的UID。
         * @example `edas_com***_****@******-*****.***`
         */
        UserId: string;
        /**
         * SecureToken的ID。
         * @example `7279`
         */
        Id: number;
        /**
         * 该命名空间的租户ID（Tenant ID）。
         * @example `401b7bc8-9441-4693-****-************`
         */
        TenantId: string;
        /**
         * 该命名空间所在地域的RegionID。
         * @example `cn-shenzhen:x*******`
         */
        RegionId: string;
        /**
         * MSE注册中心类型：
         * * default：EDAS共享注册中心。
         * * exclusive_mse：MSE Nacos注册中心。
         * @example `exclusive_mse`
         */
        MseRegistryType: string;
        /**
         * MSE注册中心实例ID。
         * @example `mse_prepaid_public_cn-tl32p******`
         */
        MseInstanceId: string;
        /**
         * MSE注册中心公网地址。
         * @example `mse-aa2******-p.nacos-ans.mse.aliyuncs.com`
         */
        MseInternetAddress: string;
        /**
         * MSE注册中心私网地址。
         * @example `mse-72******-nacos-ans.mse.aliyuncs.com`
         */
        MseIntranetAddress: string;
    };
}
