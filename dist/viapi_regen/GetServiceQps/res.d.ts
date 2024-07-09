export interface GetServiceQpsResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `4EC52691-F5E8-01C7-945E-7DDBA72BCBFB`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 服务在一个时间段内的QPS情况。
         * @example `{     "171673532680****":[{"dateTime":1661247217888,"maxQps":2}],     "121998460522****":[{"dateTime":1661247217888,"maxQps":3}]   }`
         */
        UserQps: any;
    };
}
