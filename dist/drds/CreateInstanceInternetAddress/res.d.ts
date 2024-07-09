export interface CreateInstanceInternetAddressResponse {
    /**
     * 错误码。
     * > 仅当接口调用出错时会出现该参数。
     * @example `404`
     */
    Code: number;
    /**
     * 创建公网IP是否成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `1DF6052F-15E2-4E69-9628-D6BCC3******`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
