export interface ModifyServiceInstanceResourcesRequest {
    /**
     * 服务实例ID。
     * @example `si-d8a0cc2a1ee04dce****`
     */
    "ServiceInstanceId": string;
    /**
     * 服务实例资源的操作类型。可能的值：
     * - Import：导入。
     * - UnImport：取消导入。
     * @example `Import`
     */
    "ServiceInstanceResourcesAction"?: string;
    /**
     * 导入的资源。
     * @example `{
      "RegionId": "cn-hangzhou",
      "Type": "ResourceIds",
      "ResourceIds": {
        "ALIYUN::ECS::INSTANCE": ["i-xxx", "i-yyy"],
        "ALIYUN::RDS::INSTANCE": ["rm-xxx", "rm-yyy"],
        "ALIYUN::VPC::VPC": ["vpc-xxx", "vpc-yyy"],
        "ALIYUN::SLB::INSTANCE": ["lb-xxx", "lb-yyy"]
      }
    }`
     */
    "Resources"?: string;
}
