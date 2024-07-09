export interface ListListenersByIpResponse {
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 实例总数。
     * @example `6`
     */
    TotalCount: number;
    /**
     * 监听信息。
     */
    Listeners: {
        /**
         * 校验串。
         * @example `23sdfdf`
         */
        Md5: string;
        /**
         * 数据ID。
         * @example `test.yaml`
         */
        DataId: string;
        /**
         * 分组。
         * @example `default`
         */
        Group: string;
        NamespaceId: string;
    }[];
    /**
     * 请求ID。
     * @example `54973C90-F379-4372-9AA5-053A3F7****`
     */
    RequestId: string;
    /**
     * 响应信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 当前页的大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 错误码。
     * @example `MSE-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
