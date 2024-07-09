export interface UnAssociateVpdCidrBlockResponse {
    /**
     * 响应状态码。
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `success`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `9C50C9CD-E799-54DA-BA7A-1FAF3DF80857`
     */
    RequestId: string;
    /**
     * 响应内容。
     */
    Content: {
        /**
         * 灵骏网段实例ID。
         * @example `vpd-ze3na0wf`
         */
        VpdId: string;
    };
}
