interface ConfigLayer4RuleRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 传入要操作的Listeners的JSON数组串，每个Listener的具体结构描述如下。
    * - **InstanceId**，String类型，必选，实例ID。
    * - **Protocol**，String类型，必选，协议类型。
    * - **FrontendPort**，Integer类型，必选，前端使用的端口，取值范围：0-65535。
    * - **BackendPort**，Integer类型，必选，后端使用的端口，取值范围：0-65535。
    * - **RealServers**，Json数组类型，必选，源站IP地址。
    * @example `[{"InstanceId":"xxxxxx-xxxxxx-xxxxxx-xxxxxxx","Protocol":"tcp","FrontendPort":80,"BackendPort":5,"RealServers":"1.1.1.1","2.2.2.2"}]`
    */ "Listeners": string;
}
export { ConfigLayer4RuleRequest };