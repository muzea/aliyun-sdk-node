export interface GetStackResponse {
    /**
     * 请求ID。
     * @example `B34C3A43-A901-5F94-9DAD-758CE4******`
     */
    RequestId: string;
    /**
     * 方法栈信息。
     */
    StackInfo: {
        /**
         * 调用方法的入口时间戳。
         * @example `1653555396`
         */
        StartTime: number;
        /**
         * 异常信息。
         * @example `java.lang.NullPointerException`
         */
        Exception: string;
        /**
         * 接口名称。
         * @example `Tomcat Servlet Process`
         */
        Api: string;
        /**
         * 方法栈信息行数。
         * @example `34`
         */
        Line: string;
        /**
         * 耗时，单位为ms。
         * @example `32`
         */
        Duration: number;
        /**
         * RPC ID。
         * @example `0.1`
         */
        RpcId: string;
        /**
         * 服务名称。
         * @example `/com/test`
         */
        ServiceName: string;
        /**
         * 扩展信息。
         */
        ExtInfo: {
            /**
             * 自定义参数信息类型。
             * @example `41`
             */
            Type: string;
            /**
             * 自定义参数信息内容。
             * @example `input=254275&amp;`
             */
            Info: string;
        };
    }[];
}
