interface DeleteFleetRequest {
    "RegionId": string;
    "FleetId": string;
    "TerminateInstances": boolean;
    "OwnerId"?: number;
}
export { DeleteFleetRequest };