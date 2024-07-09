export interface DescribeStreamLocationBlockRequest {
    "DomainName": string;
    "AppName"?: string;
    "StreamName"?: string;
    "BlockType"?: string;
    "PageSize"?: number;
    "PageNum"?: number;
}
