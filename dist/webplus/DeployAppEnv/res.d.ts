export interface DeployAppEnvResponse {
    EnvChange: {
        StartTime: string;
        ChangeId: string;
        EnvId: string;
    };
    Message: string;
    RequestId: string;
    Code: string;
}
