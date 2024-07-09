export interface ModifySecurityGroupConfigurationRequest {
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * ECS安全组ID。
     * > - 1个实例最多可以绑定10个ECS安全组。
     * > - 您可以通过调用ECS的[DescribeSecurityGroup](~~25556~~)接口查询目标地域的安全组ID。
     * @example `sg-bpxxxxxxxx`
     */
    "SecurityGroupId": string;
}
