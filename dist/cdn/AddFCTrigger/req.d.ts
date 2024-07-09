export interface AddFCTriggerRequest {
    /**
     * 函数计算服务对应的触发器。
     * @example `acs:fc:cn-beijing: 1234567890:services/FCTestService/functions/printEvent/triggers/testtrigger`
     */
    "TriggerARN": string;
    /**
     * 事件名称。
     * @example `LogFileCreated`
     */
    "EventMetaName": string;
    /**
     * 事件版本。
     * @example `1.0.0`
     */
    "EventMetaVersion": string;
    /**
     * 事件侦听的资源和过滤器。
     * @example `acs:cdn:*:1234567890:domain/example.com`
     */
    "SourceARN": string;
    /**
     * 功能触发器。
     * @example `acs:fc:1223455566666:123:services/myservice/functions/myfunction`
     */
    "FunctionARN"?: string;
    /**
     * RAM授权的角色。
     * @example `acs:ram:: 1234567890:role/aliyuncdneventnotificationrole`
     */
    "RoleARN": string;
    /**
     * 备注信息。
     * @example `test`
     */
    "Notes": string;
}
