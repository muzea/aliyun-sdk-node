interface InsertApplicationRequest {
    "RegionId"?: string;
    "ApplicationName": string;
    "BuildPackId"?: number;
    "ClusterId"?: string;
    "Description"?: string;
    "ReservedPortStr"?: string;
    "EcuInfo"?: string;
    "Cpu"?: number;
    "Mem"?: number;
    "HealthCheckURL"?: string;
    "LogicalRegionId"?: string;
    "Jdk"?: string;
    "WebContainer"?: string;
    "PackageType"?: string;
}
export { InsertApplicationRequest };