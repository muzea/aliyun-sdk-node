export interface CreateTriggerRequest {
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
     * 触发器的定义。
     */
    "body"?: {
        /**
         * 事件源（如OSS）调用函数所需的角色。更多信息，请参见[触发器简介](~~53102~~)。
         * @example `acs:ram::1234567890:role/fc-test`
         */
        invocationRole: string;
        /**
         * 服务的版本或别名。
         * @example `LATEST`
         */
        qualifier: string;
        /**
         * 触发器事件源的Aliyun Resource Name。对于定时、HTTP和EventBridge类型的触发器可忽略该参数，其它类型触发器该参数为必填项。对于 EB 触发器，若主动填写该字段，表示将 EB 侧已存在资源关联到该触发器，注意，**两个不同 EB 触发器不要配置同一个 sourceArn**，否则触发器的更新/删除操作会相互影响
         * @example `acs:oss:cn-shanghai:12345:mybucket`
         */
        sourceArn: string;
        /**
         * 触发器配置，针对不同类型的触发器，配置有所不同。具体格式请参考如下对应的数据结构：
         *   - OSS触发器：请参见[OSSTriggerConfig](~~415697~~)。
         *   - 日志服务触发器：请参见[LogTriggerConfig](~~415694~~)。
         *   - 定时触发器：请参见[TimeTriggerConfig](~~415712~~)。
         *   - HTTP触发器：请参见[HTTPTriggerConfig](~~415685~~)。
         *   - Tablestore触发器：只需要填写完整的**SourceArn**参数便可, 这里无需额外配置，取值为空{}。
         *   - CDN事件触发器：请参见[CDNEventsTriggerConfig](~~415674~~)。
         *   - MNS主题触发器：请参见[MnsTopicTriggerConfig](~~415695~~)。
         *   - EventBridge触发器：请参见[EventBridgeTriggerConfig](~~2508622~~)。
         * @example `{"events": ["oss:ObjectCreated:*"], "filter": {"key": {"prefix": "/prefix", "suffix": ".zip"}}}`
         */
        triggerConfig: string;
        /**
         * 触发器的名称。要求只能包含字母、数字、下划线\(_)和短划线\(-)。不能以数字、短划线\(-)开头，长度限制为1~128个字符。
         * @example `oss_create_object_demo`
         */
        triggerName: string;
        /**
         * 触发器的类型。具体取值和触发器类型对应关系如下所示：
         *   - **oss**：OSS触发器。更多信息，请参见[OSS触发器概述](~~62922~~)。
         *   - **log**：日志服务触发器。更多信息，请参见[日志服务触发器概述](~~84386~~)。
         *   - **timer**：定时触发器。更多信息，请参见[定时触发器概述](~~68172~~)。
         *   - **http**：HTTP触发器。更多信息，请参见[HTTP触发器概述](~~71229~~)。
         *   - **tablestore**：Tablestore触发器。更多信息，请参见[Tablestore触发器概述](~~100092~~)。
         *   - **cdn_events**：CDN事件触发器。更多信息，请参见[CDN事件触发器概述](~~73333~~)。
         *   - **mns_topic**：MNS主题触发器。更多信息，请参见[MNS主题触发器概述](~~97032~~)。
         *   - **eventbridge**：EventBridge触发器。
         * @example `oss`
         */
        triggerType: string;
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
