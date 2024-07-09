export interface InsertListResponse {
    /**
     * 请求ID。
     * @example `D2FEE6D7-DCA6-57B4-946A-9E670B773518`
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
     * > 请求成功时该参数返回为空。
     * @example `There is an error in the call.`
     */
    Message: string;
    /**
     * InsertList的返回值，详情请参见[InsertListResult](https://help.aliyun.com/document_detail/462779.html)。
     */
    Data: any;
}
