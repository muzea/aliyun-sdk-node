interface CreateGWSInstanceRequest {
    "RegionId"?: string;
    "ImageId": string;
    "SystemDiskSize": number;
    "SystemDiskCategory": string;
    "InstanceType": string;
    "InstanceChargeType": string;
    "WorkMode": string;
    "AllocatePublicAddress": boolean;
    "ClusterId": string;
    "InternetChargeType"?: string;
    "InternetMaxBandwidthIn"?: number;
    "InternetMaxBandwidthOut"?: number;
    "Name"?: string;
    "Period"?: string;
    "PeriodUnit"?: string;
    "AutoRenew"?: boolean;
    "AppList"?: string;
}
export { CreateGWSInstanceRequest };