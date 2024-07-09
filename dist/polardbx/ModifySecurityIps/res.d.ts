export interface ModifySecurityIpsResponse {
    /**
     * 请求返回信息，正确显示success，错误显示错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
