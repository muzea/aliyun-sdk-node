interface CreateQosPolicyRequest {
    "RegionId": string;
    "QosId": string;
    "Priority": number;
    "SourceCidr": string;
    "DestCidr": string;
    "IpProtocol": string;
    "SourcePortRange": string;
    "DestPortRange": string;
    "OwnerId"?: number;
    "Description"?: string;
    "StartTime"?: string;
    "EndTime"?: string;
    "Name"?: string;
}
export { CreateQosPolicyRequest };