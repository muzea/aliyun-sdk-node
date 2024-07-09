export interface DescribeCheckJobsResponse {
    HttpStatusCode: number;
    RequestId: string;
    ErrCode: string;
    Success: boolean;
    DynamicCode: string;
    ErrMessage: string;
    DynamicMessage: string;
    PageNumber: number;
    PageRecordCount: number;
    TotalRecordCount: number;
    CheckJobs: {
        DtsJobId: string;
        JobStepId: string;
        JobName: string;
        Status: number;
        CheckType: number;
        InstanceClass: string;
        CheckPoint: number;
        TotalCount: number;
        DiffCount: number;
        DiffSum: number;
        FinishCount: number;
        GroupId: string;
        DtsInstanceID: string;
        ChargeType: string;
        ParentJobType: string;
        RegionId: string;
    }[];
}
