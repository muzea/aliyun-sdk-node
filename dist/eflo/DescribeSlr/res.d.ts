export interface DescribeSlrResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `9C50C9CD-E799-54DA-BA7A-1FAF3DF80857`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Content: {
        /**
         * 是否存在角色
         * @example `true`
         */
        HasRole: boolean;
    };
}
