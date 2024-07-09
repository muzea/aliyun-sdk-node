export interface PageableQueryExperimentTaskByClusterIdResponse {
    Pages: number;
    ExperimentTasks: {
        EndTime: number;
        StartTime: number;
        Result: string;
        State: string;
        CurrentPhase: string;
        ExperimentId: string;
        Message: string;
        TaskId: string;
        ExperimentName: string;
        ExtInfo: {
            SchedulerConfig: {
                FixedTime: string;
                CronExpression: string;
            };
        };
        Creator: {
            SubUserId: string;
            UserId: string;
        };
        Namespace: string;
    }[];
    RequestId: string;
    Message: string;
    PageSize: number;
    CurrentPage: number;
    Total: number;
    HttpStatusCode: number;
    Code: string;
    Success: boolean;
}
