export interface GetLiveEditingIndexFileRequest {
    /**
     * 直播播流应用名
     * @example `testrecord`
     */
    "AppName"?: string;
    /**
     * 直播播流域名
     * @example `test.alivecdn.com`
     */
    "DomainName"?: string;
    /**
     * 直播播流流名
     * @example `teststream`
     */
    "StreamName"?: string;
    /**
     * 直播剪辑工程ID
     * @example `*****cb6307a4edea614d8b3f3c*****`
     */
    "ProjectId"?: string;
}
