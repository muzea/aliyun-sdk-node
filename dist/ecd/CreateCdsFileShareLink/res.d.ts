export interface CreateCdsFileShareLinkResponse {
    /**
     * 执行结果。返回`success`表示成功，否则将返回错误信息。
     * @example `success`
     */
    Code: string;
    /**
     * 错误信息。当Code为`success`时，不返回该参数。
     * @example `success`
     */
    Message: string;
    /**
     * 数据信息。
     */
    Data: any;
    /**
     * 请求ID。
     * @example `51592A88-0F2C-55E6-AD2C-2AD9C10D****`
     */
    RequestId: string;
    /**
     * 操作是否成功。
     * @example `true`
     */
    Success: boolean;
}
