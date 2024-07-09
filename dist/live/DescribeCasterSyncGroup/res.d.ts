export interface DescribeCasterSyncGroupResponse {
    CasterId: string;
    RequestId: string;
    SyncGroups: {
        SyncGroup: {
            HostResourceId: string;
            Mode: number;
            ResourceIds: {
                ResourceId: string[];
            };
        }[];
    };
}
