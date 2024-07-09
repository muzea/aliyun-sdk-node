export interface DescribeAppVersionResponse {
    /**
     * 版本基本信息
     */
    AppVersion: {
        /**
         * 应用版本状态，状态定义和系统版本一致。
         * @example `PUBLISHED`
         */
        Status: string;
        /**
         * 当客户端不存在该应用时，服务端是否允许返回该应用版本，取值：**Y | N**。
         * @example `Y`
         */
        IsAllowNewInstall: string;
        /**
         * 版本发布说明
         * @example `sample release note`
         */
        ReleaseNote: string;
        /**
         * 应用包名
         * @example `com.aliyun.iovcc.ota`
         */
        PackageName: string;
        /**
         * 版本备注信息，终端设备不可见。
         * @example `sample remark`
         */
        Remark: string;
        /**
         * 版本状态的中文名
         * @example `已发布`
         */
        StatusName: string;
        /**
         * APK的MD5值
         * @example `34653456wertwe234653retwewer3456`
         */
        ApkMd5: string;
        /**
         * 应用重启参数
         * @example `k1:v1`
         */
        RestartAppParam: string;
        /**
         * 版本白名单，versioncode英文逗号拼接。
         * @example `10,20,30`
         */
        WhiteVersionList: string;
        /**
         * 应用名称
         * @example `iovcc-ota`
         */
        AppName: string;
        /**
         * 应用ID
         * @example `12`
         */
        AppId: string;
        /**
         * 如果restartType为应用重启，则这个字段表示应用重启的类型。取值：
         * - **service**：表示Service重启
         * - **activity**：表示Activity重启
         * @example `activity`
         */
        RestartAppType: string;
        /**
         * 应用版本versioncode，用于版本升级比较大小的逻辑。
         * @example `201`
         */
        VersionCode: number;
        /**
         * 版本黑名单，versioncode英文逗号拼接。
         * @example `10,20,30`
         */
        BlackVersionList: string;
        /**
         * 更新时间
         * @example `2018-04-24 12:23:45`
         */
        GmtModify: string;
        /**
         * 升级包下载地址
         * @example `http://www.cdn-server.com/file.zip`
         */
        DownloadUrl: string;
        /**
         * 应用版本的适配机型列表
         */
        Adapters: {
            /**
             * 适配的设备型号ID
             * @example `123`
             */
            DeviceModelId: string;
            /**
             * 最高允许的系统版本号
             * @example `2.0.1-R-20180412.0923`
             */
            MaxOsVersion: string;
            /**
             * 最低允许的系统版本号
             * @example `3.0.1-R-20180412.0923`
             */
            MinOsVersion: string;
            /**
             * 当前版本ID
             * @example `12345`
             */
            VersionId: number;
            /**
             * 升级包的ID
             * @example `1234`
             */
            Id: number;
            /**
             * 机型名
             * @example `DM1`
             */
            DeviceModelName: string;
        }[];
        /**
         * 是否静默升级，取值：**Y | N**。
         * @example `N`
         */
        IsSilentUpgrade: string;
        /**
         * 应用升级包安装方式。取值：**auto** / **customize**。
         * @example `auto`
         */
        InstallType: string;
        /**
         * 是否需要重启，取值：**Y | N**。
         * @example `N`
         */
        IsNeedRestart: string;
        /**
         * 升级包大小，字节为单位
         * @example `1204560`
         */
        Size: string;
        /**
         * 应用安装完成后的重启类型，取值：
         * - **system**：表示系统重启
         * - **app**：表示应用重启
         * @example `app`
         */
        RestartType: string;
        /**
         * 创建时间
         * @example `2018-04-24 12:23:45`
         */
        GmtCreate: string;
        /**
         * 升级包MD5
         * @example `345adsff2094asas2345et3`
         */
        Md5: string;
        /**
         * 应用版本号
         * @example `2.0.1`
         */
        AppVersion: string;
        /**
         * 是否强制升级，取值：**Y | N**。
         * @example `N`
         */
        IsForceUpgrade: string;
        /**
         * 版本ID
         * @example `12345`
         */
        Id: number;
        /**
         * 升级包原始地址
         * @example `http://www.oss-server.com/file.zip`
         */
        OriginalUrl: string;
    };
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
}
