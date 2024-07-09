export interface CreateEaiJupyterRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~364379~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * EAIS实例的规格，仅支持设置为**eais.ei-a6.2xlarge**。
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
     * 幂等参数，保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 在EAIS实例初始化时设置一个或多个环境变量。
     */
    "EnvironmentVar"?: {
        /**
         * 环境变量名。长度为1~128位。格式要求：[0-9a-zA-Z]，以及下划线（_），不能以数字开头。
         * @example `MY_USER_NAME`
         */
        Key: string;
        /**
         * 环境变量值。长度为0~256位。
         * @example `test123`
         */
        Value: string;
    }[];
    /**
     * EAIS实例所属的资源组ID。
     * @example `rg-acfmvpuy4a5****`
     */
    "ResourceGroupId"?: string;
    /**
     * EAIS实例的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://或https://开头。可以包含数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `test`
     */
    "EaisName"?: string;
}
