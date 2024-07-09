export interface GetServiceMethodPageResponse {
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 请求信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求id。
     * @example `2DD5A212-C77B-3XXF-9XXE-XXX9XXXE5XX1`
     */
    RequestId: string;
    /**
     * 请求响应数据。
     */
    Data: {
        /**
         * 方法描述列表。
         */
        Result: {
            /**
             * 接口描述信息。
             * @example `示例接口描述信息。`
             */
            NameDetail: string;
            /**
             * 接口参数类型。
             */
            ParameterDetails: string[];
            /**
             * 参数的详细定义。
             */
            ParameterDefinitions: {
                /**
                 * 参数类型。
                 * @example `java.lang.String`
                 */
                Type: string;
                /**
                 * 参数描述。
                 * @example `参数描述示例`
                 */
                Description: string;
                /**
                 * 参数名字。
                 * @example `aParam`
                 */
                Name: string;
            }[];
            /**
             * 接口对应的请求路径列表。
             */
            Paths: string[];
            /**
             * 参数类型。
             */
            ParameterTypes: string[];
            /**
             * HTTP请求方法。
             */
            RequestMethods: string[];
            /**
             * 返回值类型。
             * @example `java.lang.String`
             */
            ReturnDetails: string;
            /**
             * 方法名。
             * @example `aMethod`
             */
            Name: string;
            /**
             * 接口所在的Controller类全称。
             * @example `com.alibabacloud.mse.demo.a.AController`
             */
            MethodController: string;
            /**
             * 返回值类型。
             * @example `java.lang.String`
             */
            ReturnType: string;
        }[];
        /**
         * 方法总数量。
         * @example `100`
         */
        TotalSize: number;
        /**
         * 第几页。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页大小
         * @example `10`
         */
        PageSize: number;
    };
}
