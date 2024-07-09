export interface DescribePostgresExtensionsResponse {
    /**
     * 请求ID。
     * @example `7E4448A6-9FE6-4474-A0C1-AA7CFC772CAC`
     */
    RequestId: string;
    /**
     * 指定数据库下未安装插件信息列表。
     */
    UninstalledExtensions: {
        /**
         * 插件名称。
         * @example `pg_cron`
         */
        Name: string;
        /**
         * 插件默认版本。
         * @example `4.1`
         */
        DefaultVersion: string;
        /**
         * 插件当前安装的版本。
         * @example `4.1`
         */
        InstalledVersion: string;
        /**
         * 插件用途。
         * @example `PostgreSQL load profile repository and report builder`
         */
        Comment: string;
        /**
         * 插件所属用户。
         * @example `test_user`
         */
        Owner: string;
        /**
         * 插件优先级。
         * @example `0`
         */
        Priority: string;
        /**
         * 此插件安装时所依赖的插件。
         * @example `{dblink,plpgsql}`
         */
        Requires: string;
        /**
         * 插件类别。
         * @example `information_stat`
         */
        Category: string;
    }[];
    /**
     * 指定数据库下已安装插件信息列表。
     */
    InstalledExtensions: {
        /**
         * 插件名称。
         * @example `pg_profile`
         */
        Name: string;
        /**
         * 插件默认版本。
         * @example `4.1`
         */
        DefaultVersion: string;
        /**
         * 插件当前安装的版本。
         * @example `4.1`
         */
        InstalledVersion: string;
        /**
         * 插件用途。
         * @example `PostgreSQL load profile repository and report builder`
         */
        Comment: string;
        /**
         * 插件所属用户。
         * @example `test_user`
         */
        Owner: string;
        /**
         * 插件优先级。
         * - **0**：默认展示。
         * - **1**：优先展示。
         * @example `0`
         */
        Priority: string;
        /**
         * 此插件安装时所依赖的插件。
         * @example `{dblink,plpgsql}`
         */
        Requires: string;
        /**
         * 插件类别。
         * - **external_access**：外部访问。
         * - **index_support**：索引支持。
         * - **information_sta**t：信息统计。
         * - **geography_space**：地理时空。
         * - **vector_engine**：向量引擎。
         * - **timing_engine**：时序引擎。
         * - **data_type**：数据类型。
         * - **encrypt_secure**：加密和安全。
         * - **text_process**：文本处理。
         * - **operation_maintenance**：应用运维。
         * - **self_develop**：自研。
         * @example `information_stat`
         */
        Category: string;
    }[];
    /**
     * 插件概览相关信息。
     * @example `None`
     */
    Overview: any;
}
