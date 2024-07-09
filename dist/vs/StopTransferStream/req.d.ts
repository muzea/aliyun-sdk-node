export interface StopTransferStreamRequest {
    /**
     * 流ID。
     * @example `323434****83423432`
     */
    "Id": string;
    /**
     * 转码规则名称（需要先绑定转码模板）
     * @example `sd`
     */
    "Transcode"?: string;
}
