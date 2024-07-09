export interface ListActionRecordsResponse {
    RequestId: string;
    Result: {
        ActionName: string;
        ActionParams: any;
        ActionResultAccessList: string[];
        EndTime: number;
        InstanceId: string;
        Process: string;
        RecordDiff: any;
        RecordIds: string[];
        RequestId: string;
        StartTime: number;
        StateType: string;
        StatusInfo: {
            subState: string;
            nodeCount: number;
            completeNodeCount: number;
            exception: string;
            latencyMills: number;
            process: string;
            startTime: number;
            endTime: number;
            stateType: string;
            subStatusInfo: {
                subState: string;
                nodeCount: number;
                completeNodeCount: number;
                exception: string;
                latencyMills: number;
                process: string;
                startTime: number;
                endTime: number;
                stateType: string;
            }[];
        }[];
        UserId: string;
        UserType: string;
        OwnerId: string;
        UserInfo: string;
        MetaNow: string;
        MetaOld: string;
    }[];
}
