export interface ModifyLiveMessageAppDisableRequest {
    /**
     * 需要修改信息的直播互动应用ID。
     * @example `ab6b5740****`
     */
    "AppId": string;
    /**
     * 是否禁用直播互动应用。
     * @example `true`
     */
    "Disable"?: boolean;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前固定取值cn-shanghai。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
