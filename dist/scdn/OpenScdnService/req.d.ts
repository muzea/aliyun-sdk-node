interface OpenScdnServiceRequest {
    "RegionId"?: string;
    "Bandwidth": number;
    "ProtectType": string;
    "DDoSBasic": number;
    "ElasticProtection": number;
    "CcProtection": number;
    "DomainCount": number;
    "StartDate"?: string;
    "EndDate"?: string;
}
export { OpenScdnServiceRequest };