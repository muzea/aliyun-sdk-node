export interface DescribeEslDeviceResponse {
    TotalCount: number;
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    Success: boolean;
    EslDetails: {
        EslBarCode: string;
        LastUpdateTime: string;
        ItemBarCode: number;
        ItemId: number;
        ItemShortTitle: string;
        Status: string;
        StoreId: string;
    }[];
}
