export interface GetTicketByCaseIdResponse {
    RequestId: string;
    Code: string;
    Message: string;
    Success: boolean;
    Data: {
        MemberId: number;
        QuestionId: string;
        QuestionInfo: string;
        MemberName: string;
        SopCateId: number;
        CaseType: number;
        Priority: number;
        ExtAttrs: any;
        BuId: number;
        GmtCreate: number;
        GmtModified: number;
        EndTime: number;
        SrType: number;
        Owner: number;
        OwnerName: string;
        CaseStatus: number;
        ChannelId: string;
        DepartmentId: number;
        FromInfo: string;
        ParentId: number;
        CaseId: number;
    };
}
