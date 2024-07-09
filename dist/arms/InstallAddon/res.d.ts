export interface InstallAddonResponse {
    /**
     * Id of the request
     * @example `C21AB7CF-B7AF-410F-BD61-82D1567F****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功：true：操作成功                                 false：操作失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
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
             * 原因。
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
         * @example `123456`
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
        /**
         * 是否为托管组件。
         */
        Managed: boolean;
    };
}
