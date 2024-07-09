export interface DescribeOfficeSitesResponse {
    /**
     * 下一个查询开始的Token。NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 办公网络信息集合。
     */
    OfficeSites: {
        /**
         * 办公网络状态。
         * @example `REGISTERED`
         */
        Status: string;
        /**
         * 办公网络创建时间。
         * @example `2021-05-06T05:58Z`
         */
        CreationTime: string;
        /**
         * 安全办公网络VPC ID。
         * @example `vpc-uf6tz5k67puge5jn8****`
         */
        VpcId: string;
        /**
         * VPC的使用方式。
         * @example `Basic`
         */
        VpcType: string;
        /**
         * 是否为使用云电脑的用户赋予本地管理员权限。
         * @example `true`
         */
        EnableAdminAccess: boolean;
        /**
         * 是否开启办公网络内云电脑互通。开启后，同一个办公网络内的云电脑之间可以实现相互访问彼此的网络。
         * @example `false`
         */
        EnableCrossDesktopAccess: boolean;
        /**
         * VPC连接云电脑时所使用的终端节点。
         * @example `http://ep-bp1s2vmbj55r5rzc****.epsrv-bp1pcfhpwvlpny01****.cn-hangzhou.privatelink.aliyuncs.com`
         */
        DesktopVpcEndpoint: string;
        /**
         * 连接云电脑时允许使用的接入方式。
         * > VPC连接方式依赖于阿里云私网连接PrivateLink服务，该服务不收取费用。该参数设置为`VPC`或者`Any`时，系统将自动为您开通私网连接服务。
         * @example `INTERNET`
         */
        DesktopAccessType: string;
        /**
         * 企业AD的域名称。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 是否开启单点登录SSO。
         * @example `false`
         */
        SsoEnabled: boolean;
        /**
         * 办公网络VPC所包含的IPv4网段。
         * @example `47.100.XX.XX`
         */
        CidrBlock: string;
        /**
         * 公网带宽峰值。可能值：0~1000。
         * 如果为空或0，则表示没有开通互联网访问。
         * @example `10`
         */
        Bandwidth: number;
        /**
         * > 该参数暂未开放使用。
         * @example `To be hidden.`
         */
        TrustPassword: string;
        /**
         * 办公网络名称。同一地域下，该名称唯一。
         * @example `test`
         */
        Name: string;
        /**
         * 是否已开通公网访问功能。
         * @example `false`
         */
        EnableInternetAccess: boolean;
        /**
         * 域管理员的用户密码。
         * @example `testPassword`
         */
        DomainPassword: string;
        /**
         * 安全组ID。
         * @example `sg-bp1ce64o4g9mdf5u****`
         */
        CustomSecurityGroupId: string;
        /**
         * 对接AD域中的组织单元。
         * @example `example.com/Domain Controllers`
         */
        OuName: string;
        /**
         * 域管理员的用户名。
         * @example `Administrator`
         */
        DomainUserName: string;
        /**
         * AD子域DNS的用户名。
         * @example `testSubDnsUserName`
         */
        SubDomainName: string;
        /**
         * 办公网络ID。
         * @example `cn-hangzhou+dir-363353****`
         */
        OfficeSiteId: string;
        /**
         * 云企业网实例ID。
         * @example `cen-3gwy16dojz1m65****`
         */
        CenId: string;
        /**
         * 云企业网CEN的状态。
         * @example `attached`
         */
        CenAttachStatus: string;
        /**
         * 是否开启多因素认证MFA。
         * @example `false`
         */
        MfaEnabled: boolean;
        /**
         * 互联网访问包ID。
         * @example `np-amtp8e8q1o9e4****`
         */
        NetworkPackageId: string;
        /**
         * DNS用户名。
         * @example `testDnsUserName	`
         */
        DnsUserName: string;
        /**
         * 办公网络账号体系类型。
         * @example `AD_CONNECTOR`
         */
        OfficeSiteType: string;
        /**
         * AD Connector的信息集合。
         */
        ADConnectors: {
            /**
             * AD Connector的状态。
             * @example `RUNNING`
             */
            ConnectorStatus: string;
            /**
             * AD Connector所在网络对应的交换机ID。
             * @example `vsw-bp19ocz3erfx15uon****`
             */
            VSwitchId: string;
            /**
             * AD Connector的连接地址。
             * @example `172.24.*.*`
             */
            ADConnectorAddress: string;
            /**
             * 配置AD信任关系时设置的信任密码。
             * @example `password123***`
             */
            TrustKey: string;
            /**
             * AD Connector挂载的网卡ID。
             * @example `eni-bp1i4wx78lgosrj6****`
             */
            NetworkInterfaceId: string;
            /**
             * AD Connector规格。
             * @example `1`
             */
            Specification: string;
        }[];
        /**
         * 注册日志信息。
         */
        Logs: {
            /**
             * 日志信息对应的步骤。
             * @example `CREATE_CONNECTOR`
             */
            Step: string;
            /**
             * 日志详细信息。
             * @example `code:success | message:Create Connector complete`
             */
            Message: string;
            /**
             * 日志打印时间。
             * @example `2021-05-12T09:42Z`
             */
            TimeStamp: string;
            /**
             * 日志级别。
             * @example `INFO`
             */
            Level: string;
        }[];
        /**
         * 交换机ID数组。
         */
        VSwitchIds: string[];
        /**
         * NAS文件系统ID数组。
         */
        FileSystemIds: string[];
        /**
         * AD子域的DNS地址数组。
         */
        SubDnsAddress: string[];
        /**
         * AD域对应的DNS地址数组。
         */
        DnsAddress: string[];
        /**
         * 仅适用于便捷账号办公网络，表示登录时是否需要二次验证。如果开启了登录二次验证，则便捷用户登录客户端时，系统将检测登录账号是否有安全风险。如果有风险，系统将发送验证码到该账号关联的邮箱，便捷用户使用验证码验证通过后才能登录客户端。
         * @example `false`
         */
        NeedVerifyLoginRisk: boolean;
        /**
         * 已创建的云电脑数量。
         * @example `1`
         */
        DesktopCount: number;
        /**
         * 云电脑数量。
         * @example `0`
         */
        TotalEdsCount: number;
        /**
         * 云电脑池里的池化云电脑数量。
         * @example `0`
         */
        TotalEdsCountForGroup: number;
        /**
         * 是否开启可信设备校验。
         * @example `true`
         */
        NeedVerifyZeroDevice: boolean;
        /**
         * 是否为云盒办公网络。
         * @example `true`
         */
        CloudBoxOfficeSite: boolean;
        /**
         * SSO类型。
         * @example `SAML`
         */
        SsoType: string;
        /**
         * 协议类型。
         * @example `ASP`
         */
        ProtocolType: string;
        /**
         * 域控主机名。
         * 必须符合Windows主机命名规范。
         * @example `beijing-ad01`
         */
        AdHostname: string;
        /**
         * RDS许可证的状态。
         * @example `2`
         */
        RdsLicenseStatus: string;
        /**
         * RDS许可证的IP地址。
         * @example `47.100.XX.XX`
         */
        RdsLicenseAddress: string;
        /**
         * RDS许可证所在的域名称。
         * @example `example.com`
         */
        RdsLicenseDomainName: string;
        /**
         * 备用域控DNS地址。
         * @example `172.24.XX.XX`
         */
        BackupDns: string;
        /**
         * 备用域控主机名。
         * @example `beijing-ad02`
         */
        BackupDCHostname: string;
        /**
         * 是否开启云服务路由访问管控。
         * @example `false`
         */
        EnableServiceRoute: boolean;
        SubnetMode: string;
    }[];
}
