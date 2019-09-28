interface SLB {
    /**
    * 调用SetRule更改转发规则的目标虚拟服务器组。
    */ SetRule(query: {
        /**
        * 负载均衡实例的地域ID。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 转发规则ID。
        * @example `rule-3ejhktkaeu`
        */ "RuleId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 转发规则的目标服务器组ID。
        * @example `rsp-cige6j5e7p`
        */ "VServerGroupId"?: string;
        /**
        * 转发规则名称，长度限制为1~80，只能使用字母、数字、‘-’、‘/’、‘.’、‘_’这些字符。
        * > 同一个监听内不同规则的名称必须唯一。
        * @example `doctest`
        */ "RuleName"?: string;
        /**
        * 规则是否从监听上继承健康检查、会话保持和调度算法配置。
        * 取值：**on|off**。
        * * **off**：不继承监听配置，转发规则自定义健康检查及会话保持配置。
        * * ** on**：继承监听配置。
        * @example `off`
        */ "ListenerSync"?: string;
        /**
        * 在**ListenerSync**为**off**时必选且有效，其他情况会忽略此值。
        * 调度算法，取值：
        * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
        * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
        * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
        * @example `wrr`
        */ "Scheduler"?: string;
        /**
        * 在**ListenerSync**为**off**时必选且有效，其他情况会忽略此值。
        * 是否开启会话保持，取值：**on|off**。
        * @example `off`
        */ "StickySession"?: string;
        /**
        * cookie的处理方式，**StickySession**为**on**时必选且有效，其他情况会忽略此值。
        * 取值：
        * - insert：植入Cookie。
        *  客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP/HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
        * - server：重写Cookie。
        *  负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
        * @example `insert`
        */ "StickySessionType"?: string;
        /**
        * Cookie超时时间。
        * 取值：**1-86400**（秒）。
        * 当**StickySession**为**on**且**StickySessionType**为**insert**时，该参数必选且有效，其他情况会忽略此值。
        * @example `123`
        */ "CookieTimeout"?: number;
        /**
        * 服务器上配置的Cookie。
        * 长度为1-200个字符，只能包含ASCII英文字母和数字字符，不能包含逗号、分号或空格，也不能以$开头。
        * 当**StickySession**为**on**且**StickySessionType**为**server**时，该参数必选且有效，其他情况会忽略此值。
        * @example `23ffsa`
        */ "Cookie"?: string;
        /**
        * 是否开启健康检查。
        * 取值：**on|off**。
        * > **ListenerSync**为**off**时必选且有效，其他情况会忽略此值。
        * @example `off`
        */ "HealthCheck"?: string;
        /**
        * 用于健康检查的域名，取值：
        * * **$_ip**： 后端服务器的私网IP。当指定了$_ip或HealthCheckDomain未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
        * * **domain**：域名长度为1-80字符，只能包含字母、数字、点号（.）和连字符（-）。
        * >** HealthCheck**为**on**时有效，其他情况会忽略此值。
        * @example `domain`
        */ "HealthCheckDomain"?: string;
        /**
        * **HealthCheck**为**on**时必选且有效，其他情况会忽略此值，用于健康检查的URI。
        * @example `/example`
        */ "HealthCheckURI"?: string;
        /**
        * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
        * **HealthCheck**为**on**时必选且有效，其他情况会忽略此值。
        * 取值：**2-10**。
        * @example `12`
        */ "HealthyThreshold"?: number;
        /**
        * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
        * **HealthCheck**为**on**时必选且有效，其他情况会忽略此值。
        * 取值：**2-10**。
        * @example `1`
        */ "UnhealthyThreshold"?: number;
        /**
        * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。
        * > **HealthCheck**为**on**时必选且有效，其他情况会忽略此值。
        * 取值：**1-300**（秒）。
        * @example `20`
        */ "HealthCheckTimeout"?: number;
        /**
        * 健康检查的时间间隔。
        * **HealthCheck**为**on**时必选。
        * 取值：**1-50**（秒）。
        * > **HealthCheck**为**on**时有效，其他情况会忽略此值。
        * @example `20`
        */ "HealthCheckInterval"?: number;
        /**
        * 健康检查使用的端口。
        * 取值：**1-65535**。
        * > **HealthCheck**为**on**时有效，其他情况会忽略此值。
        * @example `80`
        */ "HealthCheckConnectPort"?: number;
        /**
        * 健康检查正常的HTTP状态码，多个状态码用逗号（,）分割。
        * **HealthCheck**为**on**时必选。
        * 取值：**http_2xx**（默认值）** | http_3xx | http_4xx | http_5xx**。
        * > **HealthCheck**为**on**时有效，其他情况会忽略此值。
        * @example `http_2xx`
        */ "HealthCheckHttpCode"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateLoadBalancer创建负载均衡实例。
    */ CreateLoadBalancer(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 负载均衡实例的网络类型。取值：
        * - **internet**：创建公网负载均衡实例后，系统会分配一个公网IP地址，可以转发公网请求。
        * - **intranet**：创建内网负载均衡实例后，系统会分配一个内网IP地址，仅可转发内网请求。
        * @example `internet`
        */ "AddressType"?: string;
        /**
        * * paybybandwidth：按带宽计费。
        * @example `paybytraffic`
        */ "InternetChargeType"?: string;
        /**
        * 监听的带宽峰值。
        * @example `10`
        */ "Bandwidth"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
        * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
        */ "ClientToken"?: string;
        /**
        * 负载均衡实例的名称。
        * 长度为2-128个英文或中文字符，必须以大小字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
        * 不指定该参数时，默认由系统分配一个实例名称。
        * @example `abc`
        */ "LoadBalancerName"?: string;
        /**
        * 负载均衡实例的所属的VPC ID。
        * @example `vpc-bp1aevy8sofi8mh1*****`
        */ "VpcId"?: string;
        /**
        * 专有网络实例的所属交换机ID。
        * 创建专有网络类型的负载均衡实例，必须指定该参数。如果指定了该参数，**AddessType**参数的值会默认被设置为**intranet**。
        * @example `vsw-bp12mw1f8k3jgy*****`
        */ "VSwitchId"?: string;
        /**
        * 负载均衡实例的主可用区ID。
        * 您可以通过调用[DescribeZone](~~27585~~)接口可查到相应地域下的主备可用区信息。
        * @example `cn-hangzhou-b`
        */ "MasterZoneId"?: string;
        /**
        * 负载均衡实例的备可用区ID。
        * 您可以通过调用[DescribeZone](~~27585~~)接口可查到相应地域下的主备可用区信息。
        * @example `cn-hangzhou-d`
        */ "SlaveZoneId"?: string;
        "access_key_id"?: string;
        "Tags"?: string;
        "EnableVpcVipFlow"?: string;
        /**
        * 负载均衡实例的规格。取值：
        * - slb.s1.small
        * - slb.s2.small
        * - slb.s2.medium
        * - slb.s3.small
        * - slb.s3.medium
        * - slb.s3.large
        * 每个地域支持的规格不同。
        * 目前支持性能保障型实例的地域有：华北 1（青岛）、华北 2（北京）、华东 1（杭州）、华东 2（上海）、华南 1（深圳）、华北 3（张家口）、华北 5 （呼和浩特）、亚太东南 1（新加坡）、英国（伦敦）、欧洲中部 1（法兰克福）、亚太东南 2（悉尼）、亚太东南 3（吉隆坡）、中东东部 1（迪拜）、亚太东南 5（雅加达）、美西 1（硅谷）、亚太南部 1（孟买）、亚太东北 1（东京）、香港和美东 1（弗吉尼亚）。关于每种规格的说明，参见[性能保障型实例](~~85931~~)。
        * > 若不指定规格，则创建性能共享型实例。
        * @example `slb.s2.small`
        */ "LoadBalancerSpec"?: string;
        /**
        * 企业资源组ID。
        * @example `rg-atstuj3rtopt****`
        */ "ResourceGroupId"?: string;
        /**
        * * **PrePay**：预付费。
        * @example `PayOnDemand`
        */ "PayType"?: string;
        /**
        * 预付费公网实例的计费周期，取值：**month|year**
        * <note>仅适用于中国站。</note>
        * @example `month`
        */ "PricingCycle"?: string;
        /**
        * 预付费公网实例的购买时长，取值：
        *
        * * 如果**PricingCycle**为**month**，取值为**1~9**。
        * * 如果**PricingCycle**为**year**，取值为**1~3**。
        * > 该参数仅适用于中国站。
        * @example `1`
        */ "Duration"?: number;
        /**
        * 是否是自动支付预付费公网实例的账单。
        * 取值：**true|false（默认）**。
        * > 该参数仅适用于中国站。
        * @example `true`
        */ "AutoPay"?: boolean;
        /**
        * 负载均衡实例的IP版本，可以设置为ipv4或者ipv6。
        * @example `ipv4`
        */ "AddressIPVersion"?: string;
        /**
        * 指定负载均衡实例的私网IP地址，该地址必须包含在交换机的目标网段下。
        * @example `192.168.0.1`
        */ "Address"?: string;
        "Ratio"?: number;
        /**
        * 是否开启实例删除保护。
        * @example `on`
        */ "DeleteProtection"?: string;
        "CloudType"?: string;
    }): Promise<{
        "NetworkType": string;
        "LoadBalancerName": string;
        "Address": string;
        "ResourceGroupId": string;
        "RequestId": string;
        "AddressIPVersion": string;
        "LoadBalancerId": string;
        "VSwitchId": string;
        "VpcId": string;
    }>;
    /**
    * 调用DeleteMasterSlaveServerGroup删除指定的主备服务器组。
    */ DeleteMasterSlaveServerGroup(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 主备服务器组ID。
        * > 如果主备服务器组正在使用中，无法删除。
        * @example `rsp-cige6j5e7p`
        */ "MasterSlaveServerGroupId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteLoadBalancerListener删除监听。
    */ DeleteLoadBalancerListener(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1~65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp13jaf5qli5xmgl1miup`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * 负载均衡实例前端使用的协议。
        * > 相同端口存在不同协议监听时，此字段必填。
        * @example `https`
        */ "ListenerProtocol"?: string;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyLoadBalancerInstanceSpec修改负载均衡的实例规格。
    */ ModifyLoadBalancerInstanceSpec(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例的规格。取值：
        *  - slb.s1.small
        *
        * - slb.s2.small
        * - slb.s2.medium
        * - slb.s3.small
        * - slb.s3.medium
        * - slb.s3.large
        * 每个地域支持的规格不同。关于每种规格的说明，参见[性能保障型实例](~~55193~~)。
        * <note>将共享型实例变更为保障型实例，SLB将有小概率可能性出现短暂的业务中断（10秒-30秒），建议您在业务低谷期进行变配，或者使用GSLB将业务调度至其他的SLB实例后，再进行变配操作。</note>
        * @example `slb.s2.small`
        */ "LoadBalancerSpec": string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1b6c719dfa08exfuca5`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 是否自动付费。
        * - 取值为**true**则自动支付订单。
        * - 取值为**false**则需要在订单中心中进行支付。
        * > 仅对预付费实例有效。
        * @example `true`
        */ "AutoPay"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyVServerGroupBackendServers替换服务器组中的后端服务器。
    */ ModifyVServerGroupBackendServers(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 服务器组ID。
        * @example `rsp-cige6j5e7p`
        */ "VServerGroupId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 要被替换的后端服务器列表。
        * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
        */ "OldBackendServers"?: string;
        /**
        * 新的后端服务器列表。
        * 单次调用每个服务器组最多可调用20个后端服务器。
        * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.11" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.10" }]`
        */ "NewBackendServers"?: string;
    }): Promise<{
        "RequestId": string;
        "VServerGroupId": string;
        "BackendServers": {
            "BackendServer": {
                "ServerId": string;
                "Port": string;
                "Weight": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeMasterSlaveServerGroups查询主备服务器组列表。
    */ DescribeMasterSlaveServerGroups(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp14zi0n66zpg6ohffzaa`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 是否返回关联的监听信息，默认值：**false**。
        * @example `false`
        */ "IncludeListener"?: boolean;
    }): Promise<{
        "RequestId": string;
        "MasterSlaveServerGroups": {
            "MasterSlaveServerGroup": {
                "MasterSlaveServerGroupId": string;
                "MasterSlaveServerGroupName": string;
                "AssociatedObjects": {
                    "Listeners": {
                        "Listener": any[];
                    };
                };
            }[];
        };
    }>;
    /**
    * 调用ModifyLoadBalancerPayType将后付费实例转换为预付费实例。
    */ ModifyLoadBalancerPayType(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-test`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * * **PrePay**：预付费。
        * @example `PrePay`
        */ "PayType"?: string;
        /**
        * 计费周期。
        * 取值：**year|month** 。
        * @example `month`
        */ "PricingCycle"?: string;
        /**
        * 计费时长。
        * * 如果**PricingCycle**为**month**，取值**1-9**。
        * * 如果**PricingCycle**为**year**，取值**1-3**。
        * @example `1`
        */ "Duration"?: number;
        /**
        * 是否自动付费。取值：**true|false**
        * - **true**：自动续费。
        * - **false（默认值）**：不自动续费。
        * @example `true`
        */ "AutoPay"?: boolean;
    }): Promise<{
        "RequestId": string;
        "OrderId": number;
    }>;
    /**
    * 调用UploadCACertificate上传CA证书。
    */ UploadCACertificate(query: {
        /**
        * CA证书的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要上传CA证书的内容。
        * @example `test`
        */ "CACertificate": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        /**
        * CA证书名称。
        * @example `mycacert01`
        */ "CACertificateName"?: string;
        /**
        * 企业资源组ID。
        * @example `rg-atstuj3rtoptyui`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "RequestId": string;
        "ServerCertificateId": string;
        "ServerCertificateName": string;
        "Fingerprint": string;
    }>;
    /**
    * 调用RemoveAccessControlListEntry删除访问控制策略组中的IP条目。
    */ RemoveAccessControlListEntry(query: {
        /**
        * 访问控制策略组的地域ID。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制策略组ID。
        * @example `acl-bp1l0kk4gxce43kzet04s`
        */ "AclId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        *
        * 访问控制策略组中要添加的IP条目，可以指定IP地址或IP地址段（CIDR block），多个IP地址/地址段之间用逗号隔开。
        * **注意**：如果访问控制策略组关联了监听，不允许删除组内的所有IP条目。
        * @example `[{"entry":"10.0.0.0/24","comment":"privaterule1"}]`
        */ "AclEntrys"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AddTags为指定的负载均衡实例添加标签。
    */ AddTags(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例ID。
        * @example `139a00604ad-cn-east-hangzhou-`
        */ "LoadBalancerId": string;
        /**
        * 需要添加的Tag列表。
        * @example `[{"TagKey":"Key1","TagValue":"Value1"}{"TagKey":"Key2","TagValue":"Value2"}]`
        */ "Tags": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用SetDomainExtensionAttribute修改扩展域名的证书。
    */ SetDomainExtensionAttribute(query: {
        /**
        * 负载均衡示例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要修改的扩展域名ID。
        * @example `de-bp1rp7ta191dv`
        */ "DomainExtensionId": string;
        /**
        * 新的证书ID。
        * @example `1231579xxxxxxxx_166f8204689_1714763408_709981xxx`
        */ "ServerCertificateId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeVServerGroupAttribute查询服务器组的详细信息。
    */ DescribeVServerGroupAttribute(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 服务器组ID。
        * @example `rsp-cige6j5e7p`
        */ "VServerGroupId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
        "VServerGroupId": string;
        "VServerGroupName": string;
        "BackendServers": {
            "BackendServer": {
                "ServerId": string;
                "Port": string;
                "Weight": string;
            }[];
        };
    }>;
    /**
    * 调用StopLoadBalancerListener停止监听。
    */ StopLoadBalancerListener(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp13jaf5qli5xmgl1miup`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        /**
        * 负载均衡实例前端使用的协议。
        * > 相同端口存在不同协议监听时，此字段必填。
        * @example `https`
        */ "ListenerProtocol"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateAccessControlList创建访问控制策略组。
    */ CreateAccessControlList(query: {
        /**
        * 访问控制策略组的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制策略组名称，需要保证Region内唯一。
        * @example `rule1`
        */ "AclName": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * IP版本，可以设置为ipv4或者ipv6。
        * > 目前支持创建IPv6实例且实例类型必须为性能保障型实例的可用区如下：华东1地域的E、F两个可用区、华北2地域的F、G两个可用区、华东2地域的所有可用区和华南1地域的D、E两个可用区。
        * @example `ipv4`
        */ "AddressIPVersion"?: string;
        "ResourceGroupId"?: string;
    }): Promise<{
        "AclId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRegions查询可用地域。
    */ DescribeRegions(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 支持的语言。包括以下取值：
        * - 中文：zh-CN
        * - 英文：en-US
        * - 日文：ja
        * @example `zh-CN`
        */ "AcceptLanguage"?: string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
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
    * 调用DeleteVServerGroup删除服务器组。
    */ DeleteVServerGroup(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 服务器组ID。
        * > 如果服务器组被引用，将无法删除。
        * @example `rsp-cige6j5e7p`
        */ "VServerGroupId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用SetBackendServers设置后端服务器权重。
    */ SetBackendServers(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1qjwo61pqz3ahltv0mw`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * 要添加的后端服务器列表。
        * <note>后端服务器（ECS实例）必须是运行中才可以加入负载均衡实例，一次最多可调用20个后端服务器。</note>
        * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
        */ "BackendServers"?: string;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
        "LoadBalancerId": string;
        "BackendServers": {
            "BackendServer": {
                "ServerId": string;
                "Weight": string;
            }[];
        };
    }>;
    /**
    * 调用CreateDomainExtension创建扩展域名。
    */ CreateDomainExtension(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1o94dp5i6earrxxxxxx`
        */ "LoadBalancerId": string;
        /**
        * 负载均衡实例HTTPS监听的前端端口。
        * 取值：**1-65535**。
        * @example `443`
        */ "ListenerPort": number;
        /**
        * 域名。
        * @example `*.example1.com`
        */ "Domain": string;
        /**
        * 与域名对应的证书ID。
        * @example `123157xxxxxxx_166f820xxxxxx_1714763408_709981xxxx`
        */ "ServerCertificateId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
        "DomainExtensionId": string;
        "ListenerPort": number;
    }>;
    /**
    * 调用DeleteServerCertificate删除服务器证书。
    */ DeleteServerCertificate(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 服务器证书ID。
        * @example `123157xxxxxxx_166f8204689_1714763408_709981430`
        */ "ServerCertificateId": string;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeLoadBalancers查询已创建的负载均衡实例。
    */ DescribeLoadBalancers(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 添加的后端服务器（ECS实例）的ID。
        * @example `vm-231`
        */ "ServerId"?: string;
        /**
        * IP版本，可以设置为ipv4或者ipv6。
        * > 目前支持创建IPv6实例且实例类型必须为性能保障型实例的可用区如下：
        * 华东1地域的E、F两个可用区、华北2地域的F、G两个可用区、华东2地域的所有可用区和华南1地域的D、E两个可用区。
        * @example `ipv4`
        */ "AddressIPVersion"?: string;
        /**
        * 负载均衡实例状态：
        * - inactive: 此状态的实例监听不会再转发流量。
        * - active: 实例创建后，默认状态为active。
        * - locked: 实例已经被锁定。
        * @example `active`
        */ "LoadBalancerStatus"?: string;
        /**
        * 负载均衡实例ID。
        * 支持多值查询，最多可输入10个ID，以逗号分隔。
        * @example `lb-bp1b6c719dfa08exfuca5`
        */ "LoadBalancerId"?: string;
        /**
        * 负载均衡实例名称。
        * 支持多值查询，最多可输入10个名称，以逗号分隔。
        * @example `abc1`
        */ "LoadBalancerName"?: string;
        /**
        * 添加的后端服务器（ECS实例）的内网地址。
        * 支持多值查询，以逗号分隔。
        * @example `10.80.102.20`
        */ "ServerIntranetAddress"?: string;
        /**
        * 负载均衡实例的网络类型，取值：**intranet**或**internet**。
        * @example `intranet`
        */ "AddressType"?: string;
        /**
        * 公网类型实例付费方式。取值：**paybybandwidth|paybytraffic**。
        * @example `paybybandwidth`
        */ "InternetChargeType"?: string;
        /**
        * 负载均衡实例所属的VPC ID。
        * @example `vpc-bp1aevy8sofi8mh1qc5cm`
        */ "VpcId"?: string;
        /**
        * 负载均衡实例所属的VSwitch ID。
        * @example `vsw-bp12mw1f8k3jgygk9bmlj`
        */ "VSwitchId"?: string;
        /**
        * 私网负载均衡实例的网络类型，取值：**vpc|classic**。
        * - vpc：专有网络实例
        * - classic：经典网络实例
        * @example `vpc`
        */ "NetworkType"?: string;
        /**
        * 负载均衡实例的服务地址。
        * @example `192.168.0.6`
        */ "Address"?: string;
        /**
        * 负载均衡实例的主可用区ID。
        * @example `cn-hangzhou-b`
        */ "MasterZoneId"?: string;
        /**
        * 负载均衡实例的备可用区ID。
        * 目前对金融云用户暂时不支持多可用区功能。
        * @example `cn-hangzhou-d`
        */ "SlaveZoneId"?: string;
        "access_key_id"?: string;
        /**
        * 负载均衡实例绑定的Tag列表，其结构是一个json dictionary，包含TagKey和TagValue。
        * 一次请求中，List中的元素最多有10个。
        * @example `{"tagKey":"Key1","tagValue":"Value1"}`
        */ "Tags"?: string;
        /**
        * 负载均衡实例付费类型。
        * 取值：**PayOnDemand|PrePay**。
        * @example `PayOnDemand`
        */ "PayType"?: string;
        /**
        * 企业资源组ID。
        * @example `rg-acfmxazb4ph6aiy`
        */ "ResourceGroupId"?: string;
        /**
        * 分页查询时的页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。
        * @example `50`
        */ "PageSize"?: number;
        "Tag"?: string[];
        "Fuzzy"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "LoadBalancers": {
            "LoadBalancer": {
                "CreateTimeStamp": number;
                "LoadBalancerName": string;
                "RegionIdAlias": string;
                "ResourceGroupId": string;
                "AddressIPVersion": string;
                "LoadBalancerId": string;
                "VSwitchId": string;
                "InternetChargeType": string;
                "VpcId": string;
                "SlaveZoneId": string;
                "NetworkType": string;
                "MasterZoneId": string;
                "CreateTime": string;
                "Address": string;
                "RegionId": string;
                "AddressType": string;
                "PayType": string;
                "LoadBalancerStatus": string;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用SetCACertificateName设置CA证书名称。
    */ SetCACertificateName(query: {
        /**
        * CA证书的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * CA证书ID。
        * @example `139a00604ad-cn-east-hangzhou-01`
        */ "CACertificateId": string;
        /**
        * CA证书名称。
        * 名称长度为1~80个英文或中文字符，必须以大小字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
        * @example `mycacert02`
        */ "CACertificateName": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AddListenerWhiteListItem添加监听访问控制白名单。
    */ AddListenerWhiteListItem(query: {
        /**
        * 实例所在地域。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 访问控制列表。
        * 监听的**AccessControlStatus**为**open_white_list**时有效。
        * 支持输入IP地址或IP地址段（CIDR block形式），多个IP地址或地址段用逗号（,）分割。
        * 不允许输入0.0.0.0或0.0.0.0/0。您可以通过调用[SetListenerAccessControlStatus](~~27599~~)接口将AccessControlStatus的值设置为close，关闭访问控制。
        * @example `1.1.1.1,1.1.1.0/21`
        */ "SourceItems": string;
        /**
        * 负载均衡实例的ID。
        * @example `139a00604ad-cn-east-hangzhou-01`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "ListenerProtocol"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用SetLoadBalancerName修改负载均衡实例的名称。
    */ SetLoadBalancerName(query: {
        /**
        * 负载均衡实例的地域ID。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例的名称。
        * 长度为2-128个英文或中文字符，必须以大小字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
        * @example `abc1`
        */ "LoadBalancerName": string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1b6c719dfa08exfuca5`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用SetLoadBalancerUDPListenerAttribute修改UDP协议监听的配置。
    */ SetLoadBalancerUDPListenerAttribute(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1rtfnodmywb43ecu4sf-c****`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * 监听的带宽峰值。
        * 取值：**-1|1-5120**。
        * * **-1**：不限制带宽峰值。
        * * **1-5120**（Mbps）：监听的带宽峰值，所有监听的带宽峰值之和不能超过实例的带宽峰值。
        * @example `-1`
        */ "Bandwidth"?: number;
        /**
        * 调度算法。取值：
        * * **wrr**：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
        * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。
        *  当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
        * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
        * * **sch**：基于源IP地址的一致性hash，相同的源地址会调度到相同的后端服务器。
        * * **tch**：基于四元组的一致性hash（源IP+目的IP+源端口+目的端口），相同的流会调度到相同的后端服务器。
        * * **qch**：基于QUIC Connection ID一致性hash，相同的QUIC Connection ID会调度到相同的后端服务器。
        * > 仅有性能保障型实例支持sch、 tch和 qch一致性hash算法。
        * @example `wrr`
        */ "Scheduler"?: string;
        "PersistenceTimeout"?: number;
        /**
        * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
        * 取值：**2-10**。
        * @example `4`
        */ "HealthyThreshold"?: number;
        /**
        * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
        * 取值：**2-10**。
        * @example `4`
        */ "UnhealthyThreshold"?: number;
        /**
        * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。
        * 取值：**1-300**（秒）。
        * > 如果**HealthCheckConnectTimeout**的值小于**HealthCheckInterval**的值，则**HealthCheckConnectTimeout**无效，超时时间为**HealthCheckInterval**的值。
        * @example `100`
        */ "HealthCheckConnectTimeout"?: number;
        /**
        * 健康检查使用的端口。
        * 取值：**1-65535**。
        * > 在**HealthCheck**值为**on**时才会有效。
        * @example `80`
        */ "HealthCheckConnectPort"?: number;
        /**
        * 健康检查的时间间隔。
        * 取值：**1-50**（秒）。
        * @example `5`
        */ "HealthCheckInterval"?: number;
        /**
        * UDP监听健康检查的请求串，只允许包含字母、数字字符，最大长度限制为500字符。
        * @example `hello`
        */ "healthCheckReq"?: string;
        /**
        * UDP监听健康检查的响应串，只允许包含字母、数字字符，最大长度限制为500字符。
        * @example `ok`
        */ "healthCheckExp"?: string;
        "MaxConnection"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 是否使用虚拟服务器组。
        * 取值：**on | off**。
        * > **VserverGroup**和**MasterSlaveServerGroup**只允许一个值为**on**。
        * @example `on`
        */ "VServerGroup"?: string;
        /**
        * 虚拟服务器组ID。
        * @example `rsp-cige6******`
        */ "VServerGroupId"?: string;
        /**
        * 主备服务器组ID。
        * > 服务器组ID和主备服务器组ID只能选择一个。
        * @example `rsp-0bfuc*****`
        */ "MasterSlaveServerGroupId"?: string;
        /**
        * 是否使用主备服务器组。
        * 取值：**on|off**。
        * **VserverGroup**和**MasterSlaveServerGroup**只允许一个值为**on**。
        * @example `on`
        */ "MasterSlaveServerGroup"?: string;
        /**
        * 监听绑定的访问策略组ID。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `off`
        */ "AclId"?: string;
        /**
        * 访问控制类型：
        * * **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
        * 设置白名单存在一定业务风险。
        *  一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
        *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * * **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
        * 如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `white`
        */ "AclType"?: string;
        /**
        * 是否开启访问控制功能。
        * 取值：**on | off**。
        * @example `off`
        */ "AclStatus"?: string;
        "VpcIds"?: string;
        /**
        * 设置监听的描述信息。
        * @example `test`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AddAccessControlListEntry在访问控制策略组中添加IP条目。
    */ AddAccessControlListEntry(query: {
        /**
        * 访问控制策略组的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制策略组ID。
        * @example `acl-bp1l0kk4gxce43kze*****`
        */ "AclId"?: string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 访问控制策略组中要添加的IP条目，可以指定IP地址或IP地址段（CIDR block），多个IP地址/地址段之间用逗号隔开。
        * > 每次最多可添加50个条目。
        * @example `[{"entry":"10.0.0.0/24","comment":"privaterule1"},{"entry":"192.168.0.0/16","comment":"privaterule2"}]`
        */ "AclEntrys"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用SetServerCertificateName设置服务器证书名称。
    */ SetServerCertificateName(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 服务器证书ID。
        * @example `139a00604ad-cn-east-hangzhou-01`
        */ "ServerCertificateId": string;
        /**
        * 服务器证书名称。
        * 名称长度为 1~80 个英文或中文字符，必须以大小字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
        * @example `abc`
        */ "ServerCertificateName": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AddVServerGroupBackendServers向指定的后端服务器组中添加后端服务器。
    */ AddVServerGroupBackendServers(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 服务器组ID。
        * @example `rsp-cige6j5e7p`
        */ "VServerGroupId": string;
        /**
        * 服务器组列表。单次调用最多可添加20个后端服务器。
        * 服务器组列表需要包含以下参数：
        * - **ServerId**：ECS实例ID。
        * - **Port**：必选参数，表示后端服务器使用的端口。取值范围：**1~65535**。
        * - **Weight**：后端服务器的权重，取值：0~100。默认值为100。如果值为0，则不会将请求转发给该后端服务器。
        * - **Type**：后端服务器类型，取值：
        *     -  **ecs**: ECS实例（默认）
        *     - **eni**：弹性网卡实例
        * @example `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.11.1", "Port":"80" }, { "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.11.2", "Port":"80" }]`
        */ "BackendServers": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "AddVServerGroupBackendServers": {
            "RequestId": string;
            "VServerGroupId": string;
            "BackendServers": {
                "BackendServer": {
                    "ServerId": string;
                    "Port": string;
                    "Weight": string;
                }[];
            };
        };
    }>;
    /**
    * 调用DescribeLoadBalancerTCPListenerAttribute查询TCP监听配置。
    */ DescribeLoadBalancerTCPListenerAttribute(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1~65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1ygod3yctvg1y******`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "HealthCheckHttpCode": string;
        "PersistenceTimeout": number;
        "HealthCheckType": string;
        "HealthyThreshold": number;
        "Scheduler": string;
        "UnhealthyThreshold": number;
        "Bandwidth": number;
        "Description": string;
        "AclStatus": string;
        "HealthCheckURI": string;
        "HealthCheck": string;
        "HealthCheckConnectTimeout": number;
        "ListenerPort": number;
        "Status": string;
        "EstablishedTimeout": number;
        "HealthCheckDomain": string;
        "HealthCheckInterval": number;
        "RequestId": string;
        "BackendServerPort": number;
    }>;
    /**
    * 调用RemoveListenerWhiteListItem删除监听白名单中的IP。
    */ RemoveListenerWhiteListItem(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 监听端口。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 访问控制列表。支持输入IP地址或IP地址段（CIDR block形式），多个IP地址或地址段用逗号（,）分隔。
        * > 如果所有IP都被删除，则无法访问该监听。
        * @example `1.1.1.1`
        */ "SourceItems": string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-8vb86hxixo8lvsja86jaz`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "ListenerProtocol"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRules查询指定监听已配置的转发规则。
    */ DescribeRules(query: {
        /**
        * 负载均衡实例的地域ID。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1ca0zt07t934wxezyxo`
        */ "LoadBalancerId": string;
        /**
        * 负载均衡实例前端使用的监听端口。
        * 取值范围：**1~65535**。
        * @example `90`
        */ "ListenerPort": number;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        "ListenerProtocol"?: string;
    }): Promise<{
        "RequestId": string;
        "Rules": {
            "Rule": {
                "Url": string;
                "Domain": string;
                "VServerGroupId": string;
                "RuleId": string;
                "RuleName": string;
                "ListenerSync": string;
            }[];
        };
    }>;
    /**
    * 调用DeleteAccessControlList删除访问控制策略组。
    */ DeleteAccessControlList(query: {
        /**
        * 访问控制策略组的地域ID。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制策略组ID。
        * @example `acl-bp1l0kk4gxce43kz******`
        */ "AclId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用SetAccessControlListAttribute修改访问控制策略组的名称。
    */ SetAccessControlListAttribute(query: {
        /**
        * 访问控制策略组的地域ID。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 访问控制策略组ID。
        * @example `acl-bp1l0kk4gxce43kzet04s`
        */ "AclId": string;
        /**
        * 访问控制策略组名称。
        * @example `test1`
        */ "AclName": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeLoadBalancerUDPListenerAttribute查询UDP监听的配置。
    */ DescribeLoadBalancerUDPListenerAttribute(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1rtfnodmywb43e*****`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "AclStatus": string;
        "HealthCheck": string;
        "HealthCheckConnectTimeout": number;
        "PersistenceTimeout": number;
        "ListenerPort": number;
        "Status": string;
        "Scheduler": string;
        "HealthyThreshold": number;
        "HealthCheckInterval": number;
        "RequestId": string;
        "UnhealthyThreshold": number;
        "BackendServerPort": number;
        "Bandwidth": number;
    }>;
    /**
    * 调用DescribeCACertificates查询CA证书列表。
    */ DescribeCACertificates(query: {
        /**
        * CA证书的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        /**
        * CA证书ID。
        * @example `139a00604bd-cn-east-hangzhou-02`
        */ "CACertificateId"?: string;
        /**
        * 企业资源组ID。
        * @example `rg-atstuj3rtoptyui`
        */ "ResourceGroupId"?: string;
        "Tag"?: string[];
    }): Promise<{
        "RequestId": string;
        " CACertificates": {
            "CACertificate": {
                "CACertificateId": string;
                "CACertificateName": string;
                "Fingerprint ": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeZones查询指定地域的可用区信息。
    */ DescribeZones(query: {
        /**
        * 所属地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
        "Zones": {
            "Zone": {
                "SlaveZones": {
                    "SlaveZone": {
                        "ZoneId": string;
                        "LocalName": string;
                    }[];
                };
                "ZoneId": string;
                "LocalName": string;
            }[];
        };
    }>;
    /**
    * 调用RemoveTags解绑指定负载均衡实例下的标签。
    */ RemoveTags(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例ID。
        * @example `139a00604ad-cn-east-hangzhou-01`
        */ "LoadBalancerId": string;
        /**
        * 需要解绑的Tag列表。
        * @example `[{"TagKey":"Key1","TagValue":"Value1"}{"TagKey":"Key2","TagValue":"Value2"}]`
        */ "Tags": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UploadServerCertificate上传服务器证书。
    */ UploadServerCertificate(query: {
        /**
        * 服务器证书的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        /**
        * 阿里云的云上证书ID。
        *
        *  使用阿里云的云上证书，该参数必选。
        * @example `730912673xxxxxx_15d97e7709a_71445759hr_789289731`
        */ "AliCloudCertificateId"?: string;
        /**
        * 阿里云的云上证书名称。
        * @example `testcertkey`
        */ "AliCloudCertificateName"?: string;
        /**
        * 要上传的公钥证书。
        * @example `test`
        */ "ServerCertificate"?: string;
        /**
        * 需要上传的私钥。
        * @example `wmsad!q23`
        */ "PrivateKey"?: string;
        /**
        * 要上传的服务器证书的名称。
        * 名称长度为 1~80 个英文或中文字符，必须以大小字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
        * @example `mycert01`
        */ "ServerCertificateName"?: string;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 企业资源组ID。
        * @example `rg-atstuj3rto****`
        */ "ResourceGroupId"?: string;
    }): Promise<{
        "CommonName": string;
        "RegionIdAlias": string;
        "ResourceGroupId": string;
        "Fingerprint": string;
        "ServerCertificateId": string;
        "ExpireTimeStamp": number;
        "AliCloudCertificateId": string;
        "ExpireTime": string;
        "RegionId": string;
        "RequestId": string;
        "ServerCertificateName": string;
        "IsAliCloudCertificate": number;
        "AliCloudCertificateName": string;
    }>;
    /**
    * 调用CreateVServerGroup向指定的后端服务器组中添加后端服务器。
    */ CreateVServerGroup(query: {
        /**
        * 负载均衡地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1qjwo61pqz3ahltv0mw`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 虚拟服务器组名称。
        * @example `Group1`
        */ "VServerGroupName"?: string;
        /**
        * 需要添加的后端服务器列表。
        * 取值：是一个Json string，其结构是一个JsonList。一次请求中，List中的元素个数最多20个。
        * * **ServerId**：String类型，必选，后端服务器名称Id，为ECS实例Id。
        * * **Port**：Integer类型，必选，后端服务器使用的端口，取值范围：1-65535。
        *
        * * **Weight**：Integer类型，必选，后端服务器的权重，取值范围：0-100。
        * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
        */ "BackendServers"?: string;
    }): Promise<{
        "RequestId": string;
        "VServerGroupId": string;
        "BackendServers": {
            "BackendServer": {
                "ServerId": string;
                "Port": string;
                "Weight": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeVServerGroups查询服务器组列表。
    */ DescribeVServerGroups(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1o94dp5i6earr9g6d1l`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 返回关联的转发规则信息。
        * 默认值：**false**。
        * @example `false`
        */ "IncludeRule"?: boolean;
        /**
        * 返回关联的监听信息。
        * 默认值：**false**。
        * @example `false`
        */ "IncludeListener"?: boolean;
    }): Promise<{
        "RequestId": string;
        "VServerGroups": {
            "VServerGroupId": string;
            "VServerGroupName": string;
        }[];
    }>;
    /**
    * 调用DescribeAccessControlLists查询已创建的访问控制策略组。
    */ DescribeAccessControlLists(query: {
        /**
        * 访问控制策略组的地域ID。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 访问控制策略组名称。
        * @example `rule1`
        */ "AclName"?: string;
        /**
        * 访问控制策略组绑定的实例的IP类型。取值：
        * - **ipv4**：负载均衡实例的IP地址是IPv4类型。
        * - **ipv6**：负载均衡实例的IP地址是IPv6类型。
        * @example `ipv4`
        */ "AddressIPVersion"?: string;
        /**
        * 分页查询时每页的行数，最大值为50，默认值为10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 列表的页码，默认值为1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 企业资源组ID。
        * @example `rg-atstuj3rtoptyui`
        */ "ResourceGroupId"?: string;
        "Tag"?: string[];
    }): Promise<{
        "RequestId": string;
        "Acls": {
            "Acl": {
                "AclId": string;
                "AclName": string;
                "AddressIPVersion": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeDomainExtensions查询已添加的扩展域名。
    */ DescribeDomainExtensions(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1o94dp5i6earr9g6d1l`
        */ "LoadBalancerId": string;
        /**
        * 负载均衡实例HTTPS监听的前端端口，取值：**1-65535**。
        * @example `443`
        */ "ListenerPort": number;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 扩展域名ID。
        * @example `de-bp1rp7ta191dv`
        */ "DomainExtensionId"?: string;
    }): Promise<{
        "RequestId": string;
        "DomainExtensions": {
            "DomainExtension": {
                "ServerCertificateId": string;
                "Domain": string;
                "DomainExtensionId": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeHealthStatus查询后端服务器的健康状态。
    */ DescribeHealthStatus(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**
        * > 不设置该参数表示获取所有端口的健康检查状态。
        * @example `80`
        */ "ListenerPort"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 负载均衡实例前端使用的协议。
        * @example `https`
        */ "ListenerProtocol"?: string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1qjwo61pqz3ahltv0mw`
        */ "LoadBalancerId": string;
    }): Promise<{
        "BackendServers": {
            "BackendServer": {
                "ServerHealthStatus": string;
                "ServerId": string;
                "Port": number;
                "ListenerPort": number;
            }[];
        };
        "RequestId": string;
    }>;
    /**
    * 调用SetLoadBalancerHTTPSListenerAttribute修改HTTPS监听的配置。
    */ SetLoadBalancerHTTPSListenerAttribute(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `139a00604ad-cn-east-hangzhou-01`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * 监听的带宽峰值。
        * 取值：**1|1-5120**。
        * * **-1**：不限制带宽峰值。
        * * **1-5120**：监听的带宽峰值，所有监听的带宽峰值之和不能超过实例的带宽峰值。
        * @example `-1`
        */ "Bandwidth"?: number;
        "BackendProtocol"?: string;
        /**
        * 是否开启通过X-Forwarded-For头字段获取来访者真实IP。
        * 取值：**on|off**。
        * @example `on`
        */ "XForwardedFor"?: string;
        /**
        * 调度算法。取值：
        * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
        * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
        * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
        * @example `wrr`
        */ "Scheduler"?: string;
        /**
        * 是否开启会话保持。
        * 取值：**on|off**。
        * @example `on`
        */ "StickySession"?: string;
        /**
        * cookie的处理方式。取值：
        * * **insert**：植入Cookie。
        *  客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP/HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
        * * **server**：重写Cookie。
        *  负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
        * > 当**StickySession**的值为**on**时，必须指定该参数。
        * @example `on`
        */ "StickySessionType"?: string;
        /**
        * Cookie超时时间。
        * 取值：**1-86400**（秒）。
        * > 当**StickySession**为**on**且**StickySessionType**为**insert**时，该参数必选。
        * @example `500`
        */ "CookieTimeout"?: number;
        /**
        * 服务器上配置的Cookie。
        * 长度为1-200个字符，只能包含ASCII英文字母和数字字符，不能包含逗号、分号或空格，也不能以$开头。
        * 当**StickySession**为**on**且**StickySessionType**为**server**时，该参数必选。
        * @example `B490B5EBF6F3CD402E515D22BCDA1598`
        */ "Cookie"?: string;
        /**
        * 是否开启健康检查。
        * 取值：**on|off**。
        * @example `on`
        */ "HealthCheck"?: string;
        "HealthCheckType"?: string;
        "HealthCheckMethod"?: string;
        /**
        * 用于健康检查的域名，取值：
        * * **$_ip**： 后端服务器的私网IP。当指定了IP或该参数未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
        * * **domain**：域名长度为1-80字符，只能包含字母、数字、点号（.）和连字符（-）。
        * @example `$_ip`
        */ "HealthCheckDomain"?: string;
        /**
        * 用于健康检查的URI。
        * @example `/test/index.html`
        */ "HealthCheckURI"?: string;
        /**
        * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
        * 取值：**2-10**。
        * @example `4`
        */ "HealthyThreshold"?: number;
        /**
        * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
        * 取值：**2-10**。
        * @example `4`
        */ "UnhealthyThreshold"?: number;
        /**
        * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。
        * 取值：**1-300**（秒）。
        * > 如果**HealthCHeckTimeout**的值小于**HealthCheckInterval**的值，则**HealthCHeckTimeout**无效，超时时间为**HealthCheckInterval**的值。
        * @example `3`
        */ "HealthCheckTimeout"?: number;
        /**
        * 健康检查的时间间隔。
        * 取值：**1-50**（秒）。
        * @example `5`
        */ "HealthCheckInterval"?: number;
        /**
        * 健康检查使用的端口。
        * 取值：**1-65535**。
        * > 当**HealthCheck**值为**on**时才会有效。
        * @example `8080`
        */ "HealthCheckConnectPort"?: number;
        /**
        * 健康检查正常的HTTP状态码，多个状态码用逗号（,）分割。
        * 取值：**http_2xx|http_3xx|http_4xx|http_5xx**。
        * @example `http_2xx,http_3xx`
        */ "HealthCheckHttpCode"?: string;
        "MaxConnection"?: number;
        "access_key_id"?: string;
        /**
        * 服务器证书的ID。
        * @example `idkp-123-cn-test-01`
        */ "ServerCertificateId"?: string;
        /**
        * CA证书ID。
        * 若既上传CA证书又上传服务器证书，即采用双向认证；若用户只上传服务器证书，即为单向认证。
        * @example `139a00604ad-cn-east-hangzhou-01`
        */ "CACertificateId"?: string;
        /**
        * 是否使用服务器组。
        * 取值：**on|off**。
        * @example `on`
        */ "VServerGroup"?: string;
        /**
        * 虚拟服务器组ID。
        * @example `rsp-cige6j5e7p`
        */ "VServerGroupId"?: string;
        "Tags"?: string;
        /**
        * 是否通过`SLB-IP`头字段获取客户端请求的真实IP。
        * 取值：**on|off**（默认值）。
        * @example `on`
        */ "XForwardedFor_SLBIP"?: string;
        /**
        * 是否通过`SLB-ID`头字段获取负载均衡实例ID。
        * 取值：**on|off**（默认值）。
        * @example `on`
        */ "XForwardedFor_SLBID"?: string;
        /**
        * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。
        * 取值：**on | off**（默认值）。
        * @example `on`
        */ "XForwardedFor_proto"?: string;
        /**
        * 是否开启Gzip压缩，对特定文件类型进行压缩。
        * 取值：**on|off**（默认值）。
        * @example `on`
        */ "Gzip"?: string;
        /**
        * 监听绑定的访问策略组ID。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `56565`
        */ "AclId"?: string;
        /**
        * 访问控制类型：
        * * **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
        *  设置白名单存在一定业务风险。一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * * **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
        *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `white`
        */ "AclType"?: string;
        /**
        * 是否开启访问控制功能。
        * 取值：**on|off**。
        * @example `off`
        */ "AclStatus"?: string;
        "VpcIds"?: string;
        /**
        * 指定连接空闲超时时间，取值范围为1-60秒，默认值为15秒。
        * 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立新的连接。
        * @example `23`
        */ "IdleTimeout"?: number;
        /**
        * 指定请求超时时间，取值范围为1-180秒，默认值为60秒。
        * 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回HTTP 504错误码。
        * @example `223`
        */ "RequestTimeout"?: number;
        /**
        * 是否开启HTTP/2特性。
        * 取值：**on|off**。
        * @example `off`
        */ "EnableHttp2"?: string;
        /**
        * 只有性能保障型实例才可以指定TLSCipherPolicy参数，每种policy定义了一种安全策略，安全策略包含HTTPS可选的TLS协议版本和配套的加密算法套件。
        * 目前支持以下四种安全策略，请根据实际情况选择对应的policy。
        * * **tls_cipher_policy_1_0**：
        *   * 支持TLS版本： TLSv1.0、TLSv1.1和TLSv1.2。
        *   * 支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
        * * **tls_cipher_policy_1_1**：
        *   * 支持TLS版本： TLSv1.1和TLSv1.2。
        *   * 支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
        * * **tls_cipher_policy_1_2**
        *   * 支持TLS版本：TLSv1.2。
        *   * 支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
        * * **tls_cipher_policy_1_2_strict**
        *   * 支持TLS版本：TLSv1.2。
        *   * 支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、ECDHE-RSA-AES128-SHA和ECDHE-RSA-AES256-SHA。
        * @example `tls_cipher_policy_1_2`
        */ "TLSCipherPolicy"?: string;
        /**
        * 监听描述。
        * @example `监听描述`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteLoadBalancer删除后付费的负载均衡实例。
    */ DeleteLoadBalancer(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1h66tp5uat84khmqc9e`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteRules删除转发规则。
    */ DeleteRules(query: {
        /**
        * 负载均衡实例的地域ID。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要删除的转发规则列表。
        * @example `["rule-bp1z9cee47oip","rule-bp1tucxr06qu4"]`
        */ "RuleIds": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRuleAttribute查询指定转发规则的配置详情。
    */ DescribeRuleAttribute(query: {
        /**
        * 负载均衡实例的地域ID。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 转发规则ID。
        * @example `rule-bp1efemp9suk5`
        */ "RuleId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "Domain": string;
        "VServerGroupId": string;
        "LoadBalancerId": string;
        "RuleName": string;
        "ListenerPort": number;
        "RequestId": string;
        "ListenerSync": string;
    }>;
    /**
    * 调用DescribeServerCertificates查询指定地域的服务器证书列表。
    */ DescribeServerCertificates(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 服务器证书ID。
        * @example `12315790xxxxxxx_166f8204689_1714763408_709981430`
        */ "ServerCertificateId"?: string;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 企业资源组ID。
        * @example `rg-atstuj3rtoptyui`
        */ "ResourceGroupId"?: string;
        "Tag"?: string[];
    }): Promise<{
        "RequestId": string;
        "ServerCertificates": {
            "ServerCertificate": {
                "CreateTimeStamp": number;
                "CommonName": string;
                "RegionIdAlias": string;
                "ResourceGroupId": string;
                "Fingerprint": string;
                "ServerCertificateId": string;
                "ExpireTimeStamp": number;
                "AliCloudCertificateId": string;
                "ExpireTime": string;
                "RegionId": string;
                "CreateTime": string;
                "ServerCertificateName": string;
                "IsAliCloudCertificate": number;
                "AliCloudCertificateName": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeLoadBalancerHTTPSListenerAttribute查询HTTPS监听配置。
    */ DescribeLoadBalancerHTTPSListenerAttribute(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1mxu5r8laukr35n1k5r`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
        "HealthCheckHttpCode": string;
        "HealthCheckTimeout": number;
        "ServerCertificateId": string;
        "XForwardedFor_SLBID": string;
        "Gzip": string;
        "HealthyThreshold": number;
        "Scheduler": string;
        "StickySession": string;
        "UnhealthyThreshold": number;
        "XForwardedFor_SLBIP": string;
        "XForwardedFor_proto": string;
        "Bandwidth": number;
        "HealthCheckURI": string;
        "VServerGroupId": string;
        "HealthCheck": string;
        "ListenerPort": number;
        "Status": string;
        "XForwardedFor": string;
        "HealthCheckDomain": string;
        "HealthCheckInterval": number;
        "BackendServerPort": number;
    }>;
    /**
    * 调用DeleteDomainExtension删除扩展域名。
    */ DeleteDomainExtension(query: {
        /**
        * 负载均衡示例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要删除的扩展域名ID。
        * @example `de-bp1rp7ta191dv`
        */ "DomainExtensionId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RemoveBackendServers移除后端服务器。
    */ RemoveBackendServers(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-east-hangzhou-01`
        */ "RegionId"?: string;
        /**
        * 要移除的后端服务器。
        * > 一次调用最多可以移除20个后端服务器。
        * @example `[{"ServerId":"i-2zej4lxhjoq1icue6kup","Weight":"100"},{"ServerId":"i-2ze1u9ywulp5pbvvc7hv","Weight":"100"}]`
        */ "BackendServers": string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1qjwo61pqz3ahl*****`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
        "LoadBalancerId": string;
        "BackendServers": {
            "BackendServer": {
                "ServerId": string;
                "Weight": number;
            }[];
        };
    }>;
    /**
    * 调用SetLoadBalancerHTTPListenerAttribute修改HTTP监听的配置。
    */ SetLoadBalancerHTTPListenerAttribute(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1qjwo61pqz3ahltv0mw`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * * **1-5120**（Mbps）：对于按带宽计费的公网负载均衡实例，可以设置每个监听的带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。详情参见[共享实例带宽](~~57846~~)。
        * @example `-1`
        */ "Bandwidth"?: number;
        /**
        * 是否通过**X-Forwarded-For**获取客户端请求的真实IP。
        * 取值：**on（默认值）| off**。
        * @example `on`
        */ "XForwardedFor"?: string;
        /**
        * 调度算法。取值：
        * * **wrr**：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
        * * **lc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。
        *  当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
        * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
        * @example `wrr`
        */ "Scheduler"?: string;
        /**
        * 是否开启会话保持。
        * 取值：**on|off**。
        * @example `on`
        */ "StickySession"?: string;
        /**
        * cookie的处理方式。取值：
        * * **insert**：植入Cookie。
        *  客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP/HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
        * * **server**：重写Cookie。
        *
        *  负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
        *
        * > 当**StickySession**的值为**on**时，必须指定该参数。
        * @example `on`
        */ "StickySessionType"?: string;
        /**
        * Cookie超时时间。
        * 取值：**1-86400**（秒）
        * 当**StickySession**为**on**且**StickySessionType**为**insert**时，该参数必选。
        * @example `500`
        */ "CookieTimeout"?: number;
        /**
        * 服务器上配置的Cookie。
        * 长度为**1-200**，只能包含ASCII英文字母和数字字符，不能包含逗号、分号或空格，也不能以$开头。
        *
        * 当**StickySession**为**on**且**StickySessionType**为**server**时，该参数必选。
        * @example `B490B5EBF6F3CD402E515D22BCDA1598`
        */ "Cookie"?: string;
        /**
        * 是否开启健康检查。
        * 取值：**on|off**。
        * @example `on`
        */ "HealthCheck"?: string;
        "HealthCheckType"?: string;
        "HealthCheckMethod"?: string;
        /**
        * 用于健康检查的域名，取值：
        *
        * * **$_ip**： 后端服务器的私网IP。当指定了$_ip或HealthCheckDomain未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
        * * **domain**：域名长度为1-80字符，只能包含字母、数字、点号（.）和连字符（-）。
        * @example `$_ip`
        */ "HealthCheckDomain"?: string;
        /**
        * 用于健康检查的URI。
        * @example `/test/index.html`
        */ "HealthCheckURI"?: string;
        /**
        * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
        * 取值：**2-10**。
        * @example `4`
        */ "HealthyThreshold"?: number;
        /**
        * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
        * 取值：**2-10**。
        * @example `4`
        */ "UnhealthyThreshold"?: number;
        /**
        * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。
        * 取值：**1-300**（秒）。
        * > 如果**HealthCHeckTimeout**的值小于**HealthCheckInterval**的值，则**HealthCHeckTimeout**无效，超时时间为**HealthCheckInterval**的值。
        * @example `3`
        */ "HealthCheckTimeout"?: number;
        /**
        * 健康检查的时间间隔。
        * 取值：**1-50**（秒）。
        * @example `5`
        */ "HealthCheckInterval"?: number;
        /**
        * 健康检查使用的端口。
        * 取值：**1-65535**。
        * > 当**HealthCheck**值为**on**时才会有效。
        * @example `8080`
        */ "HealthCheckConnectPort"?: number;
        /**
        * 健康检查正常的HTTP状态码，多个状态码用逗号（,）分割。
        * 取值：**http_2xx|http_3xx |http_4xx|http_5xx**。
        * @example `http_2xx,http_3xx`
        */ "HealthCheckHttpCode"?: string;
        "MaxConnection"?: number;
        "access_key_id"?: string;
        /**
        * 是否使用虚拟服务器组。
        * 取值：**on|off**。
        * @example `on`
        */ "VServerGroup"?: string;
        /**
        * 服务器组ID。
        * @example `rsp-cige6j5e7p`
        */ "VServerGroupId"?: string;
        "Tags"?: string;
        /**
        * 是否通过`SLB-IP`头字段获取客户端请求的真实IP。
        * 取值：**on | off**（默认值）。
        * > 该参数如果不设置，则配置为默认值。
        * @example `on`
        */ "XForwardedFor_SLBIP"?: string;
        /**
        * 是否通过`SLB-ID`头字段获取负载均衡实例ID。
        * 取值：**on | off**（默认值）。
        * 该参数如果不设置，则配置为默认值。
        * @example `on`
        */ "XForwardedFor_SLBID"?: string;
        /**
        * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。
        * 取值：**on | off**（默认值）。
        * 该参数如果不设置，则配置为默认值。
        * @example `on`
        */ "XForwardedFor_proto"?: string;
        /**
        * 是否开启Gzip压缩，对特定文件类型进行压缩。
        * @example `on`
        */ "Gzip"?: string;
        /**
        * 监听绑定的访问策略组ID。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `123`
        */ "AclId"?: string;
        /**
        * 访问控制类型：
        * * **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
        * 设置白名单存在一定业务风险。
        *  一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
        *
        *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听不会转发请求。
        * * **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
        *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `white`
        */ "AclType"?: string;
        /**
        * 是否开启访问控制功能。
        * 取值：**on | off**。
        * @example `off`
        */ "AclStatus"?: string;
        "VpcIds"?: string;
        /**
        * 指定连接空闲超时时间，取值范围为1-60秒，默认值为15秒。
        * 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立新的连接。
        * @example `12`
        */ "IdleTimeout"?: number;
        /**
        * 指定请求超时时间，取值范围为1-180秒，默认值为60秒。
        * 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回HTTP 504错误码。
        * @example `3`
        */ "RequestTimeout"?: number;
        /**
        * 设置监听的描述信息。
        * @example `test`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateLoadBalancerTCPListener创建TCP监听。
    */ CreateLoadBalancerTCPListener(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 监听的带宽峰值。取值：**-1|1-5120**。
        * * **-1**：对于按流量计费的公网负载均衡实例，可以将带宽峰值设置为**-1**，即不限制带宽峰值。
        * * **1-5120**（Mbps）： 对于按带宽计费的公网负载均衡实例，可以设置每个监听的带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。详情参见[共享实例带宽](~~57846~~)。
        * @example `-1`
        */ "Bandwidth": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1b6c719dfa08ex******`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * 负载均衡实例后端使用的端口。
        * 取值：**1-65535**。
        * 如果不使用服务器组（不指定VServerGroupId），则该参数必选。
        * @example `80`
        */ "BackendServerPort"?: number;
        /**
        * 调度算法。取值：
        * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
        * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
        * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
        * * **sch**：基于源IP地址的一致性hash，相同的源地址会调度到相同的后端服务器。
        * * **tch**：基于四元组的一致性hash（源IP+目的IP+源端口+目的端口），相同的流会调度到相同的后端服务器。
        * 一致性哈希（CH）算法目前仅支持以下地域：
        * * 日本（东京）
        *
        * * 澳大利亚（悉尼）
        *
        * * 马来西亚（吉隆坡）
        *
        * * 印度尼西亚（雅加达）
        *
        * * 德国（法兰克福）
        *
        * * 美国（硅谷）
        *
        * * 美国（弗吉利亚）
        *
        * * 阿联酋（迪拜）
        *
        * * 华北5（呼和浩特）
        * * 英国（伦敦）
        * * 新加坡B、C可用区
        * * 香港
        * * 华北1（青岛）
        * *  华北3（张家口）
        * *  西南1（成都）
        * * 华东（杭州）I、H可用区
        * * 华北2（北京）G、H可用区
        * * 华南（深圳）D、E可用区
        * *  华东2（上海）F、G可用区
        * @example `wrr`
        */ "Scheduler"?: string;
        /**
        * 会话保持的超时时间。
        * 取值：**0-3600**（秒）。
        * 默认值：**0**，表示关闭会话保持。
        * @example `0`
        */ "PersistenceTimeout"?: number;
        /**
        * 连接超时时间。
        * 取值：**10-900**（秒）。
        * @example `500`
        */ "EstablishedTimeout"?: number;
        /**
        * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
        * 取值: **2-10**。
        * @example `4`
        */ "HealthyThreshold"?: number;
        /**
        * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
        * 取值：**2-10**。
        * @example `4`
        */ "UnhealthyThreshold"?: number;
        /**
        * 每次健康检查响应的最大超时时间。
        * 取值：**1-300**（秒）
        * 默认值：5。
        * @example `100`
        */ "HealthCheckConnectTimeout"?: number;
        /**
        * 健康检查使用的端口。取值：**1-65535**。
        * 不设置此参数时，表示使用后端服务端口（BackendServerPort）。
        * > 在**HealthCheck**值为**on**的时候才会有效。
        * @example `80`
        */ "HealthCheckConnectPort"?: number;
        /**
        * 健康检查的时间间隔。
        * 取值:**1-50**（秒）。
        * @example `3`
        */ "healthCheckInterval"?: number;
        /**
        * 用于健康检查的域名。取值：
        * * **$_ip**： 后端服务器的私网IP。当指定了IP或该参数未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
        * * **domain**：域名长度为1-80，只能包含字母、数字、点号（.）和连字符（-）。
        * @example `$_ip`
        */ "HealthCheckDomain"?: string;
        /**
        * 用于健康检查的URI。
        * 当TCP监听需要使用HTTP健康检查时可配置此参数，如不配置则按TCP健康检查。
        * @example `/test/index.html`
        */ "HealthCheckURI"?: string;
        /**
        * 健康检查正常的HTTP状态码，多个状态码用逗号（,）分割。
        * 取值：**http_2xx（默认值） | http_3xx | http_4xx | http_5xx**。
        * @example `http_2xx,http_3xx`
        */ "HealthCheckHttpCode"?: string;
        "HealthCheckMethod"?: string;
        /**
        * 健康检查类型。
        * 取值：**tcp（默认值） | http**。
        * @example `tcp`
        */ "HealthCheckType"?: string;
        "MaxConnection"?: number;
        "access_key_id"?: string;
        /**
        * 服务器组ID。
        * @example `rsp-cige6j*****`
        */ "VServerGroupId"?: string;
        /**
        * 主备服务器组ID。
        * > 服务器组ID和主备服务器组ID只能选择一个。
        * @example `rsp-0bfucw*****`
        */ "MasterSlaveServerGroupId"?: string;
        "Tags"?: string;
        /**
        * 监听绑定的访问策略组ID。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `1323`
        */ "AclId"?: string;
        /**
        *
        * 访问控制类型：
        * * **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
        * 设置白名单存在一定业务风险。
        *
        *  一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
        *
        *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * * **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
        *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `black`
        */ "AclType"?: string;
        /**
        * 是否开启访问控制功能。
        * 取值：**on | off**（默认值）。
        * @example `off`
        */ "AclStatus"?: string;
        "VpcIds"?: string;
        /**
        * 设置监听的描述信息。
        * 长度限制为1-80个字符，允许包含字母、数字、“-”、“/”、“.”和“_”等字符。支持中文描述。
        * @example `创建监听。`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RemoveVServerGroupBackendServers从指定的后端服务器组中移除后端服务器。
    */ RemoveVServerGroupBackendServers(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 服务器组ID。
        * @example `rsp-cige6j5e7p`
        */ "VServerGroupId": string;
        /**
        * 服务器组列表。
        * 单次调用每个服务器组最多可包含20个后端服务器。
        * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
        */ "BackendServers": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
        "VServerGroupId": string;
        "BackendServers": {
            "BackendServer": {
                "ServerId": string;
                "Port": string;
                "Weight": string;
                "Type": string;
            };
        };
    }>;
    /**
    * 调用CreateMasterSlaveServerGroup创建主备服务器组。一组主备服务器组只能包含两个ECS实例，一个为主服务器，另一个为备服务器。
    */ CreateMasterSlaveServerGroup(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1hv944r69al4j9jkmvx`
        */ "LoadBalancerId": string;
        /**
        * 主备服务器组列表。
        * 一个主备服务器组最多可包含2个后端服务器。
        * 如果不指定该参数，则创建一个空的主备服务器组列表。
        * @example `[{'ServerId':'vm-233','Port':'80','Weight':'100','ServerType':'Master'},{'ServerId':'vm-232','Port':'90','Weight':'100''ServerType':'Slave'}]`
        */ "MasterSlaveBackendServers"?: string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 主备虚拟服务器组名称。
        * @example `Group1`
        */ "MasterSlaveServerGroupName"?: string;
    }): Promise<{
        "CreateMasterSlaveServerGroup": {
            "RequestId": string;
            "MasterSlaveServerGroupId": string;
            "MasterSlaveBackendServers": {
                "MasterSlaveBackendServers": {
                    "ServerId": string;
                    "Port": string;
                    "Weight": string;
                    "ServerType": string;
                }[];
            };
        };
    }>;
    /**
    * 调用ModifyLoadBalancerInternetSpec修改公网负载均衡实例的计费方式。
    */ ModifyLoadBalancerInternetSpec(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1b6c719dfa08exfuca5`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * - paybybandwidth：按带宽计费。
        * @example `paybytraffic`
        */ "InternetChargeType"?: string;
        /**
        * 按固定带宽计费方式的公网类型实例的带宽峰值。
        * 实例中的监听共享该带宽，详情参见[共享实例带宽](~~57846~~)。
        * 取值：1~5000 Mbps（各地域的带宽峰值会有不同）。
        * >按流量计费的实例不需要指定该参数（即**InternetChargeType**为**paybytraffic**）。
        * @example `10`
        */ "Bandwidth"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 是否是自动支付预付费公网实例的账单。
        * 取值：**true|false（默认）**。
        * @example `false`
        */ "AutoPay"?: boolean;
        "Ratio"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateLoadBalancerHTTPListener创建HTTP监听。
    */ CreateLoadBalancerHTTPListener(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1~65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 是否开启会话保持。
        * 取值：**on | off**。
        * @example `off`
        */ "StickySession": string;
        /**
        * 是否开启健康检查。
        * 取值：**on | off**。
        * @example `on`
        */ "HealthCheck": string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1c9vixxjh92q83tw*****`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * 监听的带宽峰值，取值：
        * * **-1**：不限制带宽峰值。
        * * **1-5120**：监听的带宽峰值，所有监听的带宽峰值之和不能超过实例的带宽峰值。
        * > 该参数只适用于国内站。
        * @example `-1`
        */ "Bandwidth"?: number;
        /**
        * 负载均衡实例后端使用的端口。
        * 取值：**1~65535**。
        * > 如果不使用服务器组（不指定VServerGroupId参数），则该参数必选。
        * @example `80`
        */ "BackendServerPort"?: number;
        /**
        * 是否开启通过X-Forwarded-For头字段获取来访者真实 IP。默认值为**on**。
        * 取值：**on | off**。
        * @example `on`
        */ "XForwardedFor"?: string;
        /**
        * 调度算法。取值：
        * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
        * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
        * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
        * @example `wrr`
        */ "Scheduler"?: string;
        /**
        * cookie的处理方式。取值：
        * * **insert**：植入Cookie。
        *     客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP/HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
        * * **server**：重写Cookie。
        *  负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
        *     > 当**StickySession**的值为**on**时，必须指定该参数。
        * @example `on`
        */ "StickySessionType"?: string;
        /**
        * Cookie超时时间。
        * 取值：**1~86400**（秒）。
        * > 当**StickySession**为**on**且**StickySessionType**为**insert**时，该参数必选。
        * @example `500`
        */ "CookieTimeout"?: number;
        /**
        * 服务器上配置的Cookie。
        * 长度为1~200个字符，只能包含ASCII英文字母和数字字符，不能包含逗号、分号或空格，也不能以$开头。
        * 当**StickySession**为**on**且**StickySessionType**为**server**时，该参数必选。
        * @example `B490B5EBF6F3CD402E515D22BCDA1598`
        */ "Cookie"?: string;
        "HealthCheckType"?: string;
        "HealthCheckMethod"?: string;
        "HealthCheckHttpVersion"?: string;
        /**
        * 用于健康检查的域名，取值：
        * * **$_ip**： 后端服务器的私网IP。当指定了IP或该参数未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
        * * **domain**：域名长度为1-80字符，只能包含字母、数字、点号（.）和连字符（-）。
        * @example `$_ip`
        */ "HealthCheckDomain"?: string;
        /**
        * 用于健康检查的URI。
        * @example `/test/index.html`
        */ "HealthCheckURI"?: string;
        /**
        * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
        * 取值：**2~10**。
        * @example `4`
        */ "HealthyThreshold"?: number;
        /**
        * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
        * 取值：**2~10**。
        * @example `4`
        */ "UnhealthyThreshold"?: number;
        /**
        * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。
        * 取值：**1~300**（秒）。
        * > 如果**HealthCHeckTimeout**的值小于**HealthCheckInterval**的值，则**HealthCHeckTimeout**无效，超时时间为**HealthCheckInterval**的值。
        * @example `3`
        */ "HealthCheckTimeout"?: number;
        /**
        * 健康检查的后端服务器的端口。
        * 取值： **1~65535**。
        * > 在**HealthCheck**值为**on**时才会有效。
        * @example `80`
        */ "HealthCheckConnectPort"?: number;
        /**
        * 健康检查的时间间隔。
        * 取值： **1-50**（秒）。
        * @example `5`
        */ "HealthCheckInterval"?: number;
        /**
        * 健康检查正常的HTTP状态码，多个状态码用逗号分隔。默认值为**http_2xx**。
        * 取值：**http_2xx | http_3xx | http_4xx | http_5xx**。
        * @example `http_2xx,http_3xx`
        */ "HealthCheckHttpCode"?: string;
        "MaxConnection"?: number;
        "access_key_id"?: string;
        /**
        * 服务器组ID。
        * @example `rsp-cige6j*****`
        */ "VServerGroupId"?: string;
        "Tags"?: string;
        /**
        * 是否通过`SLB-IP`头字段获取客户端请求的真实IP。
        * 取值：**on | off**（默认值）。
        * @example `on`
        */ "XForwardedFor_SLBIP"?: string;
        /**
        * 是否通过`SLB-ID`头字段获取负载均衡实例ID。
        * 取值：**on | off**（默认值）。
        * @example `on`
        */ "XForwardedFor_SLBID"?: string;
        /**
        * 是否通过`X-Forwarded-Proto`头字段获取负载均衡实例的监听协议。
        * 取值：**on | off**（默认值）。
        * @example `on`
        */ "XForwardedFor_proto"?: string;
        /**
        * 是否开启Gzip压缩，对特定文件类型进行压缩。默认值为**on**。
        * 取值：**on | off**。
        * @example `on`
        */ "Gzip"?: string;
        /**
        * 监听绑定的访问策略组ID。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `123`
        */ "AclId"?: string;
        /**
        * 访问控制类型：
        * * **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
        * 设置白名单存在一定业务风险。
        *  一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
        *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听不会转发请求。
        * * **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
        *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `white`
        */ "AclType"?: string;
        /**
        * 是否开启访问控制功能。
        * 取值：**on | off**（默认值）。
        * @example `off`
        */ "AclStatus"?: string;
        "VpcIds"?: string;
        /**
        * 设置监听的描述信息。
        *
        * 长度限制为1-80个字符，允许包含字母、数字、“-”、“/”、“.”和“_”等字符。支持中文描述。
        * @example `监听说明`
        */ "Description"?: string;
        /**
        * 是否开启HTTP至HTTPS的转发。
        * 取值：**on | off**。
        * @example `off`
        */ "ListenerForward"?: string;
        /**
        * HTTP至HTTPS的监听转发端口。
        * @example `443`
        */ "ForwardPort"?: number;
        /**
        * 指定连接空闲超时时间，取值范围为1-60秒，默认值为15秒。
        * 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立新的连接。
        * @example `3`
        */ "IdleTimeout"?: number;
        /**
        * 指定请求超时时间，取值范围为1-180秒，默认值为60秒。
        * 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回` HTTP 504 `错误码。
        * @example `6`
        */ "RequestTimeout"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateLoadBalancerHTTPSListener创建HTTPS监听。
    */ CreateLoadBalancerHTTPSListener(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 监听的带宽峰值。
        * 取值：**-1 | 1-5120**。
        * * **-1**：对于按流量计费的公网负载均衡实例，可以将带宽峰值设置为**-1**，即不限制带宽峰值。
        *
        * * **1-5120**(Mbps)： 对于按带宽计费的公网负载均衡实例，可以设置每个监听的带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。详情参见[共享实例带宽](~~57846~~)。
        * @example `-1`
        */ "Bandwidth": number;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 是否开启会话保持。
        * 取值：**on | off**。
        * @example `on`
        */ "StickySession": string;
        /**
        * 是否开启健康检查。
        * 取值：**on | off**。
        * @example `on`
        */ "HealthCheck": string;
        /**
        * 服务器证书的ID。
        * @example `idkp-123-cn-test-01`
        */ "ServerCertificateId": string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1o94dp5i6earr9g6d1l`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * 负载均衡实例后端使用的端口，取值：**1-65535**。
        * 如果不使用服务器组（不指定VServerGroupId），则该参数必选。
        * @example `80`
        */ "BackendServerPort"?: number;
        "BackendProtocol"?: string;
        /**
        * 是否通过`X-Forwarded-For`获取客户端请求的真实IP。
        * 取值：**on** （默认值） **| off**。
        * @example `on`
        */ "XForwardedFor"?: string;
        /**
        * 调度算法。取值：
        * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
        * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
        * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
        * @example `wrr`
        */ "Scheduler"?: string;
        /**
        * Cookie的处理方式。当StickySession的值为**on**时，必须指定该参数。
        * 取值：**insert | server**。
        * * **insert**：植入Cookie。
        *  客户端第一次访问时，负载均衡会在返回请求中植入Cookie（即在HTTP/HTTPS响应报文中插入SERVERID），下次客户端携带此Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器上。
        * * **server**：重写Cookie。
        *  负载均衡发现用户自定义了Cookie，将会对原来的Cookie进行重写，下次客户端携带新的Cookie访问，负载均衡服务会将请求定向转发给之前记录到的后端服务器。
        * @example `on`
        */ "StickySessionType"?: string;
        /**
        * Cookie超时时间。
        * 取值：**1-86400**（秒）。
        * 当**StickySession**为**on**且**StickySessionType**为**insert**时，该参数必选。
        * @example `500`
        */ "CookieTimeout"?: number;
        /**
        * 服务器上配置的Cookie。
        * 长度为1-200，只能包含ASCII英文字母和数字字符，不能包含逗号、分号或空格，也不能以$开头。
        * 当**StickySession**为**on**且**StickySessionType**为**server**时，该参数必选。
        * @example `B490B5EBF6F3CD402E515D22BCDA1598`
        */ "Cookie"?: string;
        "HealthCheckType"?: string;
        "HealthCheckMethod"?: string;
        "HealthCheckHttpVersion"?: string;
        /**
        * 用于健康检查的域名。取值：
        * **$_ip**： 后端服务器的私网IP。当指定了IP或该参数未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
        *
        *
        * **domain**：域名长度为1~80，只能包含字母、数字、点号（.）和连字符（-）。
        * @example `$_ip`
        */ "HealthCheckDomain"?: string;
        /**
        * 用于健康检查的URI。
        * @example `/test/index.html`
        */ "HealthCheckURI"?: string;
        /**
        * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
        * 取值：**2-10**。
        * @example `4`
        */ "HealthyThreshold"?: number;
        /**
        * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
        * 取值：**2-10**。
        * @example `4`
        */ "UnhealthyThreshold"?: number;
        /**
        * 接收来自运行状况检查的响应需要等待的时间。如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。
        * 取值：**1-300**（秒）。
        * > 如果**HealthCHeckTimeout**的值小于**HealthCheckInterval**的值，则**HealthCHeckTimeout**无效，超时时间为**HealthCheckInterval**的值。
        * @example `3`
        */ "HealthCheckTimeout"?: number;
        /**
        * 健康检查使用的端口。
        * 取值：**1-65535**。
        * > 当**HealthCheck**值为**on**时才会有效。
        *
        * @example `8080`
        */ "HealthCheckConnectPort"?: number;
        /**
        * 健康检查的时间间隔。
        * 取值：**1-50**（秒）。
        * @example `5`
        */ "HealthCheckInterval"?: number;
        /**
        * 健康检查正常的HTTP状态码，多个状态码用逗号（,）分割。默认值为**http_2xx**。
        * 取值：**http_2xx | http_3xx | http_4xx | http_5xx**。
        * @example `http_2xx,http_3xx`
        */ "HealthCheckHttpCode"?: string;
        "MaxConnection"?: number;
        "access_key_id"?: string;
        /**
        * 服务器组ID。
        * @example `rsp-cige6j5e7p`
        */ "VServerGroupId"?: string;
        /**
        * CA证书ID。
        * 若既上传CA证书又上传服务器证书，即采用双向认证。
        * 若用户只上传服务器证书，即为单向认证。
        * @example `139a00604ad-cn-east-hangzhou-01`
        */ "CACertificateId"?: string;
        "Tags"?: string;
        /**
        * 是否通过SLB-IP头字段获取来访者真实IP。
        * 取值：**on |off **（默认值）。
        * @example `on`
        */ "XForwardedFor_SLBIP"?: string;
        /**
        * 是否通过SLB-ID头字段获取SLB实例ID。
        * 取值：**on | off**（默认值）。
        * @example `on`
        */ "XForwardedFor_SLBID"?: string;
        /**
        * 是否通过X-Forwarded-Proto头字段获取SLB的监听协议。
        * 取值：**on | off**（默认值）。
        * @example `on`
        */ "XForwardedFor_proto"?: string;
        /**
        * 是否开启Gzip压缩，对特定文件类型进行压缩。
        * 取值：**on**（默认值）**| off**。
        * @example `on`
        */ "Gzip"?: string;
        /**
        * 监听绑定的访问策略组ID。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `123`
        */ "AclId"?: string;
        /**
        * 访问控制类型：
        * * **white**： 仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
        * 设置白名单存在一定业务风险。
        *  一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
        *
        *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听不会转发请求。
        * * **black**： 来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
        * 如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `white`
        */ "AclType"?: string;
        /**
        * 是否开启访问控制功能。
        * 取值：**on | off**（默认值）。
        * @example `off`
        */ "AclStatus"?: string;
        "VpcIds"?: string;
        /**
        * 设置监听的描述信息。
        * 长度限制为1-80个字符，允许包含字母、数字、“-”、“/”、“.”和“_”等字符。支持中文描述。
        * @example `创建监听`
        */ "Description"?: string;
        /**
        * 指定连接空闲超时时间，取值范围为1-60秒，默认值为15秒。
        * 在超时时间内一直没有访问请求，负载均衡会暂时中断当前连接，直到一下次请求来临时重新建立新的连接。
        * @example `12`
        */ "IdleTimeout"?: number;
        /**
        * 指定请求超时时间，取值范围为1-180秒，默认值为60秒。
        * 在超时时间内后端服务器一直没有响应，负载均衡将放弃等待，给客户端返回HTTP 504错误码。
        * @example `23`
        */ "RequestTimeout"?: number;
        /**
        * 是否开启HTTP/2特性。
        * 取值：**on**（默认值）**|off**。
        * @example `off`
        */ "EnableHttp2"?: string;
        /**
        * 只有性能保障型实例才可以指定TLSCipherPolicy参数，每种policy定义了一种安全策略，安全策略包含HTTPS可选的TLS协议版本和配套的加密算法套件。
        * 目前支持以下四种安全策略，详细区别请参见TLS安全策略差异说明，请根据实际情况选择对应的policy。
        * * **tls_cipher_policy_1_0**：
        *  * 支持TLS版本： TLSv1.0、TLSv1.1和TLSv1.2。
        *  * 支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
        * * **tls_cipher_policy_1_1**：
        *  * 支持TLS版本： TLSv1.1和TLSv1.2。
        *  * 支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
        * * **tls_cipher_policy_1_2**
        *  * 支持TLS版本：TLSv1.2。
        *  * 支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、AES128-GCM-SHA256、AES256-GCM-SHA384、AES128-SHA256、AES256-SHA256、ECDHE-RSA-AES128-SHA、ECDHE-RSA-AES256-SHA、AES128-SHA、AES256-SHA和DES-CBC3-SHA。
        * * **tls_cipher_policy_1_2_strict**
        *  * 支持TLS版本：TLSv1.2。
        *  * 支持加密算法套件：ECDHE-RSA-AES128-GCM-SHA256、ECDHE-RSA-AES256-GCM-SHA384、ECDHE-RSA-AES128-SHA256、ECDHE-RSA-AES256-SHA384、ECDHE-RSA-AES128-SHA和ECDHE-RSA-AES256-SHA。
        * @example `tls_cipher_policy_1_1`
        */ "TLSCipherPolicy"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用StartLoadBalancerListener启动监听。
    */ StartLoadBalancerListener(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp13jaf5qli5xmgl1miup`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        /**
        * 负载均衡实例前端使用的协议。
        * > 相同端口存在不同协议监听时，此字段必填。
        * @example `https`
        */ "ListenerProtocol"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用SetLoadBalancerStatus设置负载均衡实例的状态。
    */ SetLoadBalancerStatus(query: {
        /**
        * 负载均衡实例的地域ID。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例状态。取值：**active|inactive**。
        * * active（默认值）
        *
        *  当负载均衡实例的状态为active时，实例中的监听可以根据规则转发接收的流量。
        *  实例创建后的状态默认为**active**。
        *
        * * inactive
        *  当负载均衡实例的状态为**inactive**时，实例中的监听不会再转发接收的流量。
        * > 当一个实例下的所有监听都被删除后，实例状态会被自动改为**inactive**。
        * @example `active`
        */ "LoadBalancerStatus": string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1b6c719dfa08exfuca5`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateLoadBalancerUDPListener创建UDP监听。
    */ CreateLoadBalancerUDPListener(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * * **1-5120**（Mbps）：对于按带宽计费的公网负载均衡实例，可以设置每个监听的带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。详情参见[共享实例带宽](~~57846~~)。
        * @example `34`
        */ "Bandwidth": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1ygod3yctvg1y7******`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * 负载均衡实例后端使用的端口，取值：**1-65535**。
        * 如果不使用服务器组（不指定VServerGroupId），则该参数必选。
        * @example `80`
        */ "BackendServerPort"?: number;
        /**
        * 调度算法。取值：
        * * **wrr**（默认值）：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
        * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
        * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
        * * **sch**：基于源IP地址的一致性hash，相同的源地址会调度到相同的后端服务器。
        * * **tch**：基于四元组的一致性hash（源IP+目的IP+源端口+目的端口），相同的流会调度到相同的后端服务器。
        * * **qch**：基于QUIC Connection ID一致性hash，相同的QUIC Connection ID会调度到相同的后端服务器。
        * > 仅有性能保障型实例支持 sch、 tch和qch一致性hash算法。
        * 一致性哈希（CH）算法目前仅支持以下地域：
        * * 日本（东京）
        *
        * * 澳大利亚（悉尼）
        *
        * * 马来西亚（吉隆坡）
        *
        * * 印度尼西亚（雅加达）
        *
        * * 德国（法兰克福）
        *
        * * 美国（硅谷）
        *
        * * 美国（弗吉利亚）
        *
        * * 阿联酋（迪拜）
        *
        * * 华北5（呼和浩特）
        * * 英国（伦敦）
        * * 新加坡B、C可用区
        * * 香港
        * * 华北1（青岛）
        * *  华北3（张家口）
        * *  西南1（成都）
        * * 华东（杭州）I、H可用区
        * * 华北2（北京）G、H可用区
        * * 华南（深圳）D、E可用区
        * *  华东2（上海）F、G可用区
        * @example `wrr`
        */ "Scheduler"?: string;
        "PersistenceTimeout"?: number;
        /**
        * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
        * 取值：**2-10**。
        * @example `4`
        */ "HealthyThreshold"?: number;
        /**
        * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
        * 取值：**2-10**。
        * @example `4`
        */ "UnhealthyThreshold"?: number;
        /**
        * 接收来自运行状况检查的响应需要等待的时间。
        * 如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。
        * 取值：**1-300**（秒）。
        * @example `100`
        */ "HealthCheckConnectTimeout"?: number;
        /**
        * 健康检查使用的端口。取值：**1-65535**
        * 不设置此参数时，表示使用后端服务端口（**BackendServerPort**）。
        * > 在**HealthCheck**值为**on**时才会有效。
        * @example `80`
        */ "HealthCheckConnectPort"?: number;
        /**
        * 健康检查的时间间隔。
        * 取值：**1-50**（秒）。
        * @example `3`
        */ "healthCheckInterval"?: number;
        /**
        * UDP监听健康检查的请求串，只允许包含字母、数字字符，最大长度限制为500字符。
        * @example `hello`
        */ "healthCheckReq"?: string;
        /**
        * UDP监听健康检查的响应串，只允许包含字母、数字字符，最大长度限制为500字符。
        * @example `ok`
        */ "healthCheckExp"?: string;
        "MaxConnection"?: number;
        "access_key_id"?: string;
        /**
        * 服务器组ID。
        * @example `rsp-cige6j****8`
        */ "VServerGroupId"?: string;
        /**
        * 主备服务器组ID。
        * > 服务器组ID和主备服务器组ID只能选择一个。
        * @example `rsp-0bfucwu****`
        */ "MasterSlaveServerGroupId"?: string;
        "Tags"?: string;
        /**
        * 监听绑定的访问策略组ID。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `123`
        */ "AclId"?: string;
        /**
        * 访问控制类型：
        * * **white**：仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
        * 设置白名单存在一定业务风险。
        *   一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
        *
        *    如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听不会转发请求。
        * * **black**：来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
        *   如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `white`
        */ "AclType"?: string;
        /**
        * 是否开启访问控制功能。
        * 取值：**on|off**（默认值）。
        * @example `off`
        */ "AclStatus"?: string;
        "VpcIds"?: string;
        /**
        * 设置监听的描述信息。
        * 长度限制为1-80个字符，允许包含字母、数字、“-”、“/”、“.”和“_”等字符。支持中文描述。
        * @example `test`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeTags查询标签列表。
    */ DescribeTags(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        /**
        * 负载均衡实例ID。
        * @example `139a00604ad-cn-east-hangzhou-01`
        */ "LoadBalancerId"?: string;
        /**
        * 要查询的标签列表。
        * @example `[{"TagKey":"Key1","TagValue":"Value1"}{"TagKey":"Key2","TagValue":"Value2"}]`
        */ "Tags"?: string;
        /**
        * 是否为DistinctKey。
        * 取值：**true|false**。
        * @example `false`
        */ "DistinctKey"?: boolean;
        /**
        * 单页结果数量，接口默认50，最大100。
        * @example `50`
        */ "PageSize"?: number;
        /**
        * 实例列表页码，起始值1，默认值1。
        * @example `1`
        */ "PageNumber"?: number;
    }): Promise<{
        "RequestId": string;
        "TagSets": {
            "TagSet": {
                "TagKey": string;
                "TagValue": string;
            }[];
            "PageNumber": number;
            "PageSize": number;
            "TotalCount": number;
        };
    }>;
    /**
    * 调用DescribeMasterSlaveServerGroupAttribute查询指定主备服务器组的详细信息。
    */ DescribeMasterSlaveServerGroupAttribute(query: {
        /**
        * 负载均衡实例的地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 主备服务器组ID。
        * @example `rsp-cige6j5e7p`
        */ "MasterSlaveServerGroupId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLoadBalancerAttribute查询指定负载均衡实例的详细信息。
    */ DescribeLoadBalancerAttribute(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1b6c719dfa08exfuca5`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        "IncludeReservedData"?: boolean;
    }): Promise<{
        "CreateTimeStamp": number;
        "RegionIdAlias": string;
        "BackendServers": {
            "BackendServer": {
                "ServerId": string;
                "Weight": number;
                "Type": string;
            }[];
        };
        "HasReservedInfo": string;
        "ListenerPorts": {
            "ListenerPort": any[];
        };
        "InternetChargeType": string;
        "VSwitchId": string;
        "VpcId": string;
        "SlaveZoneId": string;
        "LoadBalancerSpec": string;
        "NetworkType": string;
        "ListenerPortsAndProtocol": {
            "ListenerPortAndProtocol": any[];
        };
        "PayType": string;
        "Bandwidth": number;
        "LoadBalancerName": string;
        "ResourceGroupId": string;
        "AddressIPVersion": string;
        "LoadBalancerId": string;
        "EndTimeStamp": number;
        "MasterZoneId": string;
        "ListenerPortsAndProtocal": {
            "ListenerPortAndProtocal": any[];
        };
        "Address": string;
        "RegionId": string;
        "RequestId": string;
        "CreateTime": string;
        "AddressType": string;
        "EndTime": string;
        "LoadBalancerStatus": string;
    }>;
    /**
    * 调用SetVServerGroupAttribute修改虚拟服务器组的配置。
    */ SetVServerGroupAttribute(query: {
        /**
        * 负载均衡地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 服务器组ID。
        * @example `rsp-cige6j5e7p`
        */ "VServerGroupId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 虚拟服务器组名称。
        * @example `Group1`
        */ "VServerGroupName"?: string;
        /**
        * 虚拟服务器组列表。
        * 单次调用最多可添加20个后端服务器。
        * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
        */ "BackendServers"?: string;
    }): Promise<{}>;
    /**
    * 调用SetLoadBalancerTCPListenerAttribute修改TCP监听的配置。
    */ SetLoadBalancerTCPListenerAttribute(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1ygod3yctvg1y7wezms`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        /**
        * 监听的带宽峰值。取值：**-1 | 1-5120**。
        * * **-1**：对于按流量计费的公网负载均衡实例，可以将带宽峰值设置为**-1**，即不限制带宽峰值。
        * * **1-5120Mbps**：对于按带宽计费的公网负载均衡实例，可以设置每个监听的带宽峰值，但所有监听的带宽峰值之和不能超过实例的带宽峰值。详情参见[共享实例带宽](~~57846~~)。
        *
        * @example `43`
        */ "Bandwidth"?: number;
        /**
        * 调度算法。取值：
        * * **wrr**：权重值越高的后端服务器，被轮询到的次数（概率）也越高。
        * * **wlc**：除了根据每台后端服务器设定的权重值来进行轮询，同时还考虑后端服务器的实际负载（即连接数）。当权重值相同时，当前连接数越小的后端服务器被轮询到的次数（概率）也越高。
        * * **rr**：按照访问顺序依次将外部请求依序分发到后端服务器。
        * * **sch**：基于源IP地址的一致性hash，相同的源地址会调度到相同的后端服务器。
        * * **tch**：基于四元组的一致性hash（源IP+目的IP+源端口+目的端口），相同的流会调度到相同的后端服务器。
        * > 仅有性能保障型实例支持sch和tch一致性hash算法。
        * @example `wrr`
        */ "Scheduler"?: string;
        /**
        * 会话保持的超时时间。取值：**0-3600**（秒）。
        * 默认值：**0**，表示关闭会话保持。
        * @example `0`
        */ "PersistenceTimeout"?: number;
        /**
        * 连接超时时间。
        * 取值：**10-900**（秒）。
        * @example `500`
        */ "EstablishedTimeout"?: number;
        /**
        * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**fail**判定为**success**。
        * 取值：**2-10**。
        * @example `4`
        */ "HealthyThreshold"?: number;
        /**
        * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**success**判定为**fail**。
        * 取值：**2-10**。
        * @example `4`
        */ "UnhealthyThreshold"?: number;
        /**
        * 接收来自运行状况检查的响应需要等待的时间。
        * 如果后端ECS在指定的时间内没有正确响应，则判定为健康检查失败。
        * 取值：**1-300**（秒）。
        * > 如果**HealthCheckConnectTimeout**的值小于**HealthCheckInterval**的值，则**HCTimeout**无效，超时时间为**HealthCheckInterval**的值。
        * @example `100`
        */ "HealthCheckConnectTimeout"?: number;
        /**
        * 健康检查使用的端口。取值：**1-65535**。
        * 不设置此参数时，表示使用后端服务端口（**BackendServerPort**）。
        * > 在**HealthCheck**值为**on**时才会有效。
        * @example `8080`
        */ "HealthCheckConnectPort"?: number;
        /**
        * 健康检查的时间间隔。取值：**1-50**（秒）。
        * @example `5`
        */ "HealthCheckInterval"?: number;
        /**
        * 用于健康检查的域名。当TCP监听需要使用HTTP健康检查时可配置此参数，如不配置则按TCP健康检查。
        * * **$_ip**：后端服务器的私网IP。
        *  当指定了IP或该参数未指定时，负载均衡会使用各后端服务器的私网IP当做健康检查使用的域名。
        * * **domain**：域名长度为1~80，只能包含字母、数字、点号（.）和连字符（-）。
        * @example `$_ip`
        */ "HealthCheckDomain"?: string;
        /**
        * 用于健康检查的URI。
        * 当TCP监听需要使用HTTP健康检查时，可配置此参数。
        * 如不配置，则按TCP健康检查。
        * @example `/test/index.html`
        */ "HealthCheckURI"?: string;
        /**
        * 健康检查正常的HTTP状态码，多个状态码用逗号（,）分割。
        * 取值：**http_2xx | http_3xx | http_4xx | http_5xx**。
        * @example `http_2xx,http_3xx`
        */ "HealthCheckHttpCode"?: string;
        /**
        * 健康检查类型。
        * 取值：**tcp | http**。
        * @example `tcp`
        */ "HealthCheckType"?: string;
        "HealthCheckMethod"?: string;
        /**
        * 是否开启SynProxy，SynProxy是负载均衡的攻击防护功能。
        * 建议用户一般情况下不要调整这个参数，由负载均衡控制。
        * 取值：**enable | disable**。
        * @example `enable`
        */ "SynProxy"?: string;
        "MaxConnection"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 是否使用虚拟服务器组。
        * 取值：**on | off**。
        * **VserverGroup**和**MasterSlaveServerGroup**只允许一个值为**on**。
        * @example `on`
        */ "VServerGroup"?: string;
        /**
        * 虚拟服务器组ID。
        * @example `rsp-cige6j5*****`
        */ "VServerGroupId"?: string;
        /**
        * 主备服务器组ID。
        * > 服务器组ID和主备服务器组ID只能选择一个。
        * @example `rsp-cige******`
        */ "MasterSlaveServerGroupId"?: string;
        /**
        * 是否使用主备服务器组。
        * 取值：**on | off**。
        * **VserverGroup**和**MasterSlaveServerGroup**只允许一个值为**on**。
        * @example `on`
        */ "MasterSlaveServerGroup"?: string;
        /**
        * 监听绑定的访问策略组ID。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `12333`
        */ "AclId"?: string;
        /**
        * 访问控制类型：
        * * **white**：仅转发来自所选访问控制策略组中设置的IP地址或地址段的请求，白名单适用于应用只允许特定IP访问的场景。
        * 设置白名单存在一定业务风险。
        *  一旦设置白名单，就只有白名单中的IP可以访问负载均衡监听。
        *
        *  如果开启了白名单访问，但访问策略组中没有添加任何IP，则负载均衡监听不会转发请求。
        * * **black**：来自所选访问控制策略组中设置的IP地址或地址段的所有请求都不会转发，黑名单适用于应用只限制某些特定IP访问的场景。
        *  如果开启了黑名单访问，但访问策略组中没有添加任何IP，则负载均衡监听会转发全部请求。
        * 当**AclStatus**参数的值为**on**时，该参数必选。
        * @example `white`
        */ "AclType"?: string;
        /**
        * 是否开启访问控制功能。
        * 取值：**on | off**。
        * @example `off`
        */ "AclStatus"?: string;
        "VpcIds"?: string;
        /**
        * TCP监听描述。
        * @example `test`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeLoadBalancerHTTPListenerAttribute查询HTTP监听配置。
    */ DescribeLoadBalancerHTTPListenerAttribute(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1~65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1o94dp5i6earr9g6d1l-cn-east-hangzhou-01`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "ForwardPort": number;
        "ListenerPort": number;
        "Status": string;
        "RequestId": string;
        "ListenerForward": string;
    }>;
    /**
    * 调用SetListenerAccessControlStatus是否开启指定监听的白名单访问控制。
    */ SetListenerAccessControlStatus(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1-65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 是否开启访问控制。取值：
        * - **open_white_list**：开启白名单访问控制。
        * - **close**：关闭白名单访问控制。
        * > 如果开启访问控制后，没有设置白名单则无法访问负载均衡服务。
        * @example `open_white_list`
        */ "AccessControlStatus": string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-8vb86hxixo8lvsja86jaz`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "ListenerProtocol"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeAccessControlListAttribute查询访问控制策略组的配置。
    */ DescribeAccessControlListAttribute(query: {
        /**
        * 访问控制策略组的地域ID。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 要查询的访问控制策略组ID。
        * @example `acl-bp1l0kk4gxce43kzet04s`
        */ "AclId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        /**
        * 访问控制策略组的条目的备注信息。
        * @example `test`
        */ "AclEntryComment"?: string;
    }): Promise<{
        "AclId": string;
        "RelatedListeners": {
            "RelatedListener": {
                "AclType": string;
                "LoadBalancerId": string;
                "Protocol": string;
                "ListenerPort": number;
            }[];
        };
        "AclName": string;
        "RequestId": string;
        "AddressIPVersion": string;
    }>;
    /**
    * 调用DescribeListenerAccessControlAttribute查询监听的白名单配置。
    */ DescribeListenerAccessControlAttribute(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以从[地域和可用区](~~40654~~)列表或通过调用[DescribeRegions](~~25609~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例前端使用的端口。
        * 取值：**1~65535**。
        * @example `80`
        */ "ListenerPort": number;
        /**
        * 负载均衡实例的ID。
        * @example `lb-8vb86hxixo8lvsja86jaz`
        */ "LoadBalancerId": string;
        "OwnerId"?: number;
        "ListenerProtocol"?: string;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
        "AccessControlStatus": string;
        "SourceItems": string;
    }>;
    /**
    * 调用DeleteCACertificate删除CA证书。
    */ DeleteCACertificate(query: {
        /**
        * CA证书的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * CA证书ID。
        * @example `123157908xxxxxxx_15c73d77203_-986300114_-2110544xxx`
        */ "CACertificateId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateRules为指定的HTTP或HTTPS监听添加转发规则。
    */ CreateRules(query: {
        /**
        * 负载均衡实例的地域ID。
        * 您可以通过调用**DescribeRegions**接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例ID。
        * @example `lb-bp1ca0zt07t934wxezyxo`
        */ "LoadBalancerId": string;
        /**
        * 负载均衡实例前端使用的监听端口。
        * 取值范围：**1~65535**。
        * @example `443`
        */ "ListenerPort": number;
        /**
        * 要添加的转发规则。一次请求中，最多可添加10条转发规则。每条转发规则包含以下参数：
        * - **RuleName**（必选）：String类型。转发规则名称，长度限制为1~40，只能使用字母、数字和-/._这些字符。同一个监听内不同规则的名称必须唯一。
        * - **Domain**（可选）： String类型。转发规则关联的请求域名。
        * - **Url**（可选）：String类型，可选，访问路径，长度限制为1~80，只能使用字母、数字和-/.%?#&amp;这些字符。
        * - **VServerGroupId**（必选）：String类型。该转发规则的目标虚拟服务器组ID。
        * Domain和Url两者必须指定一个，也可以同时指定。Domain和Url的组合在同一个监听内必须唯一。
        * @example `[{"RuleName":"Rule2","Domain":"test.com","VServerGroupId":"rsp-bp114nimo4kl9"}]`
        */ "RuleList": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        "ListenerProtocol"?: string;
    }): Promise<{
        "RequestId": string;
        "Rules": {
            "Rule": {
                "RuleId": string;
                "RuleName": string;
            }[];
        };
    }>;
    /**
    * 调用AddBackendServers添加后端服务器。
    */ AddBackendServers(query: {
        /**
        * 负载均衡实例的ID。
        * 您可以通过调用[DescribeRegions](~~27584~~)获取地域ID。
        * @example `cn-beijing`
        */ "RegionId"?: string;
        /**
        * 负载均衡实例ID。
        * @example `lb-2ze7o5h52g02kkzz******`
        */ "LoadBalancerId": string;
        /**
        * @example `123456`
        */ "OwnerId"?: number;
        /**
        * 要添加的后端服务器列表。
        * 服务器组列表需要包含以下参数：
        * - ServerId：ECS实例ID。
        * - Weight：后端服务器的权重，取值：0~100。默认值为100。如果值为0，则不会将请求转发给该后端服务器。
        * - Type：后端服务器类型，取值：
        *     - ecs: ECS实例（默认）
        *
        *     - eni：弹性网卡实例
        * > * 后端服务器（ECS实例）必须是运行中才可以加入负载均衡实例，每次调用最多可添加20个后端服务器。
        * * 只有性能保障型实例支持添加eni类型的后端服务器。
        * @example `[{   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.1" }, {   "ServerId": "eni-xxxxxxxxx",   "Weight": "100",   "Type": "eni",   "ServerIp": "192.168.11.2" }]`
        */ "BackendServers"?: string;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
        "BackendServers": {
            "BackendServer": {
                "ServerId": string;
                "Weight": number;
                "Type": string;
            }[];
        };
        "LoadBalancerId": string;
    }>;
    /**
    * 调用DescribeAvailableResource查询某个Region的可用区支持的资源售卖情况。
    */ DescribeAvailableResource(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        /**
        * 网络类型。
        * 取值：**vpc|classic-internet|classic-intranet**。
        * @example `vpc`
        */ "AddressType"?: string;
        /**
        * IP地址类型。
        * 取值：**ipv4|ipv6**。
        * @example `ipv4`
        */ "AddressIPVersion"?: string;
    }): Promise<{
        "RequestId": string;
        "AvailableResources": {
            "AvailableResource": {
                "SupportResources": {
                    "SupportResource": {
                        "AddressIPVersion": string;
                        "AddressType": string;
                    }[];
                };
                "SlaveZoneId": string;
                "MasterZoneId": string;
            }[];
        };
    }>;
    /**
    * 调用SetLoadBalancerDeleteProtection设置实例删除保护状态。
    */ SetLoadBalancerDeleteProtection(query: {
        /**
        * 负载均衡实例的地域。
        * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 负载均衡实例的ID。
        * @example `lb-bp1b6c719dfa08e*****`
        */ "LoadBalancerId": string;
        /**
        * 负载均衡删除保护状态。
        * 取值：**on|off**。
        * @example `off`
        */ "DeleteProtection": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    DescribeMasterSlaveVServerGroupAttribute(query: {
        "RegionId": string;
        "MasterSlaveVServerGroupId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{}>;
    DeleteMasterSlaveVServerGroup(query: {
        "RegionId": string;
        "MasterSlaveVServerGroupId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{}>;
    CreateMasterSlaveVServerGroup(query: {
        "RegionId": string;
        "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
        "MasterSlaveVServerGroupName"?: string;
        "MasterSlaveBackendServers"?: string;
    }): Promise<{}>;
    DescribeMasterSlaveVServerGroups(query: {
        "RegionId": string;
        "LoadBalancerId": string;
        "OwnerId"?: number;
        "access_key_id"?: string;
        "Tags"?: string;
    }): Promise<{}>;
}
export default SLB;
