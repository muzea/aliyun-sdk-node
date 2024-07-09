export interface ListActiveAppsResponse {
    Message: string;
    RequestId: string;
    Data: {
        AppName: string;
        LastHealthPingTime: number;
        CurrentLevel: number;
        Namespace: string;
        AppType: number;
        DirtyLevel: number;
        AhasAppName: string;
    }[];
    Code: string;
    Success: boolean;
}
