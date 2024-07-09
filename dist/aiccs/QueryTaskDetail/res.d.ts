export interface QueryTaskDetailResponse {
    HttpStatusCode: string;
    Code: string;
    Message: string;
    RequestId: string;
    Success: string;
    Data: {
        TotalResults: string;
        CurrentPage: string;
        PageSize: string;
        List: {
            Status: number;
            ServicerName: string;
            MemberName: string;
            OutboundNum: number;
            RetryTime: string;
            Priority: number;
            GmtModified: number;
            Dnis: string;
            ServicerId: number;
            OutboundTaskId: number;
            BuId: number;
            EndReason: number;
            GmtCreate: number;
            DepartmentId: number;
            Ani: string;
            MemberId: number;
            SkillGroup: number;
            ExtAttrs: string;
            Id: number;
        }[];
    };
}
