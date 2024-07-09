export interface CreateServiceLinkedRoleForProductResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `C36345A1-75F3-5A1A-BFCF-33B8271971FA`
     */
    RequestId: string;
    /**
     * 接口返回码：Success：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
    HttpCode: number;
}
