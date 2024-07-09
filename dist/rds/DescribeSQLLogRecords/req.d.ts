export interface DescribeSQLLogRecordsRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 备用参数。
     * @example `None`
     */
    "SQLId"?: number;
    /**
     * 用于查询的关键字。
     * - 通过API生成审计文件时（请求参数**Form**取值为**File**），不支持通过关键字筛选。
     * - 多个关键字以空格分隔，不超过10个关键字；各个关键字之间的逻辑关系为**and**。
     * - 如果SQL语句中的字段名使用了反引号（\`），以该字段名作为查询的关键字时，也需要输入反引号。例如，字段名为\`id\`，则输入\`id\`，而不是id。
     * > 输入关键字后，系统会以**Database**、**User**和**QueryKeywords**同时进行关键字匹配，三个请求参数之间的逻辑关系为**or**。
     * @example `table_name`
     */
    "QueryKeywords"?: string;
    /**
     * 查询开始时间，可查询当前日期7天内的数据。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >当开通了DAS企业版 V3，使用其提供的SQL洞察和审计功能时，可查询数据热存储时长内的数据。通过[DescribeSqlLogConfig](~~2778837~~)可以查询开通的企业版信息。
     * @example `2011-06-01T15:00:00Z`
     */
    "StartTime": string;
    /**
     * 数据库名称。默认为所有数据库，也可以输入数据库名称查询，一次只能输入一个。
     * @example `Database`
     */
    "Database"?: string;
    /**
     * 用户名称。默认为所有用户，也可以输入用户名称查询，一次只能输入一个。
     * @example `user`
     */
    "User"?: string;
    /**
     * 触发审计文件的生成或者返回SQL记录列表，取值：
     * * **File**：若传入这个值，则触发审计文件的生成，只返回公共参数，需再调用DescribeSQLLogFiles接口获取文件的最终下载地址。
     * * **Stream**：默认值，返回SQL记录列表。
     * > 取值为**File**时，只支持MySQL（本地盘）和SQL Server实例，且最多记录100万条日志。
     * @example `Stream`
     */
    "Form"?: string;
    /**
     * 查询结束时间，大于查询开始时间，与查询开始时间间隔小于等于7天。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >当开通了DAS企业版 V3，使用其提供的SQL洞察和审计功能时，可查询数据热存储时长内的数据。通过[DescribeSqlLogConfig](~~2778837~~)可以查询开通的企业版信息。
     * @example `2011-06-11T15:00:00Z`
     */
    "EndTime": string;
    /**
     * 每页记录数，取值：**30**~**100**。默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
