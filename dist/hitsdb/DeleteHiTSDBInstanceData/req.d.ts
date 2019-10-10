interface DeleteHiTSDBInstanceDataRequest {
    "RegionId"?: string;
    "ReverseVpcIp": string;
    "ReverseVpcPort": number;
    "Metric": string;
    "Start": number;
    "End": number;
    "OwnerId"?: number;
    "InstanceId": string;
    "Tags"?: string;
    "UserName"?: string;
    "PassWord"?: string;
}
export { DeleteHiTSDBInstanceDataRequest };