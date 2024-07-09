export interface DescribeInternetTrafficTrendResponse {
    /**
     * 出方向和入方向总的峰值网络吞吐率（每秒发送多少bit）。单位：bps。
     * @example `89783147`
     */
    MaxTotalBps: number;
    /**
     * 峰值带宽发生时间戳。使用秒级时间戳格式表示。
     * @example `1672736400`
     */
    MaxBandwidthTime: number;
    /**
     * 入方向的平均网络吞吐率（每秒发送多少bit）。单位：bps。
     * @example `6114152`
     */
    AvgInBps: number;
    /**
     * 本次调用请求的ID。
     * @example `C7E837BE-0379-565E-B7B4-DE595C8D337C`
     */
    RequestId: string;
    /**
     * 入方向的峰值网络吞吐率（每秒发送多少bit）。单位：bps。
     * @example `10275643`
     */
    MaxInBps: number;
    /**
     * 出方向的峰值网络吞吐率（每秒发送多少bit）。单位：bps。
     * @example `395188`
     */
    MaxOutBps: number;
    /**
     * 平均请求次数。
     * @example `79013`
     */
    AvgSession: number;
    /**
     * 峰值请求次数。
     * @example `931641`
     */
    MaxSession: number;
    /**
     * 出方向和入方向总的平均网络吞吐率（每秒发送多少bit）。单位：bps。
     * @example `2306`
     */
    AvgTotalBps: number;
    /**
     * 出方向的平均网络吞吐率（每秒发送多少bit）。单位：bps。
     * @example `70148993`
     */
    AvgOutBps: number;
    /**
     * 入方向的网络吞吐量（总共发送多少字节）。单位：Byte。
     * @example `41536824243873`
     */
    TotalInBytes: number;
    /**
     * 出方向的网络吞吐量（总共发送多少字节）。单位：Byte。
     * @example `2660894567178`
     */
    TotalOutBytes: number;
    /**
     * 出方向和入方向总的网络吞吐量（总共发送多少字节）。单位：Byte。
     * @example `963227674958`
     */
    TotalBytes: number;
    /**
     * 总请求次数。
     * @example `1061449`
     */
    TotalSession: number;
    /**
     * 总超量流量
     * @example `4243873`
     */
    TotalExceedBytes: number;
    /**
     * 最大日超量流量
     * @example `873`
     */
    MaxDayExceedBytes: number;
    /**
     * 流量统计信息列表。
     */
    DataList: {
        /**
         * 请求次数。
         * @example `27`
         */
        SessionCount: number;
        /**
         * 流量发生的时间。使用秒级时间戳格式表示。
         * 若该时间点未加工完成，则其他字段值均为-1。
         * @example `1659405600`
         */
        Time: number;
        /**
         * 入方向的网络吞吐率（每秒发送多少bit）。单位：bps。
         * @example `187`
         */
        InBps: number;
        /**
         * 入方向的网络吞吐率（每秒发送多少个分组数据包）。单位：pps。
         * @example `2`
         */
        InPps: number;
        /**
         * 新建连接数。
         * @example `27`
         */
        NewConn: number;
        /**
         * 出方向的网络吞吐量（总共发送多少字节）。单位：Byte。
         * @example `1123`
         */
        OutBytes: number;
        /**
         * 出方向的网络吞吐率（每秒发送多少个分组数据包）。单位：pps。
         * @example `2`
         */
        OutPps: number;
        /**
         * 入方向的网络吞吐量（总共发送多少字节）。单位：Byte。
         * @example `235`
         */
        InBytes: number;
        /**
         * 出方向的网络吞吐率（每秒发送多少bit）。单位：bps。
         * @example `45`
         */
        OutBps: number;
        /**
         * 出方向和入方向总的网络吞吐率（每秒发送多少bit）。单位：bps。
         * @example `232`
         */
        TotalBps: number;
    }[];
}
