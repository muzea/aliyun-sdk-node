export interface ListFlowsResponse {
    /**
     * 下次查询起始Key，如果没有其他数据则不返回。
     * @example `flow_nextxxx`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `testRequestId`
     */
    RequestId: string;
    /**
     * 流程列表。
     */
    Flows: {
        /**
         * 流程类型。
         * @example `FDL`
         */
        Type: string;
        /**
         * 流程定义，遵循FDL语法标准。
         * @example `version: v1.0\ntype: flow\nname: test\nsteps:\n - type: pass\n name: mypass`
         */
        Definition: string;
        /**
         * 流程执行所需资源描述符信息。
         * @example `acs:ram::${accountID}:${role}`
         */
        RoleArn: string;
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
         * 流程最后更改时间。
         * @example `2019-01-01T01:01:01.001Z`
         */
        LastModifiedTime: string;
        /**
         * 流程的唯一ID。
         * @example `e589e092-e2c0-4dee-b306-3574ddf5****`
         */
        Id: string;
        /**
         * 执行模式，枚举类型，可以是Express和Standard，空串等价于Standard
         * @example `Standard`
         */
        ExecutionMode: string;
    }[];
}
