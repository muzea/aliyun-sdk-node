export interface RunInstancesRequest {
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。长度为2~128个字符，必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。默认值为实例的InstanceId。
     * @example `instance`
     */
    "InstanceName"?: string;
    /**
     * 实例的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `cloudphone instance`
     */
    "Description"?: string;
    /**
     * 实例规格
     * @example `ecp.ce.large`
     */
    "InstanceType": string;
    /**
     * 镜像ID
     * @example `cpm-xxxx`
     */
    "ImageId": string;
    /**
     * 安全组ID，与ECS使用相同的安全组。
     * @example `sg-xxxxx`
     */
    "SecurityGroupId": string;
    /**
     * 虚拟交换机ID
     * @example `vsw-xxxx`
     */
    "VSwitchId": string;
    /**
     * EIP带宽值，取值范围1-200。设置此参数，将自动创建对应带宽的EIP实例，并将EIP实例绑定到云手机实例。实例释放时，此EIP实例会一起释放回收。
     * @example `2`
     */
    "EipBandwidth"?: number;
    /**
     * 云手机实例选用的分辨率，可通过DescribeInstanceTypes接口查询当前规格支持的分辨率列表，选择合适的分辨率。
     * @example `1920*1080`
     */
    "Resolution"?: string;
    /**
     * 指定创建ECS实例的数量。取值范围：1~100
     * 默认值：1
     * @example `10`
     */
    "Amount"?: number;
    /**
     * 云手机实例密钥对名称。可通过ImportKeyPair接口导入云手机密钥。
     * @example `keypair`
     */
    "KeyPairName"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见如何保证幂等性。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    "ClientToken"?: string;
    /**
     * 实例的付费方式。取值范围：
     * - PrePaid：包年包月
     * - PostPaid（默认）：按量付费
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 包年包月计费方式的时长单位。取值范围：
     * - Year
     * - Month（默认）
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否要自动续费。当参数InstanceChargeType取值PrePaid时才生效。取值范围：
     * - true：自动续费
     * - false（默认）：不自动续费
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 是否自动支付，默认为true
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 周期时长，默认1。
     * - PeriodUnit为Month时，支持1、2、3、6
     * - PeriodUnit为Year时，支持1、2、3、4、5
     * @example `1`
     */
    "Period"?: number;
    /**
     * 实例的标签集合。
     */
    "Tag"?: {
        /**
         * 实例的标签键。N的取值范围为1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例的标签值。N的取值范围为1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 云手机私网IP地址。云手机实例设置私网IP地址时，必须从虚拟交换机（VSwitchId）的空闲网段中选择。
     * 您需要注意：
     * 设置PrivateIpAddress后，Amount参数取值必须为1，表示为创建一台指定私网IP的云手机。
     * @example `192.168.157.224`
     */
    "PrivateIpAddress"?: string;
}
