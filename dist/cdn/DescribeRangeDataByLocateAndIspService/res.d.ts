export interface DescribeRangeDataByLocateAndIspServiceResponse {
    /**
     * JSON格式的返回结果。
     * 从左到右依次为：unix时间，地区，运营商，HTTP状态码分布，响应时长，带宽（单位：bps），响应平均速率，页面浏览量，缓存命中率，请求命中率。
     * @example `{"1472659200":{"天津市":{"电信":{"http_codes":{"000":0,"200":6,"400":0},"rt":4183,"bandwidth":46639,"avg_speed":7773,"pv":6,"hit_rate":0.93,"request_hit_rate":0.66}}}}`
     */
    JsonResult: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
