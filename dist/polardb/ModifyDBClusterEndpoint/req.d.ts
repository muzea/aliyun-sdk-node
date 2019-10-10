interface ModifyDBClusterEndpointRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "DBEndpointId": string;
    "OwnerId"?: number;
    "Nodes"?: string;
    "ReadWriteMode"?: string;
    "AutoAddNewNodes"?: string;
    "EndpointConfig"?: string;
}
export { ModifyDBClusterEndpointRequest };