export interface ListClientPluginVersionsRequest {
    /**
     * 系统类型，1-Android。
     * @example `1`
     */
    "OsType": string;
    /**
     * 插件包名。
     * @example `com.aliyun.aicc.yundevice`
     */
    "PkgName": string;
}
