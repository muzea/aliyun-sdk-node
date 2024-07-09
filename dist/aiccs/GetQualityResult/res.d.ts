export interface GetQualityResultResponse {
    Code: string;
    Message: string;
    ChannelTypeName: string;
    RequestId: string;
    Success: boolean;
    Data: {
        PageNo: number;
        PageSize: number;
        TotalNum: number;
        QualityResultResponseList: {
            TouchId: string;
            MemberName: string;
            ServicerName: string;
            ChannelType: string;
            ProjectId: string;
            ProjectName: string;
            ChannelTypeName: string;
            TouchStartTime: string;
            ServicerId: string;
            RuleId: string;
            RuleName: string;
            GroupName: string;
            GroupId: string;
            InstanceName: string;
            HitStatus: boolean;
            HitDetail: string;
        }[];
    };
}
