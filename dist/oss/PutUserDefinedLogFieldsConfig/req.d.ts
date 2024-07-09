export interface PutUserDefinedLogFieldsConfigRequest {
    /**
     * 存储空间名称。
     * @example `example-bucket`
     */
    "bucket": string;
    /**
     * 接口请求体。
     */
    "body"?: {
        /**
         * 用户自定义日志配置信息的容器。
         */
        UserDefinedLogFieldsConfiguration: any;
    };
}
