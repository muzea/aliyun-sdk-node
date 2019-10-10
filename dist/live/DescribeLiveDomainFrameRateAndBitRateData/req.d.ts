interface DescribeLiveDomainFrameRateAndBitRateDataRequest {
    /**
    * 地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 查询时间点，UTC格式，如：2019-02-21T08:00:00Z。
    * @example `2019-02-21T08:00:00Z`
    */ "QueryTime": string;
    "OwnerId"?: number;
    /**
    * 您的域名。
    * @example `example.com`
    */ "DomainName": string;
}
export { DescribeLiveDomainFrameRateAndBitRateDataRequest };