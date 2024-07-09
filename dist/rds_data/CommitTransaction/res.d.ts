export interface CommitTransactionResponse {
    /**
     * 请求ID。
     * @example `9689CF67-B653-5A0F-B9E3-3CC6BBD580ED`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `There is an error in the call.`
     */
    Message: string;
    /**
     * 返回数据，详情请参见[CommitTransactionResult](~~459811~~)。
     */
    Data: any;
}
