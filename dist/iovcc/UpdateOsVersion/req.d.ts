interface UpdateOsVersionRequest {
    "RegionId": string;
    "IsForceNightUpgrade": string;
    "ProjectId": string;
    "DeviceModelId": string;
    "SystemVersion": string;
    "ReleaseNote": string;
    "IsForceUpgrade": string;
    "NightUpgradeDownloadType": string;
    "NightUpgradeIsShowTip": string;
    "NightUpgradeIsAllowedCancel": string;
    "RomList": string;
    "Id": string;
    "IsMilestone": string;
    "EnableMobileDownload": string;
    "Remark"?: string;
    "BlackVersionList"?: string;
    "WhiteVersionList"?: string;
    "MaxClientVersion"?: string;
    "MinClientVersion"?: string;
    "MobileDownloadMaxSize"?: string;
}
export { UpdateOsVersionRequest };