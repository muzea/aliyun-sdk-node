export interface GetContainerConfigurationResponse {
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 接口请求返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     *  请求ID。
     * @example `34F8-FDG9-*****************`
     */
    RequestId: string;
    /**
     * Tomcat配置。
     */
    ContainerConfiguration: {
        /**
         * 应用端口。返回设置的值和应用配置。
         * @example `8080`
         */
        HttpPort: number;
        /**
         * Tomcat的Context Path。
         * @example `/`
         */
        ContextPath: string;
        /**
         * useBodyEncodingForURI是否启用，返回设置的值。
         * - 如果应用分组未设置，则返回应用的配置。
         * - 如果应用未设置，则返回默认值。
         * @example `true`
         */
        UseBodyEncoding: boolean;
        /**
         * 最大线程数，返回设置的值。
         * - 如果应用分组未设置，则返回应用的配置。
         * - 如果应用未设置，则返回默认值。
         * @example `400`
         */
        MaxThreads: number;
        /**
         * URI编码方式，包含ISO-8859-1、GBK、GB2312和UTF-8，返回设置的值。
         * - 如果应用分组未设置，则返回应用的配置。
         * - 如果应用未设置，则返回默认值。
         * @example `ISO-8859-1`
         */
        URIEncoding: string;
    };
}
