export interface GetSqlOptimizeAdviceRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "ConsoleContext"?: string;
    /**
     * 数据库引擎，取值：
     * - **MySQL**：RDS MySQL。
     * - **PolarDBMySQL**：PolarDB MySQL版。
     * @example `MySQL`
     */
    "Engine"?: string;
    /**
     * 实例ID。
     * >仅支持RDS MySQL、PolarDB MySQL版实例。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceIds"?: string;
    /**
     * 查询开始日期，格式：<i>yyyyMMdd</i>（UTC时间）。
     * - 为空时，默认为当前日期的前一天。
     * - 只能查询当前日期前一天及之前的数据。
     * @example `20210916`
     */
    "StartDt"?: string;
    /**
     * 查询结束日期，格式：<i>yyyyMMdd</i>（UTC时间）。
     * - 为空时，默认为当前日期的前一天。
     * - 只能查询当前日期前一天及之前的数据，查询开始日期和查询结束日期的间隔不能超过30天。
     * @example `20210917`
     */
    "EndDt"?: string;
    /**
     * 实例所属地域，取值：
     * - **cn-china**：中国内地。
     * - **cn-hongkong**：中国香港。
     * - **ap-southeast-1**：新加坡。
     * 此参数只有在请求参数**InstanceIds**为空时有效。如果请求参数**InstanceIds**为空时，按照**Region**参数设置的地域获取数据，系统默认实例所属地域为**cn-china**；如果请求参数**InstanceIds**不为空时，即使设置了**Region**参数，也以**InstanceIds**所传入的第一个实例所在地域为准获取数据。
     * > 在中国内地各地域创建的实例，传入此参数时，都为**cn-china**。
     * @example `cn-china`
     */
    "Region"?: string;
}
