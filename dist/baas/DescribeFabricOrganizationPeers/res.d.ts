interface DescribeFabricOrganizationPeersResponse {
    "Result": {
        "Port": number;
        "Domain": string;
        "IsAnchor": boolean;
        "CreateTime": string;
        "UpdateTime": string;
        "InternetIp": string;
        "InstanceType": string;
        "IntranetIp": string;
        "OrganizationPeerName": string;
    };
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricOrganizationPeersResponse };