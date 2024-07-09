export interface DescribeClustersResponse {
    Total: number;
    RequestId: string;
    Clusters: {
        Status: string;
        Description: string;
        Name: string;
        MaintainTime: string;
        ClusterId: string;
        InternalPorts: {
            Platform: string;
            IpProtocol: string;
            Port: string[];
        }[];
    }[];
}
