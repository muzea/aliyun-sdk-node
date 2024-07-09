export interface AddVodStorageForAppRequest {
    /**
     * 应用ID列表。应用ID为调用[CreateAppInfo](~~CreateAppInfo~~)接口或[ListAppInfo](~~ListAppInfo~~)接口返回参数`AppId`的值。
     * @example `app-****`
     */
    "AppId": string;
    /**
     * OSS bucket地址。当前版本仅支持启用点播系统bucket，无需填写该字段。
     * @example `out-****.oss-cn-shanghai.aliyuncs.com`
     */
    "StorageLocation"?: string;
    /**
     * 存储类型。默认为**vod_oss_bucket**。
     * @example `vod_oss_bucket`
     */
    "StorageType"?: string;
}
