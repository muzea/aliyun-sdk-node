interface DescribeMigrationJobDetailRequest {
    "RegionId"?: string;
    "MigrationJobId": string;
    "PageSize"?: number;
    "PageNum"?: number;
    "MigrationMode.StructureInitialization"?: boolean;
    "MigrationMode.DataInitialization"?: boolean;
    "MigrationMode.DataSynchronization"?: boolean;
    "ClientToken"?: string;
    "OwnerId"?: string;
}
export { DescribeMigrationJobDetailRequest };