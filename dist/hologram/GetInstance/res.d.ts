export interface GetInstanceResponse {
    /**
     * 请求ID。
     * @example `865A02C2-B374-5DD4-9B34-0CA15DA1AEBD`
     */
    RequestId: string;
    /**
     * 实例信息。
     */
    Instance: {
        /**
         * 实例付费类型。
         * @example `PrePaid`
         */
        InstanceChargeType: string;
        /**
         * 商品code。
         * @example `hologram_combo_public_cn`
         */
        CommodityCode: string;
        /**
         * CPU核数。
         * @example `32`
         */
        Cpu: number;
        /**
         * 创建时间。
         * @example `2021-02-03T13:06:06Z`
         */
        CreationTime: string;
        /**
         * 标准存储大小。
         * 单位：GB。
         * @example `500`
         */
        Disk: string;
        /**
         * 域名列表。
         */
        Endpoints: {
            /**
             * 域名。
             * @example `hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80`
             */
            Endpoint: string;
            /**
             * 网络类型。
             * @example `Internet`
             */
            Type: string;
            /**
             * 是否开启网络。
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 虚拟交换机ID。
             * @example `vsw-bp1jqwp2ys6kp7tc9t983`
             */
            VSwitchId: string;
            /**
             * VPC ID。
             * @example `vpc-uf66jjber3hgvwhki3wna`
             */
            VpcId: string;
            /**
             * vpc实例ID。
             * @example `hgprecn-cn-uqm362o1b001-frontend-st`
             */
            VpcInstanceId: string;
            /**
             * 一些旧实例同时开启了AnyTunnel和SingleTunnel，当从AnyTunnel切换到SingleTunnel时，会同时保留二者的Endpoint，因此需要多一个字段保存Endpoint。
             * @example `hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80`
             */
            AlternativeEndpoints: string;
        }[];
        /**
         * 到期时间。
         * 按量付费类型没有到期时间。
         * @example `2021-02-03T13:06:06Z`
         */
        ExpirationTime: string;
        /**
         * 实例ID。
         * @example `hgpostcn-cn-tl32s6cgw00b`
         */
        InstanceId: string;
        /**
         * 实例名称。
         * 2-64个字符，字母和汉字都算一个。
         * @example `test`
         */
        InstanceName: string;
        /**
         * 实例类型。
         * @example `Standard`
         */
        InstanceType: string;
        /**
         * 内存。
         * 单位：GB
         * @example `128`
         */
        Memory: number;
        /**
         * 实例所有者。
         * @example `12345678900000`
         */
        InstanceOwner: string;
        /**
         * 实例状态。
         * @example `Running`
         */
        InstanceStatus: string;
        /**
         * 实例版本。
         * @example `r1.3.37`
         */
        Version: string;
        /**
         * 暂停原因。
         * @example `Manual`
         */
        SuspendReason: string;
        /**
         * 实例标签
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
         * 主实例ID。
         * @example `hgpostcn-cn-i7m2ncd6w002`
         */
        LeaderInstanceId: string;
        /**
         * 是否启用数据湖加速。
         * @example `true`
         */
        EnableHiveAccess: string;
        /**
         * 资源组ID。
         * @example `rg-aekzuq7hpybze2i`
         */
        ResourceGroupId: string;
        /**
         * 计算节点数量。
         * 一个节点的典型配置：16核32G内存。
         * @example `2`
         */
        ComputeNodeCount: number;
        /**
         * 可用区ID
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
        /**
         * 冷存储容量。
         * 单位：GB。
         * SSD相当于热存，也是标准存储；HDD相当于冷存。
         * @example `800`
         */
        ColdStorage: number;
        /**
         * 是否开启了自动续费。
         * @example `true`
         */
        AutoRenewal: string;
        /**
         * 网关节点数量。
         * @example `2`
         */
        GatewayCount: number;
        /**
         * 网关cpu资源。
         * 单位：core。
         * @example `4`
         */
        GatewayCpu: number;
        /**
         * 网关内存资源。
         * 单位：GB。
         * @example `16`
         */
        GatewayMemory: number;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        ReplicaRole: string;
        EnableServerless: boolean;
    };
    /**
     * 请求结果，表示此次请求是否发生异常，和业务无关。
     * @example `true`
     */
    Success: boolean;
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
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: string;
}
