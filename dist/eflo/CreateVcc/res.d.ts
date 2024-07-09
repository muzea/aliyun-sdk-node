export interface CreateVccResponse {
    /**
     * 响应码
     * @example `0`
     */
    Code: number;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `039C3C3A-3C37-5672-80D5-D8CD48C676D1`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Content: {
        /**
         * 灵骏连接实例ID
         * @example `vcc-cn-zvp2w222001`
         */
        VccId: string;
    };
}
