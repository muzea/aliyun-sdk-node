export interface UpdateFlowResponse {
    /**
     * 流程类型。
     * @example `FDL`
     */
    Type: string;
    /**
     * 流程定义，遵循Flow Definition Language (FDL)语法标准。考虑到向前兼容，当系统支持两种规范的流程定义规范。
     * @example `旧版：
    "type: flow\nversion: v1\nname: my_flow_name\nsteps:\n  - type: pass\n    name: mypass"
    
    新版：
    "Type: StateMachine\nSpecVersion: v1\nName: my_flow_name\nStartAt: my_state\nStates:\n  - Type: Pass\n    Name: my_state\n    End: true"`
     */
    Definition: string;
    /**
     * 流程执行依赖的授权角色资源描述符信息。用于在执行流程时，流程执行引擎扮演该角色（AssumeRole）调用相关的流程资源API。
     * @example `acs:ram:${region}:${accountID}:${role}`
     */
    RoleArn: string;
    /**
     * 请求ID。
     * @example `testRequestID`
     */
    RequestId: string;
    /**
     * 流程描述。
     * @example `my test flow`
     */
    Description: string;
    /**
     * 外部存储位置。
     * @example `/path`
     */
    ExternalStorageLocation: string;
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
}
