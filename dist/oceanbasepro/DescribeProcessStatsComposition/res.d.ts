export interface DescribeProcessStatsCompositionResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        TotalSessionCount: number;
        ActiveSessionCount: number;
        IdleSessionCount: number;
        AllProcessList: {
            SqlText: string;
            TenantId: string;
            Database: string;
            User: string;
            ExecuteTime: number;
            CpuTime: number;
            ServerIp: string;
            ClientIp: string;
            SessionId: number;
            ProxySessId: string;
            Command: string;
            Status: string;
            SqlId: string;
            TraceId: string;
            PlanId: string;
        }[];
        SessionStatistics: {
            UserStatistics: {
                MetricValue: string;
                ActiveCount: number;
                TotalCount: number;
                Type: string;
            }[];
            SourceStatistics: {
                MetricValue: string;
                ActiveCount: number;
                TotalCount: number;
                Type: string;
            }[];
            DataBaseStatistics: {
                MetricValue: string;
                ActiveCount: number;
                TotalCount: number;
                Type: string;
            }[];
        };
        /**
         * Ob版本号
         */
        ObVersion: string;
    };
}
