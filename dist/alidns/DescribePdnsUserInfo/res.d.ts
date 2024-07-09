export interface DescribePdnsUserInfoResponse {
    RequestId: string;
    UserInfo: {
        PdnsId: number;
        State: string;
        ServiceType: string;
        StoppedService: string;
        AvailableService: string;
        StatisticSwitchStatus: string;
    };
}
