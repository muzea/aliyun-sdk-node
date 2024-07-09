export interface DescribeLiveMessageGroupRequest {
    /**
     * 应用ID。
     * @example `coims-pre`
     */
    "AppId": string;
    /**
     * 群组ID。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前固定取值cn-shanghai。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
