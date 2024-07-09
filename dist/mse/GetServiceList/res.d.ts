export interface GetServiceListResponse {
    /**
     * Http状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `xxx-xxx-xxx`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 应用名。
         * @example `test`
         */
        EdasAppName: string;
        /**
         * Dubbo应用名。
         * @example `dubbo-application`
         */
        DubboApplicationName: string;
        /**
         * 版本信息。
         * @example `1.0.0`
         */
        Version: string;
        /**
         * Spring应用名。
         * @example `spring-application`
         */
        SpringApplicationName: string;
        /**
         * 注册中心类型。
         * @example `nacos`
         */
        RegistryType: string;
        /**
         * 服务类型。
         * @example `dubbo`
         */
        ServiceType: string;
        /**
         * 服务名。
         * @example `com.alibaba.xxx`
         */
        ServiceName: string;
        /**
         * 方法列表。
         */
        Methods: {
            /**
             * 路径。
             */
            Paths: string[];
            /**
             * 参数类型。
             */
            ParameterTypes: string[];
            /**
             * 方法。
             */
            RequestMethods: string[];
            /**
             * 方法名。
             * @example `sayHello`
             */
            Name: string;
            /**
             * 方法接口。
             * @example `com.alibaba.SayHelloController`
             */
            MethodController: string;
            /**
             * 返回值类型。
             * @example `int`
             */
            ReturnType: string;
        }[];
        /**
         * 元数据。
         * @example `{}`
         */
        Metadata: any;
        /**
         * 分组。
         * @example `dubbo`
         */
        Group: string;
    }[];
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 调用成功与否。
     * @example `true`
     */
    Success: boolean;
}
