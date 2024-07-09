export interface QueryHotlineSessionResponse {
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        PageSize: number;
        PageNumber: number;
        TotalCount: number;
        CallDetailRecord: {
            CallResult: string;
            ServicerName: string;
            OutQueueTime: string;
            CallContinueTime: number;
            CreateTime: string;
            PickUpTime: string;
            RingContinueTime: number;
            CalledNumber: string;
            ServicerId: string;
            HangUpTime: string;
            EvaluationLevel: number;
            HangUpRole: string;
            MemberName: string;
            EvaluationScore: number;
            Acid: string;
            RingStartTime: string;
            CallType: number;
            GroupId: number;
            GroupName: string;
            RingEndTime: string;
            CallingNumber: string;
            InQueueTime: string;
            MemberId: string;
            QueueUpContinueTime: number;
        }[];
    };
}
