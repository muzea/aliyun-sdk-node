export interface ListAddonReleasesResponse {
    /**
     * Id of the request
     * @example `E9C9DA3D-10FE-472E-9EEF-2D0A3E41****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 查询是否成功：true：成功。                                 false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * AddonRelease集合。
         */
        Releases: {
            /**
             * 组件名称。
             * @example `mysql`
             */
            AddonName: string;
            /**
             * 告警组数量。
             * @example `1`
             */
            AlertRuleCount: number;
            /**
             * 安装阶段。
             */
            Conditions: {
                /**
                 * 第一次转换时间。
                 * @example `2018-01-31T14:32:19Z`
                 */
                FirstTransitionTime: string;
                /**
                 * 最后一次转换时间。
                 * @example `2018-01-31T14:32:19Z`
                 */
                LastTransitionTime: string;
                /**
                 * 详细信息。
                 * @example `xxxx`
                 */
                Message: string;
                /**
                 * 失败原因。
                 * @example `xxxx`
                 */
                Reason: string;
                /**
                 * 阶段状态。
                 * @example `True`
                 */
                Status: string;
                /**
                 * 阶段类型。
                 * @example `Loaded`
                 */
                Type: string;
            }[];
            /**
             * 创建时间。
             * @example `2023-09-22T16:56:29+08:00`
             */
            CreateTime: string;
            /**
             * 大盘数量。
             * @example `1`
             */
            DashboardCount: number;
            /**
             * 插件数量。
             * @example `2`
             */
            ExporterCount: number;
            /**
             * 是否有配置。
             * @example `true
            `
             */
            HaveConfig: boolean;
            /**
             * 安装的用户ID。
             * @example `1268790592387`
             */
            InstallUserId: string;
            /**
             * 语言。
             * @example `zh`
             */
            Language: string;
            /**
             * 安装后的ReleaseID。
             * @example `be29c093-3fd6-4fb6-9430-797030cc183a`
             */
            ReleaseId: string;
            /**
             * Release的名称。
             * @example `mysql-1695372983039`
             */
            ReleaseName: string;
            /**
             * 定位到的场景。
             * @example `database`
             */
            Scene: string;
            /**
             * 状态。
             * @example `0`
             */
            Status: string;
            /**
             * 更新时间。
             * @example `2023-09-22T16:56:29+08:00`
             */
            UpdateTime: string;
            /**
             * 用户ID。
             * @example `111`
             */
            UserId: string;
            /**
             * Addon版本。
             * @example `0.0.1`
             */
            Version: string;
            /**
             * 环境ID。
             * @example `env-xxxx`
             */
            EnvironmentId: string;
            /**
             * 地域ID。
             * @example `cn-heyuan`
             */
            RegionId: string;
            Managed: boolean;
        }[];
        /**
         * 数据总条数。
         * @example `12`
         */
        Total: number;
    };
}
