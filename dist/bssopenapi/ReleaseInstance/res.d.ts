export interface ReleaseInstanceResponse {
    /**
     * 执行结果说明
     * @example `successful`
     */
    Message: string;
    /**
     * 执行链路追踪字符串，排查问题时，可以提供给平台
     * @example `UUID`
     */
    RequestId: string;
    /**
     * data
     */
    Data: {
        /**
         * 释放是否成功
         * @example `true`
         */
        ReleaseResult: boolean;
        /**
         * 执行主机所在站点
         * @example `cn`
         */
        HostId: string;
    };
    /**
     * 响应码
     * @example `Invalid_Product_Code`
     */
    Code: string;
    /**
     * success=true代表调用执行完成
     * success=false代表执行出现错误
     * @example `true`
     */
    Success: boolean;
}
