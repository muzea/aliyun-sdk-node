export interface ListFCTriggerResponse {
    /**
     * 请求ID。
     * @example `EC046C5D-8CB4-4B6B-B7F8-B335E51EF90E`
     */
    RequestId: string;
    /**
     * 获取指定事件的函数计算触发器列表。
     */
    FCTriggers: {
        /**
         * 函数计算服务对应的触发器。
         * @example `acs:fc:cn-beijing: 1234567890:services/FCTestService/functions/printEvent/triggers/testtrigger`
         */
        TriggerARN: string;
        /**
         * RAM（访问控制）授权的角色。
         * @example `acs:ram:: 1234567890:role/aliyuncdneventnotificationrole`
         */
        RoleARN: string;
        /**
         * 事件侦听的资源和过滤器。
         * @example `acs:cdn:*:1234567890:domain/example.com`
         */
        SourceArn: string;
        /**
         * 备注信息。
         * @example `测试`
         */
        Notes: string;
        /**
         * 事件名称。
         * @example `LogFileCreated`
         */
        EventMetaName: string;
        /**
         * 事件版本。
         * @example `1.0.0`
         */
        EventMetaVersion: string;
    }[];
}
