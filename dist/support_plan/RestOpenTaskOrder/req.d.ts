export interface RestOpenTaskOrderRequest {
    /**
     * 任务单EID
     * @example `E21111796147LE`
     */
    "OrderId": string;
    /**
     * 重开说明
     * @example `重开补充说明原因`
     */
    "ResetContent"?: string;
    /**
     * 场景群ID
     * @example `cidXcezGVQJjiWy2PzXylGwvg==`
     */
    "OpenGroupId"?: string;
    /**
     * 重开类型
     * @example `枚举值：6:解决方案无效；7:当前问题仍有疑问需要咨询；8:问题重复出现`
     */
    "ResetType"?: string;
    /**
     * 操作人姓名
     * @example `操作人姓名`
     */
    "UserName"?: string;
}
