export interface UpdateEngineNamespaceResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4E9FDCFE-0738-493B-B801-82BDFBCB****`
     */
    RequestId: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 命名空间类型，取值如下：
         * - `0`：全局配置
         * - `1`：默认命名空间
         * - `2`：自定义命名空间
         * @example `1`
         */
        Type: number;
        /**
         * 命名空间描述名称。
         * @example `mytestshowname`
         */
        NamespaceShowName: string;
        /**
         * 配额。
         * @example `1`
         */
        Quota: number;
        /**
         * 命名空间。
         * @example `public`
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
    };
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
