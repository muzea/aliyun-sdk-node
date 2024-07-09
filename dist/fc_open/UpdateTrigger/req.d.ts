export interface UpdateTriggerRequest {
    /**
     * 用于确保实际更改的资源和期望更改的资源是一致的，该值来自[CreateTrigger](~~190054~~)、[GetTrigger](~~190056~~)和[UpdateTrigger](~~190055~~)的响应。
     * @example `e19d5cd5af0378da05f63f891c7467af`
     */
    "If-Match"?: string;
    /**
     * 服务的名称。
     * @example `demoService`
     */
    "serviceName": string;
    /**
     * 函数的名称。
     * @example `demoFunction`
     */
    "functionName": string;
    /**
     * 触发器的名称。
     * @example `demoTrigger`
     */
    "triggerName": string;
    /**
     * 触发器的定义。
     */
    "body"?: {
        /**
         * 事件源（如OSS）调用函数所需的角色。更多信息，请参见[触发器简介](~~53102~~)。
         * @example `acs:ram::123456xxxx:role/fc-test`
         */
        invocationRole: string;
        /**
         * 服务的版本或别名。
         * @example `LATEST`
         */
        qualifier: string;
        /**
         * 触发器配置，针对不同类型的触发器，配置有所不同。具体格式请参考如下对应的数据结构：
         *   - OSS触发器：请参见[OSSTriggerConfig](~~415697~~)。
         *   - 日志服务触发器：请参见[LogTriggerConfig](~~415694~~)。
         *   - 定时触发器：请参见[TimeTriggerConfig](~~415712~~)。
         *   - HTTP触发器：请参见[HTTPTriggerConfig](~~415685~~)。
         *   - Tablestore触发器：只需要填写完整的**SourceArn**参数便可，这里无需额外配置，取值为空{}。
         *   - CDN事件触发器：请参见[CDNEventsTriggerConfig](~~415674~~)。
         *   - MNS主题触发器：请参见[MnsTopicTriggerConfig](~~415695~~)。
         *   - EventBridge触发器：请参见[EventBridgeTriggerConfig](~~2508622~~)。
         * @example `{"events": ["oss:ObjectCreated:*"], "filter": {"key": {"prefix": "/prefix", "suffix": ".zip"}}}`
         */
        triggerConfig: string;
        /**
         * 触发器的描述。
         * @example `trigger for test`
         */
        description: string;
    };
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 客户端发起请求的时间。格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 自定义请求ID。
     * @example `my-test-trace-id`
     */
    "X-Fc-Trace-Id"?: string;
}
