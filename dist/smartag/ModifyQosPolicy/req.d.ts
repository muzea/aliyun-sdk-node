interface ModifyQosPolicyRequest {
    "RegionId": string;
    "QosId": string;
    "QosPolicyId": string;
    "OwnerId"?: number;
    "Priority"?: number;
    "SourceCidr"?: string;
    "DestCidr"?: string;
    "IpProtocol"?: string;
    "SourcePortRange"?: string;
    "DestPortRange"?: string;
    "StartTime"?: string;
    "EndTime"?: string;
    "Description"?: string;
    "Name"?: string;
}
export { ModifyQosPolicyRequest };