export interface DescribeAddonResponse {
    /**
     * 组件名称。
     * @example `coredns`
     */
    name: string;
    /**
     * 组件版本。
     * @example `v1.9.3.6-32932850-aliyun`
     */
    version: string;
    /**
     * 组件分类。
     * @example `network`
     */
    category: string;
    /**
     * 是否为托管组件。
     * @example `false`
     */
    managed: boolean;
    /**
     * 是否默认安装。
     * @example `true`
     */
    install_by_default: boolean;
    /**
     * 组件自定义参数schema。
     * @example `{}`
     */
    config_schema: string;
    /**
     * 组件支持的操作，可能的值：
     * - Install
     * - Upgrade
     * - Modify
     * - Uninstall
     */
    supported_actions: string[];
    /**
     * 组件支持的体系结构，可能的值：
     * - amd64
     * - arm64
     */
    architecture: string[];
    /**
     * 组件新版本。
     */
    newer_versions: {
        /**
         * 版本号。
         * @example `v1.9.3.10-7dfca203-aliyun`
         */
        version: string;
        /**
         * 是否可升级到该版本，
         * @example `true`
         */
        upgradable: boolean;
        /**
         * 该版本要求的最低集群版本。
         * @example `1.20.4`
         */
        minimum_cluster_version: string;
    }[];
}
