export interface DescribeLiveDomainRecordUsageDataRequest {
    /**
     * 需要查询的主播流域名。
     * - 支持单个或批量域名查询。批量查询时多个域名用英文逗号（,）分隔。
     * - 不设默认返回所有域名合并后数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * - 最小数据粒度为5分钟。
     * - 不填默认读取过去24小时数据。
     * >起始时间最早可设置为从当前时间开始的90天内，精确到秒。
     * @example `2021-05-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间，格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。取值要求：
     * - 需晚于起始时间（StartTime)。
     * - 结束时间减去起始时间（查询数据的时间跨度）最长31天。超出31天请求失败并报错。
     * @example `2021-05-10T21:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 地区。取值：
     * - **cn-beijing**：北京
     * - **cn-shanghai**：上海
     * - **cn-shenzhen**：深圳
     * - **cn-qingdao**：青岛
     * - **ap-southeast-1**：新加坡
     * - **eu-central-1**：德国
     * - **ap-northeast-1**：东京
     * - **ap-south-1**：孟买
     * - **ap-southeast-5**：雅加达
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * 分组键。取值：
     * - **domain**：查询结果按域名分组。
     * - **record_fmt**：查询结果按录制类型分组。
     * > 可选一个，也可多选。多选时用英文逗号（,）分隔。默认为`domain,record_fmt`。置为空或`null`的时候即不区分上述键。
     * @example `domain,record_fmt`
     */
    "SplitBy"?: string;
    /**
     * 查询数据的时间粒度。单位：秒。取值：
     * - 60。
     * - 300。
     * - 3600。
     * - 86400。
     * >不传或传值不支持时，查询时间跨度在31天以内的时间粒度默认值为300秒；查询时间跨度大于31天的时间粒度默认值为86400。
     * @example `300`
     */
    "Interval"?: string;
}
