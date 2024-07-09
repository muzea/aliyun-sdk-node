export interface DescribeClusterResponse {
    Status: string;
    RequestId: string;
    Description: string;
    MaintainTime: string;
    Name: string;
    ClusterId: string;
    InternalPorts: {
        Platform: string;
        IpProtocol: string;
        Port: string[];
    }[];
}
