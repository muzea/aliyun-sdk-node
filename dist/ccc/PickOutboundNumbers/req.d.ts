interface PickOutboundNumbersRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "CalleeNumber": string;
    "Count": number;
    "CandidateNumber": string[];
}
export { PickOutboundNumbersRequest };