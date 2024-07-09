export interface CreateInstanceRequest {
    /**
     * 付费类型。
     * @example `PostPaid 后付费
    PrePaid  预付费
    `
     */
    "ChargeType": string;
    /**
     * 实例名称
     * @example `ApigatewayInstance`
     */
    "InstanceName": string;
    /**
     * 实例规格
     * @example `api.s1.small`
     */
    "InstanceSpec": string;
    /**
     * 可用区，专享实例类型为传统类型专享实例为必填项，VPC融合类型专享实例可以不填
     * @example `cn-beijing-MAZ3(c,e)`
     */
    "ZoneId"?: string;
    /**
     * https的策略
     * @example `HTTPS2_TLS1_2`
     */
    "HttpsPolicy"?: string;
    /**
     * 实例包年包月的时间，取值：
     * - PricingCycle为**Month**，表示按月付费，取值范围为**1**~**9**。
     * - PricingCycle为**Year**，表示按年付费，取值范围为**1**~**3**。
     * > ChargeType取值为**PrePaid**时，本参数可用且必须传入。
     * @example `1`
     */
    "Duration"?: number;
    /**
     * 指定预付费实例为包年或包月类型，取值范围如下：
     * - **year**：年
     * - **month**：月
     * > 若付费类型为PrePaid，该参数为必传参数。
     * @example `Month`
     */
    "PricingCycle"?: string;
    /**
     * 续费时是否自动付费。取值：
     * * **True**：自动付费。请确保账号有足够的余额。
     * * **False**：控制台手动付费。具体操作为：登录控制台，在右上角选择**费用>进入费用中心**，在**订单管理**找到目标订单进行支付。
     * 默认值：**False**。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 口令，是用来做防止重复提交请求的，请勿重复使用。
     * @example `c20d86c4-1eb3-4d0b-afe9-c586df1e2136`
     */
    "Token": string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `test1`
         */
        Key: string;
        /**
         * 标签的值。
         * @example `v1`
         */
        Value: string;
    }[];
    /**
     * 专享实例类型
     * - vpc_connect：VPC融合类型专享实例
     * - normal：传统类型专享实例
     * ><notice>说明该参数正在邀测中，暂未开放使用。></notice>
     * @example `vpc_connect`
     */
    "InstanceType"?: string;
    /**
     * 专享实例类型为VPC融合专享实例时，实例所在网段
     * - 192.168.0.0/16
     * - 172.16.0.0/12
     * ><warning>VPC融合专享实例会连接您指定的网段，请尽量避开冲突，以防出现云产品的私网ip和您指定网段下云服务ip冲突的情况></warning>
     * ><notice>说明该参数正在邀测中，暂未开放使用。></notice>
     * @example `172.16.0.0/12`
     */
    "InstanceCidr"?: string;
    /**
     * 专享实例类型为VPC融合专享实例时，需要连通的用户VPC ID
     * ><notice>说明该参数正在邀测中，暂未开放使用。></notice>
     * @example `vpc-m5eo7khlb4h4f8y9egsdg
    `
     */
    "UserVpcId"?: string;
    /**
     * 专享实例类型为VPC融合专享实例时，需要连通网络所需要的可用区，虚拟交换机以及安全组信息
     * ><notice>说明该参数正在邀测中，暂未开放使用。></notice>
     */
    "ZoneVSwitchSecurityGroup"?: {
        /**
         * 可用区ID
         * @example `cn-beijing-c`
         */
        ZoneId: string;
        /**
         * 虚拟交换机ID
         * @example `vsw-0xi349n11cxogmvm866tb`
         */
        VSwitchId: string;
        /**
         * 交换机的IPv4网段。
         * @example `192.168.9.0/24`
         */
        CidrBlock: string;
        /**
         * 安全组的ID，同一个安全组内的服务可以互相访问。
         * @example `sg-2ze2ql9nozv8q7kmlt6e`
         */
        SecurityGroupId: string;
    }[];
}
