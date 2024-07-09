export interface PushObjectCacheResponse {
    /**
     * 预热返回的任务ID，多个任务ID用半角逗号（,）分隔。预热返回的任务ID会按照以下两条规则对预热任务做合并：
     * - 同一个域名、同一秒钟提交的预热任务（URL颗粒度）会被合并为同一个PushTaskId。
     * - 同一个域名、同一秒钟提交的预热任务（URL颗粒度）如果超过500条，那么会按照每500条合并为一个PushTaskId的方式处理。
     * @example `9524xxxx`
     */
    PushTaskId: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
