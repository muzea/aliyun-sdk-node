export interface CreateTriggerResponse {
    /**
     * 触发器的创建时间。
     * @example `2016-08-15T15:00:00.000+0000`
     */
    createdTime: string;
    /**
     * 事件源调用函数使用的RAM角色的ARN。
     * @example `acs:ram::1234567890:role/fc-test`
     */
    invocationRole: string;
    /**
     * 触发器的上次修改时间。
     * @example `016-08-15T17:00:00.000+0000`
     */
    lastModifiedTime: string;
    /**
     * 服务的版本。
     * @example `LATEST`
     */
    qualifier: string;
    /**
     * 事件源的Aliyun Resource Name。
     * @example `acs:oss:cn-shanghai:12345:mybucket`
     */
    sourceArn: string;
    /**
     * 触发器配置，针对不同类型的触发器，配置有所不同。
     * @example `{"events": ["oss:ObjectCreated:*"], "filter": {"key": {"prefix": "/prefix", "suffix": ".zip"}}}`
     */
    triggerConfig: string;
    /**
     * 触发器的名称。要求只能包含字母、数字、下划线（_）和短划线（-）。不能以数字、短划线（-）开头，长度限制为1~128个字符。
     * @example `oss_create_object_trigger_demo`
     */
    triggerName: string;
    /**
     * 触发器的类型，例如**oss**、**log**、**tablestore**、**timer**、**http**、**cdn_events**、**mns\_topic**、**eventbridge**。
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
     * @example `3e270f2f-cef2-421a-bc86-ff4e8088****`
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
