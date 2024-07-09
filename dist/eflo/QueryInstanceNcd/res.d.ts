export interface QueryInstanceNcdResponse {
    /**
     * Code码
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `BDBCC783-84CA-5733-8EEA-645C88B9009C`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 实例间网络通信距离
         * @example `1`
         */
        Ncd: number;
        /**
         * 实例1ID
         * @example `lni-1235****`
         */
        InstanceId1: string;
        /**
         * 实例2ID
         * @example `lni-1234****`
         */
        InstanceId2: string;
        /**
         * 实例类型
         * @example `lni`
         */
        InstanceType: string;
    };
}
