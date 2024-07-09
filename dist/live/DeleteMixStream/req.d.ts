export interface DeleteMixStreamRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * App名称。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 合流任务的流名。
     * @example `liveStream****`
     */
    "StreamName"?: string;
    /**
     * 合流任务ID。如果您通过[CreateMixStream接口](~~194148~~)创建合流任务，请查看CreateMixStream接口调用返回的参数MixStreamId值。
     * @example `749b7594-86d6-37b1-513b-e1e19845****`
     */
    "MixStreamId": string;
}
