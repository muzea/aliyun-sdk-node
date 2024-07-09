export interface UpdateFlowRequest {
    /**
     * 已创建的流程名称。
     * @example `my_flow_name`
     */
    "Name": string;
    /**
     * 流程定义，遵循Flow Definition Language (FDL)语法标准。考虑到向前兼容，当系统支持两种规范的流程定义规范。
     * >
     * > 以上流程定义示例中Name：my_flow_name是指流程名称，需和入参Name保持一致
     * @example `旧版：
    "
    type: flow
    version: v1
    name: my_flow_name
    steps:
      - type: pass
        name: mypass
    "
    
    新版：
    "
    Type: StateMachine
    SpecVersion: v1
    Name: my_flow_name
    StartAt: my_state
    States:
      - Type: Pass
        Name: my_state
        End: true
    "`
     */
    "Definition"?: string;
    /**
     * 流程描述。
     * @example `my test flow`
     */
    "Description"?: string;
    /**
     * 流程类型，取值：**FDL**。
     * @example `FDL`
     */
    "Type"?: string;
    /**
     * 流程执行依赖的授权角色资源描述符信息。用于在执行流程时，流程执行引擎扮演该角色（AssumeRole）调用相关的流程资源API。
     * @example `acs:ram:${region}:${accountID}:${role}`
     */
    "RoleArn"?: string;
}
