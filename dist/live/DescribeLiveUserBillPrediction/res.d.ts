export interface DescribeLiveUserBillPredictionResponse {
    EndTime: string;
    StartTime: string;
    RequestId: string;
    BillType: string;
    BillPredictionData: {
        BillPredictionDataItem: {
            Value: number;
            TimeStp: string;
            Area: string;
        }[];
    };
}
