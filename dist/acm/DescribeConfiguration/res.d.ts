export interface DescribeConfigurationResponse {
    /**
     * 响应描述
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `611CC94A-7711-4873-8848-****`
     */
    RequestId: string;
    /**
     * 配置
     */
    Configuration: {
        /**
         * 配置内容的格式
         * @example `text`
         */
        Type: string;
        /**
         * 配置归属的应用名称
         * @example `app`
         */
        AppName: string;
        /**
         * 配置的标签
         * @example `tag1,tag2`
         */
        Tags: string;
        /**
         * 配置的消息摘要
         * @example `18d2e20****`
         */
        Md5: string;
        /**
         * 配置ID
         * @example `com.aliyun.acm.example`
         */
        DataId: string;
        /**
         * 配置内容
         * @example `Hello World`
         */
        Content: string;
        /**
         * 分组
         * @example `DEFAULT_GROUP`
         */
        Group: string;
        /**
         * 配置描述
         * @example `测试配置`
         */
        Desc: string;
        GmtCreate: string;
        GmtModified: string;
    };
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
