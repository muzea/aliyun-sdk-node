export interface DescribeNamespacesResponse {
    /**
     * 命名空间列表
     */
    Namespaces: {
        /**
         * 命名空间类型：
         * - 1：默认命名空间
         * - 2：自定义命名空间
         * @example `1`
         */
        Type: number;
        /**
         * 配置数上限
         * @example `200`
         */
        Quota: number;
        /**
         * 命名空间ID
         * @example `3115d2bf-1f44-47bf-a855-****`
         */
        NamespaceId: string;
        /**
         * 配置数
         * @example `20`
         */
        ConfigCount: number;
        /**
         * 命名空间名称
         * @example `测试环境`
         */
        NamespaceName: string;
    }[];
    /**
     * 响应描述
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `3116581E-C664-4D3A-A055-****`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
