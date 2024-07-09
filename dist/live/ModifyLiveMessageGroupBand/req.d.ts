export interface ModifyLiveMessageGroupBandRequest {
    /**
     * 应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 群组ID。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 是否全员禁言。
     * @example `false`
     */
    "BannedAll"?: boolean;
    /**
     * 被禁言的用户列表。
     */
    "BannnedUsers"?: string[];
    /**
     * 不被禁言的用户列表。
     */
    "ExceptUsers"?: string[];
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai)、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
