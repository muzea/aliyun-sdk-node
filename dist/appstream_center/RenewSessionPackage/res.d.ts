export interface RenewSessionPackageResponse {
    /**
     * 请求ID
     * @example `50158E8B-992E-1286-B174-**********`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 出错时的错误信息
     * @example `There is a missing parameter.`
     */
    Message: string;
    /**
     * 是否成功
     * @example `success`
     */
    Success: string;
    /**
     * 续费成功则返回会话包ID
     * @example `22983172******`
     */
    SessionPackageId: number;
}
