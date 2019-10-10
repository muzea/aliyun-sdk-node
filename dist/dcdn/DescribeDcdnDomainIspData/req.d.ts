interface DescribeDcdnDomainIspDataRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 需要查询的加速域名，只支持一个域名，不写代表当前用户下所有域名。
    * @example `example.com`
    */ "DomainName"?: string;
    /**
    * 获取数据起始时间点，北京时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * 不写默认读取过去24小时数据。
    * @example `2015-12-05T12:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间需大于起始时间，北京时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-12-07T12:00:00Z`
    */ "EndTime"?: string;
}
export { DescribeDcdnDomainIspDataRequest };