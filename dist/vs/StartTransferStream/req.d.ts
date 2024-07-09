export interface StartTransferStreamRequest {
    /**
     * 流ID。
     * @example `323*****998-cn-qingdao`
     */
    "Id": string;
    /**
     * 转推的目的地址
     * @example `example.com`
     */
    "Url": string;
    /**
     * 转码规则名称（需要先绑定转码模板）
     * @example `sd`
     */
    "Transcode"?: string;
}
