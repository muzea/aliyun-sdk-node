interface CreateAppVersionRequest {
    "RegionId": string;
    "ProjectId": string;
    "IsForceUpgrade"?: string;
    "IsAllowNewInstall"?: string;
    "AppId"?: string;
    "AppVersion"?: string;
    "VersionCode"?: string;
    "InstallType"?: string;
    "Remark"?: string;
    "ReleaseNote"?: string;
    "IsSilentUpgrade"?: string;
    "PackageUrl"?: string;
    "IsNeedRestart"?: string;
    "BlackVersionList"?: string;
    "WhiteVersionList"?: string;
    "RestartType"?: string;
    "RestartAppType"?: string;
    "RestartAppParam"?: string;
    "DeviceAdapterList"?: string;
    "ApkMd5"?: string;
}
export { CreateAppVersionRequest };