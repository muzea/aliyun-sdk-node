export interface DescribeAppServiceDetailResponse {
    /**
     * 请求ID。
     * @example `B2C7874F-F109-5B34-8618-2C10BBA2****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0b16399316402420740034918e****`
     */
    TraceId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 服务分组。自定义。
         * @example `springCloud`
         */
        Group: string;
        /**
         * 服务名称。
         * @example `service-provider`
         */
        ServiceName: string;
        /**
         * 服务版本。自定义。
         * @example `1.0.0`
         */
        Version: string;
        /**
         * 服务类型。取值说明如下：
         * - **dubbo**
         * - **springCloud**
         * @example `springCloud`
         */
        ServiceType: string;
        ServiceProtocol: string;
        ServicePorts: number[];
        ServiceTags: string[];
        /**
         * 应用名称。
         * @example `cn-zhangjiakou-micro-service-******`
         */
        EdasAppName: string;
        /**
         * 元数据。示例如下：`{side: "provider", port: "18081", preserved: {register: {source: "SPRING_CLOUD"}},…}`
         * @example `{side: "provider", port: "18081", preserved: {register: {source: "SPRING_CLOUD"}},…}`
         */
        Metadata: any;
        /**
         * Spring Cloud应用名称。
         * @example `service-provider`
         */
        SpringApplicationName: string;
        /**
         * Dubbo应用名称。
         * @example `service-consumer`
         */
        DubboApplicationName: string;
        /**
         * 方法列表。
         */
        Methods: {
            /**
             * 所属类。
             * @example `com.serverless.sae.controller.EchoController`
             */
            MethodController: string;
            /**
             * 返回类型。
             * @example `java.lang.String`
             */
            ReturnType: string;
            /**
             * 返回详情。
             * @example `test`
             */
            ReturnDetails: string;
            /**
             * 方法名。
             * @example `echo`
             */
            Name: string;
            /**
             * 方法详情。
             * @example `description`
             */
            NameDetail: string;
            /**
             * 参数详情。
             */
            ParameterDetails: string[];
            /**
             * 请求方法。
             */
            RequestMethods: string[];
            /**
             * 参数类型。
             */
            ParameterTypes: string[];
            /**
             * 请求路径。
             */
            Paths: string[];
            /**
             * 参数定义。
             */
            ParameterDefinitions: {
                /**
                 * 参数类型。
                 * @example `java.lang.String`
                 */
                Type: string;
                /**
                 * 参数描述。
                 * @example `description`
                 */
                Description: string;
                /**
                 * 参数名称。
                 * @example `arg0`
                 */
                Name: string;
            }[];
        }[];
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功获取元数据。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
