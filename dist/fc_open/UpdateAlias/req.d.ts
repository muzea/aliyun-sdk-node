export interface UpdateAliasRequest {
    /**
     * 服务名称。
     * @example `demo-service`
     */
    "serviceName": string;
    /**
     * 别名的名称。
     * @example `alias_test`
     */
    "aliasName": string;
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
         * - **Random**：随机灰度，为默认值。
         * - **Content**：规则灰度。
         * @example `Random`
         */
        resolvePolicy: string;
        /**
         * 灰度规则。满足灰度规则条件的流量，会被路由至灰度实例。
         */
        routePolicy: any;
    };
    /**
     * 如果传入的ETag和Object的ETag匹配，则正常传输Object，并返回200 OK；如果传入的ETag和Object的ETag不匹配，则返回412 Precondition Failed。
     * Object的ETag值用于验证数据是否发生了更改，您可以基于ETag值验证数据完整性。默认值：无。
     * @example `e19d5cd5af0378da05f63f891c7467af`
     */
    "If-Match"?: string;
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
     * @example `rid281s******`
     */
    "X-Fc-Trace-Id"?: string;
}
