export interface ListAddonsResponse {
    /**
     * 可用组件列表。
     */
    addons: {
        /**
         * 组件名称。
         * @example `arms-prometheus`
         */
        name: string;
        /**
         * 版本。
         * @example `1.1.9`
         */
        version: string;
        /**
         * 是否为托管组件。
         * @example `false`
         */
        managed: boolean;
        /**
         * 是否默认安装。
         * @example `false`
         */
        install_by_default: boolean;
        /**
         * 组件分类。
         * @example `monitor`
         */
        category: string;
        /**
         * 组件自定义参数的schema。
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
    }[];
}
