interface ModifyPhysicalConnectionAttributeRequest {
    "RegionId": string;
    "PhysicalConnectionId": string;
    "LineOperator"?: string;
    "bandwidth"?: number;
    "PeerLocation"?: string;
    "PortType"?: string;
    "RedundantPhysicalConnectionId"?: string;
    "Description"?: string;
    "Name"?: string;
    "ClientToken"?: string;
    "OwnerId"?: number;
    "UserCidr"?: string;
    "CircuitCode"?: string;
}
export { ModifyPhysicalConnectionAttributeRequest };