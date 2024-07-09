export interface ModifySecurityGroupConfigurationRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * ECS安全组ID。最多支持关联10个安全组，多个安全组用英文逗号（,）隔开。清空ECS安全组请传入空字符串。您可以通过DescribeSecurityGroups查询ECS安全组ID。
     * @example `sg-****`
     */
    "SecurityGroupId": string;
}
