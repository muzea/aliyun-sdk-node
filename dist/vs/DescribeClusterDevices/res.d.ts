export interface DescribeClusterDevicesResponse {
    Total: number;
    RequestId: string;
    Devices: {
        Status: string;
        MacAddress: string;
        AutoRenew: boolean;
        InstanceId: string;
        AutoRenewPeriod: number;
        Period: number;
        InstanceChargeType: string;
        Description: string;
        PlatformType: string;
        InstanceName: string;
        PeriodUnit: string;
        HostRom: string;
        EdgeNodeName: string;
        Server: string;
        ImageId: string;
        IpInfos: {
            NatType: string;
            InternalIp: string;
            InternalPort: string;
            ExternalPort: string;
            IpProtocol: string;
            ExternalIp: string;
            ISP: string;
        }[];
        PodInfos: {
            Status: string;
            PodIp: string;
            PodId: string;
            Network: {
                ContainerPorts: string;
                OutgoingIsp: string;
                ExternalPorts: string;
                ExternalIp: string;
                ExternalIsp: string;
                OutgoingIp: string;
            }[];
        }[];
    }[];
}
