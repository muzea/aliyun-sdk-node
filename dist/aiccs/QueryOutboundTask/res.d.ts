export interface QueryOutboundTaskResponse {
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
            Type: number;
            Status: number;
            EndDate: string;
            RetryInterval: number;
            RetryTime: number;
            StartDate: string;
            GmtModified: number;
            Creator: string;
            EndTime: string;
            BuId: number;
            Model: number;
            StartTime: string;
            Modifier: string;
            GroupName: string;
            Description: string;
            DepartmentId: number;
            GmtCreate: number;
            SkillGroup: number;
            Name: string;
            ExtAttrs: string;
            CallerNum: string;
            Id: number;
        }[];
    };
}
