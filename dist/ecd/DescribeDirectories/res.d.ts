export interface DescribeDirectoriesResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `F369A091-002F-49C8-AD55-02A776297C7B`
     */
    RequestId: string;
    /**
     * 目录信息列表。
     */
    Directories: {
        /**
         * 是否可上网。
         * > 该参数暂未开放使用。
         * @example `false`
         */
        EnableInternetAccess: boolean;
        /**
         * 交换机所属的VPC ID。仅当目录类型为AD办公网络时返回该参数。
         * @example `vpc-uf6tz5k67puge5jn8****`
         */
        VpcId: string;
        /**
         * 目录创建时间。
         * @example `2020-11-02T01:44Z`
         */
        CreationTime: string;
        /**
         * AD类型的目录状态。
         * @example `REGISTERING`
         */
        Status: string;
        /**
         * 域管理员的用户密码。仅当目录类型为AD办公网络时返回该参数。
         * @example `testPassword`
         */
        DomainPassword: string;
        /**
         * 是否为使用云电脑的用户赋予本地管理员权限。
         * @example `true`
         */
        EnableAdminAccess: boolean;
        /**
         * 企业已有AD子域的全限定域名（FQDN），即同时带有主机名和域名。
         * @example `child.example.com`
         */
        SubDomainName: string;
        /**
         * 域管理员的用户名。
         * @example `sAMAccountName`
         */
        DomainUserName: string;
        /**
         * 是否开通目录内云电脑互通功能。开启后，同一个目录内的云电脑之间可以实现相互访问彼此的网络。
         * @example `true`
         */
        EnableCrossDesktopAccess: boolean;
        /**
         * 安全组ID。仅当目录类型为AD办公网络时返回该参数。
         * @example `sg-bp1ce64o4g9mdf5u****`
         */
        CustomSecurityGroupId: string;
        /**
         * VPC连接云电脑时所使用的终端节点。
         * @example `http://ep-bp1s2vmbj55r5rzc****.epsrv-bp1pcfhpwvlpny01****.cn-hangzhou.privatelink.aliyuncs.com`
         */
        DesktopVpcEndpoint: string;
        /**
         * 是否开启SSO认证。
         * @example `false`
         */
        SsoEnabled: boolean;
        /**
         * 域名称。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 连接云电脑时允许使用的方式。
         * @example `Internet`
         */
        DesktopAccessType: string;
        /**
         * 是否开启多因素认证MFA。
         * @example `false`
         */
        MfaEnabled: boolean;
        /**
         * 目录类型。
         * @example `RAM`
         */
        DirectoryType: string;
        /**
         * DNS用户名。
         * @example `testDnsUserName`
         */
        DnsUserName: string;
        /**
         * AD信任密码。仅当目录类型为AD办公网络时返回该参数。
         * @example `82Tg****`
         */
        TrustPassword: string;
        /**
         * 指定云电脑加域时选择的组织单元。
         * @example `example.com/Domain Controllers`
         */
        OuName: string;
        /**
         * 目录名称。
         * @example `testDirectoryName`
         */
        Name: string;
        /**
         * 目录ID。
         * @example `cn-hangzhou+dir-gx2x1dhsmu52rd****`
         */
        DirectoryId: string;
        /**
         * AD连接器的信息。
         */
        ADConnectors: {
            /**
             * 连接状态。
             * @example `RUNNING`
             */
            ConnectorStatus: string;
            /**
             * AD连接器所在的交换机ID。
             * @example `vsw-bp19ocz3erfx15uon****`
             */
            VSwitchId: string;
            /**
             * 连接地址。
             * @example `172.17.XX.XX`
             */
            ADConnectorAddress: string;
            /**
             * AD域控信任密码。
             * @example `yfpoAD****`
             */
            TrustKey: string;
            /**
             * AD连接器挂载的网卡ID。
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
         * 注册日志信息列表。仅当目录类型为AD办公网络时返回该参数。
         */
        Logs: {
            /**
             * 日志对应的步骤。
             * @example `DescribeDirectories`
             */
            Step: string;
            /**
             * 日志详细信息。
             * @example `code:success | message:Create Connector complete.`
             */
            Message: string;
            /**
             * 日志打印时间。
             * @example `2021-01-22T06:45Z`
             */
            TimeStamp: string;
            /**
             * 日志级别。
             * @example `INFO`
             */
            Level: string;
        }[];
        /**
         * 目录创建时设置的交换机ID。
         */
        VSwitchIds: string[];
        /**
         * NAS文件系统ID。
         */
        FileSystemIds: string[];
        /**
         * AD子域的DNS地址。
         */
        SubDnsAddress: string[];
        /**
         * 目录的DNS地址。
         */
        DnsAddress: string[];
        /**
         * 登录是否需要二次验证。仅适用于便捷目录。
         * 如果开启了登录二次验证，则便捷用户登录客户端时，系统将检测登录账号是否有安全风险。如果有风险，系统将发送验证码到该账号关联的邮箱，便捷用户使用验证码验证通过后才能登录客户端。
         * @example `false`
         */
        NeedVerifyLoginRisk: boolean;
        AdHostname: string;
        BackupDns: string;
        BackupDCHostname: string;
    }[];
    /**
     * 域控主机名。必须符合Windows主机命名规范。仅当目录类型为AD办公网络时返回该参数。
     * @example `cnshsv21hmc****`
     */
    AdHostname: string;
}
