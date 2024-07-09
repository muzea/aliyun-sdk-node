export interface DescribeLoadBalancersResponse {
    /**
     * 请求ID。
     * @example `8B9DB03B-ED39-5DB8-9C9F-1ED5F548D61E`
     */
    RequestId: string;
    /**
     * 实例列表页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前分页的行数。
     * @example `50`
     */
    PageSize: number;
    /**
     * 根据过滤条件得到的实例总个数。
     * @example `1`
     */
    TotalCount: number;
    LoadBalancers: {
        /**
         * 数组格式，返回负载均衡实例列表。
         */
        LoadBalancer: {
            /**
             * 私网负载均衡实例的专有网络ID。
             * @example `vpc-25dvzy9f8****`
             */
            VpcId: string;
            /**
             * 实例创建时间戳。
             * @example `1504147745000`
             */
            CreateTimeStamp: number;
            /**
             * 负载均衡实例ID。
             * @example `lb-bp1b6c719dfa****`
             */
            LoadBalancerId: string;
            /**
             * 实例创建时间，格式为：`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2021-12-02T02:49:05Z`
             */
            CreateTime: string;
            /**
             * 负载均衡实例付费模式，取值：
             * * **PayOnDemand**：按量付费。
             * <props="china">- **PrePay**：包年包月。</props>
             * @example `PayOnDemand`
             */
            PayType: string;
            /**
             * 实例的网络类型。取值：
             * * **internet**：创建公网负载均衡实例后，系统会分配一个公网IP地址，可以转发公网请求。
             * * **intranet**：创建内网负载均衡实例后，系统会分配一个内网IP地址，仅可转发内网请求。
             * @example `intranet`
             */
            AddressType: string;
            /**
             * 私网负载均衡实例的网络类型，取值：
             * * **vpc**：专有网络实例。
             * * **classic**：经典网络实例。
             * @example `vpc`
             */
            NetworkType: string;
            /**
             * IP版本，可以设置为**ipv4**或者**ipv6**。
             * @example `ipv4`
             */
            AddressIPVersion: string;
            /**
             * 负载均衡实例的名称。
             * @example `lb-bp1o94dp5i6ea****`
             */
            LoadBalancerName: string;
            /**
             * 监听的带宽峰值，单位：Mbps。
             * @example `-1`
             */
            Bandwidth: number;
            /**
             * 负载均衡实例服务地址。
             * @example `100.XX.XX.28`
             */
            Address: string;
            /**
             * 实例的备可用区ID。
             * @example `cn-hangzhou-d`
             */
            SlaveZoneId: string;
            /**
             * 实例的主可用区ID。
             * @example `cn-hangzhou-b`
             */
            MasterZoneId: string;
            /**
             * 公网计费方式。取值：
             * - **paybybandwidth**：按带宽计费。
             * - **paybytraffic**：按流量计费
             * <props="china">当**PayType**参数的值为**PrePay**时，只支持按带宽计费。当**InstanceChargeType**参数的值为**PayByCLCU**时，只支持按流量计费。</props>
             * @example `paybybandwidth`
             */
            InternetChargeTypeAlias: string;
            /**
             * 负载均衡实例的性能规格。
             * @example `slb.s1.small`
             */
            LoadBalancerSpec: string;
            /**
             * 负载均衡实例的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 设置修改保护状态的原因，长度为1~80个字符，必须以字母或中文开头，支持数字、半角句号（.）、下划线（_）和短划线（-）。
             * > 仅在`ModificationProtectionStatus`为**ConsoleProtection**时有效。
             * @example `托管实例`
             */
            ModificationProtectionReason: string;
            /**
             * 负载均衡修改保护状态：
             * - **NonProtection**：不限制修改保护，设置后会清空之前设置的`ModificationProtectionReason`。
             * - **ConsoleProtection**：实例控制台修改保护状态。
             * > 当取值为**ConsoleProtection**，即开启修改保护后，用户不能通过负载均衡控制台修改实例配置，但可以通过调用API修改实例配置。
             * @example `ConsoleProtection`
             */
            ModificationProtectionStatus: string;
            /**
             * 私网负载均衡实例的交换机ID。
             * @example `vsw-255ecr****`
             */
            VSwitchId: string;
            /**
             * 负载均衡实例状态。取值：
             * * **inactive**：实例已停止，此状态的实例监听不会再转发流量。
             * * **active**：实例运行中，实例创建后，默认状态为**active**。
             * * **locked**：实例已锁定，实例已经被锁定。
             * @example `active`
             */
            LoadBalancerStatus: string;
            /**
             * 企业资源组ID。
             * @example `rg-atstuj3r****`
             */
            ResourceGroupId: string;
            /**
             * 公网类型实例付费方式。取值：
             * - **3**：按带宽计费（**paybybandwidth**）。
             * - **4**：按流量计费（**paybytraffic**）。
             * <props="china">当**PayType**参数的值为**PrePay**时，只支持按带宽计费。当**InstanceChargeType**参数的值为**PayByCLCU**时，只支持按流量计费。</props>
             * @example `3`
             */
            InternetChargeType: string;
            /**
             * 负载均衡删除保护状态。取值：
             * - **on**：开启。
             * - **off**：关闭。
             * @example `off`
             */
            DeleteProtection: string;
            /**
             * 传统型负载均衡实例的地域名称。
             * @example `cn-hangzhou`
             */
            RegionIdAlias: string;
            Tags: {
                /**
                 * 标签列表
                 */
                Tag: {
                    /**
                     * 标签值。
                     * @example `testvalue`
                     */
                    TagValue: string;
                    /**
                     * 标签键。
                     * @example `testkey`
                     */
                    TagKey: string;
                }[];
            };
            /**
             * 实例计费方式，取值：
             * - **PayBySpec**：按规格计费。
             * - **PayByCLCU**：按使用量计费。
             * >该参数仅适用于中国站且当**PayType**（实例付费模式）取值为**PayOnDemand**（按量付费）时，该参数生效。
             * @example `PayBySpec`
             */
            InstanceChargeType: string;
        }[];
    };
}
