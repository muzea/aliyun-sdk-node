export interface GetNacosConfigResponse {
    /**
     * 信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B4EAB48C-BB4B-5B8D-B33B-35D69606C5AD`
     */
    RequestId: string;
    /**
     * 配置信息。
     */
    Configuration: {
        /**
         * 配置内容的格式。
         * @example `text`
         */
        Type: string;
        /**
         * 应用名称。
         * @example `test`
         */
        AppName: string;
        /**
         * 配置的标签。
         * @example `context`
         */
        Tags: string;
        /**
         * 配置的消息摘要。
         * @example `123rfsdf3`
         */
        Md5: string;
        /**
         * 配置ID。
         * @example `log.yaml`
         */
        DataId: string;
        /**
         * 配置内容。
         * @example `log.level=error`
         */
        Content: string;
        /**
         * 配置组名称。
         * @example `test`
         */
        Group: string;
        /**
         * 配置描述。
         * @example `测试专用`
         */
        Desc: string;
        /**
         * 加密密钥。
         * @example `key`
         */
        EncryptedDataKey: string;
        /**
         * Beta发布的IP列表。
         * @example `1.1.XX.XX，2.2.XX.XX`
         */
        BetaIps: string;
    };
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
