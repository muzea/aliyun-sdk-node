export interface DescribeNamespacesWithCreateResponse {
    Namespaces: {
        Type: number;
        Quota: number;
        NamespaceId: string;
        ConfigCount: number;
        NamespaceName: string;
    }[];
    Message: string;
    RequestId: string;
    Code: string;
}
