export interface CreateConnectionResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `7DA60DED-CD36-5837-B848-C01A23D2****`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：请求正常，返回success。                                 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 接口状态或POP错误码。取值说明如下：Success：成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 连接配置名称。
         * @example `connection-demo`
         */
        ConnectionName: string;
    };
}
