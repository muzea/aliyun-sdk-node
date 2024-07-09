export interface ModifyPhysicalConnectionAttributeRequest {
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
    "UserCidr"?: string;
    "CircuitCode"?: string;
}
