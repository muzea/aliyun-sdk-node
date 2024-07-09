export interface CreateEaiEciRequest {
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
     * ECI实例参数对象。
     */
    "Eci"?: {
        /**
         * 容器参数对象。
         */
        Container: {
            /**
             * 容器启动命令对应的参数。最多10个。
             * @example `100`
             */
            Arg: string;
            /**
             * 容器启动命令。最多20个。每个命令最多包含256个字符。
             * @example `sleep`
             */
            Command: string;
            /**
             * 容器使用的镜像。
             * @example `nginx`
             */
            Image: string;
            /**
             * 容器名称。
             * @example `test1`
             */
            Name: string;
            /**
             * 容器挂载的数据卷。
             * @example `/mnt/eais=eais,/models=eais/models`
             */
            Volumes: string;
        };
        /**
         * ECI实例使用的弹性公网ID。
         * @example `eip-uf66jeqopgqa9hdn****`
         */
        EipId: string;
        /**
         * ECI实例名称。
         * @example `test-nginx`
         */
        Name: string;
        /**
         * ECI实例规格。
         * @example `ecs.c5.xlarge`
         */
        Type: string;
        /**
         * ECI实例挂载的数据卷。
         * @example `00c7****-rivj.cn-hangzhou.extreme.nas.aliyuncs.com:/share`
         */
        Volume: string;
    };
    /**
     * EAIS实例所属的资源组ID。
     * @example `rg-acfmvpuy4a5****`
     */
    "ResourceGroupId"?: string;
}
