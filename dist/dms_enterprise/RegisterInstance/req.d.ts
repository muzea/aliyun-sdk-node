interface RegisterInstanceRequest {
    "RegionId"?: string;
    "Tid": number;
    "InstanceType": string;
    "InstanceSource": string;
    "NetworkType": string;
    "EnvType": string;
    "Host": string;
    "Port": number;
    "DatabaseUser": string;
    "DatabasePassword": string;
    "InstanceAlias": string;
    "DbaUid": number;
    "SafeRule": string;
    "QueryTimeout": number;
    "ExportTimeout": number;
    "EcsInstanceId"?: string;
    "VpcId"?: string;
    "EcsRegion"?: string;
    "Sid"?: string;
}
export { RegisterInstanceRequest };