export interface UpdateOsVersionRequest {
    /**
     * 是否里程碑，Y或N。
     * @example `Y`
     */
    "IsMilestone": string;
    /**
     * 是否强制夜间升级，Y或N；与强制升级不能同时选择是。
     * @example `N`
     */
    "IsForceNightUpgrade": string;
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 设备型号ID
     * @example `12`
     */
    "DeviceModelId": string;
    /**
     * 系统版本号
     * @example `2.0.1-R-20180501.1208`
     */
    "SystemVersion": string;
    /**
     * 版本发布说明，客户端展示升级说明。
     * @example `改用UI用户体验，提升系统稳定性`
     */
    "ReleaseNote": string;
    /**
     * 版本备注，仅用于服务端管理维护。
     * @example `版本备注信息`
     */
    "Remark"?: string;
    /**
     * 是否强制升级，Y或N。
     * @example `N`
     */
    "IsForceUpgrade": string;
    /**
     * 系统版本黑名单列表，英文逗号隔开。
     * @example `2.0.1-R-20180501.1208,2.0.1-R-20180501.1209`
     */
    "BlackVersionList"?: string;
    /**
     * 系统版本白名单列表，英文逗号隔开。
     * @example `2.0.1-R-20180501.1208,2.0.1-R-20180501.1209`
     */
    "WhiteVersionList"?: string;
    /**
     * 允许的OTA SDK的最大版本versioncode
     * @example `100`
     */
    "MaxClientVersion"?: string;
    /**
     * 允许的OTA SDK的最小版本versioncode
     * @example `90`
     */
    "MinClientVersion"?: string;
    /**
     * 夜间升级下载类型，1表示WIFI下下载，2表示任全网下载。
     * @example `1`
     */
    "NightUpgradeDownloadType": string;
    /**
     * 夜间升级时是否给出提示框，Y或N。
     * @example `N`
     */
    "NightUpgradeIsShowTip": string;
    /**
     * 夜间升级时是否给出提示框，Y或N。
     * @example `N`
     */
    "NightUpgradeIsAllowedCancel": string;
    /**
     * 升级包列表，包括全量包和增量包。
     * 格式为：`id|baseVersion|romUrl,id|baseVersion|romUrl`。
     * - 第一位指升级包的ID，如果是新的升级包，则为0。
     * - 第二位为基准系统版本号，全量包的基准系统版本号位0。
     * - 最后一位为升级包下载地址。
     * @example `10|0|http://www.oss-server.com/file0.zip,11|123|http://www.oss-server.com/file1.zip,0|124|http://www.oss-server.com/file2.zip`
     */
    "RomList": string;
    /**
     * 版本ID
     * @example `123456`
     */
    "Id": string;
    /**
     * 是否允许移动网络下载升级包
     * @example `Y`
     */
    "EnableMobileDownload": string;
    /**
     * 允许移动网络下载的包的最大限制，单位为M，在允许移动网络下载包的情况下，大于该限制的包也不会自动下载。
     * @example `10`
     */
    "MobileDownloadMaxSize"?: string;
}
