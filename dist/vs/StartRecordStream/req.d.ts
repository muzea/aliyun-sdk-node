export interface StartRecordStreamRequest {
    /**
     * 流ID。
     * @example `323*****997-cn-qingdao`
     */
    "Id"?: string;
    /**
     * 流的播放域名。
     * @example `example.com`
     */
    "PlayDomain"?: string;
    /**
     * 流的App名称。
     * @example `live`
     */
    "App"?: string;
    /**
     * 流名。
     * @example `310000*****000002`
     */
    "Name"?: string;
}
