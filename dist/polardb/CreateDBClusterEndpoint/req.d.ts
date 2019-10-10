interface CreateDBClusterEndpointRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "EndpointType": string;
    "OwnerId"?: number;
    "Nodes"?: string;
    "ReadWriteMode"?: string;
    "AutoAddNewNodes"?: string;
    "EndpointConfig"?: string;
    "ClientToken"?: string;
}
export { CreateDBClusterEndpointRequest };