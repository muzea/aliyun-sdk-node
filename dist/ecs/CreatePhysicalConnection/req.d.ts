export interface CreatePhysicalConnectionRequest {
    "RegionId": string;
    "AccessPointId": string;
    "Type"?: string;
    "LineOperator": string;
    "bandwidth"?: number;
    "PeerLocation": string;
    "PortType"?: string;
    "RedundantPhysicalConnectionId"?: string;
    "Description"?: string;
    "Name"?: string;
    "CircuitCode"?: string;
    "ClientToken": string;
    "UserCidr"?: string;
}
