export interface QueryServiceStatusResponse {
    /**
     * 请求ID。
     * @example `E63E7F4F-8538-5B0E-8712-78F92B6DCB9C`
     */
    RequestId: string;
    /**
     * Serverless产品服务状态。返回值为UNUSED、OPENING、IN_SERVICE。
     * @example `OPENING`
     */
    ServiceStatus: string;
}
