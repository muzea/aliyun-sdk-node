export interface UpdateAppVersionRequest {
    /**
     * 版本黑名单，versioncode英文逗号拼接。
     * @example `10,20,30`
     */
    "BlackVersionList"?: string;
    /**
     * 当客户端不存在该应用时，服务端是否允许返回该应用版本。
     * @example `N`
     */
    "IsAllowNewInstall"?: string;
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 应用ID，表示要针对哪个应用进行升级。
     * @example `123`
     */
    "AppId"?: string;
    /**
     * 应用版本号
     * @example `1.0`
     */
    "AppVersion"?: string;
    /**
     * 应用版本versioncode
     * @example `100`
     */
    "VersionCode"?: string;
    /**
     * 应用升级包安装方式。取值：**auto** / **customize**。
     * @example `auto`
     */
    "InstallType"?: string;
    /**
     * 版本备注
     * @example `sample remark`
     */
    "Remark"?: string;
    /**
     * 是否强制升级，Y或N。
     * @example `N`
     */
    "IsForceUpgrade"?: string;
    /**
     * 是否静默升级，Y或N。
     * @example `N`
     */
    "IsSilentUpgrade"?: string;
    /**
     * 是否需要重启，Y或N。
     * @example `N`
     */
    "IsNeedRestart"?: string;
    /**
     * 升级包地址
     * @example `http://www.oss-server.com/file.zip`
     */
    "PackageUrl"?: string;
    /**
     * 版本发布说明
     * @example `sample release note`
     */
    "ReleaseNote"?: string;
    /**
     * 版本白名单，versioncode英文逗号拼接。
     * @example `10,20,30`
     */
    "WhiteVersionList"?: string;
    /**
     * 应用安装完成后的重启类型。取值：
     * - **system**：表示系统重启
     * - **app**：表示应用重启
     * @example `app`
     */
    "RestartType"?: string;
    /**
     * 如果restartType为应用重启，则这个字段表示应用重启的类型。
     * - **service**：表示Service重启
     * - **activity**：表示Activity重启
     * @example `service`
     */
    "RestartAppType"?: string;
    /**
     * 应用重启时可以由服务端指定的重启参数
     * @example `{"restartDelay":1}`
     */
    "RestartAppParam"?: string;
    /**
     * 应用版本的适配机型列表。
     * 格式为：`deviceModelId|minOsVersion|maxOsVersion`，即设备型号ID|最低的系统版本号|最高的系统版本号。
     * @example `10|2.0.1-R-20180412.1024|3.0.1-R-20180412.1024,11|2.1.1-R-20180412.1024|3.1.1-R-20180412.1024`
     */
    "DeviceAdapterList"?: string;
    /**
     * 版本ID
     * @example `11`
     */
    "VersionId"?: string;
    /**
     * APK的MD5值
     * @example `34653456wertwe234653retwewer3456`
     */
    "ApkMd5"?: string;
}
