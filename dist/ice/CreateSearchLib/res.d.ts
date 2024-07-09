export interface CreateSearchLibResponse {
    /**
     * 请求ID。
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 搜索库名称。
     * @example `test1`
     */
    SearchLibName: string;
}
