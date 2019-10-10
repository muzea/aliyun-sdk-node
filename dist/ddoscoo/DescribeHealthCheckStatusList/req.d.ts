interface DescribeHealthCheckStatusListRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 要查询的转发规则Listeners数组（JSON字符串），每个Listener的具体结构描述如下：
    * - **InstanceId**，String类型，必选，实例ID。
    * - **Protocol**，String类型，必选，协议类型。
    * - **FrontendPort**，Integer类型，必选，前端使用的端口，取值范围：0-65535。
    * - **BackendPort**，Integer类型，可选，后端使用的端口，取值范围：0-65535。
    * - **RealServers**，Json数组类型，可选，源站IP地址。
    * - **IsAutoCreate**，Boolean类型，可选，是否自动创建。如果是，则不允许删除和修改。
    * @example `[{"InstanceId":"ddoscoo-cn-XXXXX","Protocol":"tcp","FrontendPort":80}]`
    */ "Listeners": string;
}
export { DescribeHealthCheckStatusListRequest };