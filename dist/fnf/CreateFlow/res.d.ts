export interface CreateFlowResponse {
    /**
     * 流程类型。
     * @example `FDL`
     */
    Type: string;
    /**
     * 流程定义，考虑到向前兼容，当系统支持两种规范的流程定义规范。
     * @example `旧版：
    "type: flow\nversion: v1\nname: my_flow_name\nsteps:\n  - type: pass\n    name: mypass"
    
    新版：
    "Type: StateMachine\nSpecVersion: v1\nName: my_flow_name\nStartAt: my_state\nStates:\n  - Type: Pass\n    Name: my_state\n    End: true"`
     */
    Definition: string;
    /**
     * 流程执行依赖的授权角色资源描述符信息。用于在执行流程时，Serverless 工作流服务扮演该角色（AssumeRole）操作相关的流程资源。
     * @example `acs:ram:${region}:${accountID}:${role}`
     */
    RoleArn: string;
    /**
     * 请求ID。当有`http status code`返回时，Serverless工作流都会返回请求ID。
     * @example `testRequestID`
     */
    RequestId: string;
    /**
     * 流程描述信息。
     * @example `my test flow`
     */
    Description: string;
    /**
     * 流程名称。
     * @example `my_flow_name`
     */
    Name: string;
    /**
     * 流程创建时间。
     * @example `2019-01-01T01:01:01.001Z`
     */
    CreatedTime: string;
    /**
     * 流程最近一次的更改时间。
     * @example `2019-01-01T01:01:01.001Z`
     */
    LastModifiedTime: string;
    /**
     * 流程的唯一标识。
     * @example `e589e092-e2c0-4dee-b306-3574ddfdddf5****`
     */
    Id: string;
    /**
     * 执行模式，枚举类型，可以是Express和Standard，考虑到向前兼容，该字段可能为空字符串，这种情况等价于Standard模式。
     * @example `Standard`
     */
    ExecutionMode: string;
}
