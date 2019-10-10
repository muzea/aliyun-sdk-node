interface StartNodesRequest {
    "RegionId": string;
    "ClusterId": string;
    "Instance": string[];
    "Role"?: string;
}
export { StartNodesRequest };