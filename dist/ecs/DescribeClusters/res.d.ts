export interface DescribeClustersResponse {
    RequestId: string;
    Clusters: {
        Cluster: {
            ClusterId: string;
        }[];
    };
}
