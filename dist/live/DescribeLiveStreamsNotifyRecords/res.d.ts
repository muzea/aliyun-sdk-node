export interface DescribeLiveStreamsNotifyRecordsResponse {
    NotifyRecordsInfo: {
        LiveStreamNotifyRecordsInfo: {
            AppName: string;
            Description: string;
            DomainName: string;
            NotifyContent: string;
            NotifyResult: string;
            NotifyTime: string;
            NotifyType: string;
            NotifyUrl: string;
            StreamName: string;
        }[];
    };
    PageNum: number;
    PageSize: number;
    RequestId: string;
    TotalNum: number;
    TotalPage: number;
}
