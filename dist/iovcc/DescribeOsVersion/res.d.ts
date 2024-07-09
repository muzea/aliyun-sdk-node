export interface DescribeOsVersionResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 版本基本信息
     */
    OsVersion: {
        /**
         * 版本状态，所有的状态有：
         * - **INITIAL**：初始状态
         * - **CREATING**：创建中
         * - **CREATE_FAILED**：创建失败
         * - **CREATE_COMPLETED**：创建完成
         * - **TESTING**：测试中
         * - **TEST_PASSED**：测试已通过
         * - **PREPUBLISHED**：预发布
         * - **PUBLISHED**：已发布
         * - **UNUSED**：已废弃
         * - **FROZEN**：已冻结
         * - **DOWN**：已下架
         * @example `PUBLISHED`
         */
        Status: string;
        /**
         * 设备型号ID
         * @example `123`
         */
        DeviceModelId: string;
        /**
         * 系统版本黑名单列表，英文逗号隔开。
         * @example `2.0.1,3.0.1`
         */
        BlackVersionList: string;
        /**
         * 是否里程碑，Y或N。
         * @example `Y`
         */
        IsMilestone: string;
        /**
         * 版本创建时间，格式：`yyyy-MM-dd HH:mm:ss`。
         * @example `2018-04-24 12:23:45`
         */
        GmtModify: string;
        /**
         * 版本发布说明
         * @example `改用UI用户体验，提升系统稳定性`
         */
        ReleaseNote: string;
        /**
         * 备注
         * @example `版本备注信息，终端设备不可见`
         */
        Remark: string;
        /**
         * 系统版本号
         * @example `2.0.1-R-20180506.0824`
         */
        SystemVersion: string;
        /**
         * 版本状态的中文名
         * @example `已发布`
         */
        StatusName: string;
        /**
         * 机型名
         * @example `DM1`
         */
        DeviceModelName: string;
        /**
         * 系统版本白名单列表
         * @example `2.0.1,3.0.1`
         */
        WhiteVersionList: string;
        /**
         * 允许的OTA SDK的最大版本versioncode。
         * @example `200`
         */
        MaxClientVersion: string;
        /**
         * 升级包列表
         */
        RomList: {
            /**
             * 升级包修改时间，格式：`yyyy-MM-dd HH:mm:ss`。
             * @example `2018-04-24 12:23:45`
             */
            GmtModify: string;
            /**
             * 升级包分片数，10MB一个分片
             * @example `10`
             */
            SplitNum: string;
            /**
             * 升级包下载地址
             * @example `https://www.cdn-server.com/file.zip`
             */
            DownloadUrl: string;
            /**
             * 升级包大小，单位字节
             * @example `10000`
             */
            Size: string;
            /**
             * 升级包创建时间，格式：`yyyy-MM-dd HH:mm:ss`。
             * @example `2018-04-24 12:23:45`
             */
            GmtCreate: string;
            /**
             * 升级包所属的版本ID
             * @example `12345`
             */
            VersionId: number;
            /**
             * 升级包MD5
             * @example `we3utrw4esdfgkhsdlfha`
             */
            Md5: string;
            /**
             * 基准系统版本，如果是全量包，则为空。
             * @example `2.0.1-R-20180502.1205`
             */
            BaseVersion: string;
            /**
             * 升级包ID
             * @example `100`
             */
            Id: number;
            /**
             * 升级包原始地址
             * @example `http://www.oss-server.com/file.zip`
             */
            OriginalUrl: string;
        }[];
        /**
         * 允许的OTA SDK的最小版本versioncode。
         * @example `100`
         */
        MinClientVersion: string;
        /**
         * 夜间升级选项
         */
        NightUpgradeOption: {
            /**
             * 夜间升级下载类型。
             * - **1**表示WIFI下下载。
             * - **2**表示任全网下载。
             * @example `1`
             */
            DownloadType: string;
            /**
             * 夜间升级是否允许取消，取值：Y或N。
             * @example `N`
             */
            IsAllowedCancel: string;
            /**
             * 夜间升级时是否给出提示框，取值：Y或N。
             * @example `N`
             */
            IsShowTip: string;
        };
        /**
         * 版本创建时间，格式：`yyyy-MM-dd HH:mm:ss`。
         * @example `2018-04-24 12:23:45`
         */
        GmtCreate: string;
        /**
         * 是否强制夜间升级，Y或N；不允许和是否强制升级同时设置为Y。
         * @example `N`
         */
        IsForceNightUpgrade: string;
        /**
         * 允许移动网络下载的包的最大限制，单位为M，在允许移动网络下载包的情况下，大于该限制的包也不会自动下载。
         * @example `10`
         */
        MobileDownloadMaxSize: string;
        /**
         * 是否允许移动网络下载升级包
         * @example `Y`
         */
        EnableMobileDownload: string;
        /**
         * 是否强制升级，Y或N。
         * @example `N`
         */
        IsForceUpgrade: string;
        /**
         * 版本ID
         * @example `12345`
         */
        Id: number;
    };
}
