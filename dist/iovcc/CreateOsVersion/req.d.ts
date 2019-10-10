interface CreateOsVersionRequest {
    "RegionId": string;
    "ProjectId": string;
    "DeviceModelId": string;
    "SystemVersion": string;
    "IsMilestone": string;
    "IsForceUpgrade": string;
    "NightUpgradeDownloadType": string;
    "NightUpgradeIsShowTip": string;
    "NightUpgradeIsAllowedCancel": string;
    "RomList": string;
    "IsForceNightUpgrade": string;
    "EnableMobileDownload": string;
    "MaxClientVersion"?: string;
    "ReleaseNote"?: string;
    "Remark"?: string;
    "BlackVersionList"?: string;
    "MinClientVersion"?: string;
    "WhiteVersionList"?: string;
    "MobileDownloadMaxSize"?: string;
}
export { CreateOsVersionRequest };