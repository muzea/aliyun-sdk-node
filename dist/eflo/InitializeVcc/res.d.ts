export interface InitializeVccResponse {
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
     * 本次请求的ID
     * @example `E30DA7CB-03D0-51EB-8F18-856B99987E18`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 灵骏连接实例关联角色（AliyunServiceRoleForEfloVcc）
         * @example `
        AliyunServiceRoleForEfloVcc`
         */
        RoleName: string;
        /**
         * 本次请求的ID
         * @example `E30DA7CB-03D0-51EB-8F18-856B99987E18`
         */
        RequestId: string;
    };
}
