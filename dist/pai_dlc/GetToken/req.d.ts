export interface GetTokenRequest {
    /**
     * 分享的任务类型，只可指定job或者tensorboard
     * @example `job`
     */
    "TargetType"?: string;
    /**
     * 等待分享的任务的ID
     * @example `dlc*******`
     */
    "TargetId"?: string;
    /**
     * 分享链接过期时间（默认为604800秒），最小值为0
     * @example `60`
     */
    "ExpireTime"?: number;
}
