export interface PutWebtrackingRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `ali-test-logstore`
     */
    "logstoreName": string;
    /**
     * 请求消息体。
     */
    "body": {
        /**
         * 日志主题。
         * @example `topic`
         */
        __topic__: string;
        /**
         * 日志来源。
         * @example `source`
         */
        __source__: string;
        /**
         * 日志内容列表。每个元素为一个JSON对象，表示一条日志。
         * > **说明**WebTracking采集的日志时间为日志到达服务端的时间，每条日志中无需设置__time__字段，如果存在该字段，将被服务端使用日志到达的时间覆盖。
         */
        __logs__: any[];
        /**
         * 日志标签。
         */
        __tags__: any;
    };
}
