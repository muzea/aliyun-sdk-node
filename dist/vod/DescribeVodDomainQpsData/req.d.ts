export interface DescribeVodDomainQpsDataRequest {
    /**
     * 加速域名，多个域名用半角逗号（,）分隔，一次最多支持 500 个域名查询。
     * 默认查询所有加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 开始时间。格式为：<i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z（utc时间）。
     * @example `2024-05-02T15:50:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z（utc时间）。
     * @example `2024-05-02T15:59:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询数据的时间粒度。单位：秒。支持**300**、**3600**和**86400**。
     * @example `300`
     */
    "Interval"?: string;
    /**
     * 运营商英文名。默认为所有运营商。
     * @example `unicom`
     */
    "IspNameEn"?: string;
    /**
     * 地域英文名。不传该参数默认查询所有地域。
     * @example `beijing`
     */
    "LocationNameEn"?: string;
}
