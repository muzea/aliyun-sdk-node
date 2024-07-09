export interface CreateEngineNamespaceResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F6092602-C357-4750-89D9-E572FBEA****`
     */
    RequestId: string;
    /**
     * 集群ID。
     * @example `mse-892k****`
     */
    ClusterId: string;
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
         * 命名空间展示名称。
         * @example `dev`
         */
        NamespaceShowName: string;
        /**
         * 配额。
         * @example `1`
         */
        Quota: number;
        /**
         * 命名空间ID。
         * @example `f4fa5b81-2f26-4900-833a-7516b315ebb2`
         */
        Namespace: string;
        /**
         * 命名空间描述。
         * @example `mytest`
         */
        NamespaceDesc: string;
        /**
         * 配置数量。
         * @example `1`
         */
        ConfigCount: number;
        /**
         * 活跃服务数。
         * @example `3`
         */
        ServiceCount: number;
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
