export interface RemoveCheckInstanceResultWhiteListRequest {
    /**
     * 检查项ID。
     * @example `11`
     */
    "CheckId"?: number;
    /**
     * 需要查询的实例ID。多个ID使用英文逗号（,）隔开。
     */
    "InstanceIds"?: string[];
}
