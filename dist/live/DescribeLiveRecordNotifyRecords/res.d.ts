export interface DescribeLiveRecordNotifyRecordsResponse {
    CallbackList: {
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
    Code: number;
    Msg: string;
    PageNum: number;
    PageSize: number;
    RequestId: string;
    TotalNum: number;
    TotalPage: number;
}
