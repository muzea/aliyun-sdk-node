interface DeleteDBNodesRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "DBNodeId": string[];
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { DeleteDBNodesRequest };