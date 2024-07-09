export interface ManagePrivateRdsResponse {
    /**
     * 转发私有定制RDS接口返回的参数结果集。
     * @example `{"requestId":"E63C810A-4A13-47B6-BA67-C0E23A******"}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `0237BCD2-2C7A-4F86-A766-657AF6******`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
