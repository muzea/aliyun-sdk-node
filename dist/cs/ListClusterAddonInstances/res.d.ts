export interface ListClusterAddonInstancesResponse {
    /**
     * 已安装的组件实例列表。
     */
    addons: {
        /**
         * 组件名称。
         * @example `coredns`
         */
        name: string;
        /**
         * 组件状态，可能的取值：
         * - active：已安装
         * - updating：变更中
         * - upgrading：升级中
         * - deleting：卸载中
         * @example `active`
         */
        state: string;
        /**
         * 组件版本。
         * @example `v1.9.3.10-7dfca203-aliyun`
         */
        version: string;
    }[];
}
