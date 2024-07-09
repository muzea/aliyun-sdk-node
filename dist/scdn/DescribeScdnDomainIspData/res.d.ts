export interface DescribeScdnDomainIspDataResponse {
    /**
     * 结束时间
     * @example `2015-12-05T12:00:00Z`
     */
    EndTime: string;
    /**
     * 开始时间
     * @example `2015-12-07T12:00:00Z`
     */
    StartTime: string;
    /**
     * 请求ID
     * @example `2E5AD83F-BD7B-462E-8319-2E30E305519A`
     */
    RequestId: string;
    /**
     * 加速域名信息
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 每条记录的时间间隔，固定值1天
     * @example `86400`
     */
    DataInterval: string;
    Value: {
        /**
         * 各运营商访问占比数据列表
         */
        ISPProportionData: {
            /**
             * 总请求次数
             * @example `88`
             */
            TotalQuery: string;
            /**
             * 总流量
             * @example `254166333`
             */
            TotalBytes: string;
            /**
             * 平均响应速度，单位：`byte/秒`
             * @example `787.8073097249128`
             */
            AvgResponseRate: string;
            /**
             * 平均响应时间，单位：毫秒
             * @example `3666.193181818182`
             */
            AvgResponseTime: string;
            /**
             * 请求错误率
             * @example `0`
             */
            ReqErrRate: string;
            /**
             * 响应平均大小，单位：`byte`
             * @example `2888253.7875`
             */
            AvgObjectSize: string;
            /**
             * 带宽
             * @example `40343.86242857143`
             */
            Bps: string;
            /**
             * 每秒查询率
             * @example `0.001746031746031746`
             */
            Qps: string;
            /**
             * 占比使用数据
             * @example `0.33908754623921084`
             */
            Proportion: string;
            /**
             * 运营商英文名称
             * @example `China Mobile`
             */
            IspEname: string;
            /**
             * 运营商信息
             * @example `中国移动`
             */
            ISP: string;
            /**
             * 总流量占比，如返回90即为90%
             * @example `0.37532921137846464`
             */
            BytesProportion: string;
        }[];
    };
}
