export interface ListEngineNamespacesResponse {
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 实例总数。
     * @example `7`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `062D13C5-DEA3-4921-8918-C49A0F1B****`
     */
    RequestId: string;
    /**
     * 信息。
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
     * 数据概览。
     */
    Data: {
        /**
         * 命名空间类型，取值如下：
         * - `0`：全局配置
         * - `1`：默认命名空间
         * - `2`：自定义命名空间
         * @example `0`
         */
        Type: number;
        /**
         * 命名空间名称。
         * @example `public`
         */
        NamespaceShowName: string;
        /**
         * 配额。
         * @example `200`
         */
        Quota: number;
        /**
         * 命名空间。
         * @example `DEFAULT`
         */
        Namespace: string;
        /**
         * 命名空间描述。
         * @example `mytest`
         */
        NamespaceDesc: string;
        /**
         * 配额数量。
         * @example `1`
         */
        ConfigCount: number;
        /**
         * 活跃服务数。
         * @example `3`
         */
        ServiceCount: string;
        /**
         * 创建此空间的来源。
         * @example `mse`
         */
        SourceType: string;
    }[];
    /**
     * 错误码。
     * @example `mse-100-000`
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
