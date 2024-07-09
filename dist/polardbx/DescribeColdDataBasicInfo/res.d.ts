export interface DescribeColdDataBasicInfoResponse {
    RequestId: string;
    Data: {
        EnableStatus: boolean;
        CloudProduct: string;
        VolumeName: string;
        BackupSetSpaceSize: number;
        BackupSetCount: number;
        CurrentSpaceSize: number;
        DataRedundancyType: string;
        WriteAccessNum: number;
        ReadAccessNum: number;
        RegionId: string;
    };
}
