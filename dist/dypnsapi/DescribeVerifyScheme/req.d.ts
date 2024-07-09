export interface DescribeVerifySchemeRequest {
    /**
     * 方案号。本参数值可以从[CreateVerifyScheme](~~CreateVerifyScheme~~)接口的返回参数`SchemeCode`获取。
     * @example `FC10000010643****`
     */
    "SchemeCode": string;
    /**
     * 用户ID。
     * @example `1234****`
     */
    "CustomerId"?: number;
}
