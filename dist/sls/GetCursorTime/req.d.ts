export interface GetCursorTimeRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `ali-test-logstore`
     */
    "logstore": string;
    /**
     * Shard ID。
     * @example `0`
     */
    "shardId": number;
    /**
     * 希望获取时间戳的Cursor。接口[GetCursor](~~2771314~~)可以获取Cursor。
     * > 如果Cursor取值小于Begin Cursor或者Cursor取值大于End Cursor，返回InvalidCursor；当Shard中无数据时，返回当前时间。
     * @example `MTU0NzQ3MDY4MjM3NjUxMzQ0Ng==`
     */
    "cursor": string;
}
