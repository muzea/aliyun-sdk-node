export interface ListChartNamespaceResponse {
    /**
     * 请求ID
     * @example `F56D589D-AF7F-4900-BA46-62C780AC2C10`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 页大小
     * @example `30`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: string;
    /**
     * 命名空间列表
     */
    Namespaces: {
        /**
         * 仓库默认类型，取值：
         * - `PUBLIC`：公开仓库
         * - `PRIVATE`：私有仓库
         * @example `PUBLIC`
         */
        DefaultRepoType: string;
        /**
         * 命名空间状态，取值：
         * - `NORMAL`：正常
         * - `DELETING`：删除中
         * @example `NORMAL`
         */
        NamespaceStatus: string;
        /**
         * 命名空间ID
         * @example `null`
         */
        NamespaceId: string;
        /**
         * 自动创建仓库
         * @example `true`
         */
        AutoCreateRepo: boolean;
        /**
         * 实例ID
         * @example `cri-kmsiwlxxdcva****`
         */
        InstanceId: string;
        /**
         * 命名空间名称
         * @example `test`
         */
        NamespaceName: string;
        /**
         * 资源组ID
         * @example `rg-acfm4n5kzyf****`
         */
        ResourceGroupId: string;
    }[];
}
