export interface ListInstanceLoginAuditLogRequest {
    /**
     * 开始操作的时间。
     * > 开始时间可模糊输入，时间格式为YYYY-MM-DD hh:mm:ss。
     * @example `2021-11-18 11:00:00`
     */
    "StartTime": string;
    /**
     * 结束操作的时间。
     * > 结束时间可模糊输入，时间格式为YYYY-MM-DD hh:mm:ss，建议您输入的开始时间和结束时间间隔不要超过一天，方便分页拉取，提升效率。
     * @example `2021-11-18 18:00:00`
     */
    "EndTime": string;
    /**
     * 搜索名称。
     * > 此处的搜索名称可输入数据库名，如果是实例级别的SQL操作，则可输入实例名称。
     * @example `test_SearchName`
     */
    "SearchName"?: string;
    /**
     * 操作人昵称。
     * @example `test_OpUserName`
     */
    "OpUserName"?: string;
    /**
     * 每页数据量。最大值不超过100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 开始页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
