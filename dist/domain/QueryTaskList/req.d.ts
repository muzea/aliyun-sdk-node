export interface QueryTaskListRequest {
    /**
     * 用户IP。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 查询创建日期范围的开始时间，UTC时间1970年1月1日0点距离现在的毫秒数，目前只支持按天查询。
     * @example `1522080000000`
     */
    "BeginCreateTime"?: number;
    /**
     * 查询创建日期范围的结束时间，UTC时间1970年1月1日0点距离现在的毫秒数，目前只支持按天查询。
     * @example `1522080000000`
     */
    "EndCreateTime"?: number;
    /**
     * 分页页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 分页大小。
     * @example `2`
     */
    "PageSize": number;
}
