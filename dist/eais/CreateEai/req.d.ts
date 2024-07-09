export interface CreateEaiRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~364379~~)查看最新的阿里云地域列表。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * EAIS实例的规格。取值范围：
     * - eais.ei-a6.4xlarge
     * - eais.ei-a6.2xlarge
     * - eais.ei-a6.xlarge
     * - eais.ei-a6.large
     * @example `eais.ei-a6.2xlarge`
     */
    "InstanceType": string;
    /**
     * 幂等参数，保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * EAIS 实例的名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `eais-test01`
     */
    "InstanceName"?: string;
    /**
     * 实例所属的安全组ID。
     * @example `sg-uf66jeqopgqa9hdn****`
     */
    "SecurityGroupId"?: string;
    /**
     * 实例所属的虚拟交换机ID。
     * > 交换机网段内IP的个数决定了该交换机最大可支持创建的EAIS实例个数，请务必提前规划好网段设置。
     * @example `vsw-uf6h3rbwbm90urjwa****`
     */
    "VSwitchId"?: string;
    /**
     * 实例所属的资源组ID。
     * @example `rg-acfmvpuy4a5****`
     */
    "ResourceGroupId"?: string;
    /**
     * EAIS实例镜像。默认使用EAIS内部镜像提供服务，用户也可以通过指定Image参数使用自己的镜像。自定义镜像使用限制如下：
     * - 必须是公网可下载的镜像。
     * - 只能选择使用1688、42000、50000端口。
     * - 建议镜像文件大小小于5 GB。
     * > 镜像太大可能会导致下载镜像的过程太长，造成创建超时失败。
     * @example `ubuntu:20.04`
     */
    "Image"?: string;
}
