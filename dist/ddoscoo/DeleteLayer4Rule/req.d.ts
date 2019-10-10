interface DeleteLayer4RuleRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 传入要操作的Listeners的JSON数组串，每个Listener的具体结构描述如下：
    * > 目前不支持批量删除，每次只允许删除一个对象。
    * - **InstanceId**，String类型，必选，实例ID。
    * - **Protocol**，String类型，必选，协议类型。
    * - **FrontendPort**，Integer类型，必选，前端使用的端口，取值范围：0-65535。
    * @example `{"InstanceId":"0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc","Protocol":"tcp","FrontendPort":80}`
    */ "Listeners": string;
}
export { DeleteLayer4RuleRequest };