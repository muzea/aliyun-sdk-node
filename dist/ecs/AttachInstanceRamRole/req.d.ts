export interface AttachInstanceRamRoleRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例RAM角色名称。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
     * @example `testRamRoleName`
     */
    "RamRoleName": string;
    /**
     * 实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `[“i-bp14ss25xca5ex1u****”, “i-bp154z5o1qjalfse****”, “i-bp10ws62o04ubhvi****”…]`
     */
    "InstanceIds": string;
    /**
     * 权限策略。长度为1~1024个字符。为一台或多台ECS实例授予实例RAM角色时，可以指定一个额外的权限策略，以进一步限制RAM角色的权限。更多信息，请参见[权限策略概览](~~93732~~)。
     * @example `{"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}`
     */
    "Policy"?: string;
}
