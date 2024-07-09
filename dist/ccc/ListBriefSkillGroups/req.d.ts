export interface ListBriefSkillGroupsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 根据技能组名称或技能组展示名进行模糊匹配，非必填，默认为空，为空表示不过滤。
     * @example `skillgroup`
     */
    "SearchPattern"?: string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 媒体类型，默认是语音(AUDIO), 其他可选参数包括CHAT和 VIDEO。
     * @example `CHAT`
     */
    "MediaType"?: string;
}
