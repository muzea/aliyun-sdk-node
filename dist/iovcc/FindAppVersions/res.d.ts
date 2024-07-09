export interface FindAppVersionsResponse {
    /**
     * 版本列表信息，包括当前页的版本列表以及总共符合条件的版本个数。
     */
    AppVersionList: {
        /**
         * 符合条件的当前页的版本列表。
         */
        Items: {
            /**
             * 版本状态，状态定义和系统版本升级一致。
             * @example `PUBLISHED`
             */
            Status: string;
            /**
             * 版本创建时间戳
             * @example `12432500000`
             */
            GmtCreateTimestamp: number;
            /**
             * 版本更新时间
             * @example `2018-04-24 12:23:45`
             */
            GmtModify: string;
            /**
             * 表示当客户端不存在此应用时，是否允许新安装此应用，相当于后装。
             * @example `Y`
             */
            IsAllowNewInstall: string;
            /**
             * 状态名
             * @example `已发布`
             */
            StatusName: string;
            /**
             * 应用重启参数，Y或N
             * @example `N`
             */
            RestartAppParam: string;
            /**
             * 是否静默升级，Y或N
             * @example `N`
             */
            IsSilentUpgrade: string;
            /**
             * 应用包名
             * @example `com.aliyun.iovcc.ota`
             */
            AppPackageName: string;
            /**
             * 版本更新时间戳
             * @example `12432500000`
             */
            GmtModifyTimestamp: number;
            /**
             * 应用名
             * @example `iovcc-ota`
             */
            AppName: string;
            /**
             * 版本升级包客户端安装类型。取值：
             * - **auto**：表示自动安装
             * - **customize**：表示自定义安装
             * @example `auto`
             */
            InstallType: string;
            /**
             * 是否需要重启，Y或N
             * @example `N`
             */
            IsNeedRestart: string;
            /**
             * 如果restartType为应用重启，则这个字段表示应用重启的类型。取值：
             * - **service**：表示Service重启
             * - **activity**：表示Activity重启
             * @example `service`
             */
            RestartAppType: string;
            /**
             * 应用ID
             * @example `20`
             */
            AppId: string;
            /**
             * 应用安装完成后的重启类型，取值：
             * - **system**：表示系统重启
             * - **app**：表示应用重启
             * @example `app`
             */
            RestartType: string;
            /**
             * 版本创建时间
             * @example `2018-04-24 12:23:45`
             */
            GmtCreate: string;
            /**
             * 应用版本号
             * @example `2.0.2`
             */
            AppVersion: string;
            /**
             * 应用版本versioncode，是用于应用升级版本比较大小的字段。
             * @example `201`
             */
            VersionCode: string;
            /**
             * 是否强制升级，Y或N
             * @example `N`
             */
            IsForceUpgrade: string;
            /**
             * 版本ID
             * @example `12345`
             */
            Id: number;
        }[];
        /**
         * 符合条件的总记录数，方便调用方计算总页数。
         * @example `1000`
         */
        TotalCount: number;
    };
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
}
