interface UIS {
    /**
    * 调用DescribeUisConnections接口查看已创建的隧道连接信息。
    */ DescribeUisConnections(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 要查询的节点实例ID。
        * @example `UISNODE-xxxcp0zr5m2avmn2r****`
        */ "UisNodeId"?: string;
        /**
        * 要查看的隧道连接ID。
        * @example `UISCONN-xxxblu51boe75a1eb****`
        */ "UisConnectionId"?: string;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        "ClientToken"?: string;
    }): Promise<{
        "pageNumber": number;
        "pageSize": number;
        "requestId": string;
        "totalCount": number;
        "uisConnections": {
            "greConfig": string;
            "name": string;
            "sslConfig": string;
            "state": string;
            "uisConnectionId": string;
            "uisId": string;
            "uisNodeId": string;
            "uisProtocol": string;
        }[];
    }>;
    /**
    * 调用CreateUis接口创建一个Uis实例。实例创建后会指定隧道协议，并生成VPN数据库的管理口令。
    */ CreateUis(query: {
        /**
        * 实例的地域。
        * > 目前仅支持cn-hangzhou。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 接入类型，与UisProtocol有对应关系。
        * - 接入**VPN**类型，对应的UisProtocol为**SSL、SDK**。
        * - 接入**IOT**类型，对应的UisProtocol为**GRE**。
        * @example `GRE`
        */ "AccessType"?: string;
        "OwnerId"?: number;
        /**
        * UIS实例服务的区域。
        * 取值：**中国大陆(China-mainland)**​/**海外(Overseas)**​/**全球(Global)**。
        * @example `China-mainland`
        */ "ServiceRegion"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * 实例的名称。
        * 长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `test_uis_name`
        */ "Name"?: string;
        /**
        * 实例的描述信息。
        * 长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `uis description info`
        */ "Description"?: string;
        /**
        * 付费方式，取值：**后付费(POSTPAY)**​/**预付费(PREPAY)**。
        * @example `PREPAY`
        */ "InstanceChargeType"?: string;
        /**
        * 计费方式，取值：**连接(Connection)**​/**带宽(Bandwidth)**。
        * @example `Connection`
        */ "InternetChargeType"?: string;
        /**
        * 是否支持自动支付，默认值是**false**。
        * @example `true`
        */ "AutoPay"?: boolean;
        /**
        * 预付费时，购买的周期数。
        * @example `1`
        */ "Duration"?: number;
        /**
        * 预付费购买的周期数类型，取值：**Month**​/**Year**。
        * @example `Year`
        */ "PricingCycle"?: string;
        /**
        * 指定UIS实例的带宽，单位为M。
        * @example `10`
        */ "Bandwidth"?: number;
        /**
        * 带宽类型，取值：
        * - **BGP**
        * - **ChinaTelecom**
        * - **ChinaUnicom**
        * - **ChinaMobile**
        * - **BGP+CEN**
        * - **ChinaTelecom+CEN**
        * - **ChinaUnicom+CEN**
        * - **ChinaMobile+CEN**
        * @example `BGP`
        */ "BandwidthType"?: string;
        /**
        * 用户的连接类型，取值：**SSL**​/**SDK**​/**GRE**。
        * @example `GRE`
        */ "UisProtocol"?: string;
        /**
        * 指定每个连接的带宽。
        * @example `20`
        */ "ConnectionBandwidth"?: number;
        /**
        * 指定连接的数量。
        * @example `500`
        */ "ConnectionCount"?: number;
    }): Promise<{
        "OrderId": string;
        "RequestId": string;
        "UisId": string;
    }>;
    /**
    * 调用ModifyUisConnectionAttribute接口修改隧道连接的配置信息。
    */ ModifyUisConnectionAttribute(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 要修改的隧道连接ID。
        * @example `UISCONN-xxxblu51boe75a1eb****`
        */ "UisConnectionId": string;
        /**
        * 节点实例ID。
        * @example `UISNODE-xxxcp0zr5m2avmn2r****`
        */ "UisNodeId"?: string;
        /**
        * UIS实例软件端与服务端使用的协议名称。取值：**SSLVPN/GRE/SDK**。
        * @example `SSLVPN`
        */ "UisProtocol"?: string;
        /**
        * 隧道连接的描述。
        * @example `conn_desc`
        */ "Description"?: string;
        /**
        * 隧道连接的名称。
        * @example `test_conn`
        */ "Name"?: string;
        /**
        * 在创建UIS Connection时，Protocol参数的值指定为**GRE**。
        * GreConfig参数为结构体数组转成的JSON String，可以通过LocalIP来为每个UisNode的IP配置不同的GRE tunnel。
        * 结构体中的参数包含：
        * - **LocalIP**：UisNode的IP
        * - **LocalTunnelIP**：UisNode的GRE Tunnel设备的IP
        * - **CustomerIP**：客户的公网IP
        * - **CustomerTunnelIP**：客户的GRE Tunnel设备的IP
        * - **CustomerSubnet**：客户GRE的私网网段
        * @example `[{'localIp':'47.95.197.XX','localTunnelIp':'10.0.0.X','customerIp':'39.106.5.XX','customerTunnelIp':'10.0.0.X','customerSubnet':'192.168.X.X/24'},{'localIp':'47.94.219.XX','localTunnelIp':'10.0.0.X','customerIp':'39.106.5.XX','customerTunnelIp':'10.0.0.X','customerSubnet':'192.168.X.X/24'}]`
        */ "GreConfig"?: string;
        /**
        * Protocal指定为OpenVPN协议时：
        * - SSLConfig. Proto：SSL-VPN服务端所使用的协议。取值：**UDP（默认值） | TCP**。
        * - SSLConfig.Port：SSL-VPN服务端所使用的端口，默认值为1194。端口范围1025-10000，以及避开以下知名端口[22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500](url)。
        * - SSLConfig.Cipher：SSL-VPN使用的加密算法。取值：**AES-128-CBC（默认值） |AES-192-CBC | AES-256-CBC | none**。
        * @example `{\”Port\":1194,\"Protocol\":\"UDP\",\"Cipher\":\"AES-256-CBC\”}`
        */ "SslConfig"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateUisConnection接口创建隧道连接。
    */ CreateUisConnection(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * UIS实例软件端与服务端使用的协议名称。取值：**SSLVPN**​/**GRE**​/**SDK**。
        * @example `SSLVPN`
        */ "UisProtocol": string;
        "OwnerId"?: number;
        /**
        * 节点实例ID。
        * @example `UISNODE-xxxcp0zr5m2avmn2r****`
        */ "UisNodeId": string;
        /**
        * 隧道连接的描述。
        * @example `connection description`
        */ "Description"?: string;
        /**
        * 隧道连接的名称。
        * @example `connection_name`
        */ "Name"?: string;
        /**
        * 在创建UIS Connection时，Protocol参数的值指定为**GRE**。
        * GreConfig参数为结构体数组转成的JSON String，可以通过LocalIP来为每个UisNode的IP配置不同的GRE tunnel。
        * 结构体中的参数包含：
        * - **LocalIP**：UisNode的IP
        * - **LocalTunnelIP**：UisNode的GRE Tunnel设备的IP
        * - **CustomerIP**：客户的公网IP
        * - **CustomerTunnelIP**：客户的GRE Tunnel设备的IP
        * - **CustomerSubnet**：客户GRE的私网网段
        * @example `[{'localIp':'47.95.197.XX','localTunnelIp':'10.0.0.X','customerIp':'39.106.5.XX','customerTunnelIp':'10.0.0.X','customerSubnet':'192.168.X.X/24'},{'localIp':'47.94.219.XX','localTunnelIp':'10.0.0.X','customerIp':'39.106.5.XX','customerTunnelIp':'10.0.0.X','customerSubnet':'192.168.X.X/24'}]`
        */ "GreConfig"?: string;
        /**
        * Protocol指定为OpenVPN协议时：
        * - **SSLConfig. Protocol**：SSL-VPN服务端所使用的协议。取值：**UDP（默认值） | TCP**。
        * - **SSLConfig.Port**：SSL-VPN服务端所使用的端口，默认值为1194。端口范围1025-10000，以及避开以下知名端口[22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500](url)。
        * - **SSLConfig.Cipher**：SSL-VPN使用的加密算法。取值：**AES-128-CBC（默认值） |AES-192-CBC | AES-256-CBC | none**。
        * @example `TCP`
        */ "SslConfig"?: string;
    }): Promise<{
        "RequestId": string;
        "uisConnectionId": string;
    }>;
    /**
    * 调用DeleteUis接口删除已创建的实例。
    */ DeleteUis(query: {
        /**
        * 实例的地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * 要删除的实例的ID。
        * @example `UIS-xxxk7k971za1h6gxk****`
        */ "UisId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteSubConnection接口删除GRE的连接。
    */ DeleteSubConnection(query: {
        "RegionId"?: string;
        /**
        * GRE连接ID。
        * @example `UISSUBCONN-xxxn30i6x2orzj5vd****`
        */ "UisSubConnectionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteDnatEntry接口删除DNAT规则。
    */ DeleteDnatEntry(query: {
        "RegionId"?: string;
        /**
        * DNAT规则所属的UIS节点ID。
        * @example `UISNODE-xxxpucur6tfhpzok5****`
        */ "UisNodeId": string;
        /**
        * 要删除的DNAT规则ID。
        * @example `UISDNAT-xxx58s0dxe3418dqu****`
        */ "UisDnatId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyUisAttribute接口修改已创建的实例的配置。
    */ ModifyUisAttribute(query: {
        /**
        * 实例的地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * 实例的名称。
        * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://`或`https://`开头。
        * @example `new_uis_name`
        */ "Name"?: string;
        /**
        * 实例的描述信息。
        * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `test_uis_desc`
        */ "Description"?: string;
        /**
        * 实例的ID。
        * @example `UIS-xxxk7k971za1h6gxk****`
        */ "UisId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeHighPriorityIps接口查询uis实例中的目的地址（ip或者URL）列表。
    */ DescribeHighPriorityIps(query: {
        /**
        * 地域，和UIS实例上的region保持一致。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * UIS实例ID。
        * @example `UIS-xxxsjkn8dtiej7bbb****`
        */ "UisId": string;
        /**
        * 分页查询时的页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时的每页数量。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "HighPriorityIps": {
            "HighPriorityIp": {
                "AreaId": string;
                "Destination": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用CreateSubConnection接口创建GRE连接。
    */ CreateSubConnection(query: {
        "RegionId"?: string;
        /**
        * UIS节点ID，节点必须与节点IP对应。
        * @example `UISNODE-xxxbink187cqsgfni****`
        */ "UisNodeId": string;
        /**
        * 节点IP。
        * 每个节点IP只能创建一个连接。
        * @example `10.34.43.xx`
        */ "Ip": string;
        "OwnerId"?: number;
        /**
        * 连接描述信息。
        * @example `a gre description`
        */ "Description"?: string;
        /**
        * 连接名称。
        * @example `gre-name`
        */ "Name"?: string;
        /**
        * GRE的配置信息。
        * >localTunnelIp为节点GRE Tunnel设备的IP，customerIp为终端GRE的公网IP，customerTunnelIp为终端GRE Tunnel设备的IP，customerSubnet为终端GRE的私网网段。
        * @example `{"localTunnelIp": "10.0.xx.1","customerIp": "39.106.5.xx","customerTunnelIp": "10.0.xx.2","customerSubnet": "192.168.0.0/24"}`
        */ "GreConfig"?: string;
    }): Promise<{
        "UisSubConnectionId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeUises接口查询已创建的实例。
    */ DescribeUises(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 查询指定实例的详细信息。
        * @example `UIS-xxxk7k971za1h6gx****`
        */ "UisId"?: string;
        /**
        * 实例的名称。
        * @example `test_uis_modify`
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
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "Uis": {
            "ChargeType": string;
            "ConnectionCount": number;
            "ConnectionType": string;
            "Name": string;
            "BandwidthType": string;
            "Status": string;
            "ConnectionBandwidth": number;
            "ServiceRegion": string;
            "BusinessStatus": string;
            "UserInfo": {
                "ClientInfoDB": string;
                "ClientInfoDBAccount": string;
                "ClientInfoDBPassword": string;
            };
            "CreateTime": number;
            "UisId": string;
            "SslClientCertUrl": string;
            "PayType": string;
        }[];
    }>;
    /**
    * 调用ModifySubConnection接口修改GRE的连接信息。
    */ ModifySubConnection(query: {
        "RegionId"?: string;
        /**
        * 连接ID。
        * @example `UISSUBCONN-xxxn30i6x2orzj5vd****`
        */ "UisSubConnectionId": string;
        "OwnerId"?: number;
        /**
        * 连接的描述信息。
        * @example `uis connection description`
        */ "Description"?: string;
        /**
        * 连接名称。
        * @example `newUisSubConnName`
        */ "Name"?: string;
        /**
        * GRE的配置信息。
        * - localTunnelIp：UIS节点Tunnel设备的IP
        * - customerIp：公网IP
        * - customerTunnelIp：客户Tunnel设备的IP
        * - customerSubnet：私网网段
        * @example `{"localTunnelIp": "10.0.0.1","customerIp": "39.106.5.208","customerTunnelIp": "10.0.0.2","customerSubnet": "192.168.0.0/24"}`
        */ "GreConfig"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeUiseNodeStatus接口查询UIS节点的状态信息。
    */ DescribeUiseNodeStatus(query: {
        "RegionId"?: string;
        /**
        * 节点实例的ID。
        * @example `UISNODE-xxxbink187cqsgfni****`
        */ "UisNodeId": string;
        "OwnerId"?: number;
        /**
        * 节点IP。
        * @example `140.206.225.xx`
        */ "Ip"?: string;
    }): Promise<{
        "IpStatusList": {
            "IpStatus": {
                "Ip": string;
                "MaxConnections": number;
                "CurrentConnections": number;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用ModifyHighPriorityIp接口修改指定实例的地址列表信息。可以用来修改路由的节点信息。
    */ ModifyHighPriorityIp(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 目标IP地址或域名，用逗号分隔。格式如下:
        * `[{'Destination': 'IP','AreaID':'regionID'},{'Destination': 'domain'}]`。
        * @example `[{'Destination': '221.6.4.XX','AreaID':'cn-shanghai'},{'Destination': 'www.microsoft.com'}]`
        */ "HighPriorityIp": string;
        "OwnerId"?: number;
        /**
        * 要修改目标地址信息的实例ID。
        * @example `UIS-xxxsjkn8dtiej7bbb****`
        */ "UisId": string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSubConnection接口查询GRE的连接详情。
    */ DescribeSubConnection(query: {
        "RegionId"?: string;
        /**
        * GRE连接ID。
        * @example `UISSUBCONN-xxxxpsxkme91l6kz2****`
        */ "UisSubConnectionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "CustomerSubnet": string;
        "Name": string;
        "Ip": string;
        "Description": string;
        "UisNodeId": string;
        "LocalTunnelIp": string;
        "UisId": string;
        "CustomerTunnelIp": string;
        "UisSubConnectionId": string;
        "CustomerIp": string;
    }>;
    /**
    * 调用GetDroppedIpList接口查询报文丢失的IP列表。
    */ GetDroppedIpList(query: {
        "RegionId"?: string;
        /**
        * UIS实例ID。
        * @example `UIS-xxx88h4csbc6j8kkk****`
        */ "UisId": string;
        "OwnerId"?: number;
        /**
        * 数据日期，例如2019-02-27。
        * @example `2019-02-27`
        */ "ChartDate"?: string;
    }): Promise<{
        "DroppedIpListUrl": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyWhiteList接口修改访问认证数据库的白名单。
    */ ModifyWhiteList(query: {
        /**
        * 地域ID，和uis实例的region保持一致。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * UIS实例ID。
        * @example `UIS-xxxvb2gnqbvgrqsd9****`
        */ "UisId": string;
        /**
        * 该实例的IP白名单，多个IP地址请以英文逗号（,）隔开，不可重复，最多1000个。
        * 格式：CIDR形式。例如：10.23.12.XX/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）
        * @example `10.23.12.XX/24`
        */ "Whitelist": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * 修改方式，默认值为**Cover**。取值：
        * - **Cover**：覆盖原IP白名单，第一次创建的时候要使用Cover模式。
        * - **Append**：追加IP。
        * - **Delete**：删除IP。
        * @example `Append`
        */ "ModifyMode"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeSubConnections接口查询GRE的连接。
    */ DescribeSubConnections(query: {
        "RegionId"?: string;
        /**
        * 接入点ID。
        * @example `UISNODE-xxxbink187cqsgfn****`
        */ "UisNodeId": string;
        "OwnerId"?: number;
        /**
        * 接入点IP。
        * @example `140.206.225.XX`
        */ "IP"?: string;
        /**
        * 当前页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页数量。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "UisSubConnections": {
            "UisSubConnection": {
                "Name": string;
                "Ip": string;
                "Description": string;
                "CreateTime": number;
                "UisSubConnectionId": string;
            }[];
        };
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
    }>;
    /**
    * 调用AddUisNodeIp接口为UisNode增加IP。
    */ AddUisNodeIp(query: {
        /**
        * UIS实例所在地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 指定增加节点ip地址的个数。受整体地址个数的限制（默认不超过10个）。
        * @example `2`
        */ "IpAddrsNum": number;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-001****`
        */ "ClientToken"?: string;
        /**
        * 指定UIS节点的ID。
        * @example `UISNODE-xxx4i1kged5xd3dk8****`
        */ "UisNodeId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteUisConnection接口删除隧道连接。
    */ DeleteUisConnection(query: {
        "RegionId"?: string;
        /**
        * 要删除的隧道连接ID。
        * @example `UISCONN-xxxblu51boe75a1eb****`
        */ "UisConnectionId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * 节点ID。
        * @example `UISNODE-xxxcp0zr5m2avmn2r****`
        */ "UisNodeId"?: string;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用DescribeWhiteList接口查询访问认证数据库的白名单。
    */ DescribeWhiteList(query: {
        /**
        * 地域ID，必须与UIS实例的地域ID一致。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * UIS实例ID。
        * @example `UIS-xxxvb2gnqbvgrqsd9****`
        */ "UisId": string;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
        "Whitelist": string;
    }>;
    /**
    * 调用ModifyUisNodeAttribute接口修改已创建的节点实例配置。
    */ ModifyUisNodeAttribute(query: {
        /**
        * 极致互联网网络服务实例的地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 要修改的节点实例的ID。
        * @example `UISNODE-xxxc4dacp9wal2jx6****`
        */ "UisNodeId": string;
        "OwnerId"?: number;
        /**
        * 要修改的节点所属的极致互联网网络服务实例ID。
        * @example `UIS-xxxbtfk761c670ok9****`
        */ "UisId": string;
        /**
        * 节点实例的名称。
        * @example `new_node_name`
        */ "Name"?: string;
        /**
        * 节点实例的描述信息。
        * @example `node_desc`
        */ "Description"?: string;
        /**
        * 指定此节点的带宽值，默认值：**20Mbps**。
        * @example `20`
        */ "UisNodeBandwidth"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteUisNode接口删除节点实例。
    */ DeleteUisNode(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * 节点所属的实例ID。
        * @example `UIS-xxxbtfk761c670ok9****`
        */ "UisId"?: string;
        /**
        * 要删除的节点实例的ID。
        * @example `UISNODE-xxxc4dacp9wal2jx6****`
        */ "UisNodeId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeHighPriorityIp接口查询指定的实例中目标IP地址或域名列表，并返回指定地址的节点信息。
    */ DescribeHighPriorityIp(query: {
        /**
        * 地域，和UIS实例上的region保持一致。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 目标IP地址或域名，用逗号分隔。格式如下:
        * `[{'Destination': 'IP','AreaID':'regionID'},{'Destination': 'domain'}]`
        * @example `[{'Destination': '221.6.4.XX','AreaID':'cn-shanghai'},{'Destination': 'www.microsoft.com'}]`
        */ "HighPriorityIp": string;
        "OwnerId"?: number;
        /**
        * 要查询的目标地址信息的实例ID。
        * @example `UIS-xxxsjkn8dtiej7bbb****`
        */ "UisId": string;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        "ClientToken"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "HighPriorityIps": {
            "HighPriorityIp": {
                "Ip": string;
                "State": string;
                "DynamicOffAreaId": string;
                "StaticOffAreaId": string;
                "BoardAreaId": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DeleteHighPriorityIp接口删除指定实例的HighPriorityIp地址列表信息。
    */ DeleteHighPriorityIp(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 目标IP地址或域名，用逗号分隔。格式如下:
        * `[{'Destination': 'IP','AreaID':'regionID'},{'Destination': 'domain'}]`。
        * @example `[{'Destination': '221.6.4.XX','AreaID':'cn-shanghai'},{'Destination': 'www.microsoft.com'}]`
        */ "HighPriorityIp": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * UIS实例ID。
        * @example `UIS-xxxsjkn8dtiej7bbb****`
        */ "UisId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateUisNode接口为已创建的实例添加节点实例。
    */ CreateUisNode(query: {
        /**
        * 该节点关联的实例的地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 指定节点的地域ID。您可通过DescribeRegions接口查询支持的地域。
        * @example `cn-shanghai`
        */ "UisNodeAreaId": string;
        /**
        * 指定此节点的带宽值。默认值：**20Mbps**。
        * @example `20`
        */ "UisNodeBandwidth"?: number;
        "OwnerId"?: number;
        /**
        * 节点所属的实例ID。
        * @example `UIS-xxxbtfk761c670ok9****`
        */ "UisId": string;
        /**
        * 节点的名称。
        * @example `node_name1`
        */ "Name"?: string;
        /**
        * 节点的描述信息。
        * @example `node_description`
        */ "Description"?: string;
        /**
        * 节点可用的IP数量。默认值为**2**，最大值为**10**。
        * > 您如果需要更多配额，请提交工单。
        * @example `2`
        */ "IpAddrsNum"?: number;
    }): Promise<{
        "RequestId": string;
        "UisNodeId": string;
    }>;
    /**
    * 调用DescribeUisNodes接口查询已创建的节点实例。
    */ DescribeUisNodes(query: {
        /**
        * 节点实例所属的实例的地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 要查询的节点所属的实例的ID。
        * @example `UIS-xxxbtfk761c670ok9****`
        */ "UisId"?: string;
        "OwnerId"?: number;
        /**
        * 要查询的节点实例ID，如果不指定则查询指定实例关联的节点实例。
        * @example `UISNODE-xxxc4dacp9wal2jx6****`
        */ "UisNodeId"?: string;
        /**
        * 节点实例的名称。
        * @example `node_name1`
        */ "Name"?: string;
        /**
        * 节点实例的状态：
        * - **active**：可用
        * - **creating**：创建中
        * @example `active`
        */ "Status"?: string;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
    }): Promise<{
        "pageNumber": number;
        "pageSize": number;
        "requestId": string;
        "totalCount": number;
        "uisNodeList": {
            "createTime": number;
            "description": string;
            "ipAddrsNum": number;
            "uisId": string;
            "uisNodeActiveIp": string;
            "uisNodeAreaId": string;
            "uisNodeBandwidth": number;
            "uisNodeIps": string;
            "uisNodeId": string;
        }[];
    }>;
    /**
    * ModifyDnatEntry
    */ ModifyDnatEntry(query: {
        /**
        * Uis实例所属的地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * Uis节点ID
        * @example `UISNODE-xxxi9zyyd8seh8udp5p26`
        */ "UisNodeId": string;
        /**
        * DNAT规则ID
        * @example `UISDNAT-xxxs1yb3gtpxrfbbzixwg`
        */ "UisDnatId"?: string;
        /**
        * DNAT转换后的IP
        * @example `9.8.8.8`
        */ "DestinationIp"?: string;
        /**
        * DNAT转换后的端口
        * @example `51111`
        */ "DestinationPort"?: number;
        /**
        * DNAT转换前的IP
        * @example `9.8.8.4`
        */ "OriginalIp"?: string;
        /**
        * DNAT转换前的端口
        * @example `52222`
        */ "OriginalPort"?: number;
        /**
        * DNAT生效的协议
        * @example `tcp`
        */ "IpProtocol"?: string;
        /**
        * DNAT规则的名字
        * @example `TestModifyDnat`
        */ "Name"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * DeleteUisNetworkInterface
    */ DeleteUisNetworkInterface(query: {
        "RegionId"?: string;
        /**
        * Uis节点ID
        * @example `UISNODE-xxx2d6jni60ifs7tzrxaj`
        */ "UisNodeId": string;
        /**
        * Uis弹性网卡ID
        * @example `UISENI-xxxg3rqds52gz7sbxdhsc`
        */ "UisEniId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AddHighPriorityIp接口向List中批量添加IP地址或URL。
    */ AddHighPriorityIp(query: {
        /**
        * 和UIS实例上的region保持一致。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 目标IP地址或域名，用逗号分隔。格式如下:`{'Destination': 'IP','AreaID':'regionID'},{'Destination': 'domain'}`。
        * > 当添加IP时，指定AreaID，访问该IP的流量都将转发到指定的地域再出公网；如果不指定地域，系统会根据探测结果选择最优路径，进行转发。探测结果可以通过DescribeHighPriorityIp进行查询。
        * @example `[{'Destination': '221.6.4.XX','AreaID':'cn-shanghai'},{'Destination': 'www.microsoft.com'}]`
        */ "HighPriorityIp": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。
        * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过 64 个 ASCII 字符，具体参见如何保证幂等性。
        * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
        */ "ClientToken"?: string;
        /**
        * 需要在路由表中添加IP或域名的实例ID。
        * @example `UIS-xxxsjkn8dtiej7bbb****`
        */ "UisId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * DescribeDnatEntries
    */ DescribeDnatEntries(query: {
        /**
        * UIS实例所在的地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * UIS节点的ID
        * @example `UISNODE-xxxpucur6tfhpzok5u2mi`
        */ "UisNodeId"?: string;
        /**
        * DNAT规则的ID
        * @example `UISDNAT-xxxxlpa9jojfuvvxtvob1`
        */ "UisDnatId"?: string;
        /**
        * 列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "UisDnatEntries": {
            "UisDnatEntry": {
                "IpProtocol": string;
                "UisDnatId": string;
                "DestinationIp": string;
                "OriginalPort": number;
                "DestinationPort": number;
                "OriginalIp": string;
            }[];
        };
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * DescribeUisNetworkInterfaces
    */ DescribeUisNetworkInterfaces(query: {
        /**
        * Uis实例所在的地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * Uis节点ID
        * @example `UISNODE-xxxccvrtiviatdroh92pm`
        */ "UisNodeId"?: string;
        /**
        * Uis弹性网卡ID
        * @example `UISENI-xxxfunml63xpaz0tzbev0`
        */ "UisEniId"?: string;
        /**
        * 列表的页码，默认值为1
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "NetworkInterfaces": {
            "NetworkInterface": {
                "Name": string;
                "Description": string;
                "UisEniId": string;
                "UisNodeId": string;
                "SecurityGroupID": string;
                "State": string;
                "VswitchId": string;
                "IpAddress": string;
                "NetworkInterfaceId": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * DescribeAreas
    */ DescribeAreas(query: {
        /**
        * Uis实例所在的地域信息
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "Areas": {
            "Area": {
                "AreaId": string;
                "LocalName": string;
            }[];
        };
    }>;
    /**
    * DeleteUisNodeIp
    */ DeleteUisNodeIp(query: {
        /**
        * Uis实例所在的地域
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 指定需要删除的IP地址
        * @example `43.98.22.122`
        */ "UisNodeIpAddress": string;
        "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过 64 个 ASCII 字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * 指定Uis节点ID
        * @example `UISNODE-xxx0gdclomnwvxs6mlhq9`
        */ "UisNodeId": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * CreateUisNetworkInterface
    */ CreateUisNetworkInterface(query: {
        "RegionId"?: string;
        /**
        * 指定弹性网卡绑定的Uis节点ID
        * @example `UISNODE-xxxdc9wyfmpf0tik5eyik`
        */ "UisNodeId": string;
        /**
        * 指定弹性网卡所在的VswitchID
        * @example `vsw-m5e1caexsmph0og6lis8h`
        */ "VswitchId": string;
        /**
        * 指定弹性网卡绑定的安全组ID
        * @example `sg-m5eiigbzenfqcpdt6nvi`
        */ "SecurityGroupId": string;
        "OwnerId"?: number;
        /**
        * 指定弹性网卡的私网IP
        * @example `192.168.199.199`
        */ "IpAddress"?: string;
        /**
        * 指定弹性网卡的名称
        * @example `TestUisENI`
        */ "Name"?: string;
        /**
        * 指定弹性网卡的描述信息
        * @example `ENI for test`
        */ "Description"?: string;
    }): Promise<{
        "UisEniId": string;
        "RequestId": string;
    }>;
    /**
    * CreateDnatEntry
    */ CreateDnatEntry(query: {
        "RegionId"?: string;
        /**
        * 指定Uis的节点ID
        * @example `UISNODE-xxxpucur6tfhpzok5u2mi`
        */ "UisNodeId": string;
        /**
        * DNAT后的IP地址
        * @example `3.3.3.3`
        */ "DestinationIp": string;
        /**
        * DNAT后的端口，-1代表所有端口
        * @example `8080`
        */ "DestinationPort": number;
        /**
        * DNAT前的原始IP
        * @example `2.2.2.2`
        */ "OriginalIp": string;
        /**
        * DNAT前的原始Port。-1代表所有端口
        * @example `80`
        */ "OriginalPort": number;
        /**
        * 指定DNAT的协议，支持tcp、udp、any。当协议为any时，指定端口无效。
        * @example `tcp`
        */ "IpProtocol": string;
        /**
        * DNAT规则的名字
        * @example `dnatEntry1`
        */ "Name": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "UisDnatId": string;
    }>;
    /**
    * 调用DescribeRegions接口查询可用地域。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "Regions": {
            "Region": {
                "RegionId": string;
                "LocalName": string;
            }[];
        };
    }>;
}
export default UIS;
