interface CreateDatabaseRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 数据库名称。
    * >* 长度为2~64个字符；
    * * 以字母开头，以字母或数字结尾；
    * * 由小写字母、数字、下划线或中划线组成；
    * * 数据库名称在实例内必须是唯一的；
    * * 其他非法字符，详见[禁用关键字表](~~26317~~)。
    * @example `rds_mysql`
    */ "DBName": string;
    /**
    * 字符集，取值：
    * * MySQL/MariaDB类型：**utf8、gbk、latin1、utf8mb4**；
    * * SQL Server类型：**Chinese_PRC_CI_AS、Chinese_PRC_CS_AS、SQL_Latin1_General_CP1_CI_AS、SQL_Latin1_General_CP1_CS_AS、Chinese_PRC_BIN**。
    * @example `gbk`
    */ "CharacterSetName": string;
    "OwnerId"?: number;
    /**
    * 数据库描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
    * >不能以 http:// 和 https:// 开头。
    * @example `测试用数据库`
    */ "DBDescription"?: string;
}
export { CreateDatabaseRequest };