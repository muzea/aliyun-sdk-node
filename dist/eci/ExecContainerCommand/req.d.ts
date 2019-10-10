interface ExecContainerCommandRequest {
    "RegionId": string;
    "ContainerGroupId": string;
    "ContainerName": string;
    "Command": string;
    "OwnerId"?: number;
    "TTY"?: boolean;
}
export { ExecContainerCommandRequest };