interface DescribeSQLLogRecordsRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 查询开始时间，格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * @example `2011-06-01T15:00:00Z`
    */ "StartTime": string;
    /**
    * 查询结束时间，大于查询开始时间，与查询开始时间间隔小于31天。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
    * @example `2011-06-11T15:00:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * SQL语句唯一标识ID。
    * @example `25623548`
    */ "SQLId"?: number;
    /**
    * 用于查询的关键字，多个关键字以空格分隔，不超过10个关键字。
    * @example `rds`
    */ "QueryKeywords"?: string;
    /**
    * 数据库名称。默认为所有数据库，也可以输入数据库名称查询，一次只能输入一个。
    * @example `Database`
    */ "Database"?: string;
    /**
    * 用户名称。默认为所有用户，也可以输入用户名称查询，一次只能输入一个。
    * @example `user`
    */ "User"?: string;
    /**
    * 触发审计文件的生成或者返回SQL记录列表，取值：
    * * **File**：若传入这个值，则触发审计文件的生成，只返回公共参数，需再调用[DescribeSQLLogFiles](~~26295~~)接口获取文件的最终下载地址；
    * * **Stream**：默认值，返回SQL记录列表。
    * @example `Stream`
    */ "Form"?: string;
    /**
    * 每页记录数，取值：
    * * **30**；
    * * **50**；
    * * **100**。
    * 默认值：**30**。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 页码，取值：大于0且不超过Integer的最大值。
    * 默认值：**1**。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeSQLLogRecordsRequest };