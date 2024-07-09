export interface GetWebContainerConfigResponse {
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
     * @example `4823-bhjf-23u4-eiufh`
     */
    RequestId: string;
    /**
     * Tomcat配置内容。
     */
    WebContainerConfig: {
        /**
         * 上下文路径。
         * @example `ROOT`
         */
        ContextPath: string;
        /**
         * 是否使用高级配置。
         * @example `true`
         */
        UseAdvancedServerXml: boolean;
        /**
         * 是否使用默认配置。
         * @example `true`
         */
        UseDefaultConfig: boolean;
        /**
         * HTTP服务端口。
         * @example `8080`
         */
        HttpPort: number;
        /**
         * 上下文路径类型。
         * @example `root`
         */
        ContextInputType: string;
        /**
         * 是否使用Body字符编码。
         * @example `true`
         */
        UseBodyEncoding: boolean;
        /**
         * URI编码类型。
         * @example `ISO-8859-1`
         */
        UriEncoding: string;
        /**
         * 最大线程数。
         * @example `500`
         */
        MaxThreads: number;
        /**
         * Server XML高级配置内容。
         * @example `<Server port=*****`
         */
        ServerXml: string;
    };
}
