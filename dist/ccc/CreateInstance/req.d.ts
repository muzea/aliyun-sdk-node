interface CreateInstanceRequest {
    "RegionId"?: string;
    "Name": string;
    "DomainName": string;
    "StorageMaxDays": number;
    "StorageMaxSize": number;
    "Description"?: string;
    "DirectoryId"?: string;
    "AdminRamId"?: string[];
    "PhoneNumbers"?: string[];
    "UserObject"?: string[];
    "PhoneNumber"?: string;
}
export { CreateInstanceRequest };