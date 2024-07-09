export interface DescribeUserAssetIPTrafficInfoResponse {
    /**
     * 本次调用请求的ID。
     * @example `F0F82705-CFC7-5F83-86C8-A063892F****`
     */
    RequestId: string;
    /**
     * 查询开始时间。使用秒级时间戳格式表示。
     * @example `1656837360`
     */
    StartTime: number;
    /**
     * 查询结束时间。使用秒级时间戳格式表示。
     * @example `1656923760`
     */
    EndTime: number;
    /**
     * 入方向的网络吞吐率（每秒发送多少字节）。单位：bps。
     * @example `4520`
     */
    InBps: number;
    /**
     * 出方向的网络吞吐率（每秒发送多少字节）。单位：bps。
     * @example `4180`
     */
    OutBps: number;
    /**
     * 入方向的网络吞吐率（每秒发送多少个分组数据包）。单位：pps。
     * @example `233`
     */
    InPps: number;
    /**
     * 出方向的网络吞吐率（每秒发送多少个分组数据包）。单位：pps。
     * @example `224`
     */
    OutPps: number;
    /**
     * 请求次数。
     * @example `50`
     */
    SessionCount: number;
    /**
     * 新建连接数。
     * @example `43`
     */
    NewConn: number;
}
