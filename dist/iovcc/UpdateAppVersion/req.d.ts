interface UpdateAppVersionRequest {
    "RegionId": string;
    "ProjectId": string;
    "BlackVersionList"?: string;
    "IsAllowNewInstall"?: string;
    "AppId"?: string;
    "AppVersion"?: string;
    "VersionCode"?: string;
    "InstallType"?: string;
    "Remark"?: string;
    "IsForceUpgrade"?: string;
    "IsSilentUpgrade"?: string;
    "IsNeedRestart"?: string;
    "PackageUrl"?: string;
    "ReleaseNote"?: string;
    "WhiteVersionList"?: string;
    "RestartType"?: string;
    "RestartAppType"?: string;
    "RestartAppParam"?: string;
    "DeviceAdapterList"?: string;
    "VersionId"?: string;
    "ApkMd5"?: string;
}
export { UpdateAppVersionRequest };