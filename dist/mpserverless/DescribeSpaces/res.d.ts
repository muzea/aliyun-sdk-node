export interface DescribeSpacesResponse {
    /**
     * 唯一请求ID。
     * @example `68B76E59-CC10-5EEC-BCED-73A6C51179BC`
     */
    RequestId: string;
    /**
     * 时间。
     * @example `2024-03-27T06:43:17Z`
     */
    GmtCreate: string;
    /**
     * 服务空间总数。
     * @example `10`
     */
    Count: number;
    /**
     * 服务空间。
     */
    Spaces: {
        /**
         * 服务空间ID。
         * @example `mp-f215973f-db40-4013-92a8-b09690c7****`
         */
        SpaceId: string;
        /**
         * 实例ID。
         * @example `emas_EmasServerlessPre_public_cn-0ju2pax****`
         */
        InstanceId: string;
        /**
         * EMAS项目空间ID。
         * @example `3818905`
         */
        EmasWorkspaceId: number;
        /**
         * 服务空间名称。
         * @example `myspace`
         */
        Name: string;
        /**
         * 服务空间描述。
         * @example `线上`
         */
        Description: string;
        /**
         * 空间状态。返回值为 UNINITIALIZED、PRODUCING、PRODUCE_FAILED、PAUSED、IN_SERVICE
         * @example `IN_SERVICE`
         */
        ServiceStatus: string;
        /**
         * - RENEWING 续费中
         * - UPGRADING 升配中
         * @example `UPGRADING`
         */
        PackageStatus: string;
        /**
         * 创建时间。
         * @example `2022-05-19T06:06:05Z`
         */
        GmtCreate: string;
        /**
         * 修改时间。
         * @example `2022-05-19T06:06:05Z`
         */
        GmtModified: string;
        /**
         * - FREE 开发者版
         * - BASE 基础版
         * - STANDARD 标准版
         * - PROFESSIONAL 专业版
         * - ENTERPRISE 企业版
         * - UTIMATE 旗舰版
         * @example `ENTERPRISE`
         */
        SpecCode: string;
        /**
         * - PREPAY 套餐付费
         * - POSTPAY 按量计费
         * @example `PREPAY`
         */
        ChargeType: string;
        /**
         * - BUY 新购
         * - RENEW 续费
         * - UPGRADE 升配
         * @example `BUY`
         */
        OrderType: string;
        /**
         * 付费类型为包年包月时，取值如下：
         * - true：自动续费。
         * - false：手动续费。
         * @example `true`
         */
        AutoRenew: boolean;
        /**
         * 续费时长。
         * @example `3`
         */
        RenewDuration: string;
        /**
         * 资源包起始时间。
         * @example `2022-06-18T16:00:00Z`
         */
        PackageStartDate: string;
        /**
         * 资源包到期时间。
         * @example `2022-09-18T16:00:00Z`
         */
        PackageEndDate: string;
    }[];
}
