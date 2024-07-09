export interface CreateOsVersionRequest {
    /**
     * 是否强制夜间升级，取值：**Y | N**。
     * 与强制升级不能同时选择是（Y）。
     * @example `N`
     */
    "IsForceNightUpgrade": string;
    /**
     * 允许的OTA SDK的最大版本versioncode
     * @example `1200`
     */
    "MaxClientVersion"?: string;
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
     * 版本发布说明
     * @example `改用UI用户体验，提升系统稳定性`
     */
    "ReleaseNote"?: string;
    /**
     * 备注
     * @example `版本备注信息，终端设备不可见`
     */
    "Remark"?: string;
    /**
     * 系统版本黑名单列表，英文逗号隔开。
     * @example `2.0.1-R-20180501.1208,2.0.1-R-20180501.1209`
     */
    "BlackVersionList"?: string;
    /**
     * 是否里程碑，取值：**Y | N**。
     * @example `N`
     */
    "IsMilestone": string;
    /**
     * 允许的OTA SDK的最小版本versioncode
     * @example `1100`
     */
    "MinClientVersion"?: string;
    /**
     * 系统版本白名单，英文逗号隔开。
     * @example `2.0.1-R-20180501.1208,2.0.1-R-20180501.1209`
     */
    "WhiteVersionList"?: string;
    /**
     * 是否强制升级，取值：**Y | N**。
     * @example `N`
     */
    "IsForceUpgrade": string;
    /**
     * 夜间升级下载类型。1表示WIFI下下载，2表示任全网下载。
     * @example `1`
     */
    "NightUpgradeDownloadType": string;
    /**
     * 夜间升级时是否给出提示框，取值：**Y | N**。
     * @example `N`
     */
    "NightUpgradeIsShowTip": string;
    /**
     * 夜间升级是否允许取消，取值：**Y | N**。
     * @example `N`
     */
    "NightUpgradeIsAllowedCancel": string;
    /**
     * 升级包列表，包括全量包和增量包，格式为`baseVersion|romUrl,baseVersion|romUrl`。
     * 其中，**baseVersion**为基准版本，
     * - 如果是全量包，则基准版本为0。
     * - 如果是增量包，则基准版本为基准的系统版本号。
     * @example `0|http://www.oss-server.com/file1.zip,2.0.1|http://www.oss-server.com/file2.zip`
     */
    "RomList": string;
    /**
     * 是否允许移动网络下载升级包，取值：**Y | N**。
     * @example `Y`
     */
    "EnableMobileDownload": string;
    /**
     * 允许移动网络下载的包的最大限制，单位为M，在允许移动网络下载包的情况下，大于该限制的包也不会自动下载。
     * @example `10`
     */
    "MobileDownloadMaxSize"?: string;
}
