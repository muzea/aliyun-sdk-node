export interface DeleteVerifySchemeRequest {
    /**
     * 方案号。本参数值可以从[CreateVerifyScheme](~~CreateVerifyScheme~~)接口的返回参数`SchemeCode`获取。
     * @example `FC10000014164****`
     */
    "SchemeCode": string;
    /**
     * 用户ID。
     * @example `12345678`
     */
    "CustomerId"?: number;
}
