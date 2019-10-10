interface CreateDBNodesRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "DBNode": string[];
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { CreateDBNodesRequest };