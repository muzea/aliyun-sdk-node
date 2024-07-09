export interface DescribeDcdnDomainRegionDataRequest {
    /**
     * 加速域名，仅支持一个域名。
     * 默认查询当前用户下所有域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据开始时间点。
     * 北京时间，格式为YYYY-MM-DDThh:mm:ssZ。
     * @example `2015-12-05T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点，结束时间需大于起始时间。
     * 北京时间，格式为YYYY-MM-DDThh:mm:ssZ。
     * @example `2015-12-07T12:00:00Z`
     */
    "EndTime"?: string;
}
