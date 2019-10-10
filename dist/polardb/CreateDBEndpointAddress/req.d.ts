interface CreateDBEndpointAddressRequest {
    "RegionId"?: string;
    "DBClusterId": string;
    "DBEndpointId": string;
    "NetType": string;
    "OwnerId"?: number;
    "ConnectionStringPrefix"?: string;
}
export { CreateDBEndpointAddressRequest };