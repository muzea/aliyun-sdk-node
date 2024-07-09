export interface DescribeInstanceAttributeResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `082FAB35-6AB9-4FD5-8750-D36673548E76`
     */
    RequestId: string;
    /**
     * 实例属性信息。
     */
    InstanceAttribute: {
        /**
         * 实例绑定的VPC ID。
         * @example `vpc-bp1c85tzgqu1bf5bxxxxx`
         */
        VpcId: string;
        /**
         * 实例绑定的交换机ID。
         * @example `vsw-bp1xfwzzfti0kjbfxxxxx`
         */
        VswitchId: string;
        /**
         * 备注信息。
         * @example `测试API`
         */
        Description: string;
        /**
         * 堡垒机实例的到期的时间戳。单位为毫秒。
         * @example `1578326400000`
         */
        ExpireTime: number;
        /**
         * 改密任务功能状态。
         * - **Enable**：开启
         * - **Disable**：关闭
         * @example `Enable`
         */
        ModifyPasswordModule: string;
        /**
         * 弹性网卡ID。
         * @example `eni-bp1455jrzwm7moaxxxxx`
         */
        EniInstanceId: string;
        /**
         * 实例ID。
         * @example `bastionhost-cn-78v1ghxxxxx`
         */
        InstanceId: string;
        /**
         * 公网域名。
         * @example `******lwb-public.bastionhost.aliyuncs.com`
         */
        InternetEndpoint: string;
        /**
         * 实例所在的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 内网域名。
         * @example `******xalwb.bastionhost.aliyuncs.com`
         */
        IntranetEndpoint: string;
        /**
         * 堡垒机实例的购买或续费的时间戳。单位为毫秒。
         * @example `1577681345000`
         */
        StartTime: number;
        /**
         * 实例所在的企业资源组的ID。
         * @example `rg-aekzc427db******`
         */
        ResourceGroupId: string;
        /**
         * 网络域代理状态。
         * - **Enable**：支持网络域代理模式。
         * - **Disable**：不支持网络域代理模式。
         * @example `Enable`
         */
        NetworkProxyModule: string;
        /**
         * Web Terminal状态。
         * - **Enable**：支持Web远程连接。
         * - **Disable**：不支持Web远程连接。
         * @example `Enable`
         */
        WebTerminalModule: string;
        /**
         * 数据库运维状态。
         * - **Enable**：支持数据库运维。
         * - **Disable**：不支持数据库运维。
         * @example `Disable`
         */
        DbOperationModule: string;
        /**
         * 实例状态。取值范围：
         * - **PENDING**：未初始化
         * - **CREATING**：创建中
         * - **RUNNING**：运行中
         * - **EXPIRED**：已过期
         * - **CREATE_FAILED**：创建失败
         * - **UPGRADING**：变配中
         * - **UPGRADE_FAILED**：变配失败
         * @example `RUNNING`
         */
        InstanceStatus: string;
        /**
         * 许可Code。
         * @example `bhah_ent_50_asset`
         */
        LicenseCode: string;
        /**
         * 公网是否可以访问该堡垒机实例。取值：
         * - **true**：公网可以访问该堡垒机
         * - **false**：公网不可访问该堡垒机
         * @example `true`
         */
        PublicNetworkAccess: boolean;
        /**
         * 已购买堡垒机的存储总量。单位：Byte
         * @example `2199023255552`
         */
        Storage: number;
        /**
         * 堡垒机运维端口。
         */
        Ports: {
            /**
             * 堡垒机标准端口。取值如下：
             * - **SSH** ：60022
             * - **RDP** ：63389
             * - **HTTPS** ：443
             * @example `60022`
             */
            StandardPort: number;
            /**
             * 用户自定义端口。
             * > 仅SSH、RDP支持修改 ，如果未自定义堡垒机运维端口，返回与标准端口一致。
             * @example `600xx`
             */
            CustomPort: number;
        }[];
        /**
         * 堡垒机公网出口IP列表。
         */
        PublicExportIps: string[];
        /**
         * 堡垒机公网白名单列表。
         */
        PublicWhiteList: string[];
        /**
         * 已授权的安全组ID列表。
         */
        AuthorizedSecurityGroups: string[];
        /**
         * 堡垒机内网出口IP列表。
         */
        PrivateExportIps: string[];
        /**
         * 堡垒机公网IP列表。
         */
        PublicIps: string[];
        /**
         * 实例所属安全组ID列表。
         */
        SecurityGroupIds: string[];
        /**
         * 内网白名单IP列表。
         */
        PrivateWhiteList: string[];
        /**
         * 堡垒机实例总带宽。
         * @example `30`
         */
        Bandwidth: string;
        /**
         * 堡垒机扩展带宽包。
         * @example `5`
         */
        BandwidthPackage: string;
    };
}
