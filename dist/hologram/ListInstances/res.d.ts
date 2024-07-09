export interface ListInstancesResponse {
    /**
     * 请求ID。
     * @example `D1303CD4-AA70-5998-8025-F55B22C50840`
     */
    RequestId: string;
    /**
     * 实例列表。
     */
    InstanceList: {
        /**
         * 商品code，与费用中心产品明细code一致
         * @example `hologram_postpay_public_cn`
         */
        CommodityCode: string;
        /**
         * 创建时间。
         * @example `2022-12-16T02:24:05Z`
         */
        CreationTime: string;
        /**
         * 到期时间。
         * @example `2023-05-04T16:00:00.000Z`
         */
        ExpirationTime: string;
        /**
         * 实例ID。
         * @example `hgpostcn-cn-aaab9ad2d8fb`
         */
        InstanceId: string;
        /**
         * 实例名称。
         * @example `test_instance`
         */
        InstanceName: string;
        /**
         * 实例状态。
         * @example `Running`
         */
        InstanceStatus: string;
        /**
         * 实例类型。
         * @example `Standard`
         */
        InstanceType: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `tag`
             */
            Key: string;
            /**
             * 标签值。
             * @example `value`
             */
            Value: string;
        }[];
        /**
         * 实例付费类型。
         * @example `PrePaid`
         */
        InstanceChargeType: string;
        /**
         * 主实例ID。
         * @example `hgprecn-cn-2r42sqvxm006`
         */
        LeaderInstanceId: string;
        /**
         * 暂停原因。
         * @example `Manual`
         */
        SuspendReason: string;
        /**
         * 是否启用湖仓加速。
         * @example `true`
         */
        EnableHiveAccess: string;
        /**
         * 实例版本。
         * @example `1.3.37`
         */
        Version: string;
        /**
         * 资源组id。
         * @example `rg-acfmvscak73zmby`
         */
        ResourceGroupId: string;
        /**
         * 域名列表。
         */
        Endpoints: {
            /**
             * 域名。
             * @example `hgpostcn-cn-aaab9ad2d8fb-cn-hangzhou-internal.hologres.aliyuncs.com:80`
             */
            Endpoint: string;
            /**
             * 网络类型。
             * @example `Internet`
             */
            Type: string;
            /**
             * 是否启用Endpoint。
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 虚拟交换机ID。
             * @example `vsw-wz9oap28raidjevhuszg4`
             */
            VSwitchId: string;
            /**
             * VPC ID。
             * @example `vpc-uf6mrahzyu7uorlqqpz5f`
             */
            VpcId: string;
            /**
             * VPC实例ID。
             * @example `hgpostcn-cn-wwo3665tx004-frontend-st`
             */
            VpcInstanceId: string;
        }[];
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 可用区ID
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
    }[];
    /**
     * 调用接口是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 错误码。
     * @example `null`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMessage: string;
    /**
     * http状态码。
     * @example `200`
     */
    HttpStatusCode: string;
}
