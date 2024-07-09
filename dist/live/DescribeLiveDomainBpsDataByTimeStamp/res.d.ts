export interface DescribeLiveDomainBpsDataByTimeStampResponse {
    TimeStamp: string;
    RequestId: string;
    DomainName: string;
    BpsDataList: {
        BpsDataModel: {
            LocationName: string;
            TimeStamp: string;
            IspName: string;
            Bps: number;
        }[];
    };
}
