export interface DescribeDBClusterVersionResponse {
    /**
     * 当前数据库内核引擎版本是否为最新版本，取值范围如下：
     * -  **true**
     * -  **false**
     * @example `true`
     */
    IsLatestVersion: string;
    /**
     * 当前数据库代理版本是否为最新版本，取值范围如下：
     * * **true**
     * * **false**
     * @example `true`
     */
    IsProxyLatestVersion: string;
    /**
     * 数据库引擎的大版本号，取值范围如下：
     * * **8.0**
     * * **5.7**
     * * **5.6**
     * @example `8.0`
     */
    DBVersion: string;
    /**
     * 数据库引擎的修订版本号。
     * > 针对PolarDB MySQL版5.6版本的集群，仅发布日期在20200831之后的`Revision Version`信息会被返回，否则该参数为空。关于PolarDB MySQL版集群的内核版本详情，请参见[内核发布记录](~~423884~~)。
     * @example `8.0.1.1.7`
     */
    DBRevisionVersion: string;
    /**
     * 请求ID。
     * @example `47921222-0D37-4133-8C0D-017DC3******`
     */
    RequestId: string;
    /**
     * 当前数据库小版本状态，取值范围如下：
     * * **Stable**：当前版本状态稳定。
     * * **Old**：当前版本过旧，建议升级到最新版本。
     * * **HighRisk**：当前版本有严重缺陷，请立即升级到最新的版本。
     * * **Beta**：当前版本为Beta版。
     * >关于如何升级数据库小版本，请参见[版本升级](~~158572~~)。
     * @example `Stable`
     */
    DBVersionStatus: string;
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    DBClusterId: string;
    /**
     * 数据库引擎小版本号。
     * * 当`DBVersion`为**8.0**时，取值范围如下：
     *     * **8.0.2**
     *     * **8.0.1**
     * * 当`DBVersion`为**5.7**时，取值为**5.7.28**。
     * * 当`DBVersion`为**5.6**时，取值为**5.6.16**。
     * @example `8.0.1`
     */
    DBMinorVersion: string;
    /**
     * 数据库代理的版本。
     * @example `2.4.15`
     */
    ProxyRevisionVersion: string;
    /**
     * 数据库代理的版本状态。取值范围如下：
     * * **Stable**：当前版本状态稳定。
     * * **Old**：当前版本过旧，建议升级到最新版本。
     * * **HighRisk**：当前版本有严重缺陷，请立即升级到最新的版本。
     * * **Beta**：当前版本为Beta版。
     * >关于如何升级数据库代理版本，请参见[版本升级](~~158572~~)。
     * @example `Stable`
     */
    ProxyVersionStatus: string;
    /**
     * 数据库代理的最新版本。
     * @example `2.4.17`
     */
    ProxyLatestVersion: string;
    /**
     * 数据库内核引擎的最新版本。
     * @example `8.0.1.1.16`
     */
    DBLatestVersion: string;
    /**
     * 可升级的版本信息列表。
     */
    DBRevisionVersionList: {
        /**
         * 数据库版本发布状态。取值范围如下：
         * * **Stable**：当前版本状态稳定。
         * * **Old**：当前版本过旧，不建议升级到该版本。
         * * **HighRisk**：当前版本有严重缺陷，不建议升级到该版本。
         * * **Beta**：当前版本为Beta版。
         * @example `Stable`
         */
        ReleaseType: string;
        /**
         * 数据库引擎的修订版本Code，用于指定升级到该目标版本。
         * @example `20230707`
         */
        RevisionVersionCode: string;
        /**
         * 数据库引擎的修订版本号。
         * @example `8.0.1.1.35.1`
         */
        RevisionVersionName: string;
        /**
         * 版本发布说明。
         * @example `ReleaseNote`
         */
        ReleaseNote: string;
    }[];
    /**
     * 数据库Proxy版本发布状态。取值范围如下：
     * - **Stable**：当前版本状态稳定。
     * - **Old**：当前版本过旧，不建议升级到该版本。
     * - **HighRisk**：当前版本有严重缺陷，不建议升级到该版本。
     * - **Beta**：当前版本为Beta版。
     */
    ProxyRevisionVersionList: {
        /**
         * 发布类型。返回值：
         * * **LTS**：长期支持版本。
         * * **BETA**：预览版本。
         * @example `Stable`
         */
        ReleaseType: string;
        /**
         * 数据库Proxy引擎的修订版本Code，用于指定升级到该目标版本。
         * @example `20230707`
         */
        RevisionVersionCode: string;
        /**
         * 数据库Proxy引擎的修订版本号。
         * @example `2.8.24`
         */
        RevisionVersionName: string;
        /**
         * 版本发布说明。
         * @example `ReleaseNote`
         */
        ReleaseNote: string;
    }[];
}
