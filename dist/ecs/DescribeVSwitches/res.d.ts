export interface DescribeVSwitchesResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    TotalCount: number;
    VSwitches: {
        VSwitch: {
            CreationTime: string;
            Status: string;
            VpcId: string;
            IsDefault: boolean;
            VSwitchId: string;
            CidrBlock: string;
            Description: string;
            AvailableIpAddressCount: number;
            ResourceGroupId: string;
            ZoneId: string;
            VSwitchName: string;
        }[];
    };
}
