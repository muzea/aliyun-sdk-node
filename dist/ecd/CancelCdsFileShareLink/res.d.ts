export interface CancelCdsFileShareLinkResponse {
    /**
     * 执行结果。返回`success`表示成功，否则将返回错误信息。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。当Code为`success`时，不返回该参数。
     * @example `success`
     */
    Message: string;
    /**
     * 数据信息。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 操作是否成功。
     * @example `true`
     */
    Success: boolean;
}
