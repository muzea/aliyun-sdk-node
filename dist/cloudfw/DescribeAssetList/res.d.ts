export interface DescribeAssetListResponse {
    /**
     * 云防火墙防护的资产总数量。
     * @example `12`
     */
    TotalCount: number;
    /**
     * 结果的请求ID。
     * @example `CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D`
     */
    RequestId: string;
    /**
     * 云防火墙防护的资产信息。
     */
    Assets: {
        /**
         * 资产的风险级别。取值：
         * - **low**：低风险。
         * - **middle**：中风险。
         * - **hight**：高风险。
         * > 仅当UserType的值为free时，才会返回该参数。
         * @example `low`
         */
        RiskLevel: string;
        /**
         * 绑定资产实例名称。
         * @example `instance01`
         */
        BindInstanceName: string;
        /**
         * 该参数已废弃。
         * @example `eip`
         */
        Type: string;
        /**
         * 最近一次安全组状态检测时间，使用时间戳格式。单位：秒。
         * @example `1615082937`
         */
        SgStatusTime: number;
        /**
         * 资产实例ID。
         * @example `i-8vbdrjrxzt78****`
         */
        ResourceInstanceId: string;
        /**
         * 云防火墙成员账号的UID。
         * @example `258039427902****`
         */
        MemberUid: number;
        /**
         * 服务器内网IP。
         * @example `192.168.XX.XX`
         */
        IntranetAddress: string;
        /**
         * 资产引流支持状态。取值：
         * - **enable**：支持引流。
         * - **disable**：不支持引流。
         * @example `enable`
         */
        SyncStatus: string;
        /**
         * 阿里云账号的UID。
         * > 云防火墙成员账号的主账号。
         * @example `158039427902****`
         */
        AliUid: number;
        /**
         * 防火墙状态。取值：
         * - **open**：保护中。
         * - **opening**：保护开启中。
         * - **closed**：未受保护。
         * - **closing**：保护关闭中。
         * @example `open`
         */
        ProtectStatus: string;
        /**
         * 服务器公网IP。
         * @example `192.0.XX.XX`
         */
        InternetAddress: string;
        /**
         * 绑定资产实例ID。
         * @example `i-8vbdrjrxzt78****`
         */
        BindInstanceId: string;
        /**
         * 资产所在的地域ID。
         * @example `cn-hangzhou`
         */
        RegionID: string;
        /**
         * 资产所在地域是否支持开启云防火墙防护状态。取值：
         * - **enable**：支持。
         * - **disable**：不支持。
         * @example `enable`
         */
        RegionStatus: string;
        /**
         * 资产类型。取值：
         * - **BastionHostEgressIP**：堡垒机出口IP。
         * - **BastionHostIngressIP**：堡垒机入口IP。
         * - **EcsEIP**：ECS EIP。
         * - **EcsPublicIP**：ECS公网IP。
         * - **EIP**：弹性公网IP。
         * - **EniEIP**：弹性网卡EIP。
         * - **NatEIP**：NAT EIP。
         * - **SlbEIP**：SLB EIP。
         * - **SlbPublicIP**：SLB公网IP。
         * - **NatPublicIP**：NAT公网IP。
         * - **HAVIP**：高可用虚拟IP。
         * @example `EIP`
         */
        ResourceType: string;
        /**
         * 云防火墙防护的资产的IP地址版本。
         * 取值：
         * - **4**：表示IPv4地址。
         * - **6**：表示IPv6地址。
         * @example `4`
         */
        IpVersion: number;
        /**
         * 安全组策略。取值：
         * - **pass**：已下发。
         * - **block**：未下发。
         * - **unsupport**：不支持。
         * @example `block`
         */
        SgStatus: string;
        /**
         * 资产的备注信息。取值：
         * - **REGION\_NOT\_SUPPORT**：地域不支持。
         * - **NETWORK\_NOT\_SUPPORT**：网络不支持。
         * @example `REGION_NOT_SUPPORT`
         */
        Note: string;
        /**
         * 云防火墙防护的资产的实例名称。
         * @example `instance01`
         */
        Name: string;
        /**
         * 云防火墙发现资产的时间。
         * @example `2023-02-28 10:29:58`
         */
        CreateTimeStamp: string;
        /**
         * 资产发现的时间。取值：
         * - **discovered in 1 hour**：资产是1小时内新增的。
         * - **discovered in 1 day**：资产是1天内新增的。
         * - **discovered in 7 days**：资产是7天内新增的。
         * @example `discovered in 1 hour`
         */
        NewResourceTag: string;
    }[];
}
