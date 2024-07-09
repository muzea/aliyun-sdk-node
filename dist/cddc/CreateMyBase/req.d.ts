export interface CreateMyBaseRequest {
    /**
     * [地域ID](~~198326~~)。
     * @example `ap-southeast-1`
     */
    "RegionId": string;
    /**
     * 专属集群的名称。
     * @example `testDedicatedGroupName`
     */
    "DedicatedHostGroupDescription"?: string;
    /**
     * 数据库类型，取值：
     * - **alisql**。
     * - **tair**。
     * @example `alisql`
     */
    "Engine": string;
    /**
     * 安全组ID，可以指定多个安全组，多个安全组以英文逗号（,）分隔，传入格式为sg-t4neld965n89ocvt****,sg-t4neld965n89ocvu****。
     * @example `sg-t4neld965n89ocvt****,sg-t4neld965n89ocvu****`
     */
    "SecurityGroupId": string;
    /**
     * 可用区ID，您可以调用[DescribeRegions](~~214103~~)查看地域下的可用区ID。
     * @example `ap-southeast-1a`
     */
    "ZoneId": string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-t4ni3mzqqw98vt317****`
     */
    "VSwitchId": string;
    /**
     * ECS规格信息。
     * @example `[{"sysDiskCapacity":40,"instanceType":"ecs.d2s.10xlarge","nodeCount":1,"sysDiskType":"cloud_essd"}]`
     */
    "ECSClassList": {
        /**
         * 系统盘容量，单位为GB。
         * @example `40`
         */
        sysDiskCapacity: number;
        /**
         * ECS规格。
         * @example `ecs.c6.large`
         */
        instanceType: string;
        /**
         * ECS购买数量。
         * @example `1`
         */
        nodeCount: number;
        /**
         * 系统盘磁盘类型，取值：
         * - **cloud_essd**。
         * - **cloud_ssd**。
         * - **cloud_efficiency**。
         * - **cloud**。
         * @example `cloud_essd`
         */
        sysDiskType: string;
        /**
         * 数据盘类型，取值：
         * - **cloud_essd**。
         * - **cloud_ssd**。
         * - **cloud_efficiency**。
         * - **cloud**。
         * @example `cloud_essd`
         */
        diskType: string;
        /**
         * 数据盘容量。
         * @example `50`
         */
        diskCapacity: number;
        /**
         * 挂载数据盘个数。
         * @example `1`
         */
        diskCount: number;
        /**
         * 数据盘PL等级。
         * @example `PL1`
         */
        dataDiskPerformanceLevel: string;
        /**
         * 系统盘PL等级。
         * @example `PL1`
         */
        systemDiskPerformanceLevel: string;
        /**
         * 系统盘快照策略。
         * @example `sp-bp1i9wclcwpe52th****`
         */
        sysDiskAutoSnapshotPolicyId: string;
        /**
         * 系统盘是否加密，系统盘只有为ESSD云盘时才可以设置。
         * @example `false`
         */
        sysDiskEncrypted: boolean;
        /**
         * 系统盘使用的KMS密钥ID，使用ECS默认加密服务时不用传值，系统盘只有为ESSD云盘时才可以设置。
         * @example `b3c210f3-3ffb-480e-9ca2-****`
         */
        sysDiskKMSKeyId: string;
        /**
         * 数据盘快照策略。
         * @example `sp-bp1i9wclcwpe52th****`
         */
        dataDiskAutoSnapshotPolicyId: string;
        /**
         * 数据盘是否加密。
         * @example `false`
         */
        dataDiskEncrypted: boolean;
        /**
         * 数据盘使用的KMS密钥ID，使用ECS默认加密服务时不用传值。
         * @example `b3c210f3-3ffb-480e-9ca2-****`
         */
        dataDiskKMSKeyId: string;
    }[];
    /**
     * 付费类型，目前仅支持**PrePaid**。
     * @example `PrePaid`
     */
    "PayType": string;
    /**
     * 购买时长。
     * @example `1`
     */
    "Period"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `4ed77dd1-ff52-407e-ac58-dc251822****`
     */
    "ClientToken"?: string;
    /**
     * 是否开启自动续费，取值：
     * - **true**：开启。
     * - **false**（默认值）：关闭。
     * @example `false`
     */
    "AutoRenew"?: string;
    /**
     * 自定义镜像ID。
     * > 若您需要使用默认镜像，无需填写。
     * @example `m-8vb11a30rc63x37c****`
     */
    "ImageId"?: string;
    /**
     * 主机登录密码，可以稍后设置。密码须符合如下要求：
     * - 长度为8~30个字符。
     * - 必须至少包含三项：大写字母、小写字母、数字和特殊字符。
     * - 特殊符号`()\`~!@#$%^&*-_+=|{}[]:;'<>,.?/`
     * > - 如果需要稍后设置主机登录密码，此参数填写空字符串即可。
     * > - 如果需要设置主机登录密码，建议您使用HTTPS协议发送请求，避免密码泄露。
     * @example `Test123456`
     */
    "OsPassword"?: string;
    /**
     * 已有专有版专属集群ID。
     * @example `dhg-6dx5n9gjs96u****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 预付费类型，目前仅支持**Monthly**（包月）。
     * @example `Monthly`
     */
    "PeriodType"?: string;
    /**
     * 专有网络VPCID。
     * @example `vpc-t4nbtmekgxotv0d3y****`
     */
    "VpcId": string;
    /**
     * 密钥对名称。
     * @example `test_key_pair`
     */
    "KeyPairName"?: string;
    /**
     * 是否使用镜像的默认密码。
     * - **false**（默认值）：不使用
     * - **true**：使用
     * > 若使用镜像的默认密码，**OSPassword**参数无需填写。
     * @example `false`
     */
    "PasswordInherit"?: string;
    /**
     * Windows系统：长度为2～15个字符，允许使用大小写字母、数字。不能仅使用数字。
     * 其他操作系统（Linux等）：长度为2～64个字符，允许使用点号（.）分隔字符成多段，每段允许使用大小写字母、数字，但不能连续使用点号（.）。不能以点号（.）开头或结尾。
     * @example `LocalHostname`
     */
    "EcsHostName"?: string;
    /**
     * 实例名称。长度为2~128个字符，必须以大小写字母或中文开头，不能以http://和https://开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。默认值为实例的InstanceId。
     * @example `k8snode1`
     */
    "EcsInstanceName"?: string;
    /**
     * 云服务器部署集ID。
     * @example `ds-bp1brhwhoqinyjd6****`
     */
    "EcsDeploymentSetId"?: string;
    /**
     * 当创建多台实例时，是否为HostName和InstanceName自动添加有序后缀。有序后缀从001开始递增，最大不能超过999。取值说明：
     * - **true**：添加。
     * - **false**（默认值）：不添加。
     * 当HostName或InstanceName按照指定排序格式设置，未设置命名后缀name_suffix，即命名格式为name_prefix[begin_number,bits]时，UniqueSuffix不生效，名称仅按照指定顺序排序。
     * @example `false`
     */
    "EcsUniqueSuffix"?: string;
    /**
     * 网络计费类型。取值范围：
     * PayByBandwidth：按固定带宽计费。
     * PayByTraffic：按使用流量计费。
     * @example `PayByBandwidth`
     */
    "InternetChargeType"?: string;
    /**
     * 公网出带宽最大值，单位为Mbit/s。取值范围：0~100。
     * 默认值：0。设定为大于0时会自动创建公网IP。
     * @example `0`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 创建主机时，是否自动支付。
     * - **false**：只生成订单不扣费，需要在【我的订单】页面手动确认支付。
     * - **true**（默认值）：自动支付，请确保支付方式余额充足，否则会生成异常订单，只能作废订单。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 自定义数据是否采用Base64格式编码。
     * @example `true`
     */
    "UserDataInBase64"?: boolean;
    /**
     * 用户自定义脚本数据，原始数据最多为16KB。
     * @example `ZWNobyBoZWxsbyBlY3Mh`
     */
    "UserData"?: string;
    /**
     * 主机标签信息。
     */
    "Tags"?: {
        /**
         * 主机的标签键。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或 https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 主机的标签值。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或 https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
