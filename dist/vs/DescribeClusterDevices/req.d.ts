export interface DescribeClusterDevicesRequest {
    "ClusterId": string;
    "Platform": string;
    "Specification"?: string;
    "EdgeNodeName"?: string;
    "Description"?: string;
    "PageNo"?: number;
    "PageSize"?: number;
}
