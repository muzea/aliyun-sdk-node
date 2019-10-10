interface ConfigureMigrationJobAlertRequest {
    "RegionId"?: string;
    "MigrationJobId": string;
    "DelayAlertStatus"?: string;
    "DelayAlertPhone"?: string;
    "ErrorAlertStatus"?: string;
    "ErrorAlertPhone"?: string;
    "DelayOverSeconds"?: string;
    "OwnerId"?: string;
}
export { ConfigureMigrationJobAlertRequest };