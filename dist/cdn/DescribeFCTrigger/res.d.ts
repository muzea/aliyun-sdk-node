export interface DescribeFCTriggerResponse {
    /**
     * 请求ID。
     * @example `EC046C5D-8CB4-4B6B-B7F8-B335E51EF90E`
     */
    RequestId: string;
    /**
     * FCT触发器。
     */
    FCTrigger: {
        /**
         * 函数计算服务对应的触发器。
         * @example `acs:fc:cn-beijing: 1234567890:services/FCTestService/functions/printEvent/triggers/testtrigger`
         */
        TriggerARN: string;
        /**
         * RAM授权的角色。
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
         * @example `test`
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
    };
}
