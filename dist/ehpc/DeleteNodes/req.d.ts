interface DeleteNodesRequest {
    "RegionId": string;
    "ClusterId": string;
    "Instance": string[];
    "ReleaseInstance"?: boolean;
}
export { DeleteNodesRequest };