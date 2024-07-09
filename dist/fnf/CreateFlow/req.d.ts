export interface CreateFlowRequest {
    /**
     * 流程名称。该名称在同一地域内唯一，创建后不可修改。取值说明如下：
     * - 支持英文字符（a~z）或（A~Z）、数字（0~9）、下划线（_）和短划线（-）。
     * - 首字母必须为英文字母（a~z）、（A~Z）或下划线（_）。
     * - 区分大小写。
     * - 长度为1~128个字符。
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
    "Definition": string;
    /**
     * 流程描述。
     * @example `my test flow`
     */
    "Description": string;
    /**
     * 流程类型，取值：**FDL**。
     * @example `FDL`
     */
    "Type": string;
    /**
     * 流程执行依赖的授权角色资源描述符信息。用于在执行流程时，Serverless 工作流服务扮演该角色（AssumeRole）操作相关的流程资源。
     * @example `acs:ram:${region}:${accountID}:${role}`
     */
    "RoleArn"?: string;
    /**
     * 外部存储位置。
     * @example `/path`
     */
    "ExternalStorageLocation"?: string;
    /**
     * 执行模式，枚举类型，可以是Express和Standard；考虑到向前兼容，空串等价于Standard 执行模式。
     * @example `Standard`
     */
    "ExecutionMode"?: string;
}
