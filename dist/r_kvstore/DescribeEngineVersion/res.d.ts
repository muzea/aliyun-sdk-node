export interface DescribeEngineVersionResponse {
    /**
     * 实例的小版本是否为最新，返回值：
     * * **true**：是。
     * * **false**：不是。
     * @example `false`
     */
    IsLatestVersion: boolean;
    /**
     * 请求ID。
     * @example `A52974D1-9D57-4805-86CC-92E6EDE8****`
     */
    RequestId: string;
    /**
     * Proxy代理节点当前的小版本。
     * > 仅集群与读写分离架构实例返回本参数。
     * @example `6.6.0`
     */
    ProxyMinorVersion: string;
    /**
     * 实例小版本的更新说明，包含发布时间、小版本号、类型（例如新特性）及详细说明等信息。
     * @example `{\"releaseInfo\":{\"createTime\":\"2021-07-27\",\"level\":1,\"releaseVersion\":\"0.5.4\",\"releaseNote\":\"功能更新：增强稳定性。\"}],\"versionChangesLevel\":2}`
     */
    DBVersionRelease: string;
    /**
     * Proxy代理节点的小版本更新说明，包含发布时间、小版本号、类型（例如新特性）及详细说明等信息。
     * > 仅集群与读写分离架构实例返回本参数。
     * @example `{\"releaseInfo\":[{\"createTime\":\"2021-06-08\",\"level\":0,\"releaseVersion\":\"6.6.2\",\"releaseNote\":\"新特性：增加对部分内部命令的支持。\"}],\"versionChangesLevel\":2}`
     */
    ProxyVersionRelease: string;
    /**
     * 实例是否可升级大版本，返回值：
     * * **true**：可升级。
     * * **false**：不可升级，通常已经是最新版本。
     * > 如需升级大版本，请调用[ModifyInstanceMajorVersion](~~95259~~)接口。
     * @example `true`
     */
    EnableUpgradeMajorVersion: boolean;
    /**
     * 实例是否可升级小版本，返回值：
     * * **true**：可升级。
     * * **false**：已经是最新版本，不可升级。
     * > 如需升级小版本，请调用[ModifyInstanceMinorVersion](~~129381~~)接口。
     * @example `true`
     */
    EnableUpgradeMinorVersion: boolean;
    /**
     * 实例的大版本。
     * @example `5.0`
     */
    MajorVersion: string;
    /**
     * 数据库类型，返回值：**redis**或**memcache**。
     * @example `redis`
     */
    Engine: string;
    /**
     * 实例当前的小版本。
     * @example `redis-5.0_0.5.0`
     */
    MinorVersion: string;
    /**
     * 是否Redis的兼容版本。
     * @example `1`
     */
    IsRedisCompatibleVersion: string;
    /**
     * 是否启用SSL，取值：
     * * **1**: 开启
     * * **0**: 关闭
     * @example `1`
     */
    IsSSLEnable: string;
    /**
     * 是否支持新版TLS，取值：
     * * **1**: 开启
     * * **0**: 关闭
     * @example `1`
     */
    IsNewSSLMode: string;
    /**
     * 是否开启了小版本自动升级，取值：
     * - **0**：未开启。
     * - **1**：开启。
     * @example `0`
     */
    IsAutoUpgradeOpen: string;
    /**
     * 该实例当前可升级至最新的小版本信息。
     */
    DBLatestMinorVersion: {
        /**
         * 版本号。
         * @example `7.0.1.4`
         */
        MinorVersion: string;
        /**
         * 版本变更的重要性，取值：
         * * **0**：一般重要
         * * **1**：比较重要
         * * **2**：非常重要
         * @example `0`
         */
        Level: string;
        /**
         * 从实例当前小版本到最新小版本的版本演进路线，与版本文档一致，可以直接至版本说明文档查看更详细的信息。
         */
        VersionRelease: {
            /**
             * 版本升级的重要性（推荐升级程度），取值：
             * * 0：一般重要
             * * 1：比较重要
             * * 2：非常重要
             * @example `0`
             */
            VersionChangesLevel: string;
            ReleaseInfo: {
                /**
                 * 小版本信息。
                 */
                ReleaseInfoList: {
                    /**
                     * EMR发行版。
                     * @example `EMR-5.7.0`
                     */
                    ReleaseVersion: string;
                    /**
                     * 实例的创建时间。
                     * @example `2022-11-21T13:28Z`
                     */
                    CreateTime: string;
                    /**
                     * 版本发布说明
                     * @example `发布说明`
                     */
                    ReleaseNote: string;
                    /**
                     * 重要等级。
                     * @example `0`
                     */
                    Level: string;
                    /**
                     * 可升级的版本英文描述。
                     * @example `版本升级英文描述`
                     */
                    ReleaseNoteEn: string;
                }[];
            };
        };
    };
    /**
     * 该Proxy节点当前可升级至最新的小版本信息。
     */
    ProxyLatestMinorVersion: {
        /**
         * 版本号。
         * @example `7.0.6`
         */
        MinorVersion: string;
        /**
         * 版本变更的重要性，取值：
         * * **0**：一般重要
         * * **1**：比较重要
         * * **2**：非常重要
         * @example `0`
         */
        Level: string;
        /**
         * 从实例当前小版本到最新小版本的版本演进路线，与版本文档一致，可以直接至版本说明文档查看更详细的信息。
         */
        VersionRelease: {
            ReleaseInfo: {
                /**
                 * 小版本信息。
                 */
                ReleaseInfoList: {
                    /**
                     * EMR发行版。
                     * @example `EMR-5.9.1`
                     */
                    ReleaseVersion: string;
                    /**
                     * 版本的发布时间
                     * @example `2022-08-23T14:26:20Z`
                     */
                    CreateTime: string;
                    /**
                     * 版本的变更说明
                     * @example `x x x x`
                     */
                    ReleaseNote: string;
                    /**
                     * 版本变更的重要性，取值：
                     * * **0**：一般重要
                     * * **1**：比较重要
                     * * **2**：非常重要
                     * @example `0`
                     */
                    Level: string;
                    /**
                     * 可升级的版本英文描述。
                     * @example `版本升级英文描述`
                     */
                    ReleaseNoteEn: string;
                }[];
            };
            /**
             * 版本升级的重要性（推荐升级程度），取值：
             * * 0：一般重要
             * * 1：比较重要
             * * 2：非常重要
             * @example `0`
             */
            VersionChangesLevel: string;
        };
    };
    /**
     * 是否开启NGBL模式，取值：
     * * **0**：未开启。
     * * **1**：开启。
     * @example `1`
     */
    IsOpenNGLB: string;
}
