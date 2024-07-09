export interface DescribeAddonReleaseResponse {
    /**
     * Id of the request
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: string;
    /**
     * 操作是否成功：true：操作成功                                 false：操作失败。
     * @example `true`
     */
    Success: string;
    /**
     * 消息。
     * @example `success`
     */
    Message: string;
    /**
     * Release信息。
     */
    Data: {
        /**
         * Release信息。
         */
        Release: {
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
             * @example `23810923891`
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
             * @example `13818734031`
             */
            UserID: string;
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
            /**
             * 是否为托管组件。
             */
            Managed: boolean;
        };
        /**
         * AddonRelease的配置信息。
         * @example `{"host":"mysql-service.default","port":3306,"username":"root","password":"roots"}`
         */
        Config: string;
    };
}
