interface RelateDbForHBaseHaRequest {
    "RegionId"?: string;
    "HaActive": string;
    "HaStandby": string;
    "HaActiveDBType": string;
    "HaStandbyDBType": string;
    "IsActiveStandard": boolean;
    "IsStandbyStandard": boolean;
    "HaMigrateType": string;
    "ClusterId": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
    "HaTables"?: string;
    "HaActiveHdfsUri"?: string;
    "HaActiveHbaseFsDir"?: string;
    "HaActiveClusterKey"?: string;
    "HaActiveVersion"?: string;
    "HaActiveUser"?: string;
    "HaActivePassword"?: string;
    "HaStandbyHdfsUri"?: string;
    "HaStandbyHbaseFsDir"?: string;
    "HaStandbyClusterKey"?: string;
    "HaStandbyVersion"?: string;
    "HaStandbyUser"?: string;
    "HaStandbyPassword"?: string;
}
export { RelateDbForHBaseHaRequest };