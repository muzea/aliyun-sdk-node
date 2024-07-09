export interface QueryJobsWithResultResponse {
    HttpStatusCode: number;
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    VariableNames: string[];
    Jobs: {
        PageNumber: number;
        PageSize: number;
        PageCount: number;
        RowCount: number;
        List: {
            Status: string;
            StatusName: string;
            JobFailureReason: string;
            Id: string;
            LatestTask: {
                Status: string;
                TaskEndReason: string;
                HasAnswered: boolean;
                CallDuration: number;
                HasReachedEndOfFlow: boolean;
                StatusName: string;
                CallTime: number;
                CallDurationDisplay: string;
                HasHangUpByRejection: boolean;
                Extras: {
                    Key: string;
                    Value: string;
                }[];
                TagHits: {
                    TagName: string;
                    TagGroup: string;
                }[];
                Contact: {
                    Round: number;
                    JobUuid: string;
                    PreferredPhoneNumber: string;
                    PhoneNumber: string;
                    State: string;
                    Honorific: string;
                    Name: string;
                    Role: string;
                    Id: string;
                    ReferenceId: string;
                };
                HasLastPlaybackCompleted: boolean;
                DialExceptionCodes: {
                    Code: string;
                    Hint: string;
                }[];
            };
        }[];
    };
}
