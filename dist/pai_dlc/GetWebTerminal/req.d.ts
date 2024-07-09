export interface GetWebTerminalRequest {
    /**
     * 任务ID。
     * @example `dlc-20210126170216-******`
     */
    "JobId"?: string;
    /**
     * 任务Pod ID。
     * @example `dlc-20210126170216-****-chief-0`
     */
    "PodId"?: string;
    /**
     * Pod UID。
     * @example `94a7cc7c-0033-48b5-85bd-71c63592c268`
     */
    "PodUid"?: string;
    /**
     * 是否创建用于分享的进入容器链接。
     * 若为是，返回用于分享的进入容器链接，链接在三十秒内失效且仅可被使用一次。进入容器链接被使用一次后，其他使用该链接的进入容器请求将无效。
     * 若为否，返回普通的进入容器链接，链接在三十秒内失效。使用该链接需进行阿里云身份认证。
     * @example `true`
     */
    "IsShared"?: boolean;
}
