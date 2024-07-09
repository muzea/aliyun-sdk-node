export interface ListInstanceExtensionsResponse {
    /**
     * 请求ID。
     * @example `7565770E-7C45-462D-BA4A-8A5396F2CAD1`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前页记录数。
     * @example `20`
     */
    PageRecordCount: number;
    /**
     * 插件项目
     */
    Items: {
        /**
         * 插件id
         * @example `1`
         */
        ExtensionId: string;
        /**
         * 插件名称
         * @example `citext`
         */
        Name: string;
        /**
         * 已安装数据库
         * @example `test`
         */
        InstalledDatabases: string;
        /**
         * 当前版本
         * @example `1.0`
         */
        CurrentVersion: string;
        /**
         * 最新版本
         * @example `1.1`
         */
        LatestVersion: string;
        /**
         * 插件状态
         * @example `installed`
         */
        Status: string;
        /**
         * 插件描述
         * @example `citext usage`
         */
        Description: string;
        /**
         * 插件安装是否需要重启实例
         * @example `false`
         */
        IsInstallNeedRestart: boolean;
    }[];
}
