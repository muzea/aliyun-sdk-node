export interface UpdateContainerConfigurationResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D16979DC-4D42-***************`
     */
    RequestId: string;
    /**
     * 容器配置信息。
     */
    ContainerConfiguration: {
        /**
         * 应用端口。
         * @example `8080`
         */
        HttpPort: number;
        /**
         * Tomcat的ContextPath。
         * @example `/`
         */
        ContextPath: string;
        /**
         * useBodyEncodingForURI是否启用。
         * @example `true`
         */
        UseBodyEncoding: boolean;
        /**
         * 最大线程数。
         * @example `20`
         */
        MaxThreads: number;
        /**
         * URI编码方式，支持ISO-8859-1、GBK、GB2312和UTF-8。
         * @example `ISO-8859-1`
         */
        URIEncoding: string;
    };
}
