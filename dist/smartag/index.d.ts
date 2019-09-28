interface SMARTAG {
    /**
    * 调用DeleteNetworkOptimization删除网络优化实例。
    */ DeleteNetworkOptimization(query: {
        /**
        * 网络优化实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络优化实例ID。
        * @example `opt-qjf2h3kla7xr5******`
        */ "NetworkOptId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyNetworkOptimization修改网络优化实例。
    */ ModifyNetworkOptimization(query: {
        /**
        * 网络优化实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络优化实例ID。
        * @example `opt-qjf2h3kla7xr53k***`
        */ "NetworkOptId": string;
        "OwnerId"?: number;
        /**
        * 网络优化实例名称。
        * @example `doctest`
        */ "Name"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeUserOnlineClients查询指定智能接入网关APP实例下用户的流量统计。
    */ DescribeUserFlowStatistics(query: {
        /**
        * 智能接入网关APP实例所在的地域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关APP实例ID。
        * @example `sag-mfkg*****`
        */ "SmartAGId": string;
        "UserNames": string[];
        "OwnerId"?: number;
        /**
        * 统计日期，格式yyyyMM。
        * 如果不设置，默认表示当月。
        * @example `201905`
        */ "StatisticsDate"?: string;
    }): Promise<{
        "SagStatistics": {
            "Statistics": {
                "UserName": string;
                "TotalBytes": number;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeNetworkOptimizations查询网络优化实例信息。
    */ DescribeNetworkOptimizations(query: {
        /**
        * 网络优化实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 网络优化实例ID，多个ID以逗号隔开。
        * 不填则查询Region内所有网络优化实例规则。
        * @example `opt-hit1puq1t8j5****`
        */ "NetworkOptId"?: string;
        /**
        * 绑定的云连接网ID。
        * @example `ccn-wfrxakqrppqzo*****`
        */ "CcnId"?: string;
        /**
        * 网络优化实例名称。
        * @example `doctest`
        */ "Name"?: string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `2`
        */ "PageSize"?: number;
    }): Promise<{
        "NetworkOptimizations": {
            "NetworkOptimization": {
                "SagCount": number;
                "State": string;
                "CreateTime": string;
                "InstanceId": string;
                "CcnId": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "PageNo": number;
    }>;
    /**
    * 调用DescribeUserOnlineClientStatistics查询指定智能接入网关APP实例用户数统计。
    */ DescribeUserOnlineClientStatistics(query: {
        /**
        * 智能接入网关APP实例所在的地域。
        * @example `cn-shanghai`
        */ "RegionId": string;
        "UserNames": string[];
        "OwnerId"?: number;
        /**
        * 智能接入网关APP实例ID。
        * @example `sag-sfjg*****`
        */ "SmartAGId"?: string;
    }): Promise<{
        "RequestId": string;
        "UserStatistics": {
            "Statistics": {
                "UserName": string;
                "OnlineCount": number;
            }[];
        };
    }>;
    /**
    * 调用CreateNetworkOptimization创建网络优化实例。
    */ CreateNetworkOptimization(query: {
        /**
        * 网络优化实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要绑定的云连接网ID，该云连接网必须属于某个云企业网。
        * @example `ccn-wfrxakqrppq********`
        */ "CcnId": string;
        "OwnerId"?: number;
        /**
        * 网络优化实例名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://`或`https://`开头。
        * @example `doctest`
        */ "Name"?: string;
    }): Promise<{
        "NetworkOptId": string;
        "State": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSagOnlineClientStatistics查询当前用户智能接入网关APP实例在线连接数据。
    */ DescribeSagOnlineClientStatistics(query: {
        /**
        * 智能接入网关APP实例所在的地域。
        * @example `cn-shanghai`
        */ "RegionId": string;
        "OwnerId"?: number;
        "SmartAGIds"?: string[];
    }): Promise<{
        "RequestId": string;
        "SagStatistics": {
            "Statistics": {
                "SmartAGId": string;
                "OnlineCount": number;
            }[];
        };
    }>;
    /**
    * 调用DeleteSmartAccessGatewayClientUser删除APP客户端用户。
    */ DeleteSmartAccessGatewayClientUser(query: {
        /**
        * 智能接入网关APP实例地域。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 智能接入网关APP实例ID。
        * @example `sag-hdjffn******`
        */ "SmartAGId": string;
        /**
        * 用户名，同一个智能接入网关APP实例下的用户名不可以重复。
        * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
        * @example `doctest`
        */ "UserName": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用KickOutClients根据智能接入网关APP实例ID和用户名，剔除在线连接。
    */ KickOutClients(query: {
        /**
        * 智能接入网关APP实例所在的地域。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 智能接入网关APP实例ID。
        * @example `sag-ehjfb*******`
        */ "SmartAGId": string;
        /**
        * 用户名，同一个智能接入网关APP实例下的用户名不可以重复。
        * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
        * @example `doctest`
        */ "Username": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSmartAccessGatewayClientUsers查询智能接入网关APP实例用户列表。
    */ DescribeSmartAccessGatewayClientUsers(query: {
        /**
        * 智能接入网关APP实例所在的地域。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 智能接入网关APP实例ID。
        * @example `sag-jfkskjfjf********`
        */ "SmartAGId": string;
        "OwnerId"?: number;
        /**
        * 用户名，同一个智能接入网关APP实例下的用户名不可以重复。
        * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
        * @example `doctest`
        */ "UserName"?: string;
        /**
        * 分页查询的页码。
        * @example `2`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。 最大值：100
        * 默认值：**50**
        * @example `21`
        */ "PageSize"?: number;
    }): Promise<{
        "Users": {
            "User": {
                "SmartAccessGatewayId": string;
                "IsStaticIp": number;
                "UserMail": string;
                "UserName": string;
                "Bandwidth": number;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "PageNo": number;
    }>;
    /**
    * 调用ResetSmartAccessGatewayClientUserPassword重置APP客户端密码。
    */ ResetSmartAccessGatewayClientUserPassword(query: {
        /**
        * 智能接入网关APP客户端地域。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 智能接入网关APP实例ID。
        * @example `sag-jdfnf*********`
        */ "SmartAGId": string;
        /**
        * 用户名，同一个智能接入网关APP实例下的用户名不可以重复。
        * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
        * @example `doctest`
        */ "UserName": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifySmartAccessGatewayClientUser修改用户带宽。
    */ ModifySmartAccessGatewayClientUser(query: {
        /**
        * 智能接入网关APP实例地域。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 智能接入网关APP实例ID。
        * @example `sag-kdhej*******8`
        */ "SmartAGId": string;
        /**
        * 用户名，同一个智能接入网关APP实例下的用户名不可以重复。
        * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
        * @example `doctest`
        */ "UserName": string;
        /**
        * 带宽，单位Kbps，最大2000Kbps。
        * @example `2`
        */ "Bandwidth": number;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "UserMail": string;
        "UserName": string;
        "Bandwidth": number;
    }>;
    /**
    * 调用CreateSmartAccessGatewayClientUser创建用户。
    */ CreateSmartAccessGatewayClientUser(query: {
        /**
        * 智能接入网关APP实例所在地域。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 智能接入网关APP实例ID。
        * @example `sag-gnhe6sywtare5******`
        */ "SmartAGId": string;
        /**
        * 普通用户的邮箱地址，用于管理员向普通用户发送登录APP的账号信息。
        * @example `test@example.com`
        */ "UserMail": string;
        /**
        * 带宽，单位Kbps，最大2000Kbps。
        * @example `20`
        */ "Bandwidth": number;
        "OwnerId"?: number;
        /**
        * 用户名，同一个智能接入网关APP实例下的用户名不可以重复。
        * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
        * @example `doctest`
        */ "UserName"?: string;
        /**
        * * 如果开启，需要设置APP的IP地址。当前账号始终保持以选择的IP地址接入。
        *   >设置APP的IP地址必须在私网网段内。
        * * 如果关闭，系统自动从私网网段内分配可用IP地址，每次重连IP地址都会重新分配。
        * @example `10.**.**.**`
        */ "ClientIp"?: string;
        /**
        * 登录智能接入网关APP的密码。
        * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
        * @example `duuf**`
        */ "Password"?: string;
    }): Promise<{
        "IsStaticIp": number;
        "RequestId": string;
        "UserMail": string;
        "UserName": string;
        "Bandwidth": number;
    }>;
    /**
    * 调用CreateSmartAccessGatewaySoftware创建智能接入网关APP。
    */ CreateSmartAccessGatewaySoftware(query: {
        /**
        * 智能接入网关APP实例的地域。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 每个账号下套餐的使用时长，按月计算。如果取值超过12，必须是12的倍数。
        * @example `12`
        */ "Period": number;
        /**
        * 是否是自动支付预付费实例的账单。
        * 取值：**true|false**
        * 默认值：**false**。
        * @example `true`
        */ "AutoPay": boolean;
        /**
        * 实例的计费类型，取值：
        * - PayOnDemand：按量付费
        * - PREPAY：预付费
        * > 目前只支持预付费。
        * @example `PREPAY`
        */ "ChargeType": string;
        /**
        * APP账号数规格，购买后可创建相应数量的账号，一般为每个需要登录的员工创建一个账号。
        * @example `5`
        */ "UserCount": number;
        /**
        * 每个账号每月赠送的流量套餐规格，单位G。
        * > 目前仅支持购买5GB/月套餐。
        * @example `5`
        */ "DataPlan": number;
        "OwnerId"?: number;
    }): Promise<{
        "SmartAGId": string;
        "OrderId": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeACLAttribute批量查询访问控制，需要增加Name参数，支持按照Name过滤。
    */ DescribeACLAttribute(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制ID。
        * @example `acl-ohlexqptfhy******`
        */ "AclId": string;
        "OwnerId"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 列表的页码，默认值为1。
        * @example `2`
        */ "PageNumber"?: number;
        /**
        * 规则方向。
        * 取值：**in|out**
        * @example `test`
        */ "Direction"?: string;
        /**
        * 订单号。
        * @example `1255444444`
        */ "Order"?: string;
    }): Promise<{
        "PageNumber": number;
        "Acrs": {
            "Acr": {
                "IpProtocol": string;
                "SourceCidr": string;
                "SourcePortRange": string;
                "AclId": string;
                "AcrId": string;
                "Policy": string;
                "DestPortRange": string;
                "DestCidr": string;
                "GmtCreate": number;
                "Direction": string;
                "Priority": number;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DeleteACLRule删除访问控制规则。
    */ DeleteACLRule(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 需要删除的访问规则所属的访问控制。
        * @example `acl-xhwhyuo43l0n*****`
        */ "AclId": string;
        /**
        * 需要删除的访问控制规则。
        * @example `acr-c1hkd054qywiw******`
        */ "AcrId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateACL创建访问控制。
    */ CreateACL(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头
        * @example `test`
        */ "Name": string;
        "OwnerId"?: number;
    }): Promise<{
        "AclId": string;
        "RequestId": string;
    }>;
    /**
    * 调用AssociateACL将访问控制与智能接入网关实例绑定。
    */ AssociateACL(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制ID。
        * @example `acl-ohlexqptfhy******`
        */ "AclId": string;
        /**
        * 需要绑定访问控制的智能网关实例。
        * @example `sag-4yr0p2xa6o3k*******`
        */ "SmartAGId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DisassociateACL将智能接入网关实例跟访问控制解绑。
    */ DisassociateACL(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制ID。
        * @example `acl-xhwhyuo43l0*******`
        */ "AclId": string;
        /**
        * 需要与访问控制解绑的智能接入网关实例ID。
        * @example `sag-ke3kq4evpi8********`
        */ "SmartAGId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AddACLRule添加访问控制规则。
    */ AddACLRule(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制ID。
        * @example `acl-xhwhyuo43l0n*****`
        */ "AclId": string;
        /**
        * 规则方向。
        * 取值：**in|out**
        * @example `in`
        */ "Direction": string;
        /**
        * 源地址，CIDR 格式和IPv4格式的IP地址范围。
        * 默认值：**0.0.0.0/0**
        * @example `0.0.0.0/0`
        */ "SourceCidr": string;
        /**
        * 目的地址，CIDR 格式和 IPv4 格式的IP地址范围。
        * 默认值：0.0.0.0/0
        * @example `0.0.0.0/0`
        */ "DestCidr": string;
        /**
        * 协议，不区分大小写。
        * @example `tcp`
        */ "IpProtocol": string;
        /**
        * 源端口范围，80/80。
        * @example `20`
        */ "SourcePortRange": string;
        /**
        * 目的端口范围，80/80。
        * @example `10`
        */ "DestPortRange": string;
        /**
        * 访问权限：**accept|drop**
        * @example `accept`
        */ "Policy": string;
        "OwnerId"?: number;
        /**
        * 规则描述信息，长度为1~512个字符。
        * @example `test`
        */ "Description"?: string;
        /**
        * 优先级，取值范围：**1~100**。
        * 默认值：1
        * @example `12`
        */ "Priority"?: number;
        "Type"?: string;
    }): Promise<{
        "AcrId": string;
        "GmtCreate": number;
        "Direction": string;
        "Priority": number;
        "IpProtocol": string;
        "SourceCidr": string;
        "SourcePortRange": string;
        "AclId": string;
        "Policy": string;
        "RequestId": string;
        "DestPortRange": string;
        "DestCidr": string;
    }>;
    /**
    * 调用DescribeGrantRules查询绑定的云连接网的授权规则。
    */ DescribeGrantRules(query: {
        /**
        * 云企业网实例所在的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 绑定的云连接网ID
        * @example `ccn-n2935s1mnwv8i*****`
        */ "AssociatedCcnId"?: string;
        /**
        * 每页行数，默认值为**10**，最大值为**50**.
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 请求页码，默认值是**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "PageNumber": number;
        "GrantRules": {
            "GrantRule": {
                "GrantRuleId": string;
                "CenUid": number;
                "CcnInstanceId": string;
                "CenInstanceId": string;
                "RegionId": string;
                "GmtCreate": number;
                "GmtModified": number;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DeleteACL删除访问控制。
    */ DeleteACL(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制ID。
        * @example `acl-ohlexqptfhy*******`
        */ "AclId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyACLRule修改访问控制规则。
    */ ModifyACLRule(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 需要修改的访问控制ID。
        * @example `acl-xhwhyuo43l0n*******`
        */ "AclId": string;
        /**
        * 需要修改的访问控制规则ID。
        * @example `acr-u98qztgtgvhb********`
        */ "AcrId": string;
        "OwnerId"?: number;
        /**
        * 规则描述信息，长度为1~512个字符。
        * @example `test`
        */ "Description"?: string;
        /**
        * 规则方向。
        * 取值：**in|out**
        * @example `in`
        */ "Direction"?: string;
        /**
        * 源地址，CIDR格式和IPv4格式的IP地址范围。
        * 默认值：**0.0.0.0/0 **
        * @example `0.0.0.0/0`
        */ "SourceCidr"?: string;
        /**
        * 目的地址，CIDR格式和IPv4格式的IP地址范围。
        * 默认值：**0.0.0.0/0**
        * @example `0.0.0.0/0`
        */ "DestCidr"?: string;
        /**
        * 协议，不区分大小写。
        * @example `tcp`
        */ "IpProtocol"?: string;
        /**
        * 源端口范围，80/80。
        * @example `80/80`
        */ "SourcePortRange"?: string;
        /**
        * 目的端口范围，80/80。
        * @example `80/80`
        */ "DestPortRange"?: string;
        /**
        * 访问权限：**accept|drop**
        * @example `accept`
        */ "Policy"?: string;
        /**
        * 优先级，取值范围：1~100
        * 默认值：1
        * @example `2`
        */ "Priority"?: number;
        "Type"?: string;
    }): Promise<{
        "AcrId": string;
        "GmtCreate": number;
        "Direction": string;
        "Priority": number;
        "IpProtocol": string;
        "SourceCidr": string;
        "SourcePortRange": string;
        "AclId": string;
        "Policy": string;
        "RequestId": string;
        "DestPortRange": string;
        "DestCidr": string;
    }>;
    /**
    * 调用ModifyACL修改访问控制。
    */ ModifyACL(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制ID。
        * @example `acl-e30a66to95cs******`
        */ "AclId": string;
        /**
        * 访问控制名称。
        * @example `test`
        */ "Name": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeACLs查询访问控制信息。
    */ DescribeACLs(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 访问控制集合ACL的ID。
        * 多个ID以逗号隔开，不填则查询region内所有ACL规则。
        * @example `acl-xhwhyuo43l*******`
        */ "AclIds"?: string;
        /**
        * ACL名称。
        * @example `test`
        */ "Name"?: string;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `1`
        */ "PageSize"?: number;
        /**
        * 列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "Acls": {
            "Acl": {
                "Name": string;
                "SagCount": number;
                "AclId": string;
            }[];
        };
    }>;
    /**
    * 调用GrantInstanceToCbn将云企业网实例授权给云连接网。
    */ GrantInstanceToCbn(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 云连接网的实例ID。
        * @example `ccn-n2935s1mnwv8i*****`
        */ "CcnInstanceId": string;
        /**
        * 云企业网的实例ID。
        * @example `cen-7qthudw0ll6jm*****`
        */ "CenInstanceId": string;
        /**
        * 云企业网的UID。
        * @example `123456789`
        */ "CenUid": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用GetCloudConnectNetworkUseLimit查询当前账号在指定区域内的云连接网个数限制。
    */ GetCloudConnectNetworkUseLimit(query: {
        /**
        * 云连接网的所属区域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "TotalAmount": number;
        "UsedAmount": number;
    }>;
    /**
    * 调用UnlockSmartAccessGateway解锁智能接入网关实例。
    */ UnlockSmartAccessGateway(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 智能接入网关实例ID。
        * @example `sag-w9unmktmupcde*****`
        */ "SmartAGId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateCloudConnectNetwork创建云连接网。
    */ CreateCloudConnectNetwork(query: {
        /**
        *  云连接网的所属区域。取值： cn-shanghai：中国大陆
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 是否默认创建。
        * 如果客户没有ccn在绑定时，会给用户默认创建一个ccn。
        * @example `false`
        */ "IsDefault": boolean;
        /**
        * 云连接网的名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http:// `或 `https://`开头。
        * @example `ccn名称`
        */ "Name"?: string;
        /**
        * 云连接网的描述。
        * 长度为2-256个字符，必须以字母或中文开头，但不能以`http:// `或 `https://`开头。
        * @example `ccn描述`
        */ "Description"?: string;
        /**
        * 私网网段。
        * @example `172.16.22.0/24`
        */ "CidrBlock"?: string;
        /**
        * SNAT内网网段。
        * @example `172.16.22.3/24`
        */ "SnatCidrBlock"?: string;
    }): Promise<{
        "Name": string;
        "Status": string;
        "RequestId": string;
        "CcnId": string;
    }>;
    /**
    * 调用DescribeCloudConnectNetworks查询已创建的云连接网。
    */ DescribeCloudConnectNetworks(query: {
        /**
        * 云连接网的所属区域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 云连接网名称。
        * @example `ccn名称`
        */ "Name"?: string;
        /**
        * 云连接网ID。
        * @example `ccn-l9340rlu5enst*****`
        */ "CcnId"?: string;
        /**
        * 分页查询时设置的每页行数，默认值为10，最大值为50。
        * @example `4`
        */ "PageSize"?: number;
        /**
        * 实例状态列表的页码，默认值是1。
        * @example `4`
        */ "PageNumber"?: number;
        "Tag"?: string[];
    }): Promise<{
        "CloudConnectNetworks": {
            "CloudConnectNetwork": {
                "Name": string;
                "AvailableCloudBoxCount": number;
                "AssociatedCenOwnerId": string;
                "IsDefault": boolean;
                "AssociatedCloudBoxCount": number;
                "CreateTime": number;
                "CcnId": string;
            }[];
        };
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用RebootSmartAccessGateway重启智能接入网关实例。
    */ RebootSmartAccessGateway(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-w9unmktmupcde*****`
        */ "SmartAGId": string;
        "OwnerId"?: number;
        /**
        * 硬件序列号。
        * @example `a1b2c3d4e5f6g7h8f9`
        */ "SerialNumber"?: string;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用DeleteCloudConnectNetwork删除云连接网。
    */ DeleteCloudConnectNetwork(query: {
        /**
        * 云连接网的所属区域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 云连接网ID。
        * @example `ccn-bxuau4ezctts2*****`
        */ "CcnId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteSnatEntry删除指定智能接入网关绑定的SNAT条目。
    */ DeleteSnatEntry(query: {
        /**
        * 智能接入网关实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-hfbd*******`
        */ "SmartAGId": string;
        /**
        * SNAT实例ID。
        * @example `snat-djngdheb*******`
        */ "InstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteDnatEntry删除指定智能接入网关实例绑定的DNAT条目。
    */ DeleteDnatEntry(query: {
        /**
        * 智能接入网关实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * > 目前只支持硬件版实例。
        * @example `sag-jfh***********`
        */ "SagId": string;
        "OwnerId"?: number;
        /**
        * DNAT实例ID。
        * @example `dnat-jhd*******`
        */ "DnatEntryId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AddSnatEntry给智能接入网关实例添加私网SNAT条目。
    */ AddSnatEntry(query: {
        /**
        * 智能接入网关实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-hgke*************`
        */ "SmartAGId": string;
        /**
        * 目标网段。
        * @example `192.168.0.1/24`
        */ "CidrBlock": string;
        /**
        * 公网IP地址。
        * @example `10.0.**.**`
        */ "SnatIp": string;
        "OwnerId"?: number;
    }): Promise<{
        "InstanceId": string;
        "RequestId": string;
    }>;
    /**
    * 调用ActivateSmartAccessGateway激活智能接入网关设备。
    */ ActivateSmartAccessGateway(query: {
        /**
        * 智能接入网关实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-ke3kq4evpi8p6******`
        */ "SmartAGId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 查询智能接入网关的高可用配置。
    */ DescribeSmartAccessGatewayHa(query: {
        /**
        * 智能接入网关实例的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 要查询的智能接入网关实例ID。
        * @example `sag-pno62188piyc6txxxxx`
        */ "SmartAGId": string;
        "OwnerId"?: number;
    }): Promise<{
        "SmartAGId": string;
        "DeviceLevelBackupState": string;
        "LinkBackupInfoList": {
            "LinkBackupInfoList": {
                "LinkLevelBackupType": string;
                "MainLinkId": string;
                "BackupLinkState": string;
                "LinkLevelBackupState": string;
                "BackupLinkId": string;
                "MainLinkState": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用DescribeDnatEntries查询智能接入网关实例绑定的DNAT条目。
    */ DescribeDnatEntries(query: {
        /**
        * 智能接入网关实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * > 目前仅支持硬件版实例。
        * @example `sag-djgd*************`
        */ "SagId": string;
        "OwnerId"?: number;
        /**
        * DNAT类型，包含以下选项：
        * * Intranet：缺省值，表示私网DNAT。
        * * Internet：表示公网DNAT。
        * @example `Intranet`
        */ "Type"?: string;
        /**
        * 实例状态列表的页码，默认值为1。
        * @example `12`
        */ "PageSize"?: number;
        /**
        * 分页查询时设置的每页行数，默认值为10，最大值为50。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "DnatEntries": {
            "DnatEntry": any[];
        };
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "TotalCount": number;
    }>;
    /**
    * 调用UpdateSmartAccessGatewayVersion升级智能接入网关的软件版本。
    */ UpdateSmartAccessGatewayVersion(query: {
        /**
        * 智能接入网关的所属区域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要升级的智能接入网关的版本。
        * @example `1.0.1`
        */ "VersionCode": string;
        /**
        * 智能接入网关的ID。
        * @example `sag-0ovhf732a9j*******`
        */ "SmartAGId": string;
        "OwnerId"?: number;
        /**
        * 智能接入网关设备序列号。
        * @example `sag233a234i55`
        */ "SerialNumber"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRegions查询可用地域。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 返回值语言。取值：
        * - zh-CN（默认值）：中文
        *
        * - en-US：英文
        * @example `zh-CN`
        */ "AcceptLanguage"?: string;
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
    * 调用AddDnatEntry给智能接入网关实例添加DNAT条目。
    */ AddDnatEntry(query: {
        /**
        * 智能接入网关实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * > 目前只支持硬件版实例。
        * @example `sag-kdhg*******`
        */ "SagId": string;
        /**
        * 公网端口。
        * 取值范围：**1-65535**。
        * @example `80`
        */ "ExternalPort": string;
        /**
        * 目标私网IP地址。
        * @example `192.168.0.1`
        */ "InternalIp": string;
        /**
        * 协议类型，包含以下选项：
        * * TCP：转发TCP协议的报文。
        * * UDP：转发UDP协议的报文。
        * * Any：转发所有协议的报文。
        * @example `TCP`
        */ "IpProtocol": string;
        /**
        * 目标私网端口号。
        * 取值范围：**1-65535**。
        * @example `80`
        */ "InternalPort": string;
        /**
        * DNAT类型，包括以下选项：
        * * Intranet：缺省值，表示私网DNAT。
        * * Internet：公网DNAT。
        * @example `Intranet`
        */ "Type"?: string;
        /**
        * 外部的公网IP地址。
        * @example `10.10.**.**`
        */ "ExternalIp"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "DnatEntryId": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifySmartAccessGateway修改智能接入网关的配置。
    */ ModifySmartAccessGateway(query: {
        /**
        * 智能接入网关的所属区域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关ID。
        * @example `sag-0ovhf732a9j0******`
        */ "SmartAGId": string;
        "OwnerId"?: number;
        "City"?: string;
        /**
        * 智能接入网关的名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://` 或` https://`开头。
        * @example `sag`
        */ "Name"?: string;
        /**
        * 智能接入网关的描述。
        * 长度为2-256个字符，必须以字母或中文开头，但不能以`http:// `或` https:/`/开头。
        * @example `sag描述`
        */ "Description"?: string;
        /**
        * 线下机构客户端用来通信的私网网段，确保各私网网段不冲突。
        * 如果智能接入网关终端设备的LAN口配置为动态方式，则线下已开启DHCP的客户端使用的IP地址会从您指定的第一个私网网段中分配。
        * @example `172.16.0.1/24`
        */ "CidrBlock"?: string;
        /**
        * 离线锁定功能用户设定的阈值，大于等于0。
        * 单位：秒。
        * @example `3`
        */ "SecurityLockThreshold"?: number;
        "RoutingStrategy"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UpgradeSmartAccessGateway接口升高智能接入网关实例的带宽。
    */ UpgradeSmartAccessGateway(query: {
        /**
        * 智能接入网关的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-d3m51apgw4po******`
        */ "SmartAGId": string;
        /**
        * 是否是自动支付预付费实例的账单。
        * 取值：**true|false**（默认值）
        * @example `true`
        */ "AutoPay": boolean;
        /**
        * 智能接入网关的带宽。
        * - 如果网关设备规格为sag-100wm，带宽取值：2~50Mbps
        *
        * - 如果网关设备规格为sag-1000，带宽取值：10~500Mbps
        * @example `3`
        */ "BandWidthSpec"?: number;
        "OwnerId"?: number;
        /**
        * 账户流量套餐规格，单位G。
        * @example `5`
        */ "DataPlan"?: number;
        /**
        * 可创建账号数量。
        * @example `10`
        */ "UserCount"?: number;
    }): Promise<{
        "RequestId": string;
        "OrderId": number;
    }>;
    /**
    * 使用DowngradeSmartAccessGateway接口降低智能接入网关实例的带宽。
    */ DowngradeSmartAccessGateway(query: {
        /**
        * 智能接入网关的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-nylv14tghsk26c*****`
        */ "SmartAGId": string;
        /**
        * 是否是自动支付预付费实例的账单，默认值是**false**。
        * @example `true`
        */ "AutoPay": boolean;
        /**
        * 智能接入网关的带宽。
        *
        * - 如果网关设备规格为sag-100wm，带宽取值：2~50Mbps
        *
        * - 如果网关设备规格为sag-1000，带宽取值：10~500Mbps
        * @example `20`
        */ "BandWidthSpec"?: number;
        "OwnerId"?: number;
        /**
        * 每个账号赠送的流量套餐规格，单位G。
        * > 目前仅支持购买5GB/月套餐。
        * @example `5`
        */ "DataPlan"?: number;
        /**
        * APP账号数规格，购买后可创建相应数量的账号，一般为每个需要登陆的员工创建一个账号。
        * @example `5`
        */ "UserCount"?: number;
    }): Promise<{
        "OrderId": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSmartAccessGateways查询已创建的智能接入网关。
    */ DescribeSmartAccessGateways(query: {
        /**
        * 智能接入网关的所属区域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 绑定的云连接网ID。
        * @example `ccn-bxuau4ezctt******`
        */ "AssociatedCcnId"?: string;
        /**
        * 智能接入网关ID。
        * @example `sag-c3m3n1khz58l******`
        */ "SmartAGId"?: string;
        /**
        * 智能接入网关状态，取值：
        * - Ordered：已下单
        * - Delivered：已发货
        *
        * - Received：已收货
        * - Returning：退货中
        * - ACTIVE：活跃
        * - Init：初始化
        * @example `Ordered`
        */ "Status"?: string;
        /**
        * 智能接入网关名称。
        * @example `sag`
        */ "Name"?: string;
        /**
        * 分页查询时设置的每页行数，默认值为10，最大值为50。
        * @example `1`
        */ "PageSize"?: number;
        /**
        * 实例状态列表的页码，默认值是1。
        * @example `2`
        */ "PageNumber"?: number;
        /**
        * 智能接入网关的序列号。
        * @example `sag32a30121`
        */ "SerialNumber"?: string;
        /**
        * 智能接入网关实例绑定的访问控制规则。
        * @example `acl-xhwhyuo43l0n******`
        */ "AclIds"?: string;
        /**
        * 未关联到该ACL，多个ID用逗号隔开。
        * @example `acl-sjfbgngj***************`
        */ "UnboundAclIds"?: string;
        /**
        * 实例类型。
        * @example `sag-100wm`
        */ "InstanceType"?: string;
        "CanAssociateQos"?: boolean;
    }): Promise<{
        "PageNumber": number;
        "SmartAccessGateways": {
            "SmartAccessGateway": {
                "Name": string;
                "SmartAGId": string;
                "Status": string;
                "AssociatedCcnName": string;
                "AssociatedCcnId": string;
                "CreateTime": number;
                "EndTime": number;
                "SoftwareVersion": string;
                "MaxBandwidth": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSmartAccessGatewayVersions查询智能接入网关的软件版本。
    */ DescribeSmartAccessGatewayVersions(query: {
        /**
        *  智能接入网关的所属区域。取值： cn-shanghai：中国大陆
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 智能接入网关实例ID。
        * @example `sag-d3m51apgw4po5*****`
        */ "SmartAGId"?: string;
    }): Promise<{
        "SmartAGVersions": {
            "SmartAGVersion": {
                "CreateTime": number;
                "VersionCode": string;
                "VersionName": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用UnbindSmartAccessGateway将智能接入网关从指定的云连接网中解绑。
    */ UnbindSmartAccessGateway(query: {
        /**
        * 智能接入网关的所属区域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关的ID。
        * @example `sag-0ovhf732a********`
        */ "SmartAGId": string;
        /**
        * 云连接网ID。
        * @example `ccn-kygbldwikz********`
        */ "CcnId": string;
        "OwnerId"?: number;
        "SmartAGUid"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用BindSmartAccessGateway接口将智能接入网关绑定到指定的云连接网中。
    */ BindSmartAccessGateway(query: {
        /**
        * 智能接入网关的所属区域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 智能接入网关ID。
        * @example `sag-m7ez44zpayma*****`
        */ "SmartAGId": string;
        "OwnerId"?: number;
        /**
        * 要绑定的云连接网ID。
        * @example `ccn-isdjvvkexkrpk*****`
        */ "CcnId": string;
        "SmartAGUid"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用GetSmartAccessGatewayUseLimit查询可购买的智能接入网关数量。
    */ GetSmartAccessGatewayUseLimit(query: {
        /**
        * 智能接入网关的所属区域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "TotalAmount": number;
        "UsedAmount": number;
    }>;
    /**
    * 调用RevokeInstanceFromCbn撤销云企业网对云连接网的授权。
    */ RevokeInstanceFromCbn(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 云连接网的实例ID。
        * @example `ccn-n2935s1mnwv8i*****`
        */ "CcnInstanceId": string;
        /**
        * 云企业网的实例ID。
        * @example `cen-7qthudw0ll6jm*****`
        */ "CenInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeUserOnlineClients根据用户名和智能接入网关APP实例ID查询指定用户在线连接列表。
    */ DescribeUserOnlineClients(query: {
        /**
        * 智能接入网关APP实例所在的地域。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 智能接入网关APP实例ID。
        * @example `sag-wfjgn**********`
        */ "SmartAGId": string;
        /**
        * 用户名，同一个智能接入网关APP实例下的用户名不可以重复。
        * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
        * @example `doctest`
        */ "UserName": string;
        "OwnerId"?: number;
    }): Promise<{
        "Users": {
            "User": {
                "OnlineTime": string;
                "ClientIp": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用ModifyCloudConnectNetwork修改云连接网的名称和描述。
    */ ModifyCloudConnectNetwork(query: {
        /**
        * 云连接网的所属区域。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 云连接网ID。
        * @example `ccn-l9340rlu5ens*****`
        */ "CcnId": string;
        "OwnerId"?: number;
        /**
        * 云连接网的名称。
        * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http:// `或` https://`开头。
        * @example `ccn名称`
        */ "Name"?: string;
        /**
        * 云连接网的描述。
        * 长度为2-256个字符，必须以字母或中文开头，但不能以`http:// `或 `https://`开头。
        * @example `ccn描述`
        */ "Description"?: string;
        "CidrBlock"?: string;
        "InterworkingStatus"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateSmartAccessGateway智能接入网关实例。
    */ CreateSmartAccessGateway(query: {
        /**
        * 智能接入网关实例的地域。
        * 您可以通过调用 DescribeRegions接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 购买时长，单位月。如果取值超过12，必须是12的倍数。
        * @example `12`
        */ "Period": number;
        /**
        * 是否是自动支付预付费实例的账单。
        * 取值：**true|false**
        * 默认值：**false**。
        * @example `true`
        */ "AutoPay": boolean;
        /**
        * 实例类型，取值：**sag-100wm|sag-1000**
        * @example `sag-100wm`
        */ "HardWareSpec": string;
        /**
        * 收货国家。
        * @example `中国`
        */ "ReceiverCountry": string;
        /**
        * 收货省份。
        * @example `浙江`
        */ "ReceiverState": string;
        /**
        * 收货城市。
        * @example `杭州`
        */ "ReceiverCity": string;
        /**
        * 收货街区。
        * @example `西湖`
        */ "ReceiverDistrict": string;
        /**
        * 收货乡镇。
        * @example `转塘`
        */ "ReceiverTown": string;
        /**
        * 收货省份邮编。
        * @example `310000`
        */ "ReceiverZip": string;
        /**
        * 收件人手机号。
        * @example `13*********`
        */ "ReceiverMobile": string;
        /**
        * 收件人姓名。
        * @example `张三`
        */ "ReceiverName": string;
        /**
        * 收货人的电子邮箱。
        * @example `xx@example.com`
        */ "ReceiverEmail": string;
        /**
        *  买家留言信息。
        * @example `留言`
        */ "BuyerMessage": string;
        /**
        * 网关设备的收货地址。
        * @example `XX号`
        */ "ReceiverAddress": string;
        /**
        * 选择一种使用方式，取值：
        *
        * - no_backup：只购买一台智能接入网关设备接入阿里云。
        * - cold_backup：购买两台网关设备共享带宽，主设备故障时切换到备用设备。
        * @example ` no_backup`
        */ "HaType": string;
        /**
        * 实例的计费类型，取值：
        * - PayOnDemand：按量付费
        *
        * - PREPAY：预付费
        * > 当前只支持预付费。`
        * @example `PREPAY`
        */ "ChargeType": string;
        /**
        * 智能接入网关的带宽。
        * - 如果网关设备规格为sag-100wm，带宽取值：2~50Mbps
        * - 如果网关设备规格为sag-1000，带宽取值：10~500Mbps
        * @example `12`
        */ "MaxBandWidth"?: number;
        "OwnerId"?: number;
        /**
        * 智能接入网关实例名称。
        * @example `test`
        */ "Name"?: string;
        /**
        * 智能接入网关实例描述。
        * @example `sag`
        */ "Description"?: string;
        /**
        * 收件人电话。
        * @example `13*********`
        */ "ReceiverPhone"?: string;
        "UserCount"?: number;
        "InstanceType"?: string;
        "DataPlan"?: number;
    }): Promise<{
        "SmartAGId": string;
        "RequestId": string;
        "OrderId": number;
    }>;
    /**
    * 调用CreateFlowlog创建一个流日志。
    */ CreateFlowLog(query: {
        /**
        * 流日志的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 流日志实例描述。
        * @example `创建流日志`
        */ "Description"?: string;
        /**
        * 流日志实例名称。
        * @example `sag-flowlog-1`
        */ "Name"?: string;
        /**
        * 非活跃流输出间隔，默认15s。
        * @example `15`
        */ "InactiveAging"?: number;
        /**
        * 流日志输出类型：
        * - **sls**：流日志存储在阿里云日志服务。
        * - **netflow**：流日志存储在您配置的netflow服务器。
        * - **all**：流日志同时存储在阿里云日志服务和您配置的netflow服务器。
        * @example `sls`
        */ "OutputType"?: string;
        /**
        * 日志服务的地域ID，输出类型为sls时填入。
        * @example `cn-hanghzou`
        */ "SlsRegionId"?: string;
        /**
        * 日志服务的 Project，输出类型为sls时填入。
        * @example `sag-flowlog-shanghai`
        */ "ProjectName"?: string;
        /**
        * 日志服务的日志库，当输出类型为sls时填入。
        * @example `config-operation-log`
        */ "LogstoreName"?: string;
        /**
        * 流日志输出的服务器地址，输出类型是netflow时填入。
        * @example `192.168.0.2`
        */ "NetflowServerIp"?: string;
        /**
        * 流日志输出的服务器端口，默认值为**9995**，输出类型是netflow时填入。
        * @example `9995`
        */ "NetflowServerPort"?: number;
        /**
        * 流日志输出时使用的Netflow协议版本号，可选**V5**、**V9**和**V10**，默认**V9**，输出类型是netflow时填入。
        * @example `V9`
        */ "NetflowVersion"?: string;
        "OwnerId"?: number;
        /**
        * 活跃流输出间隔，默认300s。
        * @example `300`
        */ "ActiveAging"?: number;
    }): Promise<{
        "RequestId": string;
        "FlowLogId": string;
    }>;
    /**
    * 调用ModifyFlowLogAttribute编辑流日志实例。
    */ ModifyFlowLogAttribute(query: {
        /**
        * 流日志的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 流日志实例ID。
        * @example `fl-7a56mar1kfw9vj****`
        */ "FlowLogId": string;
        /**
        * 流日志实例描述。
        * @example `流日志实例1`
        */ "Description"?: string;
        /**
        * 流日志实例名称。
        * @example `DDE`
        */ "Name"?: string;
        /**
        * 非活跃流输出间隔，默认为15s。
        * @example `15`
        */ "InactiveAging"?: number;
        /**
        * 流日志输出类型：
        * - **sls**：流日志存储在阿里云日志服务。
        * - **netflow**：流日志存储在您配置的netflow服务器。
        * - **all**：流日志同时存储在阿里云日志服务和您配置的netflow服务器。
        * @example `sls`
        */ "OutputType"?: string;
        /**
        * 日志服务的地域ID，输出类型为sls时填入。
        * @example `cn-shanghai`
        */ "SlsRegionId"?: string;
        /**
        * 日志服务的Project，输出类型为sls时填入。
        * @example `ddrrgt`
        */ "ProjectName"?: string;
        /**
        * 日志服务的日志库，输出类型为sls时填入。
        * @example `ssfghgh`
        */ "LogstoreName"?: string;
        /**
        * 流日志输出的服务器地址，输出类型为netflow时填入。
        * @example `192.168.0.2`
        */ "NetflowServerIp"?: string;
        /**
        * 流日志输出的服务器端口，默认值为**9995**，输出类型为Netflow时填入。
        * @example `9995`
        */ "NetflowServerPort"?: number;
        /**
        * 流日志输出时使用的Netflow协议版本号，可选**V5**、**V9**和**V10**，默认**V9**，输出类型为netflow时填入。
        * @example `V9`
        */ "NetflowVersion"?: string;
        "OwnerId"?: number;
        /**
        * 活跃流输出间隔，默认值为300s。
        * @example `300`
        */ "ActiveAging"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeFlowLogs查询流日志。
    */ DescribeFlowLogs(query: {
        /**
        * 流日志地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 流日志实例ID。
        * @example `fl-7a56mar1kfw9vj****`
        */ "FlowLogId"?: string;
        "OwnerId"?: number;
        /**
        * 流日志实例名称。
        * @example `DDE`
        */ "FlowLogName"?: string;
        /**
        * 流日志实例描述。
        * @example `流日志1`
        */ "Description"?: string;
        /**
        * 流日志实例状态：
        * - **Active**：已启动。
        * - **Inactive**：未启动。
        * @example `Active`
        */ "Status"?: string;
        /**
        * 流日志输出类型：
        * - **sls**：流日志存储在阿里云日志服务。
        * - **netflow**：流日志存储在您配置的netflow服务器。
        * - **all**：流日志同时存储在阿里云日志服务和您配置的netflow服务器。
        * @example `sls`
        */ "OutputType"?: string;
        /**
        * 指定分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 流日志实例列表的页码，起始值为**1**，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "PageNumber": number;
        "FlowLogs": {
            "FlowLogSetType": {
                "Name": string;
                "InactiveAging": number;
                "Status": string;
                "NetflowVersion": string;
                "ProjectName": string;
                "SlsRegionId": string;
                "ActiveAging": number;
                "FlowLogId": string;
                "OutputType": string;
                "TotalSagNum": number;
                "NetflowServerPort": number;
                "LogstoreName": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DeleteFlowLog删除一个流日志实例。
    */ DeleteFlowLog(query: {
        /**
        * 流日志的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 流日志实例ID。
        * @example `fl-7a56mar1kfw9vj****`
        */ "FlowLogId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ActiveFlowLog启动流日志。
    */ ActiveFlowLog(query: {
        /**
        * 流日志的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 流日志实例ID。
        * @example `fl-l934tsa5504yuc****`
        */ "FlowLogId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeactiveFlowLog停止流日志。
    */ DeactiveFlowLog(query: {
        /**
        * 流日志的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 流日志实例ID。
        * @example `fl-l934tsa5504yuc****`
        */ "FlowLogId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AssociateFlowLog绑定智能接入网关实例。
    */ AssociateFlowLog(query: {
        /**
        * 流日志的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 流日志实例ID。
        * @example `fl-l934tsa5504yuc****`
        */ "FlowLogId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-39u6j9a49i03wk****`
        */ "SmartAGId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DisassociateFlowLog解绑智能接入网关实例。
    */ DisassociateFlowLog(query: {
        /**
        * 流日志的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 流日志实例ID。
        * @example `fl-l934tsa5504yuc****`
        */ "FlowLogId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-0v3pmd7qpnvx5f****`
        */ "SmartAGId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeFlowLogSags查询流日志绑定的智能接入网关实例。
    */ DescribeFlowLogSags(query: {
        /**
        * 流日志的地域ID。
        * @example `cn-shanghahi`
        */ "RegionId": string;
        /**
        * 流日志实例ID。
        * @example `fl-l934tsa5504yuc****`
        */ "FlowLogId"?: string;
        "OwnerId"?: number;
        /**
        * 指定分页查询时每页的列表行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 查询列表的页码，起始值为**1**，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "PageNumber": number;
        "Sags": {
            "Sag": {
                "Name": string;
                "SmartAGId": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeUnbindFlowLogSags查询未绑定流日志的智能接入网关实例。
    */ DescribeUnbindFlowLogSags(query: {
        /**
        * 流日志的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "Sags": {
            "Sag": {
                "Name": string;
                "SmartAGId": string;
            }[];
        };
        "Count": number;
        "RequestId": string;
    }>;
    /**
    * 调用BindVbr绑定边界路由器。
    */ BindVbr(query: {
        /**
        * 智能接入网关实例所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-jed****************`
        */ "SmartAGId": string;
        /**
        * 要绑定的边界路由器实例ID。
        * @example `vbr-shf************`
        */ "VbrId": string;
        /**
        * 要绑定的边界路由器实例所属的地域ID。
        * @example `cn-hangzhou`
        */ "VbrRegionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifySmartAccessGatewayUpBandwidth修改智能接入网关参数实例。
    */ ModifySmartAccessGatewayUpBandwidth(query: {
        /**
        * 智能接入网关实例所在的地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 智能接入网关实例ID。
        * @example `sag-jsy******************`
        */ "SmartAGId": string;
        /**
        * 智能接入网关WAN口最大上行带宽。
        * @example `2`
        */ "UpBandwidthWan"?: number;
        /**
        * 智能接入网关4G公网最大上行带宽。
        * @example `3`
        */ "UpBandwidth4G"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用GrantSagInstanceToCcn跨账号授权智能接入网关实例可以加入云连接网CCN。
    */ GrantSagInstanceToCcn(query: {
        /**
        * 智能接入网关实例所属的实例ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-hdh************`
        */ "SmartAGId": string;
        /**
        * 云连接网实例ID。
        * @example `ccn-jdh**********`
        */ "CcnInstanceId": string;
        /**
        * 云连接网实例所属的用户ID。
        * @example `123535455445666`
        */ "CcnUid": number;
        "OwnerId"?: number;
    }): Promise<{
        "InstanceId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeGrantSagRules查询授权智能接入网关规则。
    */ DescribeGrantSagRules(query: {
        /**
        * 智能接入网关实例所属的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-hdg*************`
        */ "SmartAGId": string;
        /**
        * 实例状态列表的页码，默认值是1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，默认值为10，最大值为50。
        * @example `10`
        */ "PageSize"?: number;
        "OwnerId"?: number;
    }): Promise<{
        "GrantRules": {
            "GrantRule": {
                "CcnInstanceId": string;
                "CcnUid": number;
                "CreateTime": number;
                "InstanceId": number;
                "SmartAGId": string;
            }[];
        };
        "PageNumber": number;
        "PageSize": number;
        "RequestId": string;
        "TotalCount": number;
    }>;
    /**
    * 调用RevokeSagInstanceFromCcn从云连接网撤销智能接入网关实例的加入授权。
    */ RevokeSagInstanceFromCcn(query: {
        /**
        * 智能接入网关实例所在的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-hd**************`
        */ "SmartAGId": string;
        /**
        * 云连接网实例ID。
        * @example `ccn-jf********`
        */ "CcnInstanceId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifySagRemoteAccess修改智能接入网关设备的远程访问IP。
    */ ModifySagRemoteAccess(query: {
        "RegionId"?: string;
        /**
        * 智能接入网关实例ID。
        * @example `sag-r79m060r6oy55******`
        */ "SmartAGId": string;
        /**
        * 智能接入网关设备序列号。
        * @example `sag-100-v1p7-9`
        */ "SerialNumber": string;
        "OwnerId"?: number;
        /**
        * 远程访问IP。
        * @example `10.10.10.2`
        */ "RemoteAccessIp"?: string;
    }): Promise<{
        "RemoteAccessIp": string;
        "SerialNumber": string;
        "Message": string;
        "RequestId": string;
        "Success": boolean;
        "Code": string;
    }>;
    /**
    * 调用EnableSmartAccessGatewayUser激活智能接入网关的用户。
    */ EnableSmartAccessGatewayUser(query: {
        /**
        * 智能接入网关实例所属的地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 智能接入网关APP实例ID。
        * @example `sag-va03wf4l4idaj*****`
        */ "SmartAGId": string;
        /**
        * 用户名。
        * @example `1234`
        */ "UserName": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    UnicomSignConfirm(query: {
        "RegionId"?: string;
        "TmsOrder": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    ClearSagRouteableAddress(query: {
        "RegionId"?: string;
        "SagId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
    }): Promise<{}>;
    DescribeSagRouteableAddress(query: {
        "RegionId": string;
        "SagId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    SetSagRouteableAddress(query: {
        "RegionId"?: string;
        "RouteableAddress": string;
        "SagId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
    }): Promise<{}>;
    AddNetworkOptimizationSetting(query: {
        "RegionId": string;
        "NetworkOptId": string;
        "Type": string;
        "Domain"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    AttachNetworkOptimizationSags(query: {
        "RegionId": string;
        "NetworkOptId": string;
        "SmartAGIds": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeNetworkOptimizationSags(query: {
        "RegionId": string;
        "NetworkOptId": string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DescribeNetworkOptimizationSettings(query: {
        "RegionId": string;
        "NetworkOptId": string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DetachNetworkOptimizationSags(query: {
        "RegionId": string;
        "NetworkOptId": string;
        "SmartAGIds": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    DisableSmartAccessGatewayUser(query: {
        "RegionId": string;
        "SmartAGId": string;
        "UserName": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    UnbindVbr(query: {
        "RegionId": string;
        "SmartAGId": string;
        "VbrId": string;
        "VbrRegionId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    UnicomOrderConfirm(query: {
        "RegionId": string;
        "TradeId": string;
        "TmsCode": string;
        "TmsOrderCode": string;
        "OrderPostFee": number;
        "OwnerUserId": string;
        "OrderItem": string[];
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeSnatEntries(query: {
        "RegionId": string;
        "SmartAGId": string;
        "OwnerId"?: number;
        "PageNumber"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    DeleteNetworkOptimizationSetting(query: {
        "RegionId": string;
        "NetworkOptId": string;
        "Type": string;
        "Domain"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CreateQos(query: {
        "RegionId": string;
        "QosName": string;
        "OwnerId"?: number;
        "QosDescription"?: string;
    }): Promise<{}>;
    CreateQosCar(query: {
        "RegionId": string;
        "QosId": string;
        "Priority": number;
        "LimitType": string;
        "MinBandwidthAbs"?: number;
        "MaxBandwidthAbs"?: number;
        "MinBandwidthPercent"?: number;
        "MaxBandwidthPercent"?: number;
        "OwnerId"?: number;
        "Description"?: string;
        "PercentSourceType"?: string;
        "Name"?: string;
    }): Promise<{}>;
    CreateQosPolicy(query: {
        "RegionId": string;
        "QosId": string;
        "Priority": number;
        "SourceCidr": string;
        "DestCidr": string;
        "IpProtocol": string;
        "SourcePortRange": string;
        "DestPortRange": string;
        "OwnerId"?: number;
        "Description"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
        "Name"?: string;
    }): Promise<{}>;
    DeleteQos(query: {
        "RegionId": string;
        "QosId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteQosCar(query: {
        "RegionId": string;
        "QosId": string;
        "QosCarId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DeleteQosPolicy(query: {
        "RegionId": string;
        "QosId": string;
        "QosPolicyId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeQosCars(query: {
        "RegionId": string;
        "QosId": string;
        "OwnerId"?: number;
        "QosCarId"?: string;
        "Order"?: string;
        "Description"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DescribeQosPolicies(query: {
        "RegionId": string;
        "QosId": string;
        "OwnerId"?: number;
        "QosPolicyId"?: string;
        "Description"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
        "Priority"?: number;
    }): Promise<{}>;
    DescribeQoses(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "QosIds"?: string;
        "QosName"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    ModifyQos(query: {
        "RegionId": string;
        "QosId": string;
        "QosName"?: string;
        "OwnerId"?: number;
        "QosDescription"?: string;
    }): Promise<{}>;
    ModifyQosCar(query: {
        "RegionId": string;
        "QosId": string;
        "QosCarId": string;
        "OwnerId"?: number;
        "Description"?: string;
        "Priority"?: number;
        "LimitType"?: string;
        "MinBandwidthAbs"?: number;
        "MaxBandwidthAbs"?: number;
        "MinBandwidthPercent"?: number;
        "MaxBandwidthPercent"?: number;
        "PercentSourceType"?: string;
        "Name"?: string;
    }): Promise<{}>;
    ModifyQosPolicy(query: {
        "RegionId": string;
        "QosId": string;
        "QosPolicyId": string;
        "OwnerId"?: number;
        "Priority"?: number;
        "SourceCidr"?: string;
        "DestCidr"?: string;
        "IpProtocol"?: string;
        "SourcePortRange"?: string;
        "DestPortRange"?: string;
        "StartTime"?: string;
        "EndTime"?: string;
        "Description"?: string;
        "Name"?: string;
    }): Promise<{}>;
    DescribeSmartAccessGatewayAttribute(query: {
        "RegionId": string;
        "SmartAGId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    AssociateQos(query: {
        "RegionId": string;
        "QosId": string;
        "SmartAGId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DisassociateQos(query: {
        "RegionId": string;
        "QosId": string;
        "SmartAGId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeBindableSmartAccessGateways(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "CcnId"?: string;
        "CrossAccount"?: boolean;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DowngradeSmartAccessGatewaySoftware(query: {
        "RegionId": string;
        "SmartAGId": string;
        "AutoPay": boolean;
        "DataPlan": number;
        "UserCount": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    UpgradeSmartAccessGatewaySoftware(query: {
        "RegionId": string;
        "SmartAGId": string;
        "AutoPay": boolean;
        "DataPlan": number;
        "UserCount": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeDeviceAutoUpgradePolicy(query: {
        "RegionId": string;
        "SmartAGId": string;
        "SerialNumber": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyDeviceAutoUpgradePolicy(query: {
        "RegionId": string;
        "SmartAGId": string;
        "SerialNumber": string;
        "UpgradeType": string;
        "Duration": number;
        "TimeZone": string;
        "CronExpression"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    UnbindSerialNumber(query: {
        "RegionId": string;
        "SmartAGId": string;
        "SerialNumber": string;
        "OwnerId"?: number;
    }): Promise<{}>;
}
export default SMARTAG;
