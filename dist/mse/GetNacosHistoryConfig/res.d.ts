export interface GetNacosHistoryConfigResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `69AD2AA7-DB47-449B-941B-B14409DF****`
     */
    RequestId: string;
    /**
     * 配置信息。
     */
    Configuration: {
        /**
         * 应用名称。
         * @example `test`
         */
        AppName: string;
        /**
         * 配置的消息摘要。
         * @example `23sdf32f****`
         */
        Md5: string;
        /**
         * 配置ID。
         * @example `test.yaml`
         */
        DataId: string;
        /**
         * 配置内容。
         * @example `test`
         */
        Content: string;
        /**
         * 配置组名称。
         * @example `public`
         */
        Group: string;
        /**
         * 配置类型。
         * @example `text`
         */
        OpType: string;
        /**
         * 加密密钥。
         * @example `23fds****`
         */
        EncryptedDataKey: string;
    };
    /**
     * 错误码。
     * @example `NoPermission`
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
