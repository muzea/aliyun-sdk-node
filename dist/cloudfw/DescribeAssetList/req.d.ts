export interface DescribeAssetListRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 分页查询时，设置当前页的页码。
     * @example `1`
     */
    "CurrentPage": string;
    /**
     * 分页查询时，设置每页包含云防火墙防护资产的数量。
     * @example `10`
     */
    "PageSize": string;
    /**
     * 云防火墙所在的地域ID。
     * >  关于云防火墙支持地域的详细信息，请参见[支持的地域](~~195657~~)。
     * @example `cn-hangzhou`
     */
    "RegionNo"?: string;
    /**
     * 云防火墙状态。取值：
     * - **open**：保护中。
     * - **opening**：保护开启中。
     * - **closed**：保护未开启。
     * - **closing**：保护关闭中。
     * >不设置该参数表示查询所有防火墙状态。
     * @example `open`
     */
    "Status"?: string;
    /**
     * 资产的IP或者实例ID。
     * @example `192.0.XX.XX`
     */
    "SearchItem"?: string;
    /**
     * 本参数已废弃。
     * @example `eip`
     */
    "Type"?: string;
    /**
     * 资产类型。取值：
     * - **BastionHostEgressIP**：堡垒机出口IP。
     * - **BastionHostIngressIP**：堡垒机入口IP。
     * - **EcsEIP**：ECS EIP。
     * - **EcsPublicIP**：ECS公网IP。
     * - **EIP**：弹性公网IP。
     * - **EniEIP**：弹性网卡EIP。
     * - **NatEIP**：NAT EIP。
     * - **SlbEIP**：SLB EIP(CLB EIP)。
     * - **SlbPublicIP**：SLB 公网IP(CLB 公网IP)。
     * - **NatPublicIP**：NAT公网IP。
     * - **HAVIP**：高可用虚拟IP。
     * @example `EIP`
     */
    "ResourceType"?: string;
    /**
     * 安全组策略状态。取值：
     * - **pass**：已下发。
     * - **block**：未下发。
     * - **unsupport**：不支持。
     * >不设置该参数表示查询所有安全组策略状态。
     * @example `pass`
     */
    "SgStatus"?: string;
    /**
     * 云防火墙防护的资产的IP版本。取值：
     * - **4**（默认）：IPv4。
     * - **6**：IPv6。
     * @example `4`
     */
    "IpVersion"?: string;
    /**
     * 云防火墙成员账号的UID。
     * @example `258039427902****`
     */
    "MemberUid"?: number;
    /**
     * 用户类型。取值：
     * - **buy**（默认）：付费用户。
     * - **free**：免费用户。
     * @example `buy`
     */
    "UserType"?: string;
    /**
     * 资产发现的时间。取值：
     * - **discovered in 1 hour**：资产是1小时内新增的。
     * - **discovered in 1 day**：资产是1天内新增的。
     * - **discovered in 7 days**：资产是7天内新增的。
     * @example `discovered in 1 hour`
     */
    "NewResourceTag"?: string;
}
