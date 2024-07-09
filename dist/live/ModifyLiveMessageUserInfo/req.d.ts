export interface ModifyLiveMessageUserInfoRequest {
    /**
     * 需要修改用户信息的互动消息应用ID。
     * @example `demo`
     */
    "AppId": string;
    /**
     * 需要修改的用户ID。
     * @example `uid2`
     */
    "UserId": string;
    /**
     * 修改后的用户扩展信息，长度不超过512字节。
     * @example `uid2meta2`
     */
    "UserMetaInfo"?: string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前支持上海（取值为cn-shanghai）、新加坡（取值为ap-southeast-1）。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
