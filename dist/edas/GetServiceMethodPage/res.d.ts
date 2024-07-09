export interface GetServiceMethodPageResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * HTTP响应码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 请求ID。
     * @example `BDC0C0FE-D63B-4FC8-****-4081C57E****`
     */
    RequestId: string;
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
         * 页号。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `6`
         */
        TotalSize: number;
        /**
         * 方法结构体。
         */
        Result: {
            /**
             * 参数详情。
             * @example `{}`
             */
            ParameterDetails: string;
            /**
             * 方法详情。
             * @example `name`
             */
            NameDetail: string;
            /**
             * 参数名称。
             * @example `echo`
             */
            ParameterNames: string;
            /**
             * 参数定义。
             * @example `[{"description":"","name":"arg0","type":"java.lang.String"}]`
             */
            ParameterDefinitions: string;
            /**
             * 方法路径。
             * @example `/consumer/alive`
             */
            Paths: string;
            /**
             * 参数类型。
             * @example `java.lang.String`
             */
            ParameterTypes: string;
            /**
             * 请求方法。
             * @example `GET`
             */
            RequestMethods: string;
            /**
             * 返回详情。
             * @example `java.lang.String`
             */
            ReturnDetails: string;
            /**
             * 方法名。
             * @example `echo`
             */
            Name: string;
            /**
             * 方法。
             * @example `com.aliware.edas.EchoController`
             */
            MethodController: string;
            /**
             * 返回类型。
             * @example `java.lang.String`
             */
            ReturnType: string;
            /**
             * 返回值。
             */
            ReturnDefinition: {
                /**
                 * 返回类型。
                 * @example `java.lang.String`
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
