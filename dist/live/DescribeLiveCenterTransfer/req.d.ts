export interface DescribeLiveCenterTransferRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播流应用名称。输入的AppName必须与需要转推的直播流AppName保持一致，方可生效。
     * @example `testapp`
     */
    "AppName"?: string;
    /**
     * 直播流名称。
     * @example `teststream`
     */
    "StreamName"?: string;
    /**
     * 转推的第三方直播地址。
     * @example `rtmp://push.example2.aliyunlive.com/testapp1/teststream2`
     */
    "DstUrl"?: string;
}
