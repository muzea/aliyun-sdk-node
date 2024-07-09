export interface DescribeLiveStreamTranscodeInfoRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainTranscodeName": string;
    /**
     * 播流所属应用名称。
     * @example `myapp`
     */
    "AppName"?: string;
}
