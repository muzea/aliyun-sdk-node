export interface DescribeClusterAddonInstanceResponse {
    /**
     * 组件名称。
     * @example `terway-eniip`
     */
    name: string;
    /**
     * 组件版本。
     * @example `v1.4.3`
     */
    version: string;
    /**
     * 组件状态：
     * - initial：安装中
     * - active：已安装
     * - unhealthy：状态异常
     * - upgrading：升级中
     * - updating：变更中
     * - deleting：卸载中
     * - deleted：已删除
     * @example `active`
     */
    state: string;
    /**
     * 组件配置。
     * @example `{"NetworkPolicy":"true"}`
     */
    config: string;
}
