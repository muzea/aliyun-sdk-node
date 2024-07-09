export interface CreateUserResponse {
    /**
     * 新建的用户的ID。
     * @example `1`
     */
    UserId: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
}
