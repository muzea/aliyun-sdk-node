export interface DeleteLiveAudioAuditConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属的应用名称。
     * > AppName取值为星号（*）时，代表该域名下所有的AppName。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 播流名称。
     * > StreamName取值为星号（*）时，代表该App下所有的StreamName。
     * @example `liveStream****`
     */
    "StreamName": string;
}
