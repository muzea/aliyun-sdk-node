export interface ListMethodsResponse {
    /**
     * 接口响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `69AD2AA7-DB47-449B-941B-B14409DF****`
     */
    RequestId: string;
    ServiceMethodList: {
        /**
         * 返回的服务方法列表。
         */
        ServiceMethod: {
            /**
             * 方法名称。
             * @example `echo`
             */
            MethodName: string;
            /**
             * 应用名称。
             * @example `App`
             */
            AppName: string;
            /**
             * 方法返回类型。
             * @example `java.lang.string`
             */
            Output: string;
            /**
             * 服务名称。
             * @example `com.alibaba.edas.demo.EchoService`
             */
            ServiceName: string;
            ParamTypes: {
                /**
                 * 方法入参类型列表。
                 */
                ParamType: string[];
            };
            InputParams: {
                /**
                 * 方法入参列表。
                 */
                InputParam: string[];
            };
        }[];
    };
}
