interface DescribeFabricCandidateOrganizationsResponse {
    "Result": {
        "ClusterState": string;
        "OrganizationId": string;
        "ServiceState": string;
        "OrganizationName": string;
    }[];
    "RequestId": string;
    "Success": boolean;
    "ErrorCode": number;
}
export { DescribeFabricCandidateOrganizationsResponse };