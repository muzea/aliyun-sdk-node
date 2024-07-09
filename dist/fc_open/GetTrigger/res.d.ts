export interface GetTriggerResponse {
    /**
     * 触发器的创建时间。
     * @example `2022-10-20T02:52:03Z`
     */
    createdTime: string;
    /**
     * 事件源调用函数使用的RAM角色的ARN。
     * @example `acs:ram::123456xxxx:role/fc-test`
     */
    invocationRole: string;
    /**
     * 触发器的上次修改时间。
     * @example `2022-10-20T03:17:09Z`
     */
    lastModifiedTime: string;
    /**
     * 服务的版本或别名。
     * @example `LATEST`
     */
    qualifier: string;
    /**
     * 事件源的Aliyun Resource Name。
     * @example `acs:oss:cn-shanghai:123456xxxx:mybucket`
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
     * 触发器的名称。
     * @example `demoTrigger`
     */
    triggerName: string;
    /**
     * 触发器的类型，例如**oss**、**log**、**tablestore**、**timer**、**http**、**cdn\_events**、**mns\_topic**、**eventbridge**。
     * @example `oss`
     */
    triggerType: string;
    /**
     * 触发器的描述。
     * @example `trigger for test`
     */
    description: string;
    /**
     * 触发器的唯一ID。
     * @example `3e270f2f-cef2-421a-bc86-ff4e8088476a`
     */
    triggerId: string;
    /**
     * 域名名称，使用域名名称拼接上函数计算域名，可以采用HTTP协议调用到触发器对应版本的函数。例如`{domainName}.cn-shanghai.fc.aliyuncs.com`。
     * @example `demo-service-demo-function-jkhksh`
     */
    domainName: string;
    /**
     * 公网域名地址。在互联网可以通过HTTP协议或者HTTPS协议访问HTTP Trigger。
     * @example `https://svc-func-xxxxxxxx.cn-hangzhou.fcapp.run`
     */
    urlInternet: string;
    /**
     * 私网域名地址。在VPC可以通过HTTP协议或者HTTPS协议访问HTTP Trigger。
     * @example `https://svc-func-xxxxxxxx.cn-hangzhou-vpc.fcapp.run`
     */
    urlIntranet: string;
}
