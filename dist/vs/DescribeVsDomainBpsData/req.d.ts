export interface DescribeVsDomainBpsDataRequest {
    /**
     * 域名，若参数为空，默认返回所有加速域名合并后数据<br>可输入需要查询的加速域名<br>支持批量域名查询，多个域名用逗号（半角）分隔
     * @example `example.aliyundoc.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。<br>格式为：YYYY-MM-DDThh:mm:ssZ<br> 最小数据粒度为5分钟<br> 不写默认读取过去24小时数据
     * @example `2021-12-26T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间需大于起始时间；获日期格式按照ISO8601表示法，并使用UTC时间。<br>格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2021-10-02T02:30:48Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度，支持300, 3600和86400秒。不传和传的值不支持时，使用默认值300秒
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名，通过DescribeCdnRegionAndIsp接口获得，不传为所有运营商
     * @example `unicom`
     */
    "IspNameEn"?: string;
    /**
     * 区域英文名，通过DescribeCdnRegionAndIsp接口获得，不传为所有区域
     * @example `guangdong`
     */
    "LocationNameEn"?: string;
}
