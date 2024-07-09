export interface ListNacosConfigsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 实例总数。
     * @example `12`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `4081087F-3429-5873-A1E7-D4B5479D0B84`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 每页展示实例数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 配置列表。
     */
    Configurations: {
        /**
         * 应用名称。
         * @example `test`
         */
        AppName: string;
        /**
         * 配置ID。
         * @example `log.yaml`
         */
        DataId: string;
        /**
         * 应用ID
         * @example `132****`
         */
        Id: string;
        /**
         * 分组ID。
         * @example `public`
         */
        Group: string;
    }[];
    /**
     * 返回代码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
