interface CreateDatabaseRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "DBName": string;
    "CharacterSetName": string;
    "OwnerId"?: number;
    "DBDescription"?: string;
    "AccountName"?: string;
    "AccountPrivilege"?: string;
    "Collate"?: string;
    "Ctype"?: string;
}
export { CreateDatabaseRequest };