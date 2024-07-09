export interface DescribeTraceByConfigurationResponse {
    Message: string;
    RequestId: string;
    Traces: {
        Timestamp: number;
        EventGroups: {
            EventType: string;
            EventDetails: {
                Type: string;
                Delay: string;
                Ts: string;
                ResponseIp: string;
                Event: string;
                Ext: string;
                DataId: string;
                RequestIp: string;
                LogDate: string;
                HandleIp: string;
                Group: string;
            }[];
        }[];
    }[];
    Code: string;
}
