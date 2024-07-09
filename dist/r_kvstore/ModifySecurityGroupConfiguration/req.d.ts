export interface ModifySecurityGroupConfigurationRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "DBInstanceId": string;
    /**
     * 待设置的安全组ID。最多可传入10个，安全组ID之间用英文逗号（,）分隔。
     * > 将覆盖原设置，取值参考查询您创建的安全组的基本信息[DescribeSecurityGroups](https://next.api.aliyun.com/api/Ecs/2014-05-26/DescribeSecurityGroups)。
     * @example `sg-bpcfmyiu4ekp****`
     */
    "SecurityGroupId": string;
}
