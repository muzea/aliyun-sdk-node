export interface ListNamespacesResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `message`
     */
    Message: string;
    /**
     * 请求唯一ID。
     * @example `71BCC0E3-64B2-4B63-A870-AFB64EBCB58C`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值如下：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 命名空间列表信息。
     */
    Data: {
        /**
         * 命名空间列表与详情。
         */
        Namespaces: {
            /**
             * 命名空间名称。
             * @example `doc`
             */
            Name: string;
            /**
             * 命名空间描述。
             * @example `test`
             */
            Description: string;
            /**
             * 命名空间ID。
             * @example `1a72ecb1-b4cc-400a-a71b-20cdec9b****`
             */
            UId: string;
        }[];
    };
}
