export interface RecoverLiveMessageDeletedGroupRequest {
    /**
     * 应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 要恢复的群组ID。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)创建时的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
