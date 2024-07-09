export interface GetEpdSummaryResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题。
     * @example `B91B5559-065A-55C3-8D75-DA218EBFD1DC`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 排放量。为了保证中间过程的计算精度，结果值保留31位小数，推荐进行截取显示。排放量应配合环境影响结果值单位使用。
         * @example `1009.976265540000000000000000000000`
         */
        carbonEmission: number;
        /**
         * 该环境影响采用的评价指标。
         * @example `GWP100a`
         */
        indicator: string;
        /**
         * 类别key。环境影响类别，目前最多支持19类，[参考附录](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/%E7%A2%B3%E8%B6%B3%E8%BF%B9%E9%99%84%E5%BD%95.pdf)。
         * @example `gwp`
         */
        key: string;
        /**
         * 计算方法标准。
         * @example `CML v4.8 2016`
         */
        method: string;
        /**
         * 类别名称。
         * @example `气候变化`
         */
        name: string;
        /**
         * 类别num，环境影响类别唯一序号，目前最多支持19类，[参考附录](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/%E7%A2%B3%E8%B6%B3%E8%BF%B9%E9%99%84%E5%BD%95.pdf)。
         * @example `1`
         */
        num: number;
        /**
         * 环境影响结果值单位。
         * @example `kg CO2-Eq`
         */
        preUnit: string;
        /**
         * 数据状态。1表示准确计算，2表示采用默认数据，3表示缺少因子采用0值。
         * @example `1`
         */
        state: number;
    }[];
}
