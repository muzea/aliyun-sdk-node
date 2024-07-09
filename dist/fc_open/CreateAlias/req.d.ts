export interface CreateAliasRequest {
    /**
     * 服务的名称。
     * @example `service_name`
     */
    "serviceName": string;
    /**
     * 别名的定义。
     */
    "body"?: {
        /**
         * 别名指向的灰度版本以及灰度权重。
         * - 灰度版本只在调用函数时生效。
         * - 由版本号和对应的权重组成，例如，2:0.05表明调用函数时，版本2为灰度版本，切5%的流量到灰度版本，95%的流量默认到主版本。
         */
        additionalVersionWeight: any;
        /**
         * 别名的名称。只能包含字母、数字、下划线（\_）和中划线（-），不能以数字、中划线（-）开头，长度范围为1~128个字符，且值不能为**LATEST**。
         * @example `alias_test`
         */
        aliasName: string;
        /**
         * 别名的描述。
         * @example `test_description`
         */
        description: string;
        /**
         * 别名指向的版本ID。
         * @example `1`
         */
        versionId: string;
        /**
         * 灰度方式。取值如下：
         * - **Random**：随机灰度。
         * - **Content**：规则灰度。
         * 默认值：无。
         * @example `Random`
         */
        resolvePolicy: string;
        /**
         * 灰度规则。满足灰度规则条件的流量，会被路由至灰度实例。
         */
        routePolicy: any;
    };
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 函数计算调用请求的调用链ID。
     * @example `r9s89isisi****`
     */
    "X-Fc-Trace-Id"?: string;
}
