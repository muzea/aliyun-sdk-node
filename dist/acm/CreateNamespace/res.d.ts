export interface CreateNamespaceResponse {
    /**
     * 描述
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `6F7CC94A-7711-4873-8848-****`
     */
    RequestId: string;
    /**
     * 命名空间ID
     * @example `3115d2bf-1f44-47bf-a855-****`
     */
    NamespaceId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
