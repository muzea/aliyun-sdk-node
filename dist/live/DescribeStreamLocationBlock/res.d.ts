export interface DescribeStreamLocationBlockResponse {
    Count: number;
    PageNum: number;
    PageSize: number;
    RequestId: string;
    StreamBlockList: {
        StreamBlock: {
            AppName: string;
            BlockType: string;
            DomainName: string;
            LocationList: string;
            ReleaseTime: string;
            Status: number;
            StreamName: string;
            UpdateTime: string;
        }[];
    };
    TotalPage: number;
}
