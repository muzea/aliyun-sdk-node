export interface CreateSubnetResponse {
    /**
     * 业务码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A88DFED5-24B7-5A3E-87DE-380BF06F3C90`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 灵骏子网实例ID
         * @example `subnet-yuvn29bn`
         */
        SubnetId: string;
    };
}
