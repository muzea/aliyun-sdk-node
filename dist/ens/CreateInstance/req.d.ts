interface CreateInstanceRequest {
    "RegionId"?: string;
    "Version": string;
    "InstanceType": string;
    "EnsRegionId": string;
    "Password": string;
    "Period": string;
    "ImageId": string;
    "SystemDisk.Size": string;
    "Quantity": string;
    "DataDisk.1.Size": string;
    "InternetChargeType"?: string;
    "AutoRenewPeriod"?: string;
    "AutoRenew"?: string;
}
export { CreateInstanceRequest };