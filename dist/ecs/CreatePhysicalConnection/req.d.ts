interface CreatePhysicalConnectionRequest {
    "RegionId": string;
    "AccessPointId": string;
    "LineOperator": string;
    "PeerLocation": string;
    "ClientToken"?: string;
    "Type"?: string;
    "bandwidth"?: number;
    "PortType"?: string;
    "RedundantPhysicalConnectionId"?: string;
    "Description"?: string;
    "Name"?: string;
    "CircuitCode"?: string;
    "OwnerId"?: number;
    "UserCidr"?: string;
}
export { CreatePhysicalConnectionRequest };