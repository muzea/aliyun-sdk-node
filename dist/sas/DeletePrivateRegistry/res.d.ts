export interface DeletePrivateRegistryResponse {
    /**
     * 返回数据。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `818E3B38-F018-50FF-9A85-5A521747****`
     */
    RequestId: string;
}
