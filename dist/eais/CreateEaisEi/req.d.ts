export interface CreateEaisEiRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~364379~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
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
     * 实例所属的虚拟交换机ID。
     * @example `vsw-bp17wmd1wb6fwlimk****`
     */
    "VSwitchId": string;
    /**
     * 实例所属的安全组ID。
     * @example `sg-bp16jgp51ttnkbdr****`
     */
    "SecurityGroupId": string;
    /**
     * EAIS实例的名称。长度为2~128个字符，支持Unicode中letter分类下的字符（其中包括英文、中文和数字等）。可以包含半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `test_ei`
     */
    "InstanceName"?: string;
    /**
     * 实例所属的资源组ID。
     * @example `rg-acfmvpuy4a5****`
     */
    "ResourceGroupId"?: string;
    /**
     * 幂等参数，保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
