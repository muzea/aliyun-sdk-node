export interface DeleteMonitorGroupRequest {
    /**
     * API分组ID，系统生成，全局唯一
     * @example `42925e7f5209438186d5560239af5286`
     */
    "GroupId": string;
    /**
     * 监控组ID。
     * @example `166636221`
     */
    "RawMonitorGroupId"?: number;
}
