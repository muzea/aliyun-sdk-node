interface ModifyInstanceVpcAuthModeRequest {
    "RegionId"?: string;
    /**
    * VPC认证模式：
    * * Open（需要密码认证）
    * * Close（关闭密码认证，即VPC免密）
    * > 默认为Open。
    * @example `Close`
    */ "VpcAuthMode": string;
    "OwnerId"?: number;
    /**
    * 需要修改设置的实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
}
export { ModifyInstanceVpcAuthModeRequest };