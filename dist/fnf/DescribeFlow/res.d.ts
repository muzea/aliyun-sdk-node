export interface DescribeFlowResponse {
    /**
     * 流程类型。
     * @example `FDL`
     */
    Type: string;
    /**
     * 流程定义，遵循Flow Definition Language (FDL)语法标准。考虑到向前兼容，当系统支持两种规范的流程定义规范。
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
    Definition: string;
    /**
     * 流程执行依赖的授权角色资源描述符信息。用于在执行流程时，Serverless 工作流服务扮演该角色（AssumeRole）操作相关的流程资源。
     * @example `acs:ram:${region}:${accountID}:${role}`
     */
    RoleArn: string;
    /**
     * 请求ID。
     * @example `testRequestId`
     */
    RequestId: string;
    /**
     * 流程描述。
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
     * 流程的唯一ID。
     * @example `e589e092-e2c0-4dee-b306-3574ddfdddf5****`
     */
    Id: string;
    /**
     * 执行模式，枚举类型，可以是Express和Standard，空串等价于Standard
     * @example `Standard`
     */
    ExecutionMode: string;
}
