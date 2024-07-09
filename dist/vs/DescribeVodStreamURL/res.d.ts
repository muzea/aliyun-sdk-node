export interface DescribeVodStreamURLResponse {
    /**
     * 流播放URL
     * @example `rtsp://domain/live/stream?sign=xxxxxx`
     */
    Url: string;
    /**
     * 流播放协议
     * @example `rtsp`
     */
    OutProtocol: string;
    /**
     * 该条任务请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 流播放端口
     * @example `8080`
     */
    Port: number;
    TxId: string;
}
