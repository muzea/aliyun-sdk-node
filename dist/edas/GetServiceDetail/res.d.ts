export interface GetServiceDetailResponse {
    /**
     * 接口请求的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 接口请求返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * EDAS应用名称。
         * @example `test123`
         */
        EdasAppName: string;
        /**
         * Dubbo应用名称。
         * @example `cartservice`
         */
        DubboApplicationName: string;
        /**
         * 版本号。
         * @example `1.0.0`
         */
        Version: string;
        /**
         * 注册类型。
         * @example `agent`
         */
        RegistryType: string;
        /**
         * Spring应用名。
         * @example `edas.service.consumer`
         */
        SpringApplicationName: string;
        /**
         * 服务类型。
         * @example `springCloud`
         */
        ServiceType: string;
        /**
         * 服务名。
         * @example `edas.service.consumer`
         */
        ServiceName: string;
        /**
         * 元数据。
         * @example `{}`
         */
        Metadata: string;
        /**
         * 分组。
         * @example `dubbo`
         */
        Group: string;
        /**
         * 方法列表。
         */
        Methods: {
            /**
             * 参数详情。
             * @example `{}`
             */
            ParameterDetails: string;
            /**
             * 具体名称。
             * @example `test`
             */
            NameDetail: string;
            /**
             * 参数名称。
             * @example `test`
             */
            ParameterNames: string;
            /**
             * 参数定义。
             * @example `[{"description":"","name":"arg0","type":"java.lang.String"}]`
             */
            ParameterDefinitions: string;
            /**
             * 方法路径。
             * @example `["/consumer-echo/feign/{str}"]`
             */
            Paths: string;
            /**
             * 参数类型。
             * @example `["java.lang.String"]`
             */
            ParameterTypes: string;
            /**
             * 请求方法。
             * @example `GET`
             */
            RequestMethods: string;
            /**
             * 返回详情。
             * @example `test`
             */
            ReturnDetails: string;
            /**
             * 名称。
             * @example `feign2`
             */
            Name: string;
            /**
             * controller列表。
             * @example `com.aliware.edas.DemoController`
             */
            MethodController: string;
            /**
             * 返回类型。
             * @example `java.lang.String`
             */
            ReturnType: string;
            /**
             * 返回定义。
             */
            ReturnDefinition: {
                /**
                 * 类型。
                 * @example `foo`
                 */
                Type: string;
                /**
                 * 返回值ID。
                 * @example `1`
                 */
                Id: string;
            };
        }[];
    };
}
