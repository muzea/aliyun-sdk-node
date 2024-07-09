export interface QueryChildDivisionCodeByIdResponse {
    LogsId: string;
    RequestId: string;
    SubCode: string;
    SubMessage: string;
    PageSize: number;
    PageNumber: number;
    TotalCount: number;
    Success: boolean;
    Code: string;
    Message: string;
    Model: {
        DivisionList: {
            ParentId: number;
            DivisionCode: number;
            DivisionName: string;
            DivisionLevel: number;
            Pinyin: string;
        }[];
    };
}
