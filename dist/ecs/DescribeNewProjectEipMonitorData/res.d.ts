export interface DescribeNewProjectEipMonitorDataResponse {
    RequestId: string;
    EipMonitorDatas: {
        EipMonitorData: {
            EipTX: number;
            EipPackets: number;
            EipBandwidth: number;
            TimeStamp: string;
            EipFlow: number;
            EipRX: number;
        }[];
    };
}
