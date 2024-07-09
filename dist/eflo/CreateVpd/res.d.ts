export interface CreateVpdResponse {
    /**
     * 响应码
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 本次请求的ID
     * @example `DBAD15D6-3F47-5B36-8A92-57C2919D13D0`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 灵骏网段实例ID
         * @example `vpd-eoiy88ju`
         */
        VpdId: string;
        /**
         * 灵骏子网ID列表
         */
        SubnetIds: string[];
    };
}
