export interface CreateEaiEcsRequest {
    /**
     * 幂等参数，保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~364379~~)查看最新的阿里云地域列表。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * 弹性加速计算实例的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://或https://开头。可以包含数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `eais-test01`
     */
    "EaisName"?: string;
    /**
     * ECS实例参数对象。
     */
    "Ecs"?: {
        /**
         * ECS实例使用的镜像ID。
         * @example `aliyun_2_1903_x64_20G_alibase_20200324.vhd`
         */
        ImageId: string;
        /**
         * ECS实例公网入带宽最大值，单位为Mbit/s。取值范围：
         * - 当所购公网出带宽小于等于10 Mbit/s时：1~10，默认为10。
         * - 当所购公网出带宽大于10 Mbit/s时：1~`InternetMaxBandwidthOut`的取值，默认为`InternetMaxBandwidthOut`的取值。
         * @example `10`
         */
        InternetMaxBandwidthIn: string;
        /**
         * ECS实例公网出带宽最大值，单位为Mbit/s。取值范围：0~100。
         * 默认值：0。
         * @example `10`
         */
        InternetMaxBandwidthOut: string;
        /**
         * ECS实例名称。长度为2~128个字符，必须以大小字母或中文开头，不能以http://或https://开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
         * @example `test1`
         */
        Name: string;
        /**
         * ECS实例密码。长度为8~30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：`()~!@#$%^&*-_+=|{}[]:;'<>,.?/`。
         * @example `EcsV587!`
         */
        Password: string;
        /**
         * ECS实例系统盘的云盘种类。取值范围：
         * - cloud_efficiency：高效云盘。
         * - cloud_ssd：SSD云盘。
         * - cloud_essd：ESSD云盘。
         * - cloud：普通云盘。
         * - cloud_auto：ESSD AutoPL云盘。
         * 已停售的实例规格且非I/O优化实例默认值为cloud，否则默认值为cloud_efficiency。
         * @example `cloud_ssd`
         */
        SystemDiskCategory: string;
        /**
         * ECS实例系统盘大小，单位为GiB。取值范围：20~500。
         * 该参数的取值必须大于或者等于max{20, `ImageSize`}。
         * 默认值：max{40, `ImageId`对应的镜像大小}。
         * @example `40`
         */
        SystemDiskSize: number;
        /**
         * ECS实例的资源规格。
         * @example `ecs.g7.4xlarge`
         */
        Type: string;
        /**
         * ECS实例所属的可用区ID。
         * @example `cn-shenzhen-e`
         */
        ZoneId: string;
    };
    /**
     * EAIS实例的规格。取值范围：
     * - eais.ei-a6.4xlarge
     * - eais.ei-a6.2xlarge
     * - eais.ei-a6.xlarge
     * - eais.ei-a6.large
     * @example `eais.ei-a6.2xlarge`
     */
    "EaisType": string;
    /**
     * 实例所属的虚拟交换机ID。
     * > 交换机网段内IP的个数决定了该交换机最大可支持创建的EAIS实例个数，请务必提前规划好网段设置。
     * @example `vsw-uf6h3rbwbm90urjwa****`
     */
    "VSwitchId": string;
    /**
     * 实例所属的安全组ID。
     * @example `sg-uf66jeqopgqa9hdn****`
     */
    "SecurityGroupId": string;
    /**
     * EAIS实例所属的资源组ID。
     * @example `rg-acfmvpuy4a5****`
     */
    "ResourceGroupId"?: string;
}
