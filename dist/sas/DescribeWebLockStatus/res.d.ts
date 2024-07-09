export interface DescribeWebLockStatusResponse {
    /**
     * 进程白名单数量。
     * @example `6`
     */
    WhiteCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF46038`
     */
    RequestId: string;
    /**
     * 防篡改授权到期时间戳，单位毫秒。
     * @example `1688090851000`
     */
    ExpireTime: number;
    /**
     * 防护目录数量。
     * @example `2`
     */
    DirCount: number;
    /**
     * 购买的防篡改授权总数量。
     * @example `32`
     */
    AuthCount: number;
    /**
     * 已绑定的防篡改授权数量。
     * @example `2`
     */
    BindCount: number;
    /**
     * 阻断进程数。
     * @example `48`
     */
    BlockCount: number;
}
