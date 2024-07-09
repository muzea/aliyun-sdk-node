export interface GetServiceInvokeResponse {
    /**
     * 请求ID。
     * @example `A7AAA063-55EA-0BF7-AE90-678E08CDCDFF`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 服务在一个时间段内的调用量情况。
         * @example `"171673532680****":[{"dateTime":1661247217888,"invoke":20}], "121998460522****":[{"dateTime":1661247217888,"invoke":20}]`
         */
        UserInvoke: any;
    };
}
