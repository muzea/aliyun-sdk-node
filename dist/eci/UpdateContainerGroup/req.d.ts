interface UpdateContainerGroupRequest {
    "RegionId": string;
    "ContainerGroupId": string;
    "OwnerId"?: number;
    "RestartPolicy"?: string;
    "Tag"?: string[];
    "Volume"?: string[];
    "DnsConfig.NameServer"?: string[];
    "DnsConfig.Search"?: string[];
    "DnsConfig.Option"?: string[];
    "Container"?: string[];
    "InitContainer"?: string[];
    "ImageRegistryCredential"?: string[];
    "ClientToken"?: string;
    "Cpu"?: number;
    "Memory"?: number;
}
export { UpdateContainerGroupRequest };