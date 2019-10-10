interface DescribeDomainDetailResponse {
    "code": number;
    "data": {
        "DomainDetailItems": {
            "InstanceName": string;
            "AssetType": string;
            "Uuid": string;
            "InternetIp": string;
            "InstanceId": string;
            "IntranetIp": string;
        }[];
        "RootDomain": string;
        "Domain": string;
    };
    "requestId": string;
    "success": boolean;
}
export { DescribeDomainDetailResponse };