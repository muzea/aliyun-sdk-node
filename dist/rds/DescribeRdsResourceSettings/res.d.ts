export interface DescribeRdsResourceSettingsResponse {
    RequestId: string;
    RdsInstanceResourceSettings: {
        RdsInstanceResourceSetting: {
            PoppedUpButtonType: string;
            NoticeBarContent: string;
            EndDate: string;
            PoppedUpContent: string;
            StartDate: string;
            PoppedUpButtonText: string;
            IsTop: string;
            ResourceNiche: string;
            PoppedUpButtonUrl: string;
        }[];
    };
}
