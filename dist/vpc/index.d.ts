interface VPC {
    /**
    * 调用DescribeRouteTableList接口查询路由表。
    */ DescribeRouteTableList(query: {
        /**
        * 路由表所属的VPC的地域ID。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 路由表所属的路由器类型。取值：
        * - **VRouter（默认值）**：VPC路由器
        * - **VBR**：边界路由器
        * @example `VBR`
        */ "RouterType"?: string;
        /**
        * 路由表所属路由器的ID。
        * @example `vrt-bp1lhl0taikrteen8****`
        */ "RouterId"?: string;
        /**
        * 路由表所属的VPC路由器的ID。
        * 指定该参数后，参数**RouterType**的值自动设置为**VRouter**。
        * @example `vpc-bp15zckdt37pq72****`
        */ "VpcId"?: string;
        /**
        *  路由表的ID。
        * @example `vtb-bp145q7glnuzdvzu2****`
        */ "RouteTableId"?: string;
        /**
        * 路由表的名称。
        * @example `doctest`
        */ "RouteTableName"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 资源组ID。
        * @example `rg-acfmxazb4ph****`
        */ "ResourceGroupId"?: string;
        "Tag"?: string[];
        "OwnerId"?: number;
    }): Promise<{
        "Code": string;
        "Message": string;
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "RouterTableList": {
            "RouterTableListType": {
                "CreationTime": string;
                "Description": string;
                "RouteTableId": string;
                "RouteTableName": string;
                "RouteTableType": string;
                "RouterId": string;
                "RouterType": string;
                "VSwitchIds": {
                    "VSwitchId": string[];
                };
                "VpcId": string;
            }[];
        };
        "Success": boolean;
        "TotalCount": number;
    }>;
    /**
    * 使用DeleteBgpNetwork删除已宣告的BGP网络。
    */ DeleteBgpNetwork(query: {
        /**
        * BGP组所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 需要和IDC互联的VPC或交换机的网段。
        * @example `10.110.192.12/32`
        */ "DstCidrBlock": string;
        /**
        * 边界路由器ID。
        * @example `vrt-bp1lhl0taikrteen80oxx`
        */ "RouterId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ActivateRouterInterface接口激活处于Inactive状态的路由器接口。
    */ ActivateRouterInterface(query: {
        /**
        *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  路由器接口的ID。
        * @example `ri-2zeo3xzyf38r4urz****`
        */ "RouterInterfaceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用ModifyPhysicalConnectionAttribute接口修改物理专线的配置。
    */ ModifyPhysicalConnectionAttribute(query: {
        /**
        *  物理专线所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  物理专线的ID。
        * @example `pc-119mfjzm7`
        */ "PhysicalConnectionId": string;
        /**
        * 提供接入物理线路的运营商，取值：
        *
        * - CT：中国电信
        * - CU：中国联通
        * - CM：中国移动
        * - CO：中国其他
        * - Equinix：Equinix
        * - Other：境外其他
        *
        * @example `CT`
        */ "LineOperator"?: string;
        /**
        * 物理专线接入接口带宽，单位Mbps，取值范围：2-10240。
        * @example `5`
        */ "bandwidth"?: number;
        /**
        *  本地数据中心的地理位置。
        * @example `浙江省---vfjdbg_21e`
        */ "PeerLocation"?: string;
        /**
        * 物理专线接入端口类型，取值：
        *
        * - 100Base-T：百兆电口
        * - 1000Base-T（默认值）：千兆电口
        * - 1000Base-LX：千兆单模光口（10千米）
        * - 10GBase-T：万兆电口
        * - 10GBase-LR：万兆单模光口（10千米）
        *
        * @example `E1 - 2M`
        */ "PortType"?: string;
        /**
        * 冗余物理专线的ID，该专线的状态必须为**Allocated**、**Confirmed**或**Enabled**。
        * @example `pc-119mfjzm7`
        */ "RedundantPhysicalConnectionId"?: string;
        /**
        *  物理专线的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `物理专线的描述信息`
        */ "Description"?: string;
        /**
        *  物理专线的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `物理专线的名称`
        */ "Name"?: string;
        /**
        *  客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `efefe566754h`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
        /**
        *   运营商的为物理专线提供的电路编码。
        * @example `longtel001`
        */ "CircuitCode"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 为指定的IPv6转换服务实例添加IPv6转换映射条目。
    */ CreateIPv6TranslatorEntry(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  IPv6转换服务的实例ID。
        * @example `ipv6trans-bp1858ys57xxxxxx`
        */ "Ipv6TranslatorId": string;
        /**
        *  IPv6转换服务实例分配的IPv6地址的使用端口。
        * @example `80`
        */ "AllocateIpv6Port": number;
        /**
        *  需要提供IPv6服务的公网IPv4地址（IPv4-only的服务器的IPv4地址）。
        * @example `46.22.xx.xx`
        */ "BackendIpv4Addr": string;
        /**
        * 需要提供IPv6服务的公网IPv4地址的端口。
        * @example `80`
        */ "BackendIpv4Port": number;
        /**
        * 协议类型。取值：
        * - **tcp**：转发TCP协议的报文。
        * - **udp**：转发UDP协议的报文。
        * @example `tcp`
        */ "TransProtocol": string;
        "OwnerId"?: number;
        /**
        *  IPv6转换映射条目的名称。长度为 2-100个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以http:// 或https://开头。
        * @example `name1`
        */ "EntryName"?: string;
        /**
        * IPv6转换映射条目的描述。
        * @example `description`
        */ "EntryDescription"?: string;
        /**
        * IPv6转换映射条目的带宽峰值。取值：
        *
        * - -1（默认值）：不限制IPv6转换映射条目的带宽峰值。
        * - 1-200Mbps：改映射条目的带宽值。
        * > 所有IPv6转换映射条目的带宽峰值之和不能超过实例的带宽峰值。
        * @example `2`
        */ "EntryBandwidth"?: number;
        /**
        * 是否开启访问控制。取值：**on|off**。
        * @example `on`
        */ "AclStatus"?: string;
        /**
        * 是否开启访问控制：
        * - **white**：允许访问策略组中的IPv6地址访问后端服务。
        * - **black**：禁止访问策略组中的IPv6地址访问后端服务。
        * @example `white`
        */ "AclType"?: string;
        /**
        * 关联的访问控制策略组ID。
        * @example `ipv6transacl-bp1g8bhrdexnrxxxx`
        */ "AclId"?: string;
    }): Promise<{
        "Ipv6TranslatorEntryId": string;
        "RequestId": string;
    }>;
    /**
    * 调用CreateSslVpnClientCert接口创建SSL-VPN客户端证书。
    */ CreateSslVpnClientCert(query: {
        /**
        * VPN网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  SSL-VPN服务端的ID。
        * @example `vss-m5et0q3iy1qex328w****`
        */ "SslVpnServerId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * 客户端证书的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `SslVpnClientCert1`
        */ "Name"?: string;
    }): Promise<{
        "SslVpnClientCertId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeVpnGateways接口查询已创建的VPN网关。
    */ DescribeVpnGateways(query: {
        /**
        * VPN网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        *  VPN网关所属VPC的ID。
        * @example `vpc-bp1ub1yt9cvakoelj****`
        */ "VpcId"?: string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1q8bgx4xnkm2ogj****`
        */ "VpnGatewayId"?: string;
        /**
        * VPN网关的状态，取值：
        * - **init**
        * - **provisioning**
        * - **active**
        * - **updating**
        * - **deleting**
        * @example `init`
        */ "Status"?: string;
        /**
        * VPN网关的付费状态。
        * 取值： **Normal | FinancialLocked **
        * @example `Normal`
        */ "BusinessStatus"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "VpnGateways": {
            "VpnGateway": {
                "Status": string;
                "VpnGatewayId": string;
                "BusinessStatus": string;
                "Spec": string;
                "CreateTime": number;
                "InternetIp": string;
                "EndTime": number;
                "VSwitchId": string;
                "VpcId": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCommonBandwidthPackages接口查询指定地域中共享带宽实例列表。
    */ DescribeCommonBandwidthPackages(query: {
        /**
        * 共享带宽所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 是否包含未生效的订购数据，默认是**false**。
        * @example `false`
        */ "IncludeReservationData"?: boolean;
        /**
        *  共享带宽实例的ID。
        * @example `cbwp-2ze2ic1xd2qeqk145pn4u`
        */ "BandwidthPackageId"?: string;
        /**
        * 资源组ID。
        * @example `rg-acfmxazb4ph6aiy`
        */ "ResourceGroupId"?: string;
        /**
        * 共享带宽实例名称。
        * @example `test123`
        */ "Name"?: string;
        /**
        *  列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": string;
        "TotalCount": string;
        "PageSize": string;
        "RequestId": string;
        "CommonBandwidthPackages": {
            "CommonBandwidthPackage": {
                "BandwidthPackageId": string;
                "ZoneId": string;
                "InternetChargeType": string;
                "Name": string;
                "CreationTime": string;
                "Status": string;
                "BusinessStatus": string;
                "RegionId": string;
                "Ratio": string;
                "InstanceChargeType": string;
                "PublicIpAddresses": {
                    "PublicIpAddresse": {
                        "IpAddress": string;
                        "AllocationId": string;
                    };
                };
                "Bandwidth": string;
            };
        };
    }>;
    /**
    * 修改访问控制策略组的名称。
    */ ModifyIPv6TranslatorAclAttribute(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用 DescribeRegions接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  要修改的访问控制策略组ID。
        * @example `ipv6transacl-bp1de2xxxx`
        */ "AclId": string;
        /**
        *  访问控制策略组名称。
        * @example `acl1`
        */ "AclName": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `sha223ndd2333`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyGlobalAccelerationInstanceAttributes接口修改全球加速实例的名称和描述信息。
    */ ModifyGlobalAccelerationInstanceAttributes(query: {
        /**
        * 全球加速实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  全球加速实例的ID。
        * @example `ga-14fdsf3****`
        */ "GlobalAccelerationInstanceId": string;
        "OwnerId"?: number;
        /**
        * 全球加速实例的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `GA-1`
        */ "Name"?: string;
        /**
        * 全球加速实例的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
        * @example `My GA`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AddGlobalAccelerationInstanceIp接口添加EIP到指定的带宽共享实例中。
    */ AddGlobalAccelerationInstanceIp(query: {
        /**
        *  共享带宽型实例所在的地域。
        * 您可以通过调用**DescribeRegions**接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  共享型实例ID。
        * @example `ga-LXXX111`
        */ "GlobalAccelerationInstanceId": string;
        /**
        * EIP实例的ID。 您可以通过调用[DescribeEipAddresses](~~36018~~)接口查询EIP实例的ID。
        * > 确保EIP的计费类型为后付费，且EIP的地域和共享型实例相同。
        * @example `i-rw434rwfaf****`
        */ "IpInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AssociateEipAddress接口将弹性公网IP（EIP）绑定到同地域的云产品实例上。
    */ AssociateEipAddress(query: {
        /**
        * EIP所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 要绑定的实例ID。
        * @example `i-2zebb08phyczxxxxxxxx`
        */ "InstanceId": string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        *  EIP的ID。
        * @example `eip-2zeerraiwb7ujxxxxxxxx`
        */ "AllocationId": string;
        /**
        * 要绑定的云产品实例的类型，取值：**Nat|SlbInstance|EcsInstance|NetworkInterface**。
        * @example `EcsInstance`
        */ "InstanceType"?: string;
        /**
        * 绑定的实例所属地域ID。
        * @example `cn-hangzhou`
        */ "InstanceRegionId"?: string;
        /**
        * 输入交换机网段内的一个IP地址。
        * 如果不输入，系统根据VPC ID和交换机ID自动分配一个私网IP地址。
        * @example `192.xx.xx.4`
        */ "PrivateIpAddress"?: string;
        /**
        * 绑定模式，取值：**NAT|MULTI_BINDED**。
        * @example `NAT`
        */ "Mode"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeVpnGateway接口查询指定VPN网关的详细信息。
    */ DescribeVpnGateway(query: {
        /**
        *  VPN网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  VPN网关的ID。
        * @example `vpn-bp1q8bgx4xnkm2ogj****`
        */ "VpnGatewayId": string;
        "OwnerId"?: number;
    }): Promise<{
        "Status": string;
        "VpnGatewayId": string;
        "BusinessStatus": string;
        "Spec": string;
        "CreateTime": number;
        "RequestId": string;
        "InternetIp": string;
        "EndTime": number;
        "VSwitchId": string;
        "VpcId": string;
    }>;
    /**
    * 使用DescribeBandwidthPackages接口查询指定地域的NAT带宽包。
    */ DescribeBandwidthPackages(query: {
        /**
        *  NAT网关所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        *  NAT网关带宽包的ID。
        * @example `bwp-bp1xea10o8qxwdfs****`
        */ "BandwidthPackageId"?: string;
        /**
        *  NAT网关的ID。
        * @example `ngw-bp1uewa15k4iydfre****`
        */ "NatGatewayId"?: string;
        /**
        * 列表的页码，默认值为**1**。
        * @example `10`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "BandwidthPackages": {
            "BandwidthPackage": {
                "Description": string;
                "IpCount": string;
                "ISP": string;
                "ZoneId": string;
                "InternetChargeType": string;
                "NatGatewayId": string;
                "Name": string;
                "CreationTime": string;
                "Status": string;
                "BandwidthPackageId": string;
                "BusinessStatus": string;
                "RegionId": string;
                "InstanceChargeType": string;
                "PublicIpAddresses": {
                    "PublicIpAddresse": {
                        "IpAddress": string;
                        "AllocationId": string;
                        "UsingStatus": string;
                    }[];
                };
                "Bandwidth": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSnatTableEntries接口查询已创建的SNAT条目。
    */ DescribeSnatTableEntries(query: {
        /**
        * NAT网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  SNAT表ID。
        * @example `stb-8vbczigrhop8x5u3twlhd`
        */ "SnatTableId": string;
        "OwnerId"?: number;
        /**
        *  SNAT条目ID。
        * @example `snat-8vbae8uqh7rjpk7d2kuwt`
        */ "SnatEntryId"?: string;
        /**
        * 通过SNAT功能进行公网访问的交换机ID。
        * @example `vsw-3xbxxxxx`
        */ "SourceVSwitchId"?: string;
        /**
        *  SNAT条目的源网段。
        * @example `116.62.222.28/33`
        */ "SourceCIDR"?: string;
        /**
        *   SNAT条目的公网IP。
        * @example `116.62.222.28`
        */ "SnatIp"?: string;
        /**
        * SNAT条目的名称。长度为2-128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `SnatEntry-1`
        */ "SnatEntryName"?: string;
        /**
        *  列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "SnatTableEntries": {
            "SnatTableEntry": {
                "SnatEntryId": string;
                "SnatIp": string;
                "SnatTableId": string;
                "SourceCIDR": string;
                "SourceVSwitchId": string;
                "Status": string;
            }[];
        };
    }>;
    /**
    * 在物理专线开通前，使用CancelPhysicalConnection接口取消物理专线接入，取消后物理专线进入Canceled状态。
    */ CancelPhysicalConnection(query: {
        /**
        *  物理专线所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  物理专线的ID。
        * @example `pc-119mfjzm7`
        */ "PhysicalConnectionId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateRouteTable接口创建一个自定义路由表。
    */ CreateRouteTable(query: {
        /**
        *  路由表所属的VPC的地域ID。
        *  您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 自定义路由表所属的VPC ID。
        * @example `vpc-bp1qpo0kug3a20qqe****`
        */ "VpcId": string;
        /**
        * 路由表的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `myRouteTable`
        */ "RouteTableName"?: string;
        /**
        * 路由表的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `路由表的名称`
        */ "Description"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "RouteTableId": string;
    }>;
    /**
    * 使用DeleteBandwidthPackage接口删除指定的NAT带宽包。
    */ DeleteBandwidthPackage(query: {
        /**
        *  NAT网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  NAT带宽包的ID。
        * @example `bwp-bp1arsrmca9kpxxxxxxxx`
        */ "BandwidthPackageId": string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        * 是否强制删除带宽包。
        * @example `false`
        */ "Force"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeIpv6GatewayAttribute接口查询指定IPV6网关的详细信息。
    */ DescribeIpv6GatewayAttribute(query: {
        /**
        * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * 要查询的IPv6网关ID。
        * @example `ipv6gw-123456xxxxxxxx`
        */ "Ipv6GatewayId": string;
        "OwnerId"?: number;
    }): Promise<{
        "Name": string;
        "CreationTime": string;
        "Status": string;
        "Description": string;
        "BusinessStatus": string;
        "Spec": string;
        "RequestId": string;
        "RegionId": string;
        "InstanceChargeType": string;
        "ExpiredTime": string;
        "VpcId": string;
        "Ipv6GatewayId": string;
    }>;
    /**
    * 调用ModifyGlobalAccelerationInstanceSpec接口修改全球加速实例的带宽。
    */ ModifyGlobalAccelerationInstanceSpec(query: {
        /**
        * 全球加速实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  全球加速实例的ID。
        * @example `ga-32s33s****`
        */ "GlobalAccelerationInstanceId": string;
        /**
        *  全球加速实例的带宽峰值，单位为Mbps。取值范围：
        * **10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000**
        * @example `10`
        */ "Bandwidth": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AssociateRouteTable接口将创建的自定义路由表和同一VPC内的交换机绑定。
    */ AssociateRouteTable(query: {
        /**
        * 路由表所属的VPC的地域ID。
        * 您可以通过调用[DescribeRegions](~~36063~~) 接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 路由表ID。
        * @example `vtb-bp145q7glnuzdvzu2****`
        */ "RouteTableId": string;
        /**
        * 要绑定的交换机ID。
        * @example `vsw-25naue4****`
        */ "VSwitchId": string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 修改IPv6转换映射条目。
    */ ModifyIPv6TranslatorEntry(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用 DescribeRegions接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  IPv6转换服务映射条目ID。
        * @example `ipv6trans-bp1858ysxxxxxx`
        */ "Ipv6TranslatorEntryId": string;
        "OwnerId"?: number;
        /**
        *  IPv6转换映射条目的名称。  长度为 2-100个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以http:// 或https://开头。
        * @example `entry1`
        */ "EntryName"?: string;
        /**
        *  IPv6转换映射条目的描述信息。  长度为 2-100个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以http:// 或https://开头。
        * @example `entrydescription`
        */ "EntryDescription"?: string;
        /**
        *  IPv6转换服务实例分配的IPv6地址的使用端口。
        * @example `80`
        */ "AllocateIpv6Port"?: number;
        /**
        *  需要提供IPv6服务的公网IPv4地址（IPv4-only的服务器的IPv4地址）。
        * @example `47.11.xx.xxx`
        */ "BackendIpv4Addr"?: string;
        /**
        * 需要提供IPv6服务的公网IPv4地址的端口。
        * @example `80`
        */ "BackendIpv4Port"?: number;
        /**
        * 协议类型。取值：
        * - **tcp**：转发TCP协议的报文。
        * - **udp**：转发UDP协议的报文。
        * @example `tcp`
        */ "TransProtocol"?: string;
        /**
        * IPv6转换映射条目的带宽峰值。取值：
        * - -1（默认值）：不限制IPv6转换映射条目的带宽峰值。
        * - 1-200Mbps：改映射条目的带宽值。
        * > 所有IPv6转换映射条目的带宽峰值之和不能超过实例的带宽峰值。
        * @example `10`
        */ "EntryBandwidth"?: number;
        /**
        * 是否开启访问控制。取值：**on|off**。
        * @example `off`
        */ "AclStatus"?: string;
        /**
        * 访问控制策略类型：
        * - **white**：允许访问策略组中的IPv6地址访问后端服务。
        * - **black**：禁止访问策略组中的IPv6地址访问后端服务。
        * @example `white`
        */ "AclType"?: string;
        /**
        * 关联的访问控制策略组ID。
        * @example `ipv6transacl-bp1de27sou71g0lfxxxx`
        */ "AclId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeZones查询指定地域中可用区的列表。
    */ DescribeZones(query: {
        /**
        *  地域ID。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "Zones": {
            "Zone": {
                "ZoneId": string;
                "LocalName": string;
            }[];
        };
    }>;
    /**
    * 使用DescribeNatGateways接口查询已创建的NAT网关。
    */ DescribeNatGateways(query: {
        /**
        *  NAT网关所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        *  NAT网关的ID。
        * @example `ngw-bp1uewa15k4iy5770xxxx`
        */ "NatGatewayId"?: string;
        /**
        *  VPC的ID。
        * @example `vpc-bp15zckdt37pq72zxxxx`
        */ "VpcId"?: string;
        /**
        * NAT网关的名称。
        * @example `NAT网关名称`
        */ "Name"?: string;
        /**
        * 实例的付费方式。目前仅支持按量付费。
        * PostPaid：按量付费。
        * @example `PostPaid`
        */ "InstanceChargeType"?: string;
        /**
        * NAT网关的规格。取值：
        * - **Small(默认值)**：小型
        * - **Middle**：中型
        * - **Large**：大型
        * - **XLarge.1**：超大型
        * @example `Large`
        */ "Spec"?: string;
        /**
        *  列表的页码，默认值为1。
        * @example `10`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为50，默认值为10。
        * @example `1`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "NatGateways": {
            "NatGateway": {
                "Description": string;
                "Spec": string;
                "IpLists": {
                    "IpList": {
                        "IpAddress": string;
                        "AllocationId": string;
                        "UsingStatus": string;
                    }[];
                };
                "ForwardTableIds": {
                    "ForwardTableId": string[];
                };
                "VpcId": string;
                "NatGatewayId": string;
                "CreationTime": string;
                "BandwidthPackageIds": {
                    "BandwidthPackageId": any[];
                };
                "Name": string;
                "Status": string;
                "BusinessStatus": string;
                "RegionId": string;
                "SnatTableIds": {
                    "SnatTableId": string[];
                };
                "InstanceChargeType": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeSslVpnClientCerts接口查询已创建的SSL-VPN客户端证书。
    */ DescribeSslVpnClientCerts(query: {
        /**
        * SSL-VPN客户端证书所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * SSL-VPN服务端ID。
        * @example `vss-bp18q7hzj6largv4v****`
        */ "SslVpnServerId"?: string;
        /**
        * SSL-VPN客户端证书ID。
        * @example `vsc-bp1n8wcf134yl0osr****`
        */ "SslVpnClientCertId"?: string;
        /**
        * SSL-VPN客户端证书的名称。
        * @example `cert1`
        */ "Name"?: string;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": string;
        "TotalCount": string;
        "PageSize": string;
        "SslVpnServers": {
            "SslVpnServer": {
                "RegionId": string;
                "SslVpnServerId": string;
                "VpnGatewayId": string;
                "Name": string;
                "CLientIpPool": string;
                "LocalSubnet": string;
                "Proto": string;
                "Port": string;
                "Cipher": string;
                "Compress": string;
                "CreateTime": string;
                "Connections": string;
                "MaxConnections": string;
                "InternetIp": string;
            };
        };
        "RequestId": string;
    }>;
    /**
    * 使用ModifyBgpGroupAttribute修改BGP组的配置。
    */ ModifyBgpGroupAttribute(query: {
        /**
        * BGP组所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 指定BGP组的ID。
        * @example `bgpg-wz9f62v4fbg2gxxxxxxxx`
        */ "BgpGroupId": string;
        "OwnerId"?: number;
        /**
        *  BGP组的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `test`
        */ "Name"?: string;
        /**
        *  BGP组的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
        * @example `BGP`
        */ "Description"?: string;
        "LocalAsn"?: number;
        /**
        * 侧设备的AS号。
        * @example `1111`
        */ "PeerAsn"?: number;
        /**
        * BGP组的认证密钥。
        * @example `!PWZ2wsq`
        */ "AuthKey"?: string;
        /**
        * 运行BGP的路由器一般情况下只能属于一个AS，某些情况下，比如AS需要迁移或者和其他AS进行合并，要用新的AS替代原有的AS号码。
        * @example `true`
        */ "IsFakeAsn"?: boolean;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AssociateGlobalAccelerationInstance接口为独享型实例绑定后端服务器。
    */ AssociateGlobalAccelerationInstance(query: {
        /**
        * 全球加速实例所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 全球加速实例的ID。
        * @example `ga-lsajj32****`
        */ "GlobalAccelerationInstanceId": string;
        /**
        * 后端服务实例的ID。
        * @example `i-saf23****`
        */ "BackendServerId": string;
        /**
        * 后端服务实例所属的地域，该地域需要属于全球加速实例指定的服务区域。
        * @example `cn-shanghai`
        */ "BackendServerRegionId": string;
        "OwnerId"?: number;
        /**
        * 后端服务实例的类型，取值：
        * - **EcsInstance**（默认值）：ECS实例。
        * - **SlbInstance**：负载均衡实例。
        * @example `EcsInstance`
        */ "BackendServerType"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteIpv6Gateway接口删除IPv6网关。
    */ DeleteIpv6Gateway(query: {
        /**
        * IPv6网关所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * 要删除的IPv6网关实例ID。
        * @example `ipv6gw-hp3y0l3ln89j8xxxxxxxx`
        */ "Ipv6GatewayId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifySslVpnClientCert接口修改SSL-VPN客户端证书的名称。
    */ ModifySslVpnClientCert(query: {
        /**
        * SSL-VPN客户端证书所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  SSL-VPN客户端证书的ID。
        * @example `vsc-bp1n8wcf134yl0osrc****`
        */ "SslVpnClientCertId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * SSL-VPN客户端证书的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `cert2`
        */ "Name"?: string;
    }): Promise<{
        "SslVpnClientCertId": string;
        "Name": string;
        "RequestId": string;
    }>;
    /**
    * 调用DeleteVSwitch接口删除交换机。
    */ DeleteVSwitch(query: {
        /**
        * 要删除的交换机的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 要删除的交换机的ID。
        * @example `vsw-asdfjlna****`
        */ "VSwitchId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 删除访问控制策略组。只有当访问控制策略组没有绑定任何IPv6转换映射时，才可以删除。
    */ DeleteIPv6TranslatorAclList(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用 DescribeRegions接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  要删除的访问控制策略组ID。
        * @example `ipv6transacl-bp1de2xxxx`
        */ "AclId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `sha123456`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 修改IPv6转换服务实例的名称和描述信息。
    */ ModifyIPv6TranslatorAttribute(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  IPv6转换服务实例的ID。
        * @example `ipv6trans-bp1858ysxxxxxx`
        */ "Ipv6TranslatorId": string;
        "OwnerId"?: number;
        /**
        * 客户端token用于保证请求的幂等性。要保证Client Token在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `sha1111`
        */ "ClientToken"?: string;
        /**
        *  IPv6转换服务实例的名称，默认为实例ID。  长度为 2-100个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以http:// 或https://开头。
        * @example `instancename`
        */ "Name"?: string;
        /**
        *  IPv6转换服务的描述信息。默认值为空。  长度为 2-100个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以http:// 或https://开头。
        * @example `instancedescription`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeForwardTableEntries接口查询已创建的DNAT条目。
    */ DescribeForwardTableEntries(query: {
        /**
        * NAT网关所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  DNAT列表的ID。
        * @example `ftb-bp1mbjubq34hlcqpa5u3a`
        */ "ForwardTableId": string;
        "OwnerId"?: number;
        /**
        * 系统分配的DNAT条目ID。
        * @example `fwd-8vbn3bc8roygjp0gy3xk7`
        */ "ForwardEntryId"?: string;
        /**
        * 公网IP地址。
        * @example `116.xx.xx.28`
        */ "ExternalIp"?: string;
        /**
        * 公网端口。取值范围：1-65535。
        * @example `8080`
        */ "ExternalPort"?: string;
        /**
        * 目标私网IP。
        * @example `192.168.xx.xx	`
        */ "InternalIp"?: string;
        /**
        * 目标私网端口。取值范围：1-65535。
        * @example `80`
        */ "InternalPort"?: string;
        /**
        * 协议类型。取值：
        * - TCP：转发TCP协议的报文。
        * - UDP：转发UDP协议的报文。
        * - Any：转发所有协议的报文。
        * @example `TCP`
        */ "IpProtocol"?: string;
        /**
        * DNAT规则的名称。长度为2-128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `ForwardEntry-1`
        */ "ForwardEntryName"?: string;
        /**
        *  列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "ForwardTableEntries": {
            "ForwardTableEntry": {
                "Status": string;
                "IpProtocol": string;
                "ForwardEntryId": string;
                "ExternalIp": string;
                "ForwardTableId": string;
                "ExternalPort": string;
                "InternalPort": string;
                "InternalIp": string;
            }[];
        };
    }>;
    /**
    * 修改IPv6转换服务实例的带宽。
    */ ModifyIPv6TranslatorBandwidth(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  IPv6转换服务的实例ID。
        * @example `ipv6trans-bp1858ysxxxxxx`
        */ "Ipv6TranslatorId": string;
        /**
        *  IPv6转换服务实例的带宽峰值（Mbps），取值： 1-200。
        * @example `2`
        */ "Bandwidth": number;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `sha1111`
        */ "ClientToken"?: string;
        /**
        * 是否自动支付预付费实例的账单，取值：
        * - **true**：是
        * - **false**（默认）：否
        * @example `false`
        */ "AutoPay"?: boolean;
    }): Promise<{
        "OrderId": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyRouterInterfaceSpec接口修改路由器接口的规格。
    */ ModifyRouterInterfaceSpec(query: {
        /**
        *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  路由器接口的ID。
        * @example `ri-2zeo3xzyf38r4urzd****`
        */ "RouterInterfaceId": string;
        /**
        *  路由器接口的规格。
        * @example `Large`
        */ "Spec": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
        "Spec": string;
    }>;
    /**
    * 创建访问控制策略组。
    */ CreateIPv6TranslatorAclList(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用 DescribeRegions接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  访问控制策略组名称。
        * @example `test`
        */ "AclName": string;
        "OwnerId"?: number;
        /**
        * @example `sha123456`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
        "AclId": string;
    }>;
    /**
    * 调用DescribeVpcs接口查询已创建的VPC。
    */ DescribeVpcs(query: {
        /**
        *  VPC所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "Tag"?: string[];
        "OwnerId"?: number;
        /**
        * VPC的ID。
        * 最多支持指定20个VPC ID，多个VPC ID之间用半角逗号隔开。
        * @example `vpc-257gq64****`
        */ "VpcId"?: string;
        /**
        * VPC的名称。
        * @example `Vpc-1`
        */ "VpcName"?: string;
        /**
        *  是否查询指定地域下的默认VPC，取值：
        * - **true**（默认值）：查询指定地域下的所有VPC。
        * - **false**：不查询默认VPC。
        * @example `false`
        */ "IsDefault"?: boolean;
        "DryRun"?: boolean;
        /**
        * 要查询的VPC所属资源组ID。
        * @example `rg-acfmxazb4p****`
        */ "ResourceGroupId"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "Vpcs": {
            "Vpc": {
                "VpcName": string;
                "Description": string;
                "IsDefault": boolean;
                "ResourceGroupId": string;
                "UserCidrs": {
                    "UserCidr": any[];
                };
                "NatGatewayIds": {
                    "NatGatewayIds": any[];
                };
                "RouterTableIds": {
                    "RouterTableIds": string[];
                };
                "VpcId": string;
                "VRouterId": string;
                "CreationTime": string;
                "Status": string;
                "CidrBlock": string;
                "VSwitchIds": {
                    "VSwitchId": any[];
                };
                "RegionId": string;
                "Ipv6CidrBlock": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用CreateVpnGateway接口创建一个VPN网关。
    */ CreateVpnGateway(query: {
        /**
        *  VPN网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  VPN网关所属的VPC ID。
        * @example `vpc-bp1ub1yt9cvakoelj****`
        */ "VpcId": string;
        /**
        * VPN网关的公网带宽，单位Mbps。
        * 取值：**5|10|20|50|100**。
        * @example `5`
        */ "Bandwidth": number;
        "OwnerId"?: number;
        /**
        * VPN网关的名称，默认值为VPN网关的ID。
        * 长度为2~100个英文或中文字符，必须以大小字母或中文开头，可包含数字、下划线（_）和短横线（-），不能以`http://`或`https://`开头。
        * @example `MYVPN`
        */ "Name"?: string;
        /**
        * **PREPAY**：包年包月。
        * @example `PREPAY`
        */ "InstanceChargeType"?: string;
        /**
        * 购买时长，取值：**1~9|12|24|36**。
        * >**InstanceChargeType**参数的值为**PREPAY**时，该参数必选。
        * @example `1`
        */ "Period"?: number;
        /**
        * 是否自动支付VPN网关的账单，取值：
        * - **true**：自动支付VPN网关的账单。
        * - **false**(默认值) ：不自动支付VPN网关的账单。
        * @example `false`
        */ "AutoPay"?: boolean;
        /**
        * 是否开启IPsec-VPN功能。IPsec-VPN功能提供站点到站点的连接。您可以通过创建IPsec隧道将本地数据中心网络和专有网络或两个专有网络安全地连接起来。取值：
        * - **true**(默认值)：开启IPsec-VPN功能。
        * - **false**：不开启IPsec-VPN功能。
        * @example `true`
        */ "EnableIpsec"?: boolean;
        /**
        * 开启SSL-VPN功能。提供点到站点的VPN连接，不需要配置客户网关，终端直接接入。取值：
        * - **true**：开启SSL-VPN功能。
        * - **false**(默认值) ：不开启SSL-VPN功能。
        * @example `true`
        */ "EnableSsl"?: boolean;
        /**
        * 允许同时连接的最大客户端数量。
        * @example `2`
        */ "SslConnections"?: number;
        "VSwitchId"?: string;
    }): Promise<{
        "Name": string;
        "VpnGatewayId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DeleteIpv6InternetBandwidth接口删除公网带宽。
    */ DeleteIpv6InternetBandwidth(query: {
        /**
        * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * IPv6地址的实例ID。
        * @example `ipv6-123456xxxxxxxx`
        */ "Ipv6AddressId"?: string;
        /**
        * IPv6地址的公网带宽。
        * @example `2`
        */ "Ipv6InternetBandwidthId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeServerRelatedGlobalAccelerationInstances接口查询指定后端服务器绑定的全球加速实例。
    */ DescribeServerRelatedGlobalAccelerationInstances(query: {
        /**
        * 全球加速实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  后端服务实例的ID。
        * @example `i-12s3sdf****`
        */ "ServerId": string;
        "OwnerId"?: number;
        /**
        * 后端服务实例的类型，取值：
        * - **EcsInstance**（默认值）：ECS实例
        * - **SlbInstance**：负载均衡实例
        *
        * @example `EcsInstance`
        */ "ServerType"?: string;
    }): Promise<{
        "GlobalAccelerationInstances": {
            "GlobalAccelerationInstance": {
                "GlobalAccelerationInstanceId": string;
                "IpAddress": string;
                "RegionId": string;
                "ServerIpAddress": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用ModifyRouteTableAttributes接口修改路由表的名称和描述。
    */ ModifyRouteTableAttributes(query: {
        /**
        * 路由表所属的VPC的地域ID。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 路由表的ID。
        * @example `vtb-bp145q7glnuzdvzu2****`
        */ "RouteTableId": string;
        /**
        * 路由表的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `doctest`
        */ "RouteTableName"?: string;
        /**
        * 路由表的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:/`/ 或`https://`开头。
        * @example `路由表的描述信息。`
        */ "Description"?: string;
        "OwnerId"?: number;
        "Bandwidth"?: string;
        "KbpsBandwidth"?: string;
        "ResourceBid"?: string;
        "ResourceUid"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteCommonBandwidthPackage接口删除共享带宽实例。
    */ DeleteCommonBandwidthPackage(query: {
        /**
        * 共享带宽实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  共享带宽实例的ID。
        * @example `cbwp-2ze2ic1xd2qeqk145pn4u`
        */ "BandwidthPackageId": string;
        "OwnerId"?: number;
        /**
        * 是否强制删除共享带宽实例。取值：
        *
        * - **false**（默认值）：只删除不包含EIP的共享带宽。
        * - **true**：将共享带宽实例中的EIP全部移出后，删除共享带宽。
        * @example `false`
        */ "Force"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifySslVpnServer接口修改SSL-VPN服务端的配置信息。
    */ ModifySslVpnServer(query: {
        /**
        * VPN网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * SSL-VPN服务端实例ID。
        * @example `vss-bp18q7hzj6largv4v****`
        */ "SslVpnServerId": string;
        "OwnerId"?: number;
        /**
        *
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * SSL-VPN服务端的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `test`
        */ "Name"?: string;
        /**
        * 客户端IP地址池。
        * @example `10.30.30.0/2`
        */ "ClientIpPool"?: string;
        /**
        * 本地客户端的网段。
        * @example `10.20.20.0/24`
        */ "LocalSubnet"?: string;
        /**
        * SSL-VPN服务端所使用的协议。
        * @example `UDP`
        */ "Proto"?: string;
        /**
        * SSL-VPN使用的加密算法。取值： **AES-128-CBC（默认值） |AES-192-CBC | AES-256-CBC | none**
        * @example `AES-128-CBC`
        */ "Cipher"?: string;
        /**
        * SSL-VPN服务端所使用的端口，默认值为**1194**。 不能用使用以下端口：
        * **22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500**
        * @example `1194`
        */ "Port"?: number;
        /**
        *  指定是否对通信进行压缩。 取值：**true（默认值） | false **
        * @example `false`
        */ "Compress"?: boolean;
    }): Promise<{
        "PageNumber": string;
        "TotalCount": string;
        "PageSize": string;
        "SslVpnServers": {
            "SslVpnServer": {
                "RegionId": string;
                "SslVpnServerId": string;
                "VpnGatewayId": string;
                "Name": string;
                "CLientIpPool": string;
                "LocalSubnet": string;
                "Proto": string;
                "Port": string;
                "Cipher": string;
                "Compress": string;
                "CreateTime": string;
                "Connections": string;
                "MaxConnections": string;
                "InternetIp": string;
            };
        };
        "RequestId": string;
    }>;
    /**
    * 调用DeleteRouteTable接口删除自定义路由表。
    */ DeleteRouteTable(query: {
        /**
        * 路由表所属的VPC的地域ID。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 路由表ID。
        * @example `vtb-bp145q7glnuzdvzu2****`
        */ "RouteTableId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRegions接口查询可用地域。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        "ProductType"?: string;
        /**
        * 返回值语言。取值：
        *
        * - **zh-CN（默认值）**：中文
        * - **en-US**：英文
        *
        * @example `zh-CN`
        */ "AcceptLanguage"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "Regions": {
            "Region": {
                "RegionId": string;
                "RegionEndpoint": string;
                "LocalName": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeBgpNetworks查询已宣告的BGP网络。
    */ DescribeBgpNetworks(query: {
        /**
        * BGP组所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 路由表所在路由器的ID。
        * @example `vrt-2zeazning6tbzkm5c0jj2`
        */ "RouterId"?: string;
        /**
        * 列表的页码，默认值为1。
        * @example `2`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "BgpNetworks": {
            "BgpNetwork": {
                "DstCidrBlock": string;
                "VpcId": string;
            }[];
        };
        "RequestId": string;
        "PageSize": number;
        "TotalCount": number;
    }>;
    /**
    * 删除访问控制策略组中的IP条目。
    */ RemoveIPv6TranslatorAclListEntry(query: {
        /**
        * 访问控制策略组的地域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制策略条目所属的访问控制策略组ID。
        * @example `ipv6transacl-bp1de2xxxx`
        */ "AclId": string;
        /**
        * 要删除的访问控制策略条目ID。
        * @example `ipv6transaclentry-bp105jrsxxxx`
        */ "AclEntryId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `sha123456`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用EnablePhysicalConnection接口开通处于Confirmed状态的物理专线，开通完成后物理专线进入Enabled状态。
    */ EnablePhysicalConnection(query: {
        /**
        * 物理专线所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  物理专线的ID。
        * @example `pc-119mfjzm7`
        */ "PhysicalConnectionId": string;
        "OwnerId"?: number;
        /**
        *  客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RemoveGlobalAccelerationInstanceIp接口从带宽共享实例中移除EIP。
    */ RemoveGlobalAccelerationInstanceIp(query: {
        /**
        * 共享带宽型实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  共享型实例ID。
        * @example `ga-m5ex47zwya1sejyni****`
        */ "GlobalAccelerationInstanceId": string;
        /**
        * EIP实例的ID。
        * 您可以通过调用[DescribeEipAddresses](~~36018~~)接口查询EIP实例的ID。
        * @example `eip-bp13e9i2qst4g6jzi****`
        */ "IpInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyRouterInterfaceAttribute接口修改路由器接口的配置。
    */ ModifyRouterInterfaceAttribute(query: {
        /**
        *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  路由器接口的ID。
        * @example `ri-2zeo3xzyf38r4urz****`
        */ "RouterInterfaceId": string;
        "OwnerId"?: number;
        /**
        * 路由器接口的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `TEST`
        */ "Name"?: string;
        /**
        * 路由器接口的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `路由器接口`
        */ "Description"?: string;
        /**
        *  对端路由器接口ID。
        * @example `ri-2zeo3xzyf38r4urz****`
        */ "OppositeInterfaceId"?: string;
        /**
        *  对端的路由器的ID。
        * @example `vrt-bp1jcg5cmxjbl9xgc****`
        */ "OppositeRouterId"?: string;
        /**
        * 要连接的对端路由器接口所属的路由器类型。默认值为**VBR**。
        * 取值：**VRouter|VBR**
        * @example `VRouter`
        */ "OppositeRouterType"?: string;
        /**
        *  对端路由器接口的所有者ID。
        * @example `10`
        */ "OppositeInterfaceOwnerId"?: number;
        /**
        *  健康检查源IP地址，必须是本端VPC内的一个未被使用的IP。
        *
        * > 物理专线接入场景下可指定该参数。
        * @example `116.62.222.XX`
        */ "HealthCheckSourceIp"?: string;
        /**
        *  健康检查目的IP地址。
        * > 当指定了**HealthCheckSourceIp**后，该参数为必选。
        * @example `116.62.222.XX`
        */ "HealthCheckTargetIp"?: string;
        "HcThreshold"?: number;
        "HcRate"?: number;
        /**
        *  是否删除该路由器接口上配置的健康检查IP。取值：
        * - **true**：删除健康检查IP。
        * - **false**（默认值）：不删除健康检查IP。
        * @example `true`
        */ "DeleteHealthCheckIp"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 删除IPv6转换映射条目。
    */ DeleteIPv6TranslatorEntry(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `sha11112222`
        */ "ClientToken"?: string;
        /**
        *  要删除的IPv6转换服务映射条目ID。
        * @example `ipv6transentry-bp1g8bhrdexxxxx`
        */ "Ipv6TranslatorEntryId"?: string;
        /**
        * IPv6转换服务的实例ID。
        * > 如果您不指定**Ipv6TranslatorEntryId**参数，则删除指定实例下所有的映射条目。
        * @example `ipv6trans-bp1858ysxxxxxx`
        */ "Ipv6TranslatorId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeletePhysicalConnection接口删除物理专线。
    */ DeletePhysicalConnection(query: {
        /**
        * 物理专线所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  物理专线的ID。
        * @example `pc-119mfjzm7`
        */ "PhysicalConnectionId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用CreateBgpGroup为指定的边界路由器（VBR）创建一个BGP组。
    */ CreateBgpGroup(query: {
        /**
        * BGP组所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  VBR的ID。
        * @example `vrt-bp1lhl0taikrteen80oxx`
        */ "RouterId": string;
        /**
        * 侧设备的ASN。
        * @example `1111`
        */ "PeerAsn": number;
        "OwnerId"?: number;
        /**
        *  BGP组的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `test`
        */ "Name"?: string;
        /**
        *  BGP组的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `BGP`
        */ "Description"?: string;
        "LocalAsn"?: number;
        /**
        *  BGP组的认证密钥。
        * @example `!PWZ2wsq`
        */ "AuthKey"?: string;
        /**
        * 运行BGP的路由器一般情况下只能属于一个AS，某些情况下，比如AS需要迁移或者和其他AS进行合并，要用新的AS替代原有的AS号码。
        * @example `true`
        */ "IsFakeAsn"?: boolean;
        /**
        *  客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "BgpGroupId": string;
        "RequestId": string;
    }>;
    /**
    * 查询已创建的IPv6转换服务实例列表。
    */ DescribeIPv6Translators(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        *  IPv6转换服务实例的ID。
        * @example `ipv6trans-bp1858ysxxxxxx`
        */ "Ipv6TranslatorId"?: string;
        /**
        *  IPv6转换服务实例的名称。
        * @example `ipv6_1`
        */ "Name"?: string;
        /**
        * IPv6转换服务实例的规格。
        * @example `small`
        */ "Spec"?: string;
        /**
        *  IPv6转换服务实例的状态，取值：** init|provisioning|active|updating|upgrading|deleting|deleted**。
        * @example `active`
        */ "Status"?: string;
        /**
        *  为IPv6转换服务实例分配的IPv6地址。
        * @example `2400:3200:1600::xxx`
        */ "AllocateIpv6Addr"?: string;
        /**
        *  为IPv6转换服务实例分配的IPv4地址。
        * @example `47.99.xx.xx,47.99.xx.xx`
        */ "AllocateIpv4Addr"?: string;
        /**
        *  为IPv6转换服务实例分配的IPv4地址。
        * @example `Prepay`
        */ "PayType"?: string;
        /**
        *  列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为50，默认值为10。
        * @example `1`
        */ "PageSize"?: number;
        /**
        * IPv6转换服务实例的业务状态。
        * @example `Normal`
        */ "BusinessStatus"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "Ipv6Translators": {
            "Ipv6Translator": {
                "Spec": string;
                "Ipv6TranslatorId": string;
                "AllocateIpv6Addr": string;
                "Name": string;
                "Status": string;
                "Ipv6TranslatorEntryIds": {
                    "Ipv6TranslatorEntryId": string[];
                };
                "AllocateIpv4Addr": string;
                "BusinessStatus": string;
                "CreateTime": number;
                "RegionId": string;
                "EndTime": number;
                "AvailableBandwidth": number;
                "PayType": string;
                "Bandwidth": number;
            }[];
        };
    }>;
    /**
    * 调用DescribeVpcAttribute接口查询指定VPC的配置信息。
    */ DescribeVpcAttribute(query: {
        /**
        * VPC的所属地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要查询的VPC ID。
        * @example `vpc-bp18sth14qii3pnv****`
        */ "VpcId": string;
        "OwnerId"?: number;
        "DryRun"?: boolean;
        /**
        * 是否为默认VPC，取值：
        * * **false**：不是默认VPC。
        * * **true**：是默认VPC。
        *
        * @example `false`
        */ "IsDefault"?: boolean;
    }): Promise<{
        "VpcName": string;
        "Description": string;
        "IsDefault": boolean;
        "ResourceGroupId": string;
        "UserCidrs": {
            "UserCidr": any[];
        };
        "ClassicLinkEnabled": boolean;
        "AssociatedCens": {
            "AssociatedCen": {
                "CenStatus": string;
                "CenOwnerId": string;
                "CenId": string;
            }[];
        };
        "VRouterId": string;
        "VpcId": string;
        "CreationTime": string;
        "CidrBlock": string;
        "Status": string;
        "VSwitchIds": {
            "VSwitchId": string[];
        };
        "RequestId": string;
        "RegionId": string;
        "CloudResources": {
            "CloudResourceSetType": {
                "ResourceType": string;
                "ResourceCount": number;
            }[];
        };
    }>;
    /**
    * 使用ReleaseEipAddress接口释放指定的弹性公网IP（EIP）。
    */ ReleaseEipAddress(query: {
        /**
        * 弹性公网IP所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        * 要释放的弹性公网IP的ID。
        * @example `eip-2zeerraiwb7uj6i0d0fo3`
        */ "AllocationId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AllocateEipAddress接口申请弹性公网IP（EIP）。
    */ AllocateEipAddress(query: {
        /**
        * 弹性公网IP所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * EIP的带宽峰值，单位为Mbps，默认值为**5**。
        * @example `5`
        */ "Bandwidth"?: string;
        /**
        * 购买时长。
        * 当**PricingCycle**取值**Month**时，**Period**取值范围为**1~9**。
        * 当**PricingCycle**取值**Year**时，**Period**取值范围为**1~3**。
        * 如果**InstanceChargeType**参数的值为**PrePaid**时，该参数必选。
        * @example `1`
        */ "Period"?: number;
        /**
        * 线路类型，默认值为**BGP**。
        * - 对于已开通单线带宽白名单的用户，ISP字段可以设置为**ChinaTelecom**、**ChinaUnicom**和**ChinaMobile**，用来开通中国电信、中国联通、中国移动的单线EIP。
        * - 如果是杭州金融云用户，该字段必填，取值：**BGP_FinanceCloud**。
        * @example `BGP`
        */ "ISP"?: string;
        "ActivityId"?: number;
        /**
        * 网络类型，默认值为**public**。
        * @example `public`
        */ "Netmode"?: string;
        /**
        * 是否自动付费，取值：
        * **false**：不开启自动付费，生成订单后需要到订单中心完成支付。
        * **true**：开启自动付费，自动支付订单。
        * 当**InstanceChargeType**参数的值为**PrePaid**时，该参数必选；当**InstanceChargeType**参数的值为**PostPaid**时，该参数可不填。
        * @example `false`
        */ "AutoPay"?: boolean;
        /**
        * 包年包月的计费周期，取值：
        * **Month**（默认值）：按月付费。
        * **Year**：按年付费。
        * 当**InstanceChargeType**参数的值为**PrePaid**时，该参数必选；当**InstanceChargeType**参数的值为**PostPaid**时，该参数可不填。
        * @example `Month`
        */ "PricingCycle"?: string;
        /**
        * EIP的计费方式，取值：
        * **PrePaid**：包年包月。
        * **PostPaid**（默认值）：按量计费。
        * 当**InstanceChargeType**取值为**PrePaid**时，**InternetChargeType**必须取值**PayByBandwidth**；当**InstanceChargeType**取值为**PostPaid**时，**InternetChargeType**可取值**PayByBandwidth**或**PayByTraffic**。
        * 包年包月和按量计费的详细信息，请参见[包年包月](~~27767~~)和[按量计费](~~72142~~)。
        * @example `PostPaid`
        */ "InstanceChargeType"?: string;
        /**
        * EIP的计量方式，取值：
        * **PayByBandwidth**（默认值）：按带宽计费。
        * **PayByTraffic**：按流量计费。
        * 当**InstanceChargeType**取值为**PrePaid**时，**InternetChargeType**必须取值**PayByBandwidth**。详细信息，请参见[包年包月](~~27767~~)。
        * 当**InstanceChargeType**取值为**PostPaid**时，**InternetChargeType**可取值**PayByBandwidth**或**PayByTraffic**。详细信息，请参见[按使用流量](~~72142~~)和[按固定带宽](~~72142~~)。
        * @example `PayByTraffic`
        */ "InternetChargeType"?: string;
        /**
        * 企业资源组ID。
        * @example `rg-acfmxazffggds****`
        */ "ResourceGroupId"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-001****`
        */ "ClientToken"?: string;
    }): Promise<{
        "AllocationId": string;
        "EipAddress": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeVSwitches接口查询已创建的交换机。
    */ DescribeVSwitches(query: {
        /**
        *  交换机所属VPC所在的地域。 您可以通过调用[DescribeRegions](https://help.aliyun.com/document_detail/36063.html?spm=a2c4g.11186623.6.617.672255b1j9oVah)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        *  VPC的ID。
        * @example `vpc-25eq58pl****`
        */ "VpcId"?: string;
        /**
        *  交换机的ID。
        * @example `vsw-23dsf3****`
        */ "VSwitchId"?: string;
        /**
        *  交换机所属区的ID。 您可以通过调用[DescribeZones](https://help.aliyun.com/document_detail/36064.html?spm=a2c4g.11186623.6.618.672255b1j9oVah)接口获取地域ID。
        * @example `cn-hangzhou-d`
        */ "ZoneId"?: string;
        "Tag"?: string[];
        /**
        * 交换机的名称。
        * @example `VSwitch-1`
        */ "VSwitchName"?: string;
        "DryRun"?: boolean;
        /**
        * 是否查询指定地域下的默认交换机，取值：
        * - **true**（默认值）：查询指定地域下的所有交换机。
        * - **false**：不查询默认交换机。
        * @example `true`
        */ "IsDefault"?: boolean;
        /**
        * 路由表的ID。
        * @example `vtb-bp145q7glnuzdvzu2****`
        */ "RouteTableId"?: string;
        /**
        * 资源组ID。
        * @example `1234567`
        */ "ResourceGroupId"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "TotalCount": number;
        "VSwitches": {
            "VSwitch": {
                "AvailableIpAddressCount": number;
                "CidrBlock": string;
                "CreationTime": string;
                "Description": string;
                "Status": string;
                "VSwitchId": string;
                "VSwitchName": string;
                "VpcId": string;
                "ZoneId": string;
            }[];
        };
    }>;
    /**
    * 调用ModifyForwardEntry接口修改指定的DNAT条目。
    */ ModifyForwardEntry(query: {
        /**
        * NAT网关所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example ` cn-hangzhou`
        */ "RegionId": string;
        /**
        *  DNAT条目的ID。
        * @example `fwd-8vbn3bc8roygjp0gy3xk7`
        */ "ForwardEntryId": string;
        /**
        *  DNAT列表的ID。
        * @example `ftb-8vbx8xu2lqj9qb334h0ow`
        */ "ForwardTableId": string;
        "OwnerId"?: number;
        /**
        *  公网IP地址。
        * @example `116.62.222.28`
        */ "ExternalIp"?: string;
        /**
        * 公网端口。取值范围：1-65535。
        * @example `80`
        */ "ExternalPort"?: string;
        /**
        * 目标私网IP。
        * @example `10.34.56.78`
        */ "InternalIp"?: string;
        /**
        * 目标私网端口。取值范围：1-65535。
        * @example `80`
        */ "InternalPort"?: string;
        /**
        * 协议类型。取值：
        *
        * - **TCP**：转发TCP协议的报文。
        *
        * - **UDP**：转发UDP协议的报文。
        *
        * - **Any**：转发所有协议的报文。
        * @example `TCP`
        */ "IpProtocol"?: string;
        "ForwardEntryName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用ModifyBandwidthPackageSpec接口修改指定NAT带宽包的带宽。
    */ ModifyBandwidthPackageSpec(query: {
        /**
        * NAT带宽包所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  NAT带宽包的ID。
        * @example `bwp-s6lmotmkkxxxxxxxx`
        */ "BandwidthPackageId": string;
        /**
        *  NAT带宽包的带宽。取值范围：5-1000。
        * @example `5`
        */ "Bandwidth": string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteVirtualBorderRouter接口删除边界路由器（VBR）。
    */ DeleteVirtualBorderRouter(query: {
        /**
        *  VBR所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  VBR的ID。
        * @example `vbr-bp12mw1f8k3jgygk9****`
        */ "VbrId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteSnatEntry接口删除指定的SNAT条目。
    */ DeleteSnatEntry(query: {
        /**
        * NAT网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  SNAT表ID。
        * @example `stb-bp190wu8io1vgev80kec7`
        */ "SnatTableId": string;
        /**
        *  SNAT条目ID。
        * @example `snat-bp1vcgcf8tm0plqcgfl04`
        */ "SnatEntryId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AllocateIpv6InternetBandwidth接口为IPv6地址购买公网带宽。
    */ AllocateIpv6InternetBandwidth(query: {
        /**
        * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * IPv6网关的ID。
        * @example `ipv5gw-123456xxxxxxxx`
        */ "Ipv6GatewayId": string;
        /**
        * IPv6地址的实例ID。
        * @example `ipv6-123456xxxxxxxx`
        */ "Ipv6AddressId": string;
        /**
        * IPv6地址的公网带宽，单位：Mbps，取值范围：**1-5000**。
        * - 当**InternetChargeType**为**PayByBandwidth**，IPv6地址的公网带宽为1-5000。
        * - 当**InternetChargeType**为**PayByTraffic**，IPv6地址的公网带宽范围同时受到IPv6网关规格的制约。
        *     - Small（默认免费版），公网带宽范围为1-500。
        *     - Medium（企业版），公网带宽范围为1-1000。
        *     - Large（企业增强版），公网带宽范围为1-2000。
        * @example `2`
        */ "Bandwidth": number;
        /**
        * IPv6公网带宽的计费方式，取值：
        * - **PayByTraffic**：按使用流量计费。
        * - **PayByBandwidth**（默认值）：按带宽计费。
        * @example `PayByTraffic`
        */ "InternetChargeType"?: string;
        /**
        * 请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `123456`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "InternetBandwidthId": number;
        "Ipv6AddressId": string;
    }>;
    /**
    * 使用AddBandwidthPackageIps接口在NAT带宽包中增加公网IP。
    */ AddBandwidthPackageIps(query: {
        /**
        *  NAT带宽包所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  NAT带宽包的ID。
        * @example `bwp-s6lmotmkkxxxxxxxx`
        */ "BandwidthPackageId": string;
        /**
        *  NAT带宽包中的公网IP数量，取值范围：1-50。
        * @example `2`
        */ "IpCount": string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        *  客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteVpnGateway接口删除指定的VPN网关。
    */ DeleteVpnGateway(query: {
        /**
        * VPN网关实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  VPN网关实例的ID。
        * @example `vpn-bp1q8bgx4xnkm2ogj****`
        */ "VpnGatewayId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateCommonBandwidthPackage接口创建共享带宽实例。
    */ CreateCommonBandwidthPackage(query: {
        /**
        * 共享带宽所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 共享带宽的带宽峰值，单位为Mbps。
        * @example `5`
        */ "Bandwidth": number;
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        * @example `123`
        */ "Zone"?: string;
        /**
        * @example `123`
        */ "ISP"?: string;
        /**
        * 共享带宽的名称。
        * 长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `test123`
        */ "Name"?: string;
        /**
        * 共享带宽的描述信息。
        * 长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `abc`
        */ "Description"?: string;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-001****`
        */ "ClientToken"?: string;
        /**
        * 资源组ID。
        * @example `rg-acfmxazdjdhd****`
        */ "ResourceGroupId"?: string;
        /**
        * 当**InternetChargeType**取值**PayBy95**时需指定此参数。
        * @example `20`
        */ "Ratio"?: number;
        /**
        * 共享带宽的计费方式，取值：
        * - **PayByBandwidth**（默认值）：按带宽计费。
        * - **PayBy95**：按增强型95计费。
        * 如需**PayByTraffic**计费方式，请提交工单。
        * @example `PayByTraffic`
        */ "InternetChargeType"?: string;
    }): Promise<{
        "BandwidthPackageId": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyVpnGatewayAttribute接口修改VPN网关的名称和描述信息。
    */ ModifyVpnGatewayAttribute(query: {
        /**
        * VPN网关实例所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  VPN网关实例的ID。
        * @example `vpn-bp1q8bgx4xnkm2ogj****`
        */ "VpnGatewayId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * VPN网关的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `myvpn`
        */ "Name"?: string;
        /**
        * VPN网关的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `vpn网关`
        */ "Description"?: string;
    }): Promise<{
        "Name": string;
        "Status": string;
        "VpnGatewayId": string;
        "BusinessStatus": string;
        "Spec": string;
        "CreateTime": number;
        "IntranetIp": string;
        "RequestId": string;
        "InternetIp": string;
        "EndTime": number;
        "VSwitchId": string;
        "VpcId": string;
    }>;
    /**
    * 调用CreateSslVpnServer接口创建SSL-VPN服务端。
    */ CreateSslVpnServer(query: {
        /**
        * VPN网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  VPN网关的ID。
        * @example `vpn-bp1hgim8by0kc9nga5lg3`
        */ "VpnGatewayId": string;
        /**
        * 是给客户端虚拟网卡分配访问地址的的地址段，不是指客户端已有的内网网段。
        * 当客户端通过SSL-VPN连接访问本端时，VPN网关会从指定的客户端网段中分配一个IP地址给客户端使用。
        * 该网段不能与**LocalSubnet**地址段冲突。
        * @example `192.168.1.0/24`
        */ "ClientIpPool": string;
        /**
        * 是客户端通过SSL-VPN连接要访问的地址段。
        * 本端网段可以是VPC的网段、交换机的网段、通过专线和VPC互连的IDC的网段、云服务如RDS/OSS等的网段。
        * @example `10.0.0.0/8`
        */ "LocalSubnet": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * SSL-VPN服务端的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
        * 但不能以`http://` 或`https://`开头。
        * @example `sslvpnname`
        */ "Name"?: string;
        /**
        * SSL-VPN服务端所使用的协议。
        * 取值：**UDP（默认值） | TCP**
        * @example `UDP`
        */ "Proto"?: string;
        /**
        * SSL-VPN使用的加密算法。取值：
        * ** AES-128-CBC（默认值） |AES-192-CBC | AES-256-CBC | none **
        * @example `AES-128-CBC`
        */ "Cipher"?: string;
        /**
        *  SSL-VPN服务端所使用的端口，默认值为1194。 不能用使用以下端口:
        * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        * @example `1194`
        */ "Port"?: number;
        /**
        * 是否压缩。
        * @example `false`
        */ "Compress"?: boolean;
    }): Promise<{
        "RequestId": string;
        "SslVpnServerId": string;
        "Name": string;
    }>;
    /**
    * 使用DeleteBgpPeer删除指定的BGP邻居。
    */ DeleteBgpPeer(query: {
        /**
        * BGP组所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  BGP邻居的ID。
        * @example `bgp-wz977wcrmb69axxxxxxxx`
        */ "BgpPeerId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-001xxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateGlobalAccelerationInstance接口创建全球加速实例。
    */ CreateGlobalAccelerationInstance(query: {
        /**
        * 全球加速实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 被加速的服务的所属区域。取值：
        * - **china-mainland**：中国大陆
        * - **north-america**：北美
        *
        * - **asia-pacific**：亚太
        *
        * - **europe**：欧洲
        * @example `china-mainland`
        */ "ServiceLocation": string;
        /**
        *  全球加速实例的带宽峰值，单位为Mbps。取值范围：**10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000**
        * @example `10`
        */ "Bandwidth": string;
        "OwnerId"?: number;
        /**
        * 实例带宽类型：
        * - **Shared**：共享带宽型
        * - **Exclusive**：享带宽型
        * @example `Exclusive`
        */ "BandwidthType"?: string;
        /**
        * 全球加速实例的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `GA-1`
        */ "Name"?: string;
        /**
        * 全球加速实例的描述信息。
        *  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `My GA`
        */ "Description"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "GlobalAccelerationInstanceId": string;
        "IpAddress": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyVpcAttribute接口修改指定VPC的名称和描述信息。
    */ ModifyVpcAttribute(query: {
        /**
        * VPC的地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * VPC的描述信息。长度为2~256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `This is my VPC.`
        */ "Description"?: string;
        /**
        * VPC的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字、点号（.）、下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `Vpc-1`
        */ "VpcName"?: string;
        /**
        * VPC的网段，支持将VPC网段在10.0.0.0/8、172.16.0.0/12和192.168.0.0/16以及它们的子网范围内放大或缩小，网段的掩码为8~24位。
        * @example `192.168.0.0/24`
        */ "CidrBlock"?: string;
        /**
        *  VPC的ID。
        * @example `vpc-bp1qtbach57ywecf****`
        */ "VpcId": string;
        /**
        * 是否开启IPv6网段。
        * - **true**：开启。
        * - **false**：关闭。
        * @example `true`
        */ "EnableIPv6"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 查询IPv6转换映射条目。
    */ DescribeIPv6TranslatorEntries(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * IPv6转换服务实例的ID。
        * @example `ipv6trans-bp1858ysxxxxxx`
        */ "Ipv6TranslatorId"?: string;
        "OwnerId"?: number;
        /**
        * 要查询的IPv6转换映射条目ID。
        * > 如果**Ipv6TranslatorId**参数和**Ipv6TranslatorEntryId**参数的值都为null，则返回所有IPv6转换映射条目信息。如果仅是**Ipv6TranslatorEntryId**参数的值为null，则返回当前IPv6转换服务实例下的所有IPv6转换映射条目信息。
        * @example `ipv6transentry-bp1g8bhrdexxxxx`
        */ "Ipv6TranslatorEntryId"?: string;
        /**
        *  Pv6转换映射条目的名称。
        * @example `entryname`
        */ "EntryName"?: string;
        /**
        * IPv6转换服务实例分配的IPv6地址。
        * @example `2400:3200:1600::xx`
        */ "AllocateIpv6Addr"?: string;
        /**
        *  IPv6转换服务实例分配的IPv6地址使用的端口。
        * @example `80`
        */ "AllocateIpv6Port"?: number;
        /**
        *  需要提供IPv6服务的公网IPv4地址
        * @example `47.99.xx.xx`
        */ "BackendIpv4Addr"?: string;
        /**
        *  需要提供IPv6服务的公网IPv4地址使用的端口。
        * @example `80`
        */ "BackendIpv4Port"?: number;
        /**
        *  转发数据的协议类型。
        * @example `tcp`
        */ "TransProtocol"?: string;
        /**
        * 是否开启访问控制。取值：**on|off**。
        * @example `off`
        */ "AclStatus"?: string;
        /**
        * 访问控制策略类型。取值：
        * - **white**：允许访问策略组中的IPv6地址访问后端服务。
        * - **black**：禁止访问策略组中的IPv6地址访问后端服务。
        * @example `white`
        */ "AclType"?: string;
        /**
        * 访问控制策略组ID。
        * @example `ipv6transacl-bp1de2xxxx`
        */ "AclId"?: string;
        /**
        *  列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `sha1111`
        */ "ClientToken"?: string;
    }): Promise<{
        "Ipv6TranslatorEntries": {
            "AllocateIpv6Addr": string;
            "AllocateIpv6Port": number;
            "BackendIpv4Addr": string;
            "BackendIpv4Port": string;
            "EntryBandwidth": string;
            "EntryStatus": string;
            "Ipv6TranslatorEntryId": string;
            "Ipv6TranslatorId": string;
            "RegionId": string;
            "TransProtocol": string;
        }[];
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "TotalCount": number;
    }>;
    /**
    * 调用DescribeVirtualBorderRouters接口查询已创建的边界路由器（VBR）。
    */ DescribeVirtualBorderRouters(query: {
        /**
        * VBR所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        "Filter"?: string[];
    }): Promise<{
        "RequestId": string;
        "PageNumber": string;
        "VirtualBorderRouterSet": {
            "VirtualBorderRouterType": {
                "LocalGatewayIp": string;
                "PeerGatewayIp": string;
                "PhysicalConnectionOwnerUid": string;
                "VlanId": string;
                "PhysicalConnectionStatus": string;
                "PhysicalConnectionId": string;
                "RouteTableId": string;
                "PeeringSubnetMask": string;
                "CreationTime": string;
                "ActivationTime": string;
                "Status": string;
                "PhysicalConnectionBusinessStatus": string;
                "VlanInterfaceId": string;
                "AccessPointId": string;
                "VbrId": string;
            };
        };
        "TotalCount": string;
        "PageSize": string;
    }>;
    /**
    * 调用DescribeIpv6Gateways接口查询已创建的IPv6网关。
    */ DescribeIpv6Gateways(query: {
        /**
        * IPv6网关所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * IPv6网关的ID。
        * @example `ipv6gw-123456xxxxxxxx`
        */ "Ipv6GatewayId"?: string;
        /**
        * IPv6网关关联的VPC ID。
        * @example `vpc-123456xxxxxxxx`
        */ "VpcId"?: string;
        /**
        * IPv6网关的名称。
        * @example `ipv6GW`
        */ "Name"?: string;
        /**
        * 当前页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页包含的条目数。
        * @example `10`
        */ "PageSize"?: number;
        "OwnerId"?: number;
    }): Promise<{
        "PageNumber": number;
        "Ipv6Gateways": {
            "Ipv6Gateway": {
                "Name": string;
                "CreationTime": string;
                "Status": string;
                "Description": string;
                "BusinessStatus": string;
                "Spec": string;
                "RegionId": string;
                "InstanceChargeType": string;
                "ExpiredTime": string;
                "VpcId": string;
                "Ipv6GatewayId": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 使用ModifyVSwitchAttribute修改指定交换机的名称和描述信息。
    */ ModifyVSwitchAttribute(query: {
        /**
        * 交换机所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        *  交换机的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `VSwitch-1`
        */ "VSwitchName"?: string;
        /**
        *  交换机的ID。
        * @example `vsw-25naue4gz`
        */ "VSwitchId": string;
        /**
        * 交换机的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
        * @example `This is my vswitch.`
        */ "Description"?: string;
        /**
        * 交换机的IPv6网段，支持自定义IPv6网段的最后8位。取值：0-255（十进制）。
        * 交换机的IPv6网段掩码默认为64 位。
        * @example `0`
        */ "Ipv6CidrBlock"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用ModifyNatGatewayAttribute接口修改NAT网关配置。
    */ ModifyNatGatewayAttribute(query: {
        /**
        * NAT网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  NAT网关的ID。
        * @example `ngw-xxoo123`
        */ "NatGatewayId": string;
        "OwnerId"?: number;
        /**
        * NAT网关的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `nat123`
        */ "Name"?: string;
        /**
        * NAT网关的描述信息。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `fortest`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UnassociateRouteTable接口将路由表和交换机解绑。
    */ UnassociateRouteTable(query: {
        /**
        * 路由表所属的VPC的地域ID。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 路由表ID。
        * @example `vtb-bp145q7glnuzdvzu2****`
        */ "RouteTableId": string;
        /**
        * 要解绑的交换机ID。
        * @example `vsw-25naue4****`
        */ "VSwitchId": string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用CreateNatGateway接口创建一个NAT网关。
    */ CreateNatGateway(query: {
        /**
        * NAT网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VPC的ID。
        * @example ` vpc-bp1di7uewzmtvfuq8ufpv`
        */ "VpcId": string;
        "OwnerId"?: number;
        /**
        * NAT网关的名称。
        * 名称在\[2,128]个字符之间，必须以英文字母或中文开头，不能以` http:// `和 `https:// `开头，可包含数字，“.”，“_”或“-”。
        * 如果没有指定该参数，默认使用网关ID。
        * @example `fortest`
        */ "Name"?: string;
        /**
        * NAT网关的描述。
        * 描述在2-256个字符之间，不能以` http://` 和 `https:// `开头。
        * @example `testnat`
        */ "Description"?: string;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `shefffxxddjehfh123`
        */ "ClientToken"?: string;
        /**
        * NAT网关的规格。取值：
        * - Small(默认值)：小型
        * - Middle：中型
        * - Large：大型
        * - XLarge.1：超大型
        * @example `small`
        */ "Spec"?: string;
        "BandwidthPackage"?: string[];
        "InstanceChargeType"?: string;
        "PricingCycle"?: string;
        "Duration"?: string;
        "AutoPay"?: boolean;
    }): Promise<{
        "BandwidthPackageIds": string[];
        "forwardTableIds": string[];
        "natGatewayId": string;
        "snatTableIds": string[];
        "RequestId": string;
    }>;
    /**
    * 查询指定地域内的高可用虚拟IP实例。
    */ DescribeHaVips(query: {
        /**
        * HaVip实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        "Filter"?: string[];
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "HaVips": {
            "HaVip": {
                "Status": string;
                "Description": string;
                "MasterInstanceId": string;
                "AssociatedInstances": {
                    "associatedInstance": any[];
                };
                "AssociatedEipAddresses": {
                    "associatedEipAddresse": any[];
                };
                "CreateTime": string;
                "RegionId": string;
                "IpAddress": string;
                "HaVipId": string;
                "VSwitchId": string;
                "VpcId": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeIpv6EgressOnlyRules接口查询创建的仅主动出规则。
    */ DescribeIpv6EgressOnlyRules(query: {
        /**
        * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * IPv6网关的ID。
        * @example `ipv6gw-123456xxxxxxxx`
        */ "Ipv6GatewayId": string;
        /**
        * 要查看的仅主动出规则ID。
        * @example `ipv6gwpy-123456xxxxxxxx`
        */ "Ipv6EgressOnlyRuleId"?: string;
        /**
        * 规则名称。
        * @example `rulename`
        */ "Name"?: string;
        /**
        * 需要设置仅主动出规则的实例类型，取值：
        *  **Ipv6Address**：IPv6地址。
        * @example `Ipv6Address`
        */ "InstanceType"?: string;
        /**
        * 设置了仅主动出规则的IPv6地址关联的实例ID。
        * @example `i-123456xxxxxxxx`
        */ "InstanceId"?: string;
        /**
        * 列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
        "OwnerId"?: number;
    }): Promise<{
        "Ipv6EgressOnlyRules": {
            "Ipv6EgressOnlyRule": {
                "Name": string;
                "Status": string;
                "Description": string;
                "InstanceId": string;
                "Ipv6EgressOnlyRuleId": string;
                "InstanceType": string;
            }[];
        };
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DeleteVpnConnection接口删除指定的IPsec连接。
    */ DeleteVpnConnection(query: {
        /**
        * IPsec连接所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  IPsec连接的ID。
        * @example `vco-bp1bbi27hojx80nck****`
        */ "VpnConnectionId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateIpv6Gateway接口创建IPv6网关。
    */ CreateIpv6Gateway(query: {
        /**
        * IPv6网关的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * 要开通IPv6网关的VPC ID。
        * @example `vpc-123456xxxxxxxx`
        */ "VpcId": string;
        /**
        * IPv6网关的规格。取值：
        * - **Small**（默认值）：免费版
        * - **Medium**：企业版
        * - **Large**：企业增强版
        * 不同规格的IPv6网关的转发能力都不同。详细信息，请参见[IPv6网关规格](~~98926~~)。
        * @example `Small`
        */ "Spec"?: string;
        /**
        * IPv6网关的名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字、点号(.)、下划线(_)和短橫线(-)，但不能以`http://`或`https://`开头。
        * @example `ipv6GW`
        */ "Name"?: string;
        /**
        * IPv6网关的描述信息。
        * 长度为2-256个字符，必须以字母或中文开头，可包含数字、点号(.)、下划线(_)和短橫线(-)，但不能以`http://`或`https://`开头。
        * @example `ipv6gatewayforVPC1`
        */ "Description"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `123456`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "Ipv6GatewayId": string;
    }>;
    /**
    * 调用CompletePhysicalConnectionLOA完成施工完竣。
    */ CompletePhysicalConnectionLOA(query: {
        /**
        * 物理专线所在的地域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 物理专线实例ID。
        * @example `pc-bp10tvlhnwkwxxxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 运营商线路编码。
        * @example `aaa111`
        */ "LineCode": string;
        /**
        * 机房楼内线缆标签。
        * @example `bbb222`
        */ "LineLabel": string;
        /**
        * 客户端Token鉴权。
        * @example `F8983C74-E068-4509-B442-89xxxxxC8F43B`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "code": string;
        "message": string;
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 使用ModifyBandwidthPackageAttribute接口修改指定NAT带宽包的名称和描述。
    */ ModifyBandwidthPackageAttribute(query: {
        /**
        * NAT带宽包所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  NAT带宽包的ID。
        * @example `bwp-s6lmotmkkxxxxxxxx`
        */ "BandwidthPackageId": string;
        "OwnerId"?: number;
        /**
        *  NAT带宽包的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `NATABC`
        */ "Name"?: string;
        /**
        *  NAT带宽包的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `This is NAT.`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyVRouterAttribute接口修改路由器的名称和描述信息。
    */ ModifyVRouterAttribute(query: {
        /**
        * VPC所在的地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        *  路由器的ID。
        * @example `vrt-bp1lhl0taikrteen8****`
        */ "VRouterId": string;
        /**
        * 路由器的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `VRouter-1`
        */ "VRouterName"?: string;
        /**
        * 路由器的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `My VRouter`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
        "RouteTableId": string;
        "VRouterId": string;
        "VpcId": string;
    }>;
    /**
    * 调用ModifyCommonBandwidthPackageAttribute修改共享带宽实例的名称和描述信息。
    */ ModifyCommonBandwidthPackageAttribute(query: {
        /**
        * 共享带宽所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  共享带宽实例的ID。
        * @example `cbwp-2ze2ic1xd2qeqk145pn4u`
        */ "BandwidthPackageId": string;
        "OwnerId"?: number;
        /**
        *  共享带宽的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `test123`
        */ "Name"?: string;
        /**
        *  共享带宽的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `描述`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用RemoveBandwidthPackageIps接口删除NAT带宽包中的公网IP。
    */ RemoveBandwidthPackageIps(query: {
        /**
        * NAT带宽包所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 待删除的公网IP的所属的NAT带宽包ID。
        * @example `bwp-s6lmotmkkxxxxxxxx`
        */ "BandwidthPackageId": string;
        "RemovedIpAddresses": string[];
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不能超过64个ASCII字符。
        * 更多关于幂等性的信息，请参考[如何保证幂等性](~~36569~~)。
        * @example `SHAww112344jhsxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyVirtualBorderRouterAttribute接口修改边界路由器（VBR）的配置。
    */ ModifyVirtualBorderRouterAttribute(query: {
        /**
        * VBR所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  边界路由器的ID。
        * @example `vbr-**************`
        */ "VbrId": string;
        /**
        *  VBR的VLAN ID，取值范围为：**1-2999**。
        *
        * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
        * @example `12`
        */ "VlanId"?: number;
        /**
        * 运营商为物理专线提供的电路编码。
        *
        * > 只有物理专线的所有者可以指定该参数。
        *
        * @example `longtel001`
        */ "CircuitCode"?: string;
        /**
        *  VBR的阿里云侧互联IP。
        * @example `116.62.xx.xx`
        */ "LocalGatewayIp"?: string;
        /**
        * VBR专线侧接口对端的IP地址。该属性只允许VBR owner指定/修改。不允许把Enabled状态的VBR的该属性改为空。
        * @example `120.120.xx.xx`
        */ "PeerGatewayIp"?: string;
        /**
        *   VBR的阿里云侧和客户侧互联IP的子网掩码。 两个IP地址必须位于同一个子网中。
        * @example `255.255.128.0`
        */ "PeeringSubnetMask"?: string;
        /**
        * 配置BFD报文的发送间隔，取值：**200-1000，单位为ms**。
        * @example `100`
        */ "MinTxInterval"?: number;
        /**
        * 配置BFD报文的接收间隔，取值：**200-1000，单位为ms**。
        * @example `100`
        */ "MinRxInterval"?: number;
        /**
        * 检测时间倍数。即接收方允许发送方发送报文的最大连接丢包数，用来检测链路是否正常，取值：**3-10**。
        * @example `3`
        */ "DetectMultiplier"?: number;
        /**
        * VBR的描述信息。
        * 长度为2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `VBR`
        */ "Description"?: string;
        /**
        * VBR的名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `test`
        */ "Name"?: string;
        /**
        * 物理专线ID。
        * @example `pc-kojok19xxxxxxxxx`
        */ "AssociatedPhysicalConnections"?: string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-00xxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用DescribeBgpGroups查询指定地域下的BGP组。
    */ DescribeBgpGroups(query: {
        /**
        * BGP组所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 用户ID。
        * @example `1333738069500000`
        */ "OwnerId"?: number;
        /**
        *  BGP组关联的VBR的ID。
        * @example `vrt-kojok19x3j0q6kx`
        */ "RouterId"?: string;
        /**
        *  BGP组的ID。
        * @example `bgpg-wz9f62v4fbg2gxxxxxxxx`
        */ "BgpGroupId"?: string;
        /**
        * 是否为为默认BGP组。
        * @example `false`
        */ "IsDefault"?: boolean;
        /**
        *  列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为50，默认值为10。
        * @example `1`
        */ "PageSize"?: number;
    }): Promise<{
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "BgpGroups": {
            "BgpGroup": {
                "BgpGroupId": string;
                "LocalAsn": number;
                "Hold": number;
                "Description": string;
                "AuthKey": string;
                "IsFake": boolean;
                "PeerAsn": number;
                "Keepalive": number;
                "RouteLimit": number;
                "Name": string;
                "Status": string;
                "RouterId": string;
                "RegionId": string;
            }[];
        };
    }>;
    /**
    * 调用CreatePhysicalConnectionSetupOrder创建初装费订单。
    */ CreatePhysicalConnectionSetupOrder(query: {
        /**
        * 物理专线所在的地域。 您可以通过调用DescribeRegions接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 接入点ID。
        * @example `ap-cn-beijing-ft-A`
        */ "AccessPointId": string;
        /**
        * 提供接入物理线路的运营商，取值：
        * - CT：中国电信
        * - CU：中国联通
        * - CM：中国移动
        * - CO：中国其他
        * - Equinix：Equinix
        * - Other：境外其他
        * @example `CT`
        */ "LineOperator": string;
        /**
        * 物理专线接入端口类型：
        * - **100Base-T**：百兆电口
        * - **1000Base-T**（默认值）：千兆电口
        * - **1000Base-LX**：千兆单模光口（10千米）
        * - **10GBase-T**：万兆电口
        * - **10GBase-LR**：万兆单模光口（10千米）
        * @example `100Base-T`
        */ "PortType"?: string;
        /**
        * 冗余物理专线的ID，该专线的状态必须为**Allocated**、**Confirmed**或**Enabled**。
        * @example `pc-bp10zsv5ntpxxxxxxxxxx`
        */ "RedundantPhysicalConnectionId"?: string;
        /**
        * 是否自动支付。
        * 取值：**true|false**
        * @example `true`
        */ "AutoPay"?: boolean;
        /**
        * 客户端Token鉴权。
        * @example `318BB676-0A2B-43A0-9AD8-F1D34E93750F`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "code": string;
        "data": {
            "orderId": number;
        };
        "httpStatusCode": number;
        "message": string;
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用CreatePhysicalConnection接口申请物理专线接入。
    */ CreatePhysicalConnection(query: {
        /**
        *  物理专线所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  物理专线所在的接入点。 您可以通过调用[DescribeAccessPoints](~~36062~~)接口获取地域ID。
        * @example `AccessPointId=ap-cn-beijing-ft-A`
        */ "AccessPointId": string;
        /**
        * 提供接入物理线路的运营商，取值：
        *
        * - CT：中国电信
        * - CU：中国联通
        * - CM：中国移动
        * - CO：中国其他
        * - Equinix：Equinix
        * - Other：境外其他
        * @example `CT`
        */ "LineOperator": string;
        /**
        *  本地数据中心的地理位置。
        * @example `浙江省---vfjdbg_21e`
        */ "PeerLocation": string;
        /**
        *  客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `dgfdg12344ff`
        */ "ClientToken"?: string;
        /**
        * 专线类型，默认值：**VPC**。
        * @example `VPC`
        */ "Type"?: string;
        /**
        * 带宽包的带宽。取值范围：5-5000，单位为Mbps。
        * @example `10`
        */ "bandwidth"?: number;
        /**
        * 物理专线接入端口类型，取值：
        *
        * - 100Base-T：百兆电口
        * - 1000Base-T（默认值）：千兆电口
        * - 1000Base-LX：千兆单模光口（10千米）
        * - 10GBase-T：万兆电口
        * - 10GBase-LR：万兆单模光口（10千米）
        *
        *
        * @example `1000Base-T`
        */ "PortType"?: string;
        /**
        * 冗余物理专线的ID，该专线的状态必须为Allocated、Confirmed或Enabled。
        * @example `pc-119mfjzm7`
        */ "RedundantPhysicalConnectionId"?: string;
        /**
        *  物理专线的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
        * @example `物理专线的描述信息`
        */ "Description"?: string;
        /**
        *  物理专线的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `test`
        */ "Name"?: string;
        /**
        *   运营商的为物理专线提供的电路编码。
        * @example `longtel001`
        */ "CircuitCode"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "PhysicalConnectionId": string;
        "RequestId": string;
    }>;
    /**
    * 调用CreateCustomerGateway接口创建用户网关。
    */ CreateCustomerGateway(query: {
        /**
        * 用户网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  用户网关的IP地址。
        * @example `116.62.222.xxx`
        */ "IpAddress": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * 用户网关的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `Gateway`
        */ "Name"?: string;
        /**
        * 用户网关的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
        * @example `Gateway`
        */ "Description"?: string;
    }): Promise<{
        "CustomerGatewayId": string;
        "CreateTime": number;
        "RequestId": string;
        "IpAddress": string;
    }>;
    /**
    * 调用ModifyIpv6InternetBandwidth接口修改IPv6地址的公网带宽。
    */ ModifyIpv6InternetBandwidth(query: {
        /**
        * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * IPv6地址的公网带宽，单位：Mbps，取值范围：**1-5000**。
        * - 当**InternetChargeType**为**PayByBandwidth**，IPv6地址的公网带宽为1-5000。
        * - 当**InternetChargeType**为**PayByTraffic**，IPv6地址的公网带宽范围同时受到IPv6网关规格的制约。
        *     - **Small**（默认免费版），公网带宽范围为1-500。
        *     - **Medium**（企业版），公网带宽范围为1-1000。
        *     - **Large**（企业增强版），公网带宽范围为1-2000。
        * @example `4`
        */ "Bandwidth": number;
        /**
        * IPv6地址的实例ID。
        * @example `ipv5-1233456xxxxxxxx`
        */ "Ipv6AddressId"?: string;
        /**
        * @example `123`
        */ "Ipv6InternetBandwidthId"?: string;
        /**
        * 请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `123456`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeVpnConnections接口查询已创建的IPsec连接。
    */ DescribeVpnConnections(query: {
        /**
        * IPsec连接所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        *  VPN网关的ID。
        * @example `vpn-bp1q8bgx4xnkx****`
        */ "VpnGatewayId"?: string;
        /**
        * 用户网关的ID。
        * @example `cgw-bp1mvj4g9kogw****`
        */ "CustomerGatewayId"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * IPsec连接的ID。
        * @example `vco-bp15oes1py4i6****`
        */ "VpnConnectionId"?: string;
    }): Promise<{
        "PageNumber": number;
        "VpnConnections": {
            "VpnConnection": {
                "Name": string;
                "CustomerGatewayId": string;
                "RemoteSubnet": string;
                "IpsecConfig": {
                    "IpsecLifetime": number;
                    "IpsecAuthAlg": string;
                    "IpsecPfs": string;
                    "IpsecEncAlg": string;
                };
                "EffectImmediately": boolean;
                "VpnGatewayId": string;
                "CreateTime": number;
                "VpnConnectionId": string;
                "status": string;
                "LocalSubnet": string;
                "IkeConfig": {
                    "IkeEncAlg": string;
                    "RemoteId": string;
                    "IkePfs": string;
                    "IkeAuthAlg": string;
                    "Psk": string;
                    "IkeMode": string;
                    "IkeLifetime": number;
                    "IkeVersion": string;
                    "LocalId": string;
                };
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 查询已创建的访问控制策略组。
    */ DescribeIPv6TranslatorAclLists(query: {
        /**
        * 访问控制策略组的地域。 您可以通过调用DescribeRegions接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        *  访问控制策略组ID。
        * @example `ipv6transacl-bp1de2xxxx`
        */ "AclId"?: string;
        /**
        * 列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        *  访问控制策略组的名称。
        * @example `acl1`
        */ "AclName"?: string;
    }): Promise<{
        "RequestId": string;
        "Ipv6TranslatorAcls": {
            "AclId": string;
            "AclName": string;
        };
        "PageNumber": string;
        "PageSize": string;
        "TotalCount": string;
    }>;
    /**
    * 调用DeleteIpv6EgressOnlyRule接口删除仅主动出规则。
    */ DeleteIpv6EgressOnlyRule(query: {
        /**
        * IPv6网关的ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * 要删除的仅主动出规则ID。
        * @example `ipv6py-hp3w98rmlbqp0xxxxxxxx`
        */ "Ipv6EgressOnlyRuleId": string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `123456`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用ModifyNatGatewaySpec接口修改NAT网关的规格。
    */ ModifyNatGatewaySpec(query: {
        /**
        * NAT网关的所属地域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要修改规格的NAT网关的ID。
        * @example `ngw-bp1uewa15k4iy5770ya89`
        */ "NatGatewayId": string;
        /**
        * NAT网关的规格。取值：
        * - Small(默认值)：小型
        * - Middle：中型
        * - Large：大型
        * @example `Small`
        */ "Spec": string;
        "OwnerId"?: number;
        "AutoPay"?: boolean;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不能超过64个ASCII字符。
        * 更多信息，参考[如何保证幂等性](~~36569~~)。
        * @example `SHA234js121223xxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyEipAddressAttribute接口修改指定EIP的名称、描述信息和带宽峰值。
    */ ModifyEipAddressAttribute(query: {
        /**
        * 路由表所属的VPC的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        *  EIP的带宽峰值，单位为Mbps。
        * @example `100`
        */ "Bandwidth"?: string;
        /**
        *  弹性公网IP的ID。
        * @example `eip-2zeerraiwb7uj6i0d0fo3`
        */ "AllocationId": string;
        /**
        *  EIP的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `Test123`
        */ "Name"?: string;
        /**
        *  EIP的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `描述`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyIpv6GatewaySpec接口修改IPv6网关的规格。
    */ ModifyIpv6GatewaySpec(query: {
        /**
        * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * IPv6网关的ID。
        * @example `ipv6gw-123456xxxxxxxx`
        */ "Ipv6GatewayId": string;
        /**
        * IPv6网关的规格，取值：
        * - **Small**（默认值）：免费版。
        * - **Middle**：企业版。
        * - **Large**：企业增强版。
        * @example `Middle`
        */ "Spec": string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `123456`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RecoverVirtualBorderRouter接口恢复被终止的边界路由器（VBR）。
    */ RecoverVirtualBorderRouter(query: {
        /**
        * VBR所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  VBR的ID。
        * @example `vbr-bp1lhl0taikrte****`
        */ "VbrId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteGlobalAccelerationInstance接口删除全球加速实例。
    */ DeleteGlobalAccelerationInstance(query: {
        /**
        * 全球加速实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  全球加速实例的ID。
        * @example `ga-asdfsl22s****`
        */ "GlobalAccelerationInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteSslVpnServer接口删除SSL-VPN服务端实例。
    */ DeleteSslVpnServer(query: {
        /**
        * SSL-VPN服务端所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  SSL-VPN服务端的ID。
        * @example `vss-bp18q7hzj6largv4v****`
        */ "SslVpnServerId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeVSwitchAttributes接口查询指定交换机的配置信息。
    */ DescribeVSwitchAttributes(query: {
        /**
        * 路由表所属的VPC的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        *  要查询的交换机ID。
        * @example `vsw-25naue4g****`
        */ "VSwitchId": string;
        "DryRun"?: boolean;
    }): Promise<{
        "RouteTable": {
            "RouteTableId": string;
            "RouteTableType": string;
        };
        "Description": string;
        "IsDefault": boolean;
        "AvailableIpAddressCount": number;
        "ResourceGroupId": string;
        "ZoneId": string;
        "VSwitchId": string;
        "VpcId": string;
        "CreationTime": string;
        "Status": string;
        "CidrBlock": string;
        "RequestId": string;
        "VSwitchName": string;
        "Ipv6CidrBlock": string;
        "CloudResources": {
            "CloudResourceSetType": any[];
        };
    }>;
    /**
    * 调用DescribeGlobalAccelerationInstances接口查询已创建的全球加速实例列表。
    */ DescribeGlobalAccelerationInstances(query: {
        /**
        * 全球加速实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 是否包含未生效的订购数据，默认是**false**。
        * @example `false`
        */ "IncludeReservationData"?: boolean;
        /**
        *  全球加速实例的ID。
        * @example `ga-234sljmxaz****`
        */ "GlobalAccelerationInstanceId"?: string;
        /**
        * 全球加速实例公网 IP。
        * @example `12.34.56.78`
        */ "IpAddress"?: string;
        /**
        *  全球加速实例的名称。
        * @example `GA-1`
        */ "Name"?: string;
        /**
        * 全球加速实例状态，取值：
        * - **Available**：可用
        * - **Inuse**：已分配
        *
        * - **Associating**：绑定中
        *
        * - **Unassociating**：解绑中
        * @example `Available`
        */ "Status"?: string;
        /**
        * 实例带宽类型，取值：
        *
        * - **Sharing**：查询带宽共享型实例
        *
        * - **Exclusive**（默认值）：查询带宽独享型实例
        * @example `Exclusive`
        */ "BandwidthType"?: string;
        /**
        * 被加速的服务的所属区域。取值：
        * - **china-mainland**：中国大陆
        * - **north-america**：北美
        *
        * - **asia-pacific**：亚太
        *
        * - **europe**：欧洲
        * @example `china-mainland`
        */ "ServiceLocation"?: string;
        /**
        * 加速的后端服务器的实例ID。
        * @example `i-sxjbl9x****`
        */ "ServerId"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `10`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "GlobalAccelerationInstances": {
            "GlobalAccelerationInstance": {
                "ChargeType": string;
                "GlobalAccelerationInstanceId": string;
                "HasReservationData": boolean;
                "Description": string;
                "BackendServers": {
                    "BackendServer": {
                        "ServerId": string;
                        "RegionId": string;
                        "ServerType": string;
                        "ServerIpAddress": string;
                    }[];
                };
                "IpAddress": string;
                "InternetChargeType": string;
                "Name": string;
                "BandwidthType": string;
                "CreationTime": string;
                "Status": string;
                "ServiceLocation": string;
                "RegionId": string;
                "AccelerationLocation": string;
                "OperationLocks": {
                    "LockReason": any[];
                };
                "ExpiredTime": string;
                "PublicIpAddresses": {
                    "PublicIpAddress": any[];
                };
                "Bandwidth": string;
            }[];
        };
    }>;
    /**
    * 使用UnassociateEipAddress将弹性公网IP（EIP）从绑定的云资源上解绑。
    */ UnassociateEipAddress(query: {
        /**
        * 弹性公网IP的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        *  要解绑的云产品的实例ID。
        * @example `i-12345678`
        */ "InstanceId": string;
        "OwnerId"?: number;
        "Force"?: boolean;
        /**
        *  EIP的ID。
        * @example `eip-2zeerraiwb7uj6i0d0fo3`
        */ "AllocationId": string;
        /**
        * 要解绑的资源类型，取值：
        * - EcsInstance（默认值）：专有网络的ECS实例
        * - SlbInstance：专有网络的SLB实例
        * - Nat：NAT网关
        * - HaVip：HAVIP
        * @example `EcsInstance`
        */ "InstanceType"?: string;
        "PrivateIpAddress"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyCommonBandwidthPackageSpec接口更改共享带宽的带宽峰值。
    */ ModifyCommonBandwidthPackageSpec(query: {
        /**
        * 共享带宽实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  共享带宽实例的ID。
        * @example `cbwp-2ze2ic1xd2qeqk145pn4u`
        */ "BandwidthPackageId": string;
        /**
        *  共享带宽实例的带宽峰值，单位为Mbps。
        * @example `100`
        */ "Bandwidth": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateIpv6EgressOnlyRule接口为IPv6地址添加仅主动出规则。
    */ CreateIpv6EgressOnlyRule(query: {
        /**
        * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * IPv6网关的ID。
        * @example `ipv6gw-hp3c2paq0ywauxxxxxxxx`
        */ "Ipv6GatewayId": string;
        /**
        * 需要设置仅主动出规则的IPv6地址所关联的ECS实例ID。
        * @example `i-hp39cmfr1x6zxxxxxxxx`
        */ "InstanceId": string;
        /**
        * 需要设置仅主动出规则的实例类型，取值：
        * **Ipv6Address**（默认值）：IPv6地址。
        * @example `IPv6Address`
        */ "InstanceType"?: string;
        /**
        * 仅主动出规则的名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字、点号(.)、下划线(_)和短橫线(-)，但不能以`http://`或`https://`开头。
        * @example `rulename`
        */ "Name"?: string;
        /**
        * 仅主动出规则的描述。
        * 长度为2-256个字符，必须以字母或中文开头，可包含数字、点号(.)、下划线(_)和短橫线(-)，但不能以`http://`或`https://`开头。
        * @example `ruledescription`
        */ "Description"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `123456`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "Ipv6EgressRuleId": string;
        "RequestId": string;
    }>;
    /**
    * 使用CreateForwardEntry在DNAT列表中添加DNAT条目。
    */ CreateForwardEntry(query: {
        /**
        *  NAT网关所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  DNAT列表的ID。
        * @example `ftb-bp1mbjubq34hlcqpa5u3a`
        */ "ForwardTableId": string;
        /**
        *  公网IP地址。
        * @example `116.xx.xx.28`
        */ "ExternalIp": string;
        /**
        * 公网端口。取值范围：1-65535
        * @example `8080`
        */ "ExternalPort": string;
        /**
        * 目标私网IP。
        * @example `192.168.xx.xx`
        */ "InternalIp": string;
        /**
        * 目标私网端口。取值范围：1-65535
        * @example `80`
        */ "InternalPort": string;
        /**
        * 协议类型。取值：
        * - TCP：转发TCP协议的报文。
        * - UDP：转发UDP协议的报文。
        * - Any：转发所有协议的报文。
        * @example `TCP`
        */ "IpProtocol": string;
        "OwnerId"?: number;
        /**
        * DNAT规则的名称。长度为2-128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `ForwardEntry-1`
        */ "ForwardEntryName"?: string;
    }): Promise<{
        "ForwardEntryId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DeleteRouterInterface接口删除路由器接口。
    */ DeleteRouterInterface(query: {
        /**
        *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  路由器接口的ID。
        * @example `ri-2zeo3xzyf38r4urz****`
        */ "RouterInterfaceId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `qwefcc12123333334f`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateVirtualBorderRouter接口新建边界路由器（VBR）。
    */ CreateVirtualBorderRouter(query: {
        /**
        *  物理专线所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  物理专线的ID。
        * @example `pc-xxxxxxxxx`
        */ "PhysicalConnectionId": string;
        /**
        *  VBR的VLAN ID，取值范围为：**[1,2999]**。
        *
        * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
        * @example `10`
        */ "VlanId": number;
        /**
        *  VBR所有者的账号ID。 默认为当前用户的账号ID，即为物理专线的所有者创建VBR。
        * @example `10`
        */ "VbrOwnerId"?: number;
        /**
        * 运营商为物理专线提供的电路编码。
        *
        * > 只有物理专线的所有者可以指定该参数。
        * @example `longtel001`
        */ "CircuitCode"?: string;
        /**
        *  VBR的阿里云侧互联IP。
        * @example `116.62.222.XX`
        */ "LocalGatewayIp"?: string;
        /**
        * VBR专线侧接口对端的IP地址。该属性只允许VBR owner指定/修改。为专线所有者创建VBR时必填，为其他账号创建VBR时不可填。
        * @example `116.62.222.XX`
        */ "PeerGatewayIp"?: string;
        /**
        *   VBR的阿里云侧和客户侧互联IP的子网掩码。 两个IP地址必须位于同一个子网中。
        * @example `255.255.255.252`
        */ "PeeringSubnetMask"?: string;
        /**
        * VBR的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
        * @example `VBR描述信息`
        */ "Description"?: string;
        /**
        * VBR的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `test`
        */ "Name"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "VbrId": string;
    }>;
    /**
    * 调用AddCommonBandwidthPackageIp接口添加EIP到共享带宽中。
    */ AddCommonBandwidthPackageIp(query: {
        /**
        * 共享带宽所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  共享带宽的ID。
        * @example `cbwp-2ze2ic1xd2qeqxxxxxxxx`
        */ "BandwidthPackageId": string;
        /**
        * EIP实例的ID。
        * 您可以通过调用[DescribeEipAddresses](~~36018~~)接口查询EIP实例的ID。
        * @example `eip-2zeerraiwb7uxxxxxxxx`
        */ "IpInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    /**
    * 在物理专线开通后调用TerminatePhysicalConnection接口终止物理专线接入。
    */ TerminatePhysicalConnection(query: {
        /**
        * 物理专线所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  物理专线的ID。
        * @example `pc-119mfjzm7`
        */ "PhysicalConnectionId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeIpv6Addresses接口查询IPv6地址列表。
    */ DescribeIpv6Addresses(query: {
        /**
        * IPv6地址所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-huhehaote`
        */ "RegionId": string;
        /**
        * IPv6地址实例的ID。每次调用最多可以输入20个实例ID，以逗号（,）分隔。
        * @example `ipv6gw-hp33of4uz4k4kxxxxxxxx`
        */ "Ipv6AddressId"?: string;
        /**
        * 要查询的IPv6地址。
        * @example `2408:xxxx:180:1701:94c7:bc38:3bfa:d2c`
        */ "Ipv6Address"?: string;
        /**
        * IPv6地址的名称。
        * @example `test`
        */ "Name"?: string;
        /**
        * IPv6地址关联的实例ID。
        * @example `i-123456xxxxxxxx`
        */ "AssociatedInstanceId"?: string;
        /**
        * IPv6地址所关联的实例类型，取值：
        * **EcsInstance**（默认值）：VPC类型的ECS。
        * @example `EcsInstance`
        */ "AssociatedInstanceType"?: string;
        /**
        * IPv6地址的通信能力类型，取值：
        * - **Private**：私网通信类型。
        * - **Public**：公网通信类型。
        * @example `Public`
        */ "NetworkType"?: string;
        /**
        * IPv6地址所在的VPC ID。
        * @example `vpc-123456xxxxxxxx`
        */ "VpcId"?: string;
        /**
        * IPv6地址所在的交换机ID。
        * @example `vsw-123456xxxxxxxx`
        */ "VSwitchId"?: string;
        /**
        * IPv6地址的公网带宽。
        * @example `1`
        */ "Ipv6InternetBandwidthId"?: string;
        /**
        * 列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
        "OwnerId"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "Ipv6Addresses": {
            "Ipv6Address": {
                "Ipv6AddressId": string;
                "AssociatedInstanceType": string;
                "AllocationTime": string;
                "Ipv6InternetBandwidth": {
                    "BusinessStatus": string;
                    "Ipv6InternetBandwidthId": string;
                    "InternetChargeType": string;
                    "Bandwidth": number;
                };
                "VSwitchId": string;
                "VpcId": string;
                "Ipv6GatewayId": string;
                "Status": string;
                "NetworkType": string;
                "Ipv6Address": string;
                "Ipv6AddressName": string;
                "AssociatedInstanceId": string;
                "RealBandwidth": number;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用CreateVSwitch接口创建一个交换机。
    */ CreateVSwitch(query: {
        /**
        * 交换机的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 交换机的网段。交换机网段要求如下：
        * - 交换机网段的掩码长度范围为16-29位。
        * - 交换机的网段必须从属于所在VPC的网段。
        * - 交换机的网段不能与所在VPC中路由条目的目标网段相同，但可以是目标网段的子集。
        * - 如果交换机的网段与所在VPC的网段相同时，VPC只能有一个交换机。
        * @example `172.16.0.0/24`
        */ "CidrBlock": string;
        /**
        *  交换机所属的VPC ID。
        * @example `vpc-257gq6n****`
        */ "VpcId": string;
        "OwnerId"?: number;
        /**
        *  交换机所属区的ID。 您可以通过调用[DescribeZones](https://help.aliyun.com/document_detail/36063.html?spm=a2c4g.11186623.2.13.672255b1Ti4hEp)接口获取地域ID。
        * @example `cn-hangzhou-b`
        */ "ZoneId": string;
        /**
        * 交换机的IPv6网段，支持自定义VPC IPv6网段的最后8bit。取值：**0-255（十进制）**。
        * 交换机的IPv6网段掩码默认为64位。
        * @example `0`
        */ "Ipv6CidrBlock"?: number;
        /**
        * 交换机的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `VSwitch-1`
        */ "VSwitchName"?: string;
        /**
        * 交换机的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
        * @example `This is my vswitch.`
        */ "Description"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `dhueeuxxxxxxdde`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
        "VSwitchId": string;
    }>;
    /**
    * 调用CreatePhysicalConnectionOccupancyOrder创建初装费订单。
    */ CreatePhysicalConnectionOccupancyOrder(query: {
        /**
        * 物理专线所在的地域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 物理专线的实例ID。
        * @example `pc-bp1hp0wr072f6ambni141`
        */ "PhysicalConnectionId": string;
        /**
        * 购买时长。
        * @example `1`
        */ "Period"?: number;
        /**
        * 实例的付费方式。取值范围：
        * - PrePaid：预付费，包年包月。选择该类付费方式时，您必须确认自己的账号支持余额支付/信用支付。
        * - PostPaid（默认）：按量付费。
        * @example `PostPaid`
        */ "InstanceChargeType"?: string;
        /**
        * 是否自动支付。取值范围：
        * - true（默认）：自动支付。您需要确保账户余额充足，如果账户余额不足会生成异常订单，只能作废订单。
        * - false：只生成订单不扣费。
        * @example `true`
        */ "AutoPay"?: boolean;
        /**
        * 订购的周期单位。
        * - 年：Year。
        * - 月：Month。
        * @example `Month`
        */ "PricingCycle"?: string;
        "OwnerId"?: number;
        /**
        * 客户端Token鉴权。
        * @example `CBCE910E-D396-4944-8764-B4047838B2D1`
        */ "ClientToken"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "orderId": number;
        };
        "httpStatusCode": number;
        "message": string;
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用ConnectRouterInterface接口由发起端路由器接口向接收端发起连接。
    */ ConnectRouterInterface(query: {
        /**
        *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example ` cn-hangzhou`
        */ "RegionId": string;
        /**
        *  发起端路由器接口的ID。
        * @example `ri-2zeo3xzyf38r4urzd****`
        */ "RouterInterfaceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCustomerGateway接口查询已创建的用户网关的详细信息。
    */ DescribeCustomerGateway(query: {
        /**
        * 用户网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  用户网关的ID。
        * @example `vpn-bp1q8bgx4xnkm2ogj****`
        */ "CustomerGatewayId": string;
        "OwnerId"?: number;
    }): Promise<{
        "CustomerGatewayId": string;
        "Name": string;
        "RequestId": string;
        "CreateTime": number;
        "IpAddress": string;
    }>;
    /**
    * 调用RemoveCommonBandwidthPackageIp接口移除共享带宽实例中的EIP。
    */ RemoveCommonBandwidthPackageIp(query: {
        /**
        * 共享带宽实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  共享带宽实例的ID。
        * @example `cbwp-2ze2ic1xd2qeqk145pn4u`
        */ "BandwidthPackageId": string;
        /**
        * EIP实例的ID。
        * 您可以通过调用[DescribeEipAddresses](~~36018~~)接口查询EIP实例的ID。
        * @example `eip-2zeerraiwb7uj6i0d0fo3`
        */ "IpInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteRouteEntry接口删除VPC路由器或边界路由器的路由表中的路由条目。
    */ DeleteRouteEntry(query: {
        /**
        * 路由表所属地域的ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        *  路由条目所在的路由表的ID。
        * @example `trb-2ze3jgygk9bmsj23s****`
        */ "RouteTableId"?: string;
        /**
        * 路由条目ID。
        * @example `rte-bp1mnnr2al0naomnpvxxx`
        */ "RouteEntryId"?: string;
        /**
        *  路由条目的目标网段，支持IPv4和IPv6网段。
        * @example `0.0.0.0/0`
        */ "DestinationCidrBlock"?: string;
        /**
        * 下一跳实例的ID。
        * @example `ri-2zeo3xzyf38r4urzd****`
        */ "NextHopId"?: string;
        "NextHopList"?: string[];
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用CreateBandwidthPackage接口创建NAT带宽包。
    */ CreateBandwidthPackage(query: {
        /**
        *  NAT带宽包所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  NAT网关的ID。
        * @example `ngw-7mwb327j1`
        */ "NatGatewayId": string;
        /**
        * NAT带宽包中的公网IP数量，取值范围：1-50
        * @example `2`
        */ "IpCount": number;
        /**
        * NAT带宽包的带宽。
        * 取值范围：5-1000
        * @example `5`
        */ "Bandwidth": number;
        "OwnerId"?: number;
        /**
        *  NAT带宽包的名称。  长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `带宽包名称`
        */ "Name"?: string;
        /**
        *  NAT带宽包的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `带宽包描述`
        */ "Description"?: string;
        /**
        *  客户端token，用于保证请求的幂等性。 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `she11234556664566`
        */ "ClientToken"?: string;
        /**
        * 目前只支持一种：BGP。
        * @example `BGP`
        */ "ISP"?: string;
        /**
        * NAT带宽包位于的可用区。
        * 不指定该参数时，系统将随机分配一个可用区。
        * > NAT带宽包上的IP与后端ECS不处于同一个可用区，并不影响其连通性；但是位于相同可用区时，可减小延迟。
        * @example `cn-shanghai-a`
        */ "Zone"?: string;
        /**
        * - PayByBandwidth：按带宽计费
        * @example `PayByBandwidth`
        */ "InternetChargeType"?: string;
    }): Promise<{
        "BandwidthPackageId": string;
        "RequestId": string;
    }>;
    /**
    * 调用CreateVpc接口创建一个专有网络（VPC）。
    */ CreateVpc(query: {
        /**
        * VPC所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        *  VPC的网段。您可以使用以下网段或其子集：
        *
        * * 10.0.0.0/8。
        * * 172.16.0.0/12（默认值）。
        * * 192.168.0.0/16。
        * @example `172.16.0.0/12`
        */ "CidrBlock"?: string;
        /**
        * VPC的IPv6网段。
        * @example `2408:4004:0:6axx::/56`
        */ "Ipv6CidrBlock"?: string;
        /**
        * 是否开启IPv6网段，取值：
        * - **false**（默认值）：不开启。
        *
        * - **true**：开启。
        * @example `false`
        */ "EnableIpv6"?: boolean;
        /**
        * VPC的名称。长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http:// `或`https://`开头。
        * @example `vpc-hp3ld1aq7kl4k7skh****`
        */ "VpcName"?: string;
        /**
        * VPC的描述信息。长度为2-256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `This is my first Vpc.`
        */ "Description"?: string;
        /**
        * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
        * @example `rg-acfmxazb4ph6aiy****`
        */ "ResourceGroupId"?: string;
        "DryRun"?: boolean;
        /**
        * 用户侧网络的网段，如需定义多个网段请使用半角逗号隔开，最多支持3个网段。
        * VPC定义的默认私网转发网段为10.0.0.0/8、172.16.0.0/12、192.168.0.0/16、100.64.0.0/10和VPC CIDR网段。如果ECS实例或弹性网卡已经具备了公网访问能力（ECS实例分配了固定公网IP、ECS实例或弹性网卡绑定了公网IP、ECS实例或弹性网卡设置了DNAT IP映射规则），这类资源访问非上述默认私网转发网段的请求均会通过公网IP直接转发至公网。当希望按照路由表在私网（如VPC内、通过VPN/高速通道/云企业网搭建的混合云网络）转发访问非上述默认私网网段的请求时，需要将网络请求的目的网段设置为ECS或弹性网卡所在VPC的UserCidr。为VPC设置UserCidr后，该VPC中访问UserCidr地址的请求将按照路由表进行转发，而不通过公网IP转发。
        * @example `189.16.0.0/12`
        */ "UserCidr"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `sha223ndd2333`
        */ "ClientToken"?: string;
    }): Promise<{
        "ResourceGroupId": string;
        "RequestId": string;
        "RouteTableId": string;
        "VRouterId": string;
        "VpcId": string;
    }>;
    /**
    * 调用CreateRouteEntry接口在VPC路由器或边界路由器（VBR）上创建自定义路由条目。
    */ CreateRouteEntry(query: {
        /**
        * 路由表所属地域的ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 自定义路由条目的目标网段，支持IPv4和IPv6的目标网段。需满足以下要求：
        *
        * - 目标网段不能指向100.64.0.0/10或被100.64.0.0/10包含。
        *
        * - 同一张路由表内的不同路由条目的目标网段不能相同。
        *
        * - 如果提供的目标网段是一个IP地址，掩码将按照32位处理。
        * - 如果提供的目标网段是一个IPv6地址，掩码将按照128位处理。
        * @example `192.168.0.1/24`
        */ "DestinationCidrBlock": string;
        "OwnerId"?: number;
        /**
        *  路由表ID。
        * @example `vtb-bp145q7glnuzd****`
        */ "RouteTableId": string;
        /**
        * 下一跳实例的ID。
        * @example `ri-2zeo3xzyf38r4****`
        */ "NextHopId"?: string;
        "PrivateIpAddress"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-001****`
        */ "ClientToken"?: string;
        "RouteEntryName"?: string;
        /**
        * 下一跳的类型，取值：
        * - ** Instance**：ECS实例（默认值）
        * - **HaVip**：高可用虚拟IP
        * - **RouterInterface**：路由器接口
        * - **NetworkInterface**：弹性网卡
        * - **VpnGateway**：VPN网关
        * - **IPv6Gateway**：IPv6网关
        * @example `RouterInterface`
        */ "NextHopType"?: string;
        "NextHopList"?: string[];
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteCustomerGateway接口删除指定的用户网关。
    */ DeleteCustomerGateway(query: {
        /**
        * 用户网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  用户网关的ID。
        * @example `vpn-bp1q8bgx4xnkm2ogj****`
        */ "CustomerGatewayId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateBgpPeer接口向指定的BGP组中添加BGP邻居。
    */ CreateBgpPeer(query: {
        /**
        * BGP组所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  BGP组的ID。
        * @example `bgpg-wz9f62v4fbgxxxxxxxx`
        */ "BgpGroupId": string;
        "OwnerId"?: number;
        /**
        * BGP邻居的IP地址。
        * @example `116.62.xx.xx`
        */ "PeerIpAddress"?: string;
        /**
        * 是否开启BFD功能，取值：
        * - **true**：开启BFD功能。
        * - **false**：不开启BFD功能。
        * @example `true`
        */ "EnableBfd"?: boolean;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-001xxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSslVpnServers接口查询已创建的SSL-VPN服务端。
    */ DescribeSslVpnServers(query: {
        /**
        * SSL-VPN服务端所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * SSL-VPN服务端的ID。
        * @example `vss-bp15j3du13gq1dgey****`
        */ "SslVpnServerId"?: string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1on0xae9d771ggi****`
        */ "VpnGatewayId"?: string;
        /**
        * SSL-VPN服务端的名称。
        * @example `test`
        */ "Name"?: string;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": string;
        "TotalCount": string;
        "PageSize": string;
        "SslVpnServers": {
            "SslVpnServer": {
                "RegionId": string;
                "SslVpnServerId": string;
                "VpnGatewayId": string;
                "Name": string;
                "CLientIpPool": string;
                "LocalSubnet": string;
                "Proto": string;
                "Port": string;
                "Cipher": string;
                "Compress": string;
                "CreateTime": string;
                "Connections": string;
                "MaxConnections": string;
                "InternetIp": string;
            };
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribePhysicalConnections接口查询指定地域内的物理专线。
    */ DescribePhysicalConnections(query: {
        /**
        * 物理专线所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  列表的页码，默认值为1。
        * @example `10`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为50，默认值为10。
        * @example `1`
        */ "PageSize"?: number;
        "Filter"?: string[];
        /**
        * 是否返回未生效订单。
        * @example `false`
        */ "IncludeReservationData"?: boolean;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
        * @example `23243242rggyt`
        */ "ClientToken"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "PhysicalConnectionSet": {
            "PhysicalConnectionType": {
                "Type": string;
                "PhysicalConnectionId": string;
                "PeerLocation": string;
                "CreationTime": string;
                "Name": string;
                "Status": string;
                "AdLocation": string;
                "EnabledTime": string;
                "BusinessStatus": string;
                "LineOperator": string;
                "PortNumber": string;
                "AccessPointId": string;
                "PortType": string;
                "Bandwidth": number;
            }[];
        };
    }>;
    /**
    * 调用DeleteForwardEntry接口删除指定的DNAT条目。
    */ DeleteForwardEntry(query: {
        /**
        * NAT网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  DNAT列表ID。
        * @example `ftb-8vbx8xu2lqj9qb334h0ow`
        */ "ForwardTableId": string;
        /**
        *  DNAT条目ID。
        * @example `fwd-8vbn3bc8roygjp0gy3xk7`
        */ "ForwardEntryId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeVpnConnection接口查询已创建的IPsec连接的详细信息。
    */ DescribeVpnConnection(query: {
        /**
        * IPsec连接所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  IPsec连接的ID。
        * @example `vco-bp1bbi27hojx80nck****`
        */ "VpnConnectionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "PageNumber": number;
        "VpnConnections": {
            "VpnConnection": {
                "Name": string;
                "CustomerGatewayId": string;
                "Status": string;
                "RemoteSubnet": string;
                "IpsecConfig": {
                    "IpsecLifetime": number;
                    "IpsecAuthAlg": string;
                    "IpsecPfs": string;
                    "IpsecEncAlg": string;
                };
                "EffectImmediately": boolean;
                "VpnGatewayId": string;
                "CreateTime": number;
                "VpnConnectionId": string;
                "LocalSubnet": string;
                "IkeConfig": {
                    "IkeEncAlg": string;
                    "RemoteId": string;
                    "IkePfs": string;
                    "IkeAuthAlg": string;
                    "Psk": string;
                    "IkeMode": string;
                    "IkeLifetime": number;
                    "IkeVersion": string;
                    "LocalId": string;
                };
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用ApplyPhysicalConnectionLOA申请LOA。
    */ ApplyPhysicalConnectionLOA(query: {
        /**
        * 专线实例所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 物理专线实例ID。
        * @example `pc-bp1qrb3044eqixxxxxxxx`
        */ "InstanceId": string;
        /**
        * 物理专线接入的客户公司名称。
        * @example `company`
        */ "CompanyName": string;
        /**
        * 物理专线类型。
        * @example `SDH`
        */ "LineType": string;
        /**
        * 物理专线施工单位。
        * @example `阿里`
        */ "Si": string;
        /**
        * 施工单位入场时间。
        * @example `2019-02-28T16:00:00.000Z`
        */ "ConstructionTime": string;
        /**
        * 客户端鉴权。
        * @example `A47BD386-7FDE-4xxx4-8D22-C62xxxxxxxx`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
        /**
        * 物理专线带宽值。
        * @example `3`
        */ "Bandwidth"?: number;
        /**
        * 物理专线部署地理位置。
        * @example `杭州`
        */ "PeerLocation"?: string;
        "PMInfo"?: string[];
    }): Promise<{
        "code": string;
        "httpStatusCode": number;
        "message": string;
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用DescribeEipMonitorData接口查看EIP的监控信息。
    */ DescribeEipMonitorData(query: {
        /**
        * EIP所属地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        *  获取数据的起始时间。 使用UTC时间。按照ISO8601标准，格式为YYYY-MM-DDThh:mm:ssZ。 例如，北京时间2013年1月10日20点0分0秒，表示为2013-01-10T12:00:00Z。
        * 如果秒不是00，则自动取下一分钟为起始时间点。
        * @example `2017-01-05T02:05:05Z`
        */ "StartTime": string;
        /**
        *  获取数据的结束时间。 使用UTC时间。按照ISO8601标准，格式为YYYY-MM-DDThh:mm:ssZ。 例如，北京时间2013年1月10日20点0分0秒，表示为2013-01-10T12:00:00Z。
        * 如果秒不是00，则自动取下一分钟为起始时间点。
        * @example `2017-01-05T01:05:10Z`
        */ "EndTime": string;
        "OwnerId"?: number;
        /**
        * EIP的实例ID。
        * @example `eip-2zeerraiwb7uj6ixxxxxxxx`
        */ "AllocationId": string;
        /**
        * 每条监控数据的时间长度，单位为秒，默认值为60，取值：  [60, 600, 3600]
        * - （EndTime–StartTime）/ Peroid必须大于200，即最多返回200条监控数据。
        * - 如果EndTime–StartTime小于200则只返回起始时间点的监控数据。
        * @example `60`
        */ "Period"?: number;
    }): Promise<{}>;
    /**
    * 使用DescribeBgpPeers查询指定地域下的BGP邻居。
    */ DescribeBgpPeers(query: {
        /**
        * BGP组所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 所有者ID。
        * @example `1333738069500000`
        */ "OwnerId"?: number;
        /**
        * 路由器的ID。
        * @example `vrt-acfmxazb4ph6aiy`
        */ "RouterId"?: string;
        /**
        *  BGP邻居的ID。
        * @example `bgp-2ze3un0ft1jd1xdppusul`
        */ "BgpPeerId"?: string;
        /**
        * 指定BGP组的ID。
        * @example `bgpg-2zev8h2wo414sfhjgdlhh`
        */ "BgpGroupId"?: string;
        /**
        * 是否是默认BGP组。
        * @example `false`
        */ "IsDefault"?: boolean;
        /**
        *  列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为50，默认值为10。
        * @example `1`
        */ "PageSize"?: number;
    }): Promise<{
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "BgpPeers": {
            "BgpPeer": {
                "BgpGroupId": string;
                "LocalAsn": number;
                "PeerIpAddress": string;
                "Hold": number;
                "Description": string;
                "AuthKey": string;
                "IsFake": boolean;
                "PeerAsn": number;
                "Keepalive": number;
                "RouteLimit": number;
                "BgpPeerId": string;
                "Name": string;
                "Status": string;
                "BgpStatus": string;
                "RouterId": string;
                "RegionId": string;
            }[];
        };
    }>;
    /**
    * 调用ModifySnatEntry接口修改指定的SNAT条目。
    */ ModifySnatEntry(query: {
        /**
        * NAT网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  SNAT表ID。
        * @example `stb-8vbczigrhop8x5u3twlhd`
        */ "SnatTableId": string;
        /**
        *  SNAT条目ID。
        * @example `snat-bp1vcgcf8tm0plqcgfl04`
        */ "SnatEntryId": string;
        "OwnerId"?: number;
        /**
        * 公网IP地址。多个IP之间逗号隔开。
        * @example `47.XXX.XXX.98`
        */ "SnatIp"?: string;
        /**
        * SNAT条目的名称。长度为2-128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `SnatEntry-1`
        */ "SnatEntryName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用AddBgpNetwork宣告BGP网络。
    */ AddBgpNetwork(query: {
        /**
        * VBR组所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  需要和本地IDC互连的VPC或交换机的网段。
        * @example `10.110.192.12/32`
        */ "DstCidrBlock": string;
        /**
        *   VBR的ID。
        * @example `vrt-2zeo3xzyf38r4urzdpvfs`
        */ "RouterId": string;
        "OwnerId"?: number;
        /**
        * VPC的ID。
        * @example `vpc-bp1qpo0kug3a20qqe9h7v`
        */ "VpcId"?: string;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用DeactivateRouterInterface冻结路由器接口。
    */ DeactivateRouterInterface(query: {
        /**
        *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  路由器接口的ID。
        * @example `ri-2zeo3xzyf38r4urzdpvfs`
        */ "RouterInterfaceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 使用DeleteBgpGroup删除指定的BGP组。
    */ DeleteBgpGroup(query: {
        /**
        * BGP组所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  BGP组的ID。
        * @example `bgpg-wz9f62v4fbg2gxxxxxxxx`
        */ "BgpGroupId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UnassociateGlobalAccelerationInstance接口解绑与全球加速实例关联的后端服务实例。
    */ UnassociateGlobalAccelerationInstance(query: {
        /**
        * 全球加速实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  全球加速实例的ID。
        * @example `ga-1sxee33****`
        */ "GlobalAccelerationInstanceId": string;
        "OwnerId"?: number;
        /**
        * 实例类型，取值：
        * - **RemoteEcsInstance**：ECS实例
        * - **RemoteSlbInstance**：负载均衡实例
        * - **RemoteEniInstance**：弹性网卡实例
        * @example `EcsInstance`
        */ "InstanceType"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用TerminateVirtualBorderRouter接口终止边界路由器（VBR）。
    */ TerminateVirtualBorderRouter(query: {
        /**
        * VBR所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  VBR的ID。
        * @example `vbr-bp15zckdt37pq72****`
        */ "VbrId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateSnatEntry接口在SNAT列表中添加SNAT条目。
    */ CreateSnatEntry(query: {
        /**
        * NAT网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  SNAT表ID。
        * @example `stb-bp190wu8io1vgev****`
        */ "SnatTableId": string;
        /**
        * 公网IP地址，多个IP之间用逗号隔开。
        * @example `47.XX.XX.98`
        */ "SnatIp": string;
        "OwnerId"?: number;
        /**
        * 需要公网访问的交换机的ID。
        * @example `vsw-bp1nhx2s9ui5o****`
        */ "SourceVSwitchId"?: string;
        /**
        * 交换机或ECS实例的网段。
        * - 交换机粒度：指定交换机的网段（如192.168.1.0/24），当交换机下的ECS实例发起互联网访问请求时，NAT网关会为其提供SNAT服务（代理上网服务）。如果**SnatIp**仅指定了一个公网IP，ECS实例使用指定的公网IP访问互联网；如果**SnatIp**指定了多个公网IP，ECS实例随机使用**SnatIp**中的公网IP访问互联网。
        * - ECS粒度：指定ECS实例的地址（如192.168.1.1/32），当ECS实例发起互联网访问请求时，NAT网关会为其提供SNAT服务（代理上网服务）。如果**SnatIp**仅指定了一个公网IP，ECS实例使用指定的公网IP访问互联网；如果**SnatIp**指定了多个公网IP，ECS实例随机使用**SnatIp**中的公网IP访问互联网。
        * > 此参数和**SourceVSwtichId**参数互斥，不能同时出现。如果指定了**SourceVSwitchId**，则不能指定**SourceCIDR**参数。如果指定了**SourceCIDR**参数，则不能指定**SourceVSwitchId**参数。
        * @example `10.1.1.0/24`
        */ "SourceCIDR"?: string;
        /**
        * SNAT条目的名称。长度为2-128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `SnatEntry-1`
        */ "SnatEntryName"?: string;
    }): Promise<{
        "SnatEntryId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRouteTables接口查询路由表的路由条目。
    */ DescribeRouteTables(query: {
        /**
        * 路由表所属的VPC的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 路由表所属的VPC路由器的ID。
        * 指定该参数后，参数**RouterType**的值自动设置为**VRouter**。
        * @example `vtb-bp1krxxzp0c29fmon****`
        */ "VRouterId"?: string;
        /**
        *  路由表的ID。
        * @example `rtb-bp12mw1f8k3jgygk9****`
        */ "RouteTableId"?: string;
        /**
        * 路由表所属的路由器类型。取值：
        * - **VRouter**：VPC路由器
        *
        * - **VBR**：边界路由器
        * @example `VRouter`
        */ "RouterType"?: string;
        /**
        *  路由表所属的VPC路由器或边界路由器的ID。
        * @example `vtb-bp1krxxzp0c29fmon****`
        */ "RouterId"?: string;
        /**
        * 路由表类型。
        * @example `custom`
        */ "Type"?: string;
        /**
        * 路由表的名称。
        * @example `RouteTable-1`
        */ "RouteTableName"?: string;
        /**
        * 资源组ID。
        * @example `rg-acfmxazb4ph****`
        */ "ResourceGroupId"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "RouteTables": {
            "RouteTable": {
                "CreationTime": string;
                "RouteEntrys": {
                    "RouteEntry": {
                        "NextHops": {
                            "NextHop": any[];
                        };
                        "Status": string;
                        "Type": string;
                        "InstanceId": string;
                        "NextHopType": string;
                        "RouteTableId": string;
                        "DestinationCidrBlock": string;
                    }[];
                };
                "RouteTableId": string;
                "RouteTableType": string;
                "VRouterId": string;
            }[];
        };
    }>;
    /**
    * 调用CreateVpnConnection接口创建IPsec连接。
    */ CreateVpnConnection(query: {
        /**
        * IPsec连接所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  用户网关的ID。
        * @example `vpn-bp1q8bgx4xnk****`
        */ "CustomerGatewayId": string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1q8bgx4xnkm****`
        */ "VpnGatewayId": string;
        /**
        * 需要和本地IDC互连的VPC侧的网段，用于第二阶段协商。
        * 多个网段之间用逗号分隔，例如：192.168.1.0/24,192.168.2.0/24。
        * @example `1.1.1.0/24,1.1.2.0/24`
        */ "LocalSubnet": string;
        /**
        * 本地IDC的网段，用于第二阶段协商。
        * 多个网段之间用逗号分隔，例如：192.168.3.0/24,192.168.4.0/24。
        * @example `1.1.1.0/24,1.1.2.0/24`
        */ "RemoteSubnet": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-001****`
        */ "ClientToken"?: string;
        /**
        * IPsec连接的名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http:// `或`https://`开头。
        * @example `IPsec`
        */ "Name"?: string;
        /**
        * 是否删除当前已协商成功的IPsec隧道并重新发起协商。取值：
        *
        * - **true**：配置完成后立即进行协商。
        *
        * - **false**（默认值）：当有流量进入时进行协商。
        * @example `false`
        */ "EffectImmediately"?: boolean;
        /**
        * 第一阶段协商的配置信息：
        *
        * - **IkeConfig.Psk**：用于IPsec VPN网关与用户网关之间的身份认证。默认情况下会随机生成，也可以手动指定密钥。长度限制为100个字符。
        * - **IkeConfig.IkeVersion**：IKE协议的版本。取值：**ikev1**|**ikev2**，默认值：**ikev1**。
        * - **IkeConfig.IkeMode**：IKE V1版本的协商模式。取值：**main**|**aggressive**，默认值：**main**。
        * - **IkeConfig.IkeEncAlg**：第一阶段协商的加密算法，取值：**aes**|**aes192**|**aes256**|**des**|**3des**，默认值：**aes**。
        * - **IkeConfig.IkeAuthAlg**：第一阶段协商的认证算法，取值：**md5**|**sha1**，默认值：**md5**。
        * - **IkeConfig.IkePfs**：第一阶段协商使用的Diffie-Hellman密钥交换算法，取值：**group1**|**group2**|**group5**|**group14**|**group24**，默认值：**group2**。
        * - **IkeConfig.IkeLifetime**：第一阶段协商出的SA的生存周期。取值范围为**0-86400**，单位为秒，默认值：**86400**。
        * - **IkeConfig.LocalIdIPsec**：VPN网关的标识，长度限制为100个字符，默认值为VPN网关的公网IP地址。
        * - **IkeConfig.RemoteId**：用户网关的标识，长度限制为100个字符，默认值为用户网关的公网IP地址。
        * @example ` ikev1`
        */ "IkeConfig"?: string;
        /**
        * 第二阶段协商的配置信息：
        * - **IpsecConfig.IpsecEncAlg**：第二阶段协商的加密算法，取值：**aes**|**aes192**|**aes256**|**des**|**3des**，默认值：**aes**。
        * - **IpsecConfig. IpsecAuthAlg**：第二阶段协商的认证算法，取值：**md5**|**sha1**，默认值：**md5**。
        * - **IpsecConfig. IpsecPfs**：转发所有协议的报文。第一阶段协商使用的Diffie-Hellman密钥交换算法，取值：**group1**|**group2**|**group5**|**group14**|**group24**，默认值：**group2**。
        * - **IpsecConfig. IpsecLifetime**：第二阶段协商出的SA的生存周期。取值范围为**0-86400**，单位为秒，默认值：**86400**。
        * @example `aes`
        */ "IpsecConfig"?: string;
        /**
        * 是否开启健康检查配置。
        * @example `Enable`
        */ "HealthCheckConfig"?: string;
        /**
        * @example `true`
        */ "AutoConfigRoute"?: boolean;
    }): Promise<{
        "CreateTime": number;
        "VpnConnectionId": string;
    }>;
    /**
    * 调用DescribeVRouters接口查询指定地域的路由器列表。
    */ DescribeVRouters(query: {
        /**
        *  VPC所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        *  路由器的ID。
        * @example `vrt-bp1lhl0taikrteen****`
        */ "VRouterId"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "VRouters": {
            "VRouter": {
                "VRouterName": string;
                "RouteTableIds": {
                    "RouteTableId": string[];
                };
                "CreationTime": string;
                "Description": string;
                "RegionId": string;
                "VRouterId": string;
                "VpcId": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeEipAddresses接口查询指定地域已创建的EIP。
    */ DescribeEipAddresses(query: {
        /**
        * EIP所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "Tag"?: string[];
        "OwnerId"?: number;
        /**
        * 是否包含未生效的订购数据，默认是否。
        * @example `true`
        */ "IncludeReservationData"?: boolean;
        /**
        * EIP的状态，取值：
        * - **Associating**：绑定中。
        * - **Unassociating**：解绑中。
        * - **InUse**：已分配。
        * - **Available**：可用。
        * @example `Available`
        */ "Status"?: string;
        /**
        * EIP的IP地址。指定后可查看指定IP地址的EIP的信息。
        * @example `116.xx.xx.28`
        */ "EipAddress"?: string;
        /**
        *  EIP的ID。
        * @example `eip-2zeerraiwb7ujxxxxxxxx`
        */ "AllocationId"?: string;
        /**
        * 资源组ID。
        * @example `rg-acfmxazb4pxxxxxxxx`
        */ "ResourceGroupId"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `10`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 服务提供商，大部分是BGP。
        * @example `BGP`
        */ "ISP"?: string;
        /**
        * 要使用的过滤条件。
        * @example `Filter.1.Name`
        */ "Filter.1.Key"?: string;
        /**
        * 要使用的过滤条件。
        * @example `Filter.2.Description`
        */ "Filter.2.Key"?: string;
        /**
        * 对应过滤条件的取值。
        * @example `value1`
        */ "Filter.1.Value"?: string;
        /**
        * 对应过滤条件的取值。
        * @example `value2`
        */ "Filter.2.Value"?: string;
        /**
        * 锁定类型，取值：
        * - **financial**：因欠费被锁定。
        * - **security**：因安全原因被锁定。
        * @example `financial`
        */ "LockReason"?: string;
        /**
        * 要绑定的云产品实例的类型，取值：
        * - **EcsInstance**（默认值）：VPC类型的ECS实例。
        * - **SlbInstance**：VPC类型的SLB实例。
        * - **Nat**：NAT网关。
        * - **HaVip**：高可用虚拟IP。
        *
        * 每个ECS实例、负载均衡实例和HAVIP同时只能绑定一个EIP，NAT网关可以绑定多个EIP。
        * @example `EcsInstance`
        */ "AssociatedInstanceType"?: string;
        /**
        *  云产品的实例ID。
        * @example `i-2zebb08phycxxxxxxxx`
        */ "AssociatedInstanceId"?: string;
        /**
        * 弹性公网IP的计费方式，取值：
        * **PostPaid**：按量计费。
        * **PrePaid**：包年包月。
        * @example `PostPaid`
        */ "ChargeType"?: string;
    }): Promise<{
        "RequestId": string;
        "PageNumber": string;
        "EipAddresses": {
            "EipAddress": {
                "ChargeType": string;
                "AllocationTime": string;
                "ResourceGroupId": string;
                "IpAddress": string;
                "AllocationId": string;
                "InternetChargeType": string;
                "Status": string;
                "RegionId": string;
                "AvailableRegions": {
                    "AvailableRegion": string;
                };
                "Bandwidth": string;
            };
        };
        "TotalCount": string;
        "PageSize": string;
    }>;
    /**
    * 在访问控制策略组中添加IP条目。
    */ AddIPv6TranslatorAclListEntry(query: {
        /**
        * 访问控制策略组的地域。 您可以通过调用DescribeRegions接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  IP条目的访问控制策略组ID。
        * @example `ipv6transacl-bp1de2xxxx`
        */ "AclId": string;
        /**
        * 访问控制策略组条目中要添加的单个IPv6地址，或者IPv6地址段，如12ab:0:0:dc30::0102或12ab:0:0:dc30::/60。
        * @example `12ab:0:0:dc30::0102`
        */ "AclEntryIp": string;
        "OwnerId"?: number;
        /**
        * 访问控制策略组条目的备注信息，长度为2-100个字符，以大小字母或中文开头，可包含数字，"_"或"-"。
        * @example `clientIP1`
        */ "AclEntryComment"?: string;
    }): Promise<{
        "RequestId": string;
        "AclEntryId": string;
    }>;
    /**
    * 调用DeleteVpc接口删除一个专有网络（VPC）。
    */ DeleteVpc(query: {
        /**
        * VPC所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 要删除的VPC ID。
        * @example `vpc-bp1m7v25emi1h5mtc****`
        */ "VpcId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyCustomerGatewayAttribute接口修改用户网关的名称和描述信息。
    */ ModifyCustomerGatewayAttribute(query: {
        /**
        * 用户网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 用户网关的ID。
        * @example `vpn-bp1q8bgx4xnkm2ogj****`
        */ "CustomerGatewayId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * 用户网关的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `test`
        */ "Name"?: string;
        /**
        * 用户网关的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
        * @example `test`
        */ "Description"?: string;
    }): Promise<{
        "CustomerGatewayId": string;
        "RequestId": string;
        "CreateTime": number;
        "IpAddress": string;
    }>;
    /**
    * 调用DeleteSslVpnClientCert接口删除SSL-VPN客户端证书。
    */ DeleteSslVpnClientCert(query: {
        /**
        * SSL-VPN客户端证书所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  SSL-VPN客户端证书的ID。
        * @example `vsc-bp1n8wcf134yl0osr****`
        */ "SslVpnClientCertId": string;
        "OwnerId"?: number;
        /**
        *
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeVirtualBorderRoutersForPhysicalConnection接口查询指定物理专线下的边界路由器（VBR），包括物理专线所有者的VBR和其他账号的VBR。
    */ DescribeVirtualBorderRoutersForPhysicalConnection(query: {
        /**
        *  物理专线所在的地域。 您可以通过调用[DescribeRegions](~~36063~~) 接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  物理专线的ID。
        * @example `pc-119mfj****`
        */ "PhysicalConnectionId": string;
        "Filter"?: string[];
        "OwnerId"?: number;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "VirtualBorderRouterForPhysicalConnectionSet": {
            "VirtualBorderRouterForPhysicalConnectionType": {
                "ActivationTime": string;
                "CreationTime": string;
                "CircuitCode": string;
                "VlanId": number;
                "RecoveryTime": string;
                "VbrOwnerUid": string;
                "TerminationTime": string;
                "VbrId": string;
            }[];
        };
    }>;
    /**
    * 调用DownloadVpnConnectionConfig接口获取IPsec连接的配置信息。
    */ DownloadVpnConnectionConfig(query: {
        /**
        * IPsec连接所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        *  IPsec连接的ID。
        * @example `vco-bp1bbi27hojx80nck****`
        */ "VpnConnectionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "VpnConnectionConfig": {
            "RemoteSubnet": string;
            "Local": string;
            "IpsecConfig": {
                "IpsecLifetime": number;
                "IpsecAuthAlg": string;
                "IpsecPfs": string;
                "IpsecEncAlg": string;
            };
            "Remote": string;
            "LocalSubnet": string;
            "IkeConfig": {
                "IkeEncAlg": string;
                "IkePfs": string;
                "RemoteId": string;
                "IkeAuthAlg": string;
                "Psk": string;
                "IkeMode": string;
                "IkeLifetime": number;
                "IkeVersion": string;
                "LocalId": string;
            };
        };
    }>;
    /**
    * 使用DeleteNatGateway接口删除指定的NAT网关。
    */ DeleteNatGateway(query: {
        /**
        * NAT网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        *  NAT网关的ID。
        * @example `ngw-bp1uewa15k4iy5770ya89`
        */ "NatGatewayId": string;
        "OwnerId"?: number;
        /**
        * 是否强制删除NAT网关。
        * @example `false`
        */ "Force"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeAccessPoints接口查询指定地域中的物理专线接入点。
    */ DescribeAccessPoints(query: {
        /**
        * 接入点所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "Filter"?: string[];
        "OwnerId"?: number;
        "Type"?: string;
        "Name"?: string;
        "HostOperator"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "AccessPointSet": {
            "AccessPointType": {
                "Name": string;
                "Status": string;
                "Description": string;
                "Type": string;
                "Location": string;
                "HostOperator": string;
                "AttachedRegionNo": string;
                "AccessPointId": string;
            }[];
        };
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 创建IPv6转换服务实例。
    */ CreateIPv6Translator(query: {
        /**
        *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
        * @example `cm-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 客户端token用于保证请求的幂等性。要保证Client Token在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `sha111`
        */ "ClientToken"?: string;
        /**
        *  IPv6转换服务实例的名称，默认为实例ID。  长度为 2-100个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以http:// 或https://开头。
        * @example `ipv6_1`
        */ "Name"?: string;
        /**
        *  IPv6转换服务实例的规格。取值： **small **。
        * @example `small`
        */ "Spec"?: string;
        /**
        *  IPv6转换服务实例的付费类型。取值：
        * - **PREPAY**：预付费
        * -  **POSTPAY**：后付费
        * @example `PREPAY`
        */ "PayType"?: string;
        /**
        *  预付费的计费周期，取值：
        * - **Month**：按月购买（默认值）
        * - **Year**：按年购买
        * @example `Month`
        */ "PricingCycle"?: string;
        /**
        * 购买时长，取值：
        * - 如果计费时长为**Month**，则取值为1-9。
        * - 如果计费时长为**Year**，则取值为3。
        * @example `1`
        */ "Duration"?: number;
        /**
        * 是否自动只支付预付费账单。取值：**true|false**。
        * @example `false`
        */ "AutoPay"?: boolean;
        /**
        * IPv6转换服务实例的计费带宽（Mbps）。取值：**1-200**。若不设置转换映射条目的带宽，实例中的IPv6转换服务映射条目共享该带宽。
        * > 若不指定带宽，默认为10Mbps。
        * @example `10`
        */ "Bandwidth"?: number;
    }): Promise<{
        "Ipv6TranslatorId": string;
        "Name": string;
        "OrderId": number;
        "RequestId": string;
        "Spec": string;
    }>;
    /**
    * 调用DescribeCustomerGateways接口查询已创建的用户网关。
    */ DescribeCustomerGateways(query: {
        /**
        * 用户网关所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        *  用户网关的ID。
        * @example `vpn-bp1q8bgx4xnkm2ogj****`
        */ "CustomerGatewayId"?: string;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "CustomerGateways": {
            "CustomerGateway": {
                "Name": string;
                "CustomerGatewayId": string;
                "CreateTime": number;
                "IpAddress": string;
            }[];
        };
    }>;
    /**
    * 调用CreateRouterInterface接口创建路由器接口。
    */ CreateRouterInterface(query: {
        /**
        * 路由器接口所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 路由器接口的角色，取值：
        *
        * - **InitiatingSide**：连接发起端。
        * - **AcceptingSide**：连接接收端。
        * @example `InitiatingSide`
        */ "Role": string;
        /**
        *  连接接收端所在的地域ID。
        * @example `cn-shanghai`
        */ "OppositeRegionId": string;
        /**
        * 路由器接口的规格。可用的规格和对应的带宽如下：
        *
        * - **Mini.2**：2Mbps
        * - **Mini.5**：5Mbps
        * - **Small.1**：10Mbps
        * - **Small.2**：20Mbps
        *
        * - **Small.5**：50Mbps
        * - **Middle.1**：100Mbps
        * - **Middle.2**：200Mbps
        * - **Middle.5**：500Mbps
        * - **Large.1**：1000 Mbps
        * - **Large.2**：2000Mbps
        * - **Large.5**：5000 Mbps
        * - **Xlarge.1**：10000Mbps
        * > 当**Role**为**AcceptingSide**(连接接收端)时，**Spec**取值为**Negative**。
        * @example `Large`
        */ "Spec": string;
        /**
        * 路由器接口关联的路由器类型。取值：
        * - **VRouter**：VPC路由器
        * - **VBR**：边界路由器
        *
        * @example `VRouter`
        */ "RouterType": string;
        /**
        *  路由器接口关联的路由器ID。
        * @example `cn-hangzhou`
        */ "RouterId": string;
        /**
        *  对端路由器接口ID。
        * @example `ri-2zeo3xzyf38r4urzd****`
        */ "OppositeInterfaceId"?: string;
        /**
        *  对端的路由器的ID。
        * @example `vrt-bp1lhl0taikrteen8****`
        */ "OppositeRouterId"?: string;
        /**
        * 对端路由器接口关联的路由器类型。取值：
        * - **VRouter**：VPC路由器
        * - **VBR**：边界路由器
        * @example `VRouter`
        */ "OppositeRouterType"?: string;
        /**
        *  对端路由器接口的所有者ID。
        * @example `fffsf`
        */ "OppositeInterfaceOwnerId"?: string;
        /**
        * 健康检查源IP地址，必须是本端VPC内的一个未被使用的IP。
        * > 物理专线接入场景下可指定该参数。
        *
        * @example `116.62.222.XX`
        */ "HealthCheckSourceIp"?: string;
        /**
        * 健康检查目的IP地址。
        * > 当指定了**HealthCheckSourceIp**后，该参数为必选。
        * @example `116.62.222.XX`
        */ "HealthCheckTargetIp"?: string;
        /**
        *  VBR所属的接入点ID。 您可以通过调用[DescribeAccessPoints](~~36062~~)接口获取物理专线接入点ID。
        *
        * > 物理专线接入场景下需指定该参数。
        * @example `ap-cn-shanghaiSZ-****`
        */ "AccessPointId"?: string;
        /**
        * 对端所属的接入点ID。
        * > 对端路由器接口位于VBR上时需指定该参数，创建路由器接口后无法修改。
        * @example `ap-cn-shanghaiSZ-****`
        */ "OppositeAccessPointId"?: string;
        /**
        * 路由器接口的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以``http:// ``或`https://`开头。
        * @example `路由器接口描述。`
        */ "Description"?: string;
        /**
        * 路由器接口的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `接口名称`
        */ "Name"?: string;
        /**
        * 购买时长。取值：
        * - 当选择按月付费时，取值范围为**1-9**
        * - 当选择按年付费时，取值范围为**1-3**
        * > **InstanceChargeType**参数的值为**PrePaid**时，该参数必选。
        * @example `3`
        */ "Period"?: number;
        /**
        * - **PrePaid**：预付费
        * @example `PrePaid`
        */ "InstanceChargeType"?: string;
        /**
        * 是否自动付费，取值：
        *
        * - **false**：不开启自动付费，生成订单后需要到订单中心完成支付。
        * - **true**：开启自动付费，自动支付订单。
        * > **InstanceChargeType**参数的值为**PrePaid**时，该参数必选。
        * @example `false`
        */ "AutoPay"?: boolean;
        /**
        * 预付费的计费周期，取值：
        *
        * - **Month（默认值）**：按月付费
        * - **Year**：按年付费。
        *
        * > **InstanceChargeType**参数的值为**PrePaid**时，该参数必选。
        *
        * @example `Month`
        */ "PricingCycle"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `sjffha123334`
        */ "ClientToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "RouterInterfaceId": string;
    }>;
    /**
    * 调用DescribeRouterInterfaces接口查询指定地域内的路由器接口。
    */ DescribeRouterInterfaces(query: {
        /**
        *  路由器接口所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example ` cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 是否包含续费数据。
        * @example `false`
        */ "IncludeReservationData"?: boolean;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        "Filter"?: string[];
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "RouterInterfaceSet": {
            "RouterInterfaceType": {
                "ChargeType": string;
                "HasReservationData": boolean;
                "OppositeInterfaceBusinessStatus": string;
                "RouterInterfaceId": string;
                "OppositeInterfaceStatus": string;
                "Spec": string;
                "OppositeInterfaceOwnerId": string;
                "CrossBorder": boolean;
                "OppositeInterfaceSpec": string;
                "CreationTime": string;
                "RouterType": string;
                "Status": string;
                "OppositeRouterType": string;
                "OppositeRouterId": string;
                "OppositeInterfaceId": string;
                "VpcInstanceId": string;
                "RouterId": string;
                "ConnectedTime": string;
                "OppositeRegionId": string;
                "BusinessStatus": string;
                "Role": string;
                "OppositeVpcInstanceId": string;
                "EndTime": string;
            }[];
        };
    }>;
    /**
    * 调用ModifyVpnConnectionAttribute接口修改IPsec连接的配置信息。
    */ ModifyVpnConnectionAttribute(query: {
        /**
        * IPsec连接所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example ` cn-shanghai`
        */ "RegionId": string;
        /**
        * IPsec连接的ID。
        * @example `vco-bp1bbi27hojx80nck****`
        */ "VpnConnectionId": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * IPsec连接的名称。
        * 长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http:// `或`https://`开头。
        * @example `IPsec`
        */ "Name"?: string;
        /**
        * 需要和本地IDC互连的VPC侧的网段，用于第二阶段协商。
        * 多个网段之间用逗号分隔，例如：192.168.1.0/24,192.168.2.0/24。
        * @example `1.1.1.0/24,1.1.2.0/24`
        */ "LocalSubnet"?: string;
        /**
        * 本地IDC的网段，用于第二阶段协商。
        * 多个网段之间用逗号分隔，例如：192.168.3.0/24,192.168.4.0/24。
        * @example `1.1.1.0/24,1.1.2.0/24`
        */ "RemoteSubnet"?: string;
        /**
        * 是否删除当前已协商成功的IPsec隧道并重新发起协商。取值：
        * - **true**：配置完成后立即进行协商。
        *
        * - **false**（默认值）：当有流量进入时进行协商。
        * @example `false`
        */ "EffectImmediately"?: boolean;
        /**
        * 第一阶段协商的配置信息：
        *
        * - **IkeConfig.Psk**：用于IPsec VPN网关与用户网关之间的身份认证。默认情况下会随机生成，也可以手动指定密钥。长度限制为100个字符。
        * - **IkeConfig.IkeVersion**：IKE协议的版本。取值：ikev1|ikev2，默认值：ikev1。
        * - **IkeConfig.IkeMode**：IKE V1版本的协商模式。取值：main（主模式）|aggressive（野蛮模式），默认值：main。
        * - **IkeConfig.IkeEncAlg**：第一阶段协商的加密算法，取值：aes|aes192|aes256|des|3des，默认值：aes。
        * - **IkeConfig.IkeAuthAlg**：第一阶段协商的认证算法，取值：md5|sha1，默认值：sha。
        * IkeConfig.IkePfs：第一阶段协商使用的Diffie-Hellman密钥交换算法，取值：group1|group2|group5|group14|group24，默认值：group2。
        * - **IkeConfig.IkeLifetime**：第一阶段协商出的SA的生存周期。取值范围为0~86400，单位为秒，默认值：86400。
        * - **IkeConfig.LocalIdIPsec**：VPN网关的标识，长度限制为100个字符，默认值为VPN网关的公网IP地址。
        * - **IkeConfig.RemoteId**：用户网关的标识，长度限制为100个字符，默认值为用户网关的公网IP地址。
        * @example `ikev1, ikev2`
        */ "IkeConfig"?: string;
        /**
        * 第二阶段协商的配置信息：
        * - **IpsecConfig.IpsecEncAlg**：第二阶段协商的加密算法，取值：aes|aes192|aes256|des|3des，默认值：aes。
        * - **IpsecConfig. IpsecAuthAlg**：第二阶段协商的认证算法，取值：md5|sha1，默认值：sha1。
        * - **IpsecConfig. IpsecPfs**：转发所有协议的报文。第一阶段协商使用的Diffie-Hellman密钥交换算法，取值：group1|group2|group5|group14|group24，默认值：group2。
        * - **IpsecConfig. IpsecLifetime**：第二阶段协商出的SA的生存周期。取值范围为0~86400，单位为秒，默认值：86400。
        * @example `sha1`
        */ "IpsecConfig"?: string;
        /**
        * @example `111`
        */ "HealthCheckConfig"?: string;
        /**
        * 是否自动发布路由。
        * @example `true`
        */ "AutoConfigRoute"?: boolean;
    }): Promise<{
        "Name": string;
        "CustomerGatewayId": string;
        "RemoteSubnet": string;
        "IpsecConfig": {
            "IpsecLifetime": number;
            "IpsecAuthAlg": string;
            "IpsecPfs": string;
            "IpsecEncAlg": string;
        };
        "EffectImmediately": boolean;
        "VpnGatewayId": string;
        "CreateTime": number;
        "VpnConnectionId": string;
        "RequestId": string;
        "LocalSubnet": string;
        "IkeConfig": {
            "IkeEncAlg": string;
            "RemoteId": string;
            "IkePfs": string;
            "IkeAuthAlg": string;
            "Psk": string;
            "IkeMode": string;
            "IkeLifetime": number;
            "IkeVersion": string;
            "LocalId": string;
        };
    }>;
    /**
    * 调用DescribePhysicalConnectionLOA查询物理专线LOA信息。
    */ DescribePhysicalConnectionLOA(query: {
        /**
        * 物理专线部署的地域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 物理专线实例ID。
        * @example `pc-bp1ca4wca27exxxxxxxx`
        */ "InstanceId": string;
        "OwnerId"?: number;
        /**
        * 客户端Token鉴权。
        * @example `318BB676-0A2B-43A0-9AD8-F1D34E93750F`
        */ "ClientToken"?: string;
    }): Promise<{
        "code": string;
        "data": {
            "companyName": string;
            "constructionTime": string;
            "instanceId": string;
            "lineType": string;
            "loaUrl": string;
            "pmInfo": {
                "nextPMIndex": number;
                "pmCertificateNo": string;
                "pmCertificateType": string;
                "pmContactInfo": string;
                "pmGender": string;
                "pmName": string;
            }[];
            "si": string;
            "status": string;
        };
        "message": string;
        "requestId": string;
        "success": boolean;
    }>;
    /**
    * 调用UntagResources为指定的资源列表统一解绑并删除标签。
    */ UnTagResources(query: {
        /**
        * 资源所属的地域ID。
        * @example `cn-hangzhou	`
        */ "RegionId": string;
        "ResourceId": string[];
        /**
        * 资源类型定义。取值范围：
        * - VPC：VPC实例
        * - VSWITCH：交换机实例
        * - ROUTETABLE：路由表实例
        * - EIP：弹性公网IP实例
        * @example `VPC`
        */ "ResourceType": string;
        "TagKey"?: string[];
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用TagResources为指定的ECS资源列表统一创建并绑定标签。
    */ TagResources(query: {
        /**
        * 资源所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "ResourceId": string[];
        "Tag": string[];
        /**
        * 资源类型定义。取值范围：
        * - VPC：VPC实例
        * - VSWITCH：交换机实例
        * - ROUTETABLE：路由表实例
        * - EIP：弹性公网IP实例
        * @example `VPC`
        */ "ResourceType": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 删除IPv6转换服务实例。
    */ DeleteIPv6Translator(query: {
        /**
        * IPv6转换服务实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * IPv6转换服务实例ID。
        * @example `ipv6trans-bp1i8ahxut1iexxxx`
        */ "Ipv6TranslatorId": string;
        "OwnerId"?: number;
        /**
        * 客户端token用于保证请求的幂等性。要保证Client Token在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `ClientToken`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ListTagResources查询一个或多个 VPC、EIP 资源已经绑定的标签列表。
    */ ListTagResources(query: {
        /**
        * 资源所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源类型定义。取值范围：
        * - VPC：VPC实例
        * - VSWITCH：交换机实例
        * - ROUTETABLE：路由表实例
        * - EIP：弹性公网IP实例
        * @example `VPC`
        */ "ResourceType": string;
        "ResourceId"?: string[];
        "Tag"?: string[];
        /**
        * 下一个查询开始Token。
        * @example `caeba0bbb2be03f84eb48b699f0a4883	`
        */ "NextToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "TagResources": {
            "TagResource": {
                "ResourceType": string;
                "TagValue": string;
                "ResourceId": string;
                "TagKey": string;
            }[];
        };
        "NextToken": string;
        "RequestId": string;
    }>;
    /**
    * 询访问控制策略组的详细信息，包括访问控制策略组中的IP和关联的IPv6转换映射条目的具体信息。
    */ DescribeIPv6TranslatorAclListAttributes(query: {
        /**
        * 访问控制策略组的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制策略组ID。
        * @example `ipv6transacl-bp1de2xxxx`
        */ "AclId": string;
        "OwnerId"?: number;
        /**
        * 列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "AclEntries": {
            "AclEntry": {
                "AclEntryId": string;
                "AclEntryIp": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "PageNumber": number;
        "AclId": string;
        "AclName": string;
    }>;
    /**
    * 调用ModifyBgpGroupAttribute接口修改BGP邻居的属性。
    */ ModifyBgpPeerAttribute(query: {
        /**
        * BGP组所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * BGP邻居的ID。
        * @example `Bgp-awjhxxxxxxxx`
        */ "BgpPeerId": string;
        /**
        * BGP组的ID。
        * @example `bgpg-wz9f62v4fbgxxxxxxxx`
        */ "BgpGroupId"?: string;
        /**
        * BGP邻居的IP地址。
        * @example `116.62.xx.xx`
        */ "PeerIpAddress"?: string;
        /**
        * 是否开启BFD功能，取值：
        * - **true**：开启BFD功能。
        * - **false**：不开启BFD功能。
        * @example `true`
        */ "EnableBfd"?: boolean;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-001xxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteNetworkAcl接口删除网络ACL。
    */ DeleteNetworkAcl(query: {
        /**
        * 网络ACL所属的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络ACL的ID。
        * @example `nacl-bp1q8bgx4xnkmxxxxxxxx`
        */ "NetworkAclId": string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        * @example `123`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeNetworkAclAttributes接口查询网络ACL的详细信息。
    */ DescribeNetworkAclAttributes(query: {
        /**
        * 网络ACL所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络ACL的ID。
        * @example `nacl-a2do9e413e0spxxxxxxxx`
        */ "NetworkAclId": string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        * @example `123`
        */ "ClientToken"?: string;
    }): Promise<{
        "NetworkAclAttribute": {
            "CreationTime": string;
            "EgressAclEntries": {
                "EgressAclEntry": {
                    "Port": string;
                    "Policy": string;
                    "NetworkAclEntryId": string;
                    "DestinationCidrIp": string;
                    "Protocol": string;
                }[];
            };
            "Status": string;
            "RegionId": string;
            "IngressAclEntries": {
                "IngressAclEntry": {
                    "SourceCidrIp": string;
                    "Port": string;
                    "Policy": string;
                    "NetworkAclEntryId": string;
                    "Protocol": string;
                }[];
            };
            "NetworkAclId": string;
            "VpcId": string;
            "Resources": {
                "Resource": any[];
            };
        };
        "RequestId": string;
    }>;
    /**
    * 调用AccosicateNetworkAcl接口，绑定网络ACL到交换机。
    */ AssociateNetworkAcl(query: {
        /**
        * 网络ACL所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络ACL的ID。
        * @example `nacl-a2do9e413e0spxxxxxxxx`
        */ "NetworkAclId": string;
        "Resource"?: string[];
        "OwnerId"?: number;
        /**
        * @example `123`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UnassociateNetworkAcl接口，解除网络ACL与交换机的绑定。
    */ UnassociateNetworkAcl(query: {
        /**
        * 网络ACL所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络ACL的ID。
        * @example `nacl-a2do9e413e0spxxxxxxxx`
        */ "NetworkAclId": string;
        "Resource"?: string[];
        "OwnerId"?: number;
        /**
        * @example `123`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UpdateNetworkAclEntries接口更新网络ACL规则。
    */ UpdateNetworkAclEntries(query: {
        /**
        * 网络ACL所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络ACL的ID。
        * @example `nacl-bp1lhl0taikrxxxxxxxx`
        */ "NetworkAclId": string;
        "IngressAclEntries"?: string[];
        "EgressAclEntries"?: string[];
        /**
        * 是否更新入方向规则，取值：
        * - **true**：更新。
        * - **false**（默认）：不更新。
        * @example `false`
        */ "UpdateIngressAclEntries"?: boolean;
        /**
        * 是否更新出方向规则，取值：
        * - **true**：更新。
        * - **false**（默认）：不更新。
        * @example `false`
        */ "UpdateEgressAclEntries"?: boolean;
        "OwnerId"?: number;
        /**
        * @example `123`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CopyNetworkAclEntries接口复制网络ACL规则。
    */ CopyNetworkAclEntries(query: {
        /**
        * 网络ACL所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络ACL的ID。
        * @example `nacl-a2do9e413e0spxxxxxxxx`
        */ "NetworkAclId": string;
        /**
        * 被复制的网络ACL的ID。
        * @example `nacl-ghuo9ehg3e0spxxxxxxxx`
        */ "SourceNetworkAclId": string;
        "OwnerId"?: number;
        /**
        * @example `123`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeNetworkAcls接口查看网络ACL列表。
    */ DescribeNetworkAcls(query: {
        /**
        * 网络ACL所属的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络ACL的ID。
        * @example `nacl-bp1lhl0taikrxxxxxxxx`
        */ "NetworkAclId"?: string;
        /**
        * 网络ACL的名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字，下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `acl-1`
        */ "NetworkAclName"?: string;
        /**
        * 网络ACL关联的VPC的ID。
        * @example `vpc-123456`
        */ "VpcId"?: string;
        /**
        * 关联实例的类型。
        * `ResourceType`和`ResourceId`需要同时指定才生效。
        * @example `VSwitch`
        */ "ResourceType"?: string;
        /**
        * 关联实例的ID。
        * `ResourceType`和`ResourceId`需要同时指定才生效。
        * @example `vsw-bp1de348lntdwxxxxxxxx`
        */ "ResourceId"?: string;
        /**
        * 列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
        "OwnerId"?: number;
        /**
        * @example `123`
        */ "ClientToken"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "NetworkAcls": {
            "NetworkAcl": {
                "EgressAclEntries": {
                    "EgressAclEntry": {
                        "Port": string;
                        "Policy": string;
                        "NetworkAclEntryId": string;
                        "DestinationCidrIp": string;
                        "Protocol": string;
                    }[];
                };
                "CreationTime": string;
                "Status": string;
                "RegionId": string;
                "IngressAclEntries": {
                    "IngressAclEntry": {
                        "SourceCidrIp": string;
                        "Port": string;
                        "Policy": string;
                        "NetworkAclEntryId": string;
                        "Protocol": string;
                    }[];
                };
                "VpcId": string;
                "NetworkAclId": string;
                "Resources": {
                    "Resource": any[];
                };
            }[];
        };
    }>;
    /**
    * 调用DeleteFlowLog接口删除流日志。
    */ DeleteFlowLog(query: {
        /**
        * 流日志的所属地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * 流日志ID。
        * @example `fl-m5evbtbptxxxxxxxxxxxx`
        */ "FlowLogId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyNetworkAclAttributes接口修改网络ACL的属性。
    */ ModifyNetworkAclAttributes(query: {
        /**
        * 网络ACL所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络ACL的ID。
        * @example `acl-bp1lhl0taikrxxxxxxxx`
        */ "NetworkAclId": string;
        /**
        * 网络ACL的名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字，下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `acl-1`
        */ "NetworkAclName"?: string;
        /**
        * 网络ACL的描述信息。
        * 长度为2-256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `This is my NetworkAcl.`
        */ "Description"?: string;
        "OwnerId"?: number;
        /**
        * @example `123`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeactiveFlowLog接口停止流日志，停止后不再捕获指定资源的流量。
    */ DeactiveFlowLog(query: {
        /**
        * 流日志的所属地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * 流日志ID。
        * @example `fl-m5evbtbptxxxxxxxxxxxx`
        */ "FlowLogId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ActiveFlowLog接口启动流日志，启动后开始捕获指定资源的流量。
    */ ActiveFlowLog(query: {
        /**
        * 流日志的所属地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * 流日志ID。
        * @example `fl-m5evbtbptxxxxxxxxxxxx`
        */ "FlowLogId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateNetworkAcl接口创建网络ACL。
    */ CreateNetworkAcl(query: {
        /**
        * 网络ACL所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络ACL关联的VPC的ID。
        * @example `vpc-123456`
        */ "VpcId": string;
        /**
        * 网络ACL的名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字，下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `acl-1`
        */ "NetworkAclName"?: string;
        /**
        * 网络ACL的描述信息。
        * 长度为2-256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `This is my NetworkAcl.`
        */ "Description"?: string;
        /**
        * @example `123`
        */ "OwnerId"?: number;
        /**
        * @example `123`
        */ "ClientToken"?: string;
    }): Promise<{
        "NetworkAclAttribute": {
            "CreationTime": string;
            "EgressAclEntries": {
                "EgressAclEntry": {
                    "Port": string;
                    "Policy": string;
                    "NetworkAclEntryId": string;
                    "DestinationCidrIp": string;
                    "Protocol": string;
                }[];
            };
            "Status": string;
            "RegionId": string;
            "IngressAclEntries": {
                "IngressAclEntry": {
                    "SourceCidrIp": string;
                    "Port": string;
                    "Policy": string;
                    "NetworkAclEntryId": string;
                    "Protocol": string;
                }[];
            };
            "NetworkAclId": string;
            "VpcId": string;
            "Resources": {
                "Resource": any[];
            };
        };
        "RequestId": string;
        "NetworkAclId": string;
    }>;
    /**
    * 调用DescribeFlowLogs接口查询流日志。
    */ DescribeFlowLogs(query: {
        /**
        *  流日志的所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 流日志名称。长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://`或`https://`开头。
        * @example `myFlowlog`
        */ "FlowLogName"?: string;
        /**
        * 流日志ID。
        * @example `flowlog-m5evbtbptxxxxxxxxxxxx`
        */ "FlowLogId"?: string;
        /**
        * @example `111`
        */ "Description"?: string;
        /**
        * 要捕获的流量的资源类型：
        *
        * - NetworkInterface：弹性网卡
        *
        * - VSwitch：交换机内的所有弹性网卡
        *
        * - VPC：专有网络内的所有弹性网卡
        * @example `NetworkInterface`
        */ "ResourceType"?: string;
        /**
        * 要捕获的流量的资源ID。
        * @example `eni-askldfasxxxxxxxx`
        */ "ResourceId"?: string;
        /**
        * 采集的流量类型：
        *
        * - All：全部流量
        *
        * - Allow：访问控制允许的流量
        *
        * - Drop：访问控制拒绝的流量
        * @example `All`
        */ "TrafficType"?: string;
        /**
        * 存储捕获到的流量的Project。
        * @example `FlowLogProject`
        */ "ProjectName"?: string;
        /**
        * 存储捕获到的流量的LogStore。
        * @example `FlowLogStore`
        */ "LogStoreName"?: string;
        /**
        * @example `111`
        */ "Status"?: string;
        /**
        * @example `111`
        */ "PageNumber"?: number;
        /**
        * @example `111`
        */ "PageSize"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    *  调用CreateFlowLog接口创建流日志。
    */ CreateFlowLog(query: {
        /**
        *  流日志的所属地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * 要捕获流量的资源类型：
        * - NetworkInterface：弹性网卡
        *
        * - VSwitch：交换机内的所有弹性网卡
        *
        * - VPC：专有网络内的所有弹性网卡
        * @example `NetworkInterface`
        */ "ResourceType": string;
        /**
        * 要捕获流量的资源ID。
        * @example `eni-askldfasxxxxxxxx`
        */ "ResourceId": string;
        /**
        * 采集的流量类型：
        * - All：全部流量
        *
        * - Allow：访问控制允许的流量
        *
        * - Drop：访问控制拒绝的流量
        * @example `all`
        */ "TrafficType": string;
        /**
        * 存储捕获到的流量的Project。
        * @example `FlowLogProject`
        */ "ProjectName": string;
        /**
        * 存储捕获到的流量的LogStore。
        * @example `FlowLogStore`
        */ "LogStoreName": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        *  流日志名称。 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://`或`https://`开头。
        * @example `myFlowlog`
        */ "FlowLogName"?: string;
        /**
        *  流日志描述。 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `This is my Flowlog.`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
        "FlowLogId": string;
    }>;
    /**
    *  调用ModifyFlowLogAttribute接口编辑流日志的名称和描述。
    */ ModifyFlowLogAttribute(query: {
        /**
        *  流日志的所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * 流日志ID。
        * @example `flowlog-m5evbtbptxxxxxxxxxxxx`
        */ "FlowLogId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 流日志名称。长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://`或`https://`开头。
        * @example `myFlowlog`
        */ "FlowLogName"?: string;
        /**
        * 流日志描述。长度为2-256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `This is my Flowlog.`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
        "FlowLogId": string;
    }>;
    /**
    * 调用DescribeEipGatewayInfo接口查询EIP的网关和掩码信息。
    */ DescribeEipGatewayInfo(query: {
        /**
        * EIP的所属地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-zhangjiakou`
        */ "RegionId": string;
        /**
        * 绑定EIP的弹性网卡的实例ID。
        * @example `eni-bp1d66qjxb3qoin3xxxx`
        */ "InstanceId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "EipInfos": {
            "EipInfo": {
                "IP": string;
                "IpMask": string;
                "IpGw": string;
            }[];
        };
        "Code": string;
    }>;
    /**
    * 调用ModifyCommonBandwidthPackageIpBandwidth接口为已经加入共享带宽中的EIP设置最大可用的带宽值。
    */ ModifyCommonBandwidthPackageIpBandwidth(query: {
        /**
        * 共享带宽所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 共享带宽的实例ID。
        * @example `cbwp-2zep6hw5d6y8exxxxxxxx`
        */ "BandwidthPackageId": string;
        /**
        * 已经加入到共享带宽的EIP的实例ID。
        * @example `eip-2zewysoansu0sxxxxxxxx`
        */ "EipId": string;
        /**
        * 在共享带宽内最大可分配的带宽值，单位为Mbps。
        * @example `500`
        */ "Bandwidth": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CancelCommonBandwidthPackageIpBandwidth接口取消已经加入共享带宽中的EIP的最大可用带宽值的设置。
    */ CancelCommonBandwidthPackageIpBandwidth(query: {
        /**
        * 共享带宽所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 共享带宽的实例ID。
        * @example `cbwp-bp13d0m4e2qv8xxxxxxxx`
        */ "BandwidthPackageId": string;
        /**
        * 已经加入到共享带宽的EIP的实例ID。
        * @example `eip-2zewysoansu0sxxxxxxxx`
        */ "EipId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ConvertBandwidthPackage转换NAT带宽包。
    */ ConvertBandwidthPackage(query: {
        /**
        * NAT网关所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * NAT网关带宽包的ID。
        * @example `bwp-bp1xea10o8qxw4f****`
        */ "BandwidthPackageId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII 字符。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
        "ConvertInstanceId": string;
    }>;
    /**
    * 调用DescribeVpnSslServerLogs查看SSL服务端的日志。
    */ DescribeVpnSslServerLogs(query: {
        /**
        * SSL服务端所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * SSL服务端的ID。
        * @example `vss-bp155e9yclsg1xgq4****`
        */ "VpnSslServerId": string;
        "OwnerId"?: number;
        /**
        * 日志起始时间。
        * @example `2018020201`
        */ "From"?: number;
        /**
        * 日志结束时间。
        * @example `2018020206`
        */ "To"?: number;
        /**
        * 日志周期。
        * @example `10`
        */ "MinutePeriod"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "Data": {
            "Logs": any[];
        };
        "PageNumber": number;
        "Count": number;
        "PageSize": number;
        "IsCompleted": boolean;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyExpressCloudConnectionBandwidth修改高速上云服务带宽。
    */ ModifyExpressCloudConnectionBandwidth(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 高速上云服务实例ID。
        * @example `ecc-xxxxxxxxx`
        */ "EccId": string;
        "OwnerId"?: number;
        /**
        * 高速上云服务带宽。
        * @example `2`
        */ "Bandwidth"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeExpressCloudConnections查询某个区域的高速上云服务列表。
    */ DescribeExpressCloudConnections(query: {
        /**
        * 高速上云服务实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
        "Filter"?: string[];
    }): Promise<{
        "TotalCount": number;
        "ExpressCloudConnectionSet": {
            "ExpressCloudConnectionType": {
                "HasReservationData": boolean;
                "Type": string;
                "ServiceProvider": string;
                "InstanceId": string;
                "IdcSP": string;
                "ApplicationId": string;
                "BusinessStatus": string;
                "ApplicationBandwidth": number;
                "ContactMail": string;
                "ContactTel": string;
                "PortType": string;
                "Bandwidth": number;
                "GmtModify": string;
                "ChargeType": string;
                "ApplicationType": string;
                "Description": string;
                "IDCardNo": string;
                "PeerCity": string;
                "GmtCreate": string;
                "PeerLocation": string;
                "Name": string;
                "CircuitCode": string;
                "Status": string;
                "RedundantEccId": string;
                "Isp": string;
                "ApplicationStatus": string;
                "VirtualBorderRouterModels": {
                    "VirtualBorderRouterModel": any[];
                };
                "EndTime": string;
            }[];
        };
        "PageSize": number;
        "PageNo": number;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyExpressCloudConnectionAttribute修改高速上云服务连接。
    */ ModifyExpressCloudConnectionAttribute(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 高速上云连接实例ID。
        * @example `ecc-bp1t9osmuln*******`
        */ "EccId": string;
        "OwnerId"?: number;
        /**
        * 高速上云服务说明。
        * @example `ECC`
        */ "Description"?: string;
        /**
        * 高速上云服务实例名称。
        * @example `doctest`
        */ "Name"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateExpressCloudConnection申请高速上云服务。
    */ CreateExpressCloudConnection(query: {
        /**
        * 高速上云服务实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 本地数据中心的地理位置。
        * 需要精确到楼层。
        * @example `XX区XX大厦XX栋5楼`
        */ "PeerLocation": string;
        /**
        * IDC的网络服务商。
        * @example `CU`
        */ "IdcSP": string;
        /**
        * 高速上云连接的带宽， 单位Mbps。
        * 取值：**2|4|6|8|10|20|50|100|200|500|1000|10000|40000**
        * @example `2`
        */ "Bandwidth": number;
        "OwnerId"?: number;
        /**
        * 高速上云服务的实例名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
        * @example `doctest`
        */ "Name"?: string;
        /**
        * 高速上云服务的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `高速上云服务`
        */ "Description"?: string;
        /**
        * 所在城市。
        * @example `杭州`
        */ "PeerCity"?: string;
        /**
        * 物理专线接入端口类型，取值：
        * - 100Base-T：百兆电口
        * - 1000Base-T（默认值）：千兆电口
        * - 1000Base-LX：千兆单模光口（10千米）
        * - 10GBase-T：万兆电口
        * - 10GBase-LR：万兆单模光口（10千米）
        * @example `100Base-T`
        */ "PortType"?: string;
        /**
        * 申请高速上云服务的联系人电话。
        * @example `152XXXXXXXX`
        */ "ContactTel"?: string;
        /**
        * 申请高速上云连接的联系人邮件。
        * @example `XX@example.com`
        */ "ContactMail"?: string;
        /**
        * 申请高速上云服务的联系人身份证号。
        * @example `32****************`
        */ "IDCardNo"?: string;
        /**
        * 冗余高速上云服务专线实例ID。
        * @example `ecc-d****`
        */ "RedundantEccId"?: string;
    }): Promise<{
        "EccId": string;
        "RequestId": string;
    }>;
    /**
    * 调用UnassociatePhysicalConnectionFromVirtualBorderRouter解绑VBR和物理专线。
    */ UnassociatePhysicalConnectionFromVirtualBorderRouter(query: {
        /**
        * 物理专线实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VBR的VLAN ID，取值范围为：1-2999。
        * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
        * @example `vbr-bp16ksp61j7e0tkn*****`
        */ "VbrId": string;
        /**
        * 物理专线ID。
        * @example `pc-bp1qrb3044eqixog****`
        */ "PhysicalConnectionId": string;
        "OwnerId"?: number;
        /**
        * 运营商为物理专线提供的电路编码。
        * > 只有物理专线的所有者可以指定该参数。
        * @example `longtel001`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AssociatePhysicalConnectionToVirtualBorderRouter将VBR关联物理专线。
    */ AssociatePhysicalConnectionToVirtualBorderRouter(query: {
        /**
        * 物理专线实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 边界路由器ID。
        * @example `vbr-bp186tnz6rijyhj******`
        */ "VbrId": string;
        /**
        * 物理专线ID。
        * @example ` pc-bp1qrb3044eqixog****`
        */ "PhysicalConnectionId": string;
        /**
        * VBR的VLAN ID。
        * 取值范围为：1-2999。
        * > 只有物理专线的所有者可以指定该参数，同一条物理专线下的两个VBR的VLAN ID不能相同。
        * @example `123`
        */ "VlanId": string;
        /**
        * 运营商为物理专线提供的电路编码。
        * > 只有物理专线的所有者可以指定该参数。
        * @example `longtel001`
        */ "CircuitCode"?: string;
        /**
        * VBR的阿里云侧互联IP。
        * @example `10.10.0.1`
        */ "LocalGatewayIp"?: string;
        /**
        * VBR专线侧接口对端的IP地址。
        * 该属性只允许VBR owner指定/修改，不允许把Enabled状态的VBR的该属性改为空。
        * @example `10.10.10.9`
        */ "PeerGatewayIp"?: string;
        /**
        * VBR的阿里云侧和客户侧互联IP的子网掩码。
        * 两个IP地址必须位于同一个子网中。
        * @example `255.255.255.0`
        */ "PeeringSubnetMask"?: string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-00xxxxxxxx`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteVpnRouteEntry删除VPN目的路由。
    */ DeleteVpnRouteEntry(query: {
        /**
        * VPN目的路由所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou	`
        */ "RegionId": string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1a3kqjiiq9legfx****`
        */ "VpnGatewayId": string;
        /**
        * 目的路由的目标网段。
        * @example `10.0.0.0/24	`
        */ "RouteDest": string;
        /**
        * 目的路由的下一跳。
        * @example `vco-bp15oes1py4i66rmd****`
        */ "NextHop": string;
        /**
        * 目的路由的权重值，取值：**0**|**100**。
        * @example `0`
        */ "Weight": number;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b	`
        */ "ClientToken"?: string;
        /**
        * @example `111`
        */ "OverlayMode"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeVpnPbrRouteEntries查询VPN策略路由。
    */ DescribeVpnPbrRouteEntries(query: {
        /**
        * VPN策略路由所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1a3kqjiiq9legfx****`
        */ "VpnGatewayId": string;
        "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `10`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "RequestId": string;
        "PageSize": number;
        "VpnPbrRouteEntries": {
            "VpnPbrRouteEntry": {
                "RouteDest": string;
                "VpnInstanceId": string;
                "State": string;
                "Weight": number;
                "CreateTime": number;
                "NextHop": string;
                "RouteSource": string;
            }[];
        };
    }>;
    /**
    * 调用DeleteVpnPbrRouteEntry删除VPN策略路由。
    */ DeleteVpnPbrRouteEntry(query: {
        /**
        * VPN策略路由所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1a3kqjiiq9legfx****`
        */ "VpnGatewayId": string;
        /**
        * 策略路由的源网段。
        * @example `192.168.1.0/24`
        */ "RouteSource": string;
        /**
        * 策略路由的目标网段。
        * @example `10.0.0.0/24`
        */ "RouteDest": string;
        /**
        * 策略路由的下一跳。
        * @example `vco-bp15oes1py4i66rmd****`
        */ "NextHop": string;
        /**
        * 策略路由的权重值，取值：**0**|**100**。
        * @example `0`
        */ "Weight": number;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * @example `111`
        */ "OverlayMode"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyVpnRouteEntryWeight修改VPN目的路由的权重值。
    */ ModifyVpnRouteEntryWeight(query: {
        /**
        * VPN目的路由所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1a3kqjiiq9legfx****`
        */ "VpnGatewayId": string;
        /**
        * 目的路由的目标网段。
        * @example `10.0.0.0/24`
        */ "RouteDest": string;
        /**
        * 目的路由的下一跳。
        * @example `vco-bp15oes1py4i66rmd****	`
        */ "NextHop": string;
        /**
        * VPN目的路由在修改之前设置的权重值，取值：**0**|**100**。
        * @example `0`
        */ "Weight": number;
        /**
        * 要设置的权重值，取值：**0**|**100**。
        * @example `100`
        */ "NewWeight": number;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * 覆盖模式。
        * @example `Ipsec`
        */ "OverlayMode"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateVpnPbrRouteEntry创建VPN策略路由。
    */ CreateVpnPbrRouteEntry(query: {
        /**
        * VPN策略路由所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1a3kqjiiq9legfx****`
        */ "VpnGatewayId": string;
        /**
        * 策略路由的源网段。
        * @example `192.168.1.0/24`
        */ "RouteSource": string;
        /**
        * 策略路由的目标网段。
        * @example `10.0.0.0/24`
        */ "RouteDest": string;
        /**
        * 策略路由的下一跳。
        * @example `vco-bp15oes1py4i66rmd****`
        */ "NextHop": string;
        /**
        * 策略路由的权重值，取值：**0**|**100**。
        * @example `0`
        */ "Weight": number;
        /**
        * 是否发布策略路由到VPC，取值：
        * - **true**：发布策略路由到VPC。
        * - **false**：不发布策略路由到VPC。
        * @example `true`
        */ "PublishVpc": boolean;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * @example `111`
        */ "Description"?: string;
        /**
        * 覆盖模式。
        * @example `Ipsec`
        */ "OverlayMode"?: string;
    }): Promise<{
        "RouteDest": string;
        "RouteSource": string;
        "VpnInstanceId": string;
        "OverlayMode": string;
        "State": string;
        "Weight": number;
        "CreateTime": number;
        "NextHop": string;
    }>;
    /**
    * 调用PublishVpnRouteEntry发布VPN路由到VPC。
    */ PublishVpnRouteEntry(query: {
        /**
        * VPN路由所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1a3kqjiiq9legfx****`
        */ "VpnGatewayId": string;
        /**
        * VPN路由的目标网段。
        * @example `10.0.0.0/24`
        */ "RouteDest": string;
        /**
        * VPN路由的下一跳。
        * @example `vco-bp15oes1py4i66rmd****`
        */ "NextHop": string;
        /**
        * VPN路由类型，取值：
        * - **pbr**：策略路由。
        * - **dbr**：目的路由。
        * @example `pbr`
        */ "RouteType": string;
        /**
        * 是否发布VPN路由到VPC，取值：
        * - **true**：发布VPN路由到VPC。
        * - **false**：不发布VPN路由到VPC。
        * @example `true`
        */ "PublishVpc": boolean;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b	`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateVpnRouteEntry创建VPN目的路由。
    */ CreateVpnRouteEntry(query: {
        /**
        * VPN目的路由所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1a3kqjiiq9legfx****`
        */ "VpnGatewayId": string;
        /**
        * 目的路由的目标网段。
        * @example `10.0.0.0/24`
        */ "RouteDest": string;
        /**
        * 目的路由的下一跳。
        * @example `vco-bp15oes1py4i66rmd****	`
        */ "NextHop": string;
        /**
        * 目的路由的权重值，取值：**0**|**100**。
        * @example `0`
        */ "Weight": number;
        /**
        * 是否发布目的路由到VPC，取值：
        * - **true**：发布目的路由到VPC。
        * - **false**：不发布目的路由到VPC。
        * @example `true`
        */ "PublishVpc": boolean;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b	`
        */ "ClientToken"?: string;
        /**
        * @example `111`
        */ "Description"?: string;
        /**
        * 覆盖模式。
        * @example `Ipsec`
        */ "OverlayMode"?: string;
    }): Promise<{
        "RouteDest": string;
        "VpnInstanceId": string;
        "OverlayMode": string;
        "State": string;
        "Weight": number;
        "CreateTime": number;
        "NextHop": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyRouteEntry修改一条自定义路由条目的名称。
    */ ModifyRouteEntry(query: {
        /**
        * 路由条目所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 自定义路由条目ID。
        * @example `rte-1234567890`
        */ "RouteEntryId": string;
        /**
        * 路由条目的名称。
        * 长度为2~128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `EntryName`
        */ "RouteEntryName"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyVpnPbrRouteEntryWeight接口修改VPN策略路由的权重值。
    */ ModifyVpnPbrRouteEntryWeight(query: {
        /**
        * VPN策略路由所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1a3kqjiiq9legfx****`
        */ "VpnGatewayId": string;
        /**
        * 策略路由的源网段。
        * @example `192.168.1.0/24`
        */ "RouteSource": string;
        /**
        * 策略路由的目标网段。
        * @example `10.0.0.0/24`
        */ "RouteDest": string;
        /**
        * 策略路由的下一跳。
        * @example `vco-bp15oes1py4i66rmd****	`
        */ "NextHop": string;
        /**
        * VPN策略路由在修改之前设置的权重值，取值：**0**|**100**。
        * @example `0`
        */ "Weight": number;
        /**
        * 要设置的权重值，取值：**0**|**100**。
        * @example `100`
        */ "NewWeight": number;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * 覆盖模式。
        * @example `Ipsec`
        */ "OverlayMode"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DisableVpcClassicLink关闭ClassicLink。
    */ DisableVpcClassicLink(query: {
        /**
        * 要关闭ClassicLink的VPC所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VPC的ID。
        * @example `vpc-bp1m7v25emi1h5mtc****`
        */ "VpcId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b	`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeVpnRouteEntries查询VPN目的路由。
    */ DescribeVpnRouteEntries(query: {
        /**
        * VPN目的路由所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * VPN网关的ID。
        * @example `vpn-bp1a3kqjiiq9legfx****`
        */ "VpnGatewayId": string;
        "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "VpnRouteEntries": {
            "VpnRouteEntry": {
                "RouteDest": string;
                "VpnInstanceId": string;
                "State": string;
                "Weight": number;
                "CreateTime": number;
                "NextHop": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用EnableVpcClassicLink开启ClassicLink。
    */ EnableVpcClassicLink(query: {
        /**
        * 要开启ClassicLink的VPC所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou	`
        */ "RegionId": string;
        /**
        * VPC的ID。
        * @example `vpc-bp1m7v25emi1h5mtc****	`
        */ "VpcId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b	`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRouteEntryList查询路由条目列表。
    */ DescribeRouteEntryList(query: {
        /**
        * 路由条目所在路由表的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 路由表ID。
        * @example `vtb-bp1r9pvl4xen8s9ju****`
        */ "RouteTableId": string;
        /**
        * 路由条目ID。
        * @example `rte-bp1mnnr2al0naomnp****`
        */ "RouteEntryId"?: string;
        /**
        * 路由条目的目标网段，支持IPv4和IPv6网段。
        * >仅中国站支持IPv6网段。
        * @example `192.168.2.0/24`
        */ "DestinationCidrBlock"?: string;
        /**
        * 路由条目的名称。
        * @example `abc`
        */ "RouteEntryName"?: string;
        /**
        * IP协议的版本，取值：
        * - **IPv4**：IPv4协议。
        * - **IPv6**：IPv6协议。
        * >仅中国站支持IPv6协议。
        * @example `IPv4`
        */ "IpVersion"?: string;
        /**
        * 路由条目的类型，取值：
        * - **Custom**：自定义路由。
        * - **System**：系统路由。
        * @example `System`
        */ "RouteEntryType"?: string;
        /**
        * 下一跳实例ID。
        * @example `vpn-bp10zyaph5cc8b7c7****`
        */ "NextHopId"?: string;
        /**
        * 下一跳类型，取值：
        * - **Instance**：ECS实例。
        * - **HaVip**：高可用虚拟IP。
        * - **VpnGateway**：VPN网关。
        * - **NatGateway**：NAT网关。
        * - **NetworkInterface**：辅助弹性网卡。
        * - **RouterInterface**：路由器接口。
        * - **IPv6Gateway**：IPv6网关。
        * >仅中国站支持IPv6网关作为下一跳。
        * @example `Instance`
        */ "NextHopType"?: string;
        /**
        * 分页大小，取值范围：**20**~**100**，默认为**50**。
        * @example `50`
        */ "MaxResult"?: number;
        /**
        * 下一个查询开始Token。
        * @example `caeba0bbb2be03f84eb48b699f0a4883`
        */ "NextToken"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "NextToken": string;
        "RouteEntrys": {
            "RouteEntry": {
                "NextHops": {
                    "NextHop": {
                        "NextHopId": string;
                        "NextHopRelatedInfo": {};
                        "NextHopType": string;
                    }[];
                };
                "Status": string;
                "RouteEntryName": string;
                "RouteEntryId": string;
                "Type": string;
                "IpVersion": string;
                "RouteTableId": string;
                "DestinationCidrBlock": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用ModifyHaVipAttribute接口修改HaVip实例的描述。
    */ ModifyHaVipAttribute(query: {
        /**
        * HaVip实例所在的地域。
        * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 要修改的的HaVip实例ID。
        * @example `havip-2zeo05qre24nhrqp****`
        */ "HaVipId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e0****`
        */ "ClientToken"?: string;
        /**
        * 添加HaVip的描述。
        * @example `This is my HaVip.`
        */ "Description"?: string;
        "Name"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    DescribeHighDefinitionMonitorLogAttribute(query: {
        "RegionId": string;
        "InstanceId": string;
        "OwnerId"?: number;
        "InstanceType"?: string;
    }): Promise<{}>;
    AssociateHaVip(query: {
        "RegionId": string;
        "HaVipId": string;
        "InstanceId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    CreateHaVip(query: {
        "RegionId": string;
        "VSwitchId": string;
        "Name"?: string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "IpAddress"?: string;
        "Description"?: string;
    }): Promise<{}>;
    DeleteExpressConnect(query: {
        "RegionId": string;
        "RouterInterfaceId": string;
        "Force"?: boolean;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    DeletionProtection(query: {
        "RegionId": string;
        "Type": string;
        "InstanceId": string;
        "ProtectionEnable": boolean;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    DescribeGrantRulesToCen(query: {
        "RegionId": string;
        "InstanceId": string;
        "InstanceType": string;
        "OwnerId"?: number;
        "ResourceGroupId"?: string;
        "ClientToken"?: string;
    }): Promise<{}>;
    DescribeSslVpnClientCert(query: {
        "RegionId": string;
        "SslVpnClientCertId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    GrantInstanceToCen(query: {
        "RegionId": string;
        "InstanceId": string;
        "InstanceType": string;
        "CenId": string;
        "CenOwnerId": number;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    ModifyCommonBandwidthPackagePayType(query: {
        "RegionId": string;
        "BandwidthPackageId": string;
        "PayType"?: string;
        "PricingCycle"?: string;
        "Duration"?: number;
        "AutoPay"?: boolean;
        "OwnerId"?: number;
        "Bandwidth"?: string;
        "KbpsBandwidth"?: string;
        "ResourceBid"?: string;
        "ResourceUid"?: number;
    }): Promise<{}>;
    ModifyIPv6TranslatorAclListEntry(query: {
        "RegionId": string;
        "AclId": string;
        "AclEntryId": string;
        "AclEntryComment": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyIpv6AddressAttribute(query: {
        "RegionId": string;
        "Ipv6AddressId": string;
        "Name"?: string;
        "Description"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyIpv6GatewayAttribute(query: {
        "RegionId": string;
        "Ipv6GatewayId": string;
        "Name"?: string;
        "Description"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    MoveResourceGroup(query: {
        "RegionId": string;
        "ResourceType": string;
        "NewResourceGroupId": string;
        "ResourceId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    UnassociateHaVip(query: {
        "RegionId": string;
        "HaVipId": string;
        "InstanceId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
        "Force"?: string;
    }): Promise<{}>;
    DeleteHaVip(query: {
        "RegionId": string;
        "HaVipId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    RevokeInstanceFromCen(query: {
        "RegionId": string;
        "InstanceId": string;
        "InstanceType": string;
        "CenId": string;
        "CenOwnerId": number;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
    DescribeNewProjectEipMonitorData(query: {
        "RegionId"?: string;
        "StartTime": string;
        "EndTime": string;
        "OwnerId"?: number;
        "AllocationId": string;
        "Period"?: number;
    }): Promise<{}>;
}
export default VPC;
