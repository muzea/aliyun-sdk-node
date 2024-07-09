export interface DeployFileResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 发布包的ID，后续需要将该ID作为参数调用[GetDeployment](~~173950~~)接口，获取本次发布的具体情况。
     * @example `30000001`
     */
    Data: number;
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
}
