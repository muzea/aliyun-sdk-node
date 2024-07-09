export interface DescribeInstanceHttpCodeResponse {
    /**
     * 请求id
     * @example `AD00F8C0-311B-54A9-ADE2-2436771012DA`
     */
    RequestId: string;
    InstanceHttpCode: {
        /**
         * 返回的HTTP返回码列表
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `1`
             */
            ItemValue: string;
            /**
             * HTTP状态码
             * @example `404`
             */
            ItemTime: string;
        }[];
    };
}
