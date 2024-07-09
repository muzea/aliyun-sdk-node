export interface SetCasterSyncGroupRequest {
    "SyncGroup"?: {
        HostResourceId: string;
        Mode: number;
        ResourceIds: string[];
        SyncDelayThreshold: number;
        SyncOffsets: number[];
    }[];
    "CasterId": string;
}
