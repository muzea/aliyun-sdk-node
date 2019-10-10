interface DescribeParameterTemplatesRequest {
    "RegionId"?: string;
    /**
    * 数据库类型，取值：
    * * **mysql**：MySQL数据库；
    * * **mssql**：SQL Server数据库；
    * * **PostgreSQL**：PostgreSQL数据库；
    * * **PPAS**：PPAS数据库；
    * * **MariaDB**：MariaDB数据库。
    * @example `MySQL`
    */ "Engine": string;
    /**
    * 数据库版本号，取值：
    * * MySQL数据库：**5.5/5.6/5.7/8.0**；
    * * SQL Server数据库：**2008r2**；
    * * PostgreSQL数据库：**9.4/10.0**；
    * * PPAS数据库：**9.3/10.0**；
    * * MariaDB数据库：**10.3**。
    * @example `5.6`
    */ "EngineVersion": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 实例类别，取值：
    * * **Basic**：基础版；
    * * **HighAvailability **：高可用版；
    * * **Finance **：金融版（仅支持中国站）。
    * 默认返回所有实例类型的参数模板。
    * @example `Basic`
    */ "Category"?: string;
}
export { DescribeParameterTemplatesRequest };