export interface BuySessionPackageResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5Fxxxxxxxx`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时的错误消息。
     * @example `There is a missing parameter.
    `
     */
    Message: string;
    /**
     * 是否调用成功。true：调用成功。false：调用失败。
     * @example `false`
     */
    Success: string;
    /**
     * 如果创建成功，这个就是会话包的唯一id。
     * @example `tp-xxxxxxxxxx`
     */
    SessionPackageId: number;
}
