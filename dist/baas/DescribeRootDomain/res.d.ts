export interface DescribeRootDomainResponse {
    /**
     * 请求Id
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 结果
     * @example `onaliyunbaas.com`
     */
    Result: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
}
