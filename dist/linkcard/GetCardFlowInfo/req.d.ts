export interface GetCardFlowInfoRequest {
    /**
     * 物联网卡的ICCID。
     * 您可在物联网卡上查看ICCID，或者在[物联网SIM服务控制台](https://dyiotnext.console.aliyun.com/?spm=a2c4g.11186623.0.0.6a072d25p4pUg8)的卡管理页面查看ICCID。
     * @example `89860321******15668`
     */
    "Iccid": string;
    /**
     * 需要查询的月份。
     * 最多可以查询6个月，如果为空则获取最近两个月的数据。
     * @example `["202110","202111"]`
     */
    "DateList"?: string[];
}
