export interface ListNamespaceResponse {
    /**
     * 请求ID
     * @example `B7E5FCA5-55ED-451C-9649-0BB2B93387D0`
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
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 一页展示的列表数
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
         * 默认仓库类型，取值：
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
         * @example `crn-tiw8t3f8i5lt****`
         */
        NamespaceId: string;
        /**
         * 开启自动创建仓库
         * @example `true`
         */
        AutoCreateRepo: boolean;
        /**
         * 实例ID
         * @example `cri-94klsruryslx****`
         */
        InstanceId: string;
        /**
         * 命名空间名称
         * @example `test`
         */
        NamespaceName: string;
        /**
         * 资源组ID
         * @example `rg-acfm4n5kzyf2fbi`
         */
        ResourceGroupId: string;
    }[];
}
