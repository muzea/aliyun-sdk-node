export interface DescribeEventRuleTargetListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `87170bc7-e28a-4c93-b9bf-90a1dbe84736`
     */
    RequestId: string;
    ContactParameters: {
        /**
         * 报警联系组通知方式。
         */
        ContactParameter: {
            /**
             * 报警联系人组的名称。
             * @example `默认告警通知组`
             */
            ContactGroupName: string;
            /**
             * 通知级别。取值：
             * <props="china">- 2：电话、短信、钉钉、Email。</props>
             * <props="china">- 3：短信、钉钉、Email。</props>
             * <props="china">- 4：钉钉、Email。</props>
             * <props="intl">4：钉钉、Email。</props>
             * <props="partner">4：钉钉、Email。</props>
             * @example `3`
             */
            Level: string;
            /**
             * 报警联系人组通知方式唯一标识。
             * @example `1`
             */
            Id: string;
        }[];
    };
    FcParameters: {
        /**
         * 函数计算通知方式。
         */
        FCParameter: {
            /**
             * 函数计算服务名称。
             * @example `service1`
             */
            ServiceName: string;
            /**
             * 函数名称。
             * @example `fcTest1`
             */
            FunctionName: string;
            /**
             * ARN资源描述。
             * 格式：`arn:acs:${Service}:${Region}:${Account}:${ResourceType}/${ResourceId}`。各字段含义如下：
             * - Service：云产品code。
             * - Region：地域ID。
             * - Account：阿里云账号ID。
             * - ResourceType：资源类型。
             * - ResourceId：资源ID。
             * @example `acs:log:cn-hangzhou::project/cms-log-mon***​/logstore/cxxxx***`
             */
            Arn: string;
            /**
             * 函数服务通知方式唯一标识。
             * @example `3`
             */
            Id: string;
            /**
             * 函数计算服务对应的地域。
             * @example `cn-qingdao`
             */
            Region: string;
        }[];
    };
    MnsParameters: {
        /**
         * 消息服务通知。
         */
        MnsParameter: {
            /**
             * 消息队列的名称。
             * @example `testQueue`
             */
            Queue: string;
            /**
             * ARN资源描述。
             * 格式：`arn:acs:${Service}:${Region}:${Account}:${ResourceType}/${ResourceId}`。各字段含义如下：
             * - Service：云服务Code。
             * - Region：地域ID。
             * - Account：阿里云账号ID。
             * - ResourceType：资源类型。
             * - ResourceId：资源ID。
             * @example `acs:log:cn-hangzhou::project/cms-log-mon***​/logstore/cxxxx***`
             */
            Arn: string;
            /**
             * 消息服务对应的地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 消息服务通知方式唯一标识。
             * @example `2`
             */
            Id: string;
            /**
             * 消息服务的主题。
             * @example `topic_sample`
             */
            Topic: string;
        }[];
    };
    WebhookParameters: {
        /**
         * URL回调通知方式。
         */
        WebhookParameter: {
            /**
             * 回调的URL地址。
             * @example `http://www.aliyun.com`
             */
            Url: string;
            /**
             * HTTP回调的请求方法。目前支持GET和POST方法。
             * @example `GET`
             */
            Method: string;
            /**
             * 协议类型。
             * @example `HTTP`
             */
            Protocol: string;
            /**
             * URL回调通知方式唯一标识。
             * @example `5`
             */
            Id: string;
        }[];
    };
    SlsParameters: {
        /**
         * 日志服务（SLS）通知方式。
         */
        SlsParameter: {
            /**
             * Project名称。
             * @example `project_test`
             */
            Project: string;
            /**
             * LogStore名称。
             * @example `logstore_test`
             */
            LogStore: string;
            /**
             * ARN资源描述。
             * 格式：`arn:acs:${Service}:${Region}:${Account}:${ResourceType}/${ResourceId}`。各字段含义如下：
             * - Service：云服务Code。
             * - Region：地域ID。
             * - Account：阿里云账号ID。
             * - ResourceType：资源类型。
             * - ResourceId：资源ID。
             * @example `acs:log:cn-hangzhou::project/cms-log-mo****​/logstore/c***`
             */
            Arn: string;
            /**
             * Project对应的地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 日志服务通知方式唯一标识。
             * @example `4`
             */
            Id: string;
        }[];
    };
    OpenApiParameters: {
        /**
         * 回调API的参数含义。
         */
        OpenApiParameters: {
            /**
             * API名称。
             * @example `PutLogs`
             */
            Action: string;
            /**
             * ARN资源描述。
             * 格式：`arn:acs:${Service}:${Region}:${Account}:${ResourceType}/${ResourceId}`。各字段含义如下：
             *   - Service：阿里云产品。
             *   - Region：地域ID。
             *   - Account：阿里云账号ID。
             *   - ResourceType：资源类型。
             *   - ResourceId：资源ID。ARN资源描述。
             * 格式：`arn:acs:${Service}:${Region}:${Account}:${ResourceType}/${ResourceId}`。各字段含义如下：
             *   - Service：阿里云产品。
             *   - Region：地域ID。
             *   - Account：阿里云账号ID。
             *   - ResourceType：资源类型。
             *   - ResourceId：资源ID。
             * @example `acs:log:cn-hangzhou::project/cms-log-mon***​/logstore/cxxxx***`
             */
            Arn: string;
            /**
             * API回调通知方式的唯一标识。
             * @example `3`
             */
            Id: string;
            /**
             * API对应的云产品ID。
             * @example `log`
             */
            Product: string;
            /**
             * 资源对应的地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 角色名称。
             * @example `MyRole`
             */
            Role: string;
            /**
             * API的版本。
             * @example `2019-01-01`
             */
            Version: string;
        }[];
    };
}
