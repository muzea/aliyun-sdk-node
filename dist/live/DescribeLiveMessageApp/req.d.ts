export interface DescribeLiveMessageAppRequest {
    /**
     * 待查询的互动消息应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
