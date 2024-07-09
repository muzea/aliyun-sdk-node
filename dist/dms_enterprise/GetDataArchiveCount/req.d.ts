export interface GetDataArchiveCountRequest {
    /**
     * 插件类型，默认为DATA_ARCHIVE。
     * @example `DATA_ARCHIVE`
     */
    "PluginType"?: string;
    /**
     * 身份类型。默认为管理员（AS_ADMIN）。
     * @example `AS_ADMIN`
     */
    "OrderResultType"?: string;
    /**
     * 工单修改时间或创建时间。获取数据归档工单统计数目以创建时间为准。
     * @example `CREATE_TIME`
     */
    "SearchDateType"?: string;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `2****`
     */
    "Tid"?: number;
}
