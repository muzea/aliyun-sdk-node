interface CreateDBInstanceRequest {
    /**
    * 地域ID，长度不超过50个字符，可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 数据库类型，取值：
    * * **MySQL**；
    * * **SQLServer**；
    * * **PostgreSQL**；
    * * **PPAS**；
    * * **MariaDB**。
    * @example `MySQL`
    */ "Engine": string;
    /**
    * 数据库版本，取值：
    * * MySQL：**5.5/5.6/5.7**；
    * * SQLServer：**2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_ent**；
    * * PostgreSQL：**9.4/10.0**；
    * * PPAS：**9.3/10.0**；
    * * MariaDB：**10.3**。
    * @example `5.6`
    */ "EngineVersion": string;
    /**
    * 实例规格，详见[实例规格表](~~26312~~)。
    * @example `rds.mys2.small`
    */ "DBInstanceClass": string;
    /**
    * 实例存储空间，取值：
    * * MySQL/PostgreSQL/PPAS 双机高可用版： **5~2000**；
    * * MySQL 5.7 云盘版/MariaDB：**20~1000**；
    * * SQL Server 2008R2：**10~2000**；
    * * SQL Server 2012/2016/2017：**20~3000**。
    * 每5G进行递增，单位：GB。详见[实例规格表](~~26312~~)。
    * @example `20`
    */ "DBInstanceStorage": number;
    /**
    * 实例的网络连接类型，取值：
    * * **Internet**：公网连接；
    * * **Intranet**：内网连接。
    * @example `Internet`
    */ "DBInstanceNetType": string;
    /**
    * 该实例的[IP白名单](~~43185~~)，多个IP地址请以英文逗号（,）隔开，不可重复，最多1000个。支持如下两种格式：
    * * IP地址形式，例如：10.23.12.24。
    * * CIDR形式，例如：10.23.12.24/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
    * @example `10.23.12.27/25`
    */ "SecurityIPList": string;
    /**
    * 实例的付费类型，取值：
    * * **Postpaid**：后付费（按量付费）；
    * * **Prepaid**：预付费（包年包月）。
    * @example `Postpaid`
    */ "PayType": string;
    "OwnerId"?: number;
    /**
    * 字符集，取值：
    * * MySQL/MariaDB实例：**utf8、gbk、latin1、utf8mb4**；
    * * SQL Server实例：**Chinese_PRC_CI_AS、Chinese_PRC_CS_AS、SQL_Latin1_General_CP1_CI_AS、SQL_Latin1_General_CP1_CS_AS、Chinese_PRC_BIN**。
    * @example `GBK`
    */ "SystemDBCharset"?: string;
    /**
    * 实例名称，长度为2~256个字符。以中文、英文字母开头，可以包含可以包含数字、中文、英文、下划线（_）、短横线（-）。
    * >不能以 http:// 和 https:// 开头。
    * @example `测试数据库`
    */ "DBInstanceDescription"?: string;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 可用区ID。
    * > 如果数据库类型为MariaDB，该参数必填。
    * @example `cn-hangzhou-b`
    */ "ZoneId"?: string;
    "ZoneIdSlave1"?: string;
    "ZoneIdSlave2"?: string;
    /**
    * 实例的网络类型，取值：
    * * **VPC**：VPC网络；
    * * **Classic**：经典网络。
    * 默认创建经典网络类型的实例。
    * > * SQL Server2017集群版只支持VPC网络；
    * * 如果数据库类型为MariaDB，该参数必填。
    * @example `Classic`
    */ "InstanceNetworkType"?: string;
    /**
    * 实例的访问模式，取值：
    * * **Standard**：标准访问模式；
    * * **Safe**：数据库代理模式。
    * 默认为RDS系统分配。
    * > SQL Server 2012/2016/2017只支持标准访问模式。
    * @example `Standard`
    */ "ConnectionMode"?: string;
    /**
    * VPC ID， 多个值用英文逗号（,）隔开。
    * >如果数据库类型为MariaDB，该参数必填。
    * @example `vpc-xxxxxxxxxxxx`
    */ "VPCId"?: string;
    /**
    * VSwitch ID，多个值用英文逗号（,）隔开。
    * >如果数据库类型为MariaDB，该参数必填。
    * @example `vsw-xxxxxxxxxxx`
    */ "VSwitchId"?: string;
    /**
    * 设置实例的内网IP，需要在指定交换机的IP地址范围内。系统默认通过**VPCId**和**VSwitchId**自动分配。
    * @example `172.16.201.69`
    */ "PrivateIpAddress"?: string;
    /**
    * 指定购买时长，取值：
    * * 当参数**Period**为**Year**时，UsedTime取值为**1~3**；
    * * 当参数**Period**为**Month**时，UsedTime取值为**1~9**。
    * > 若付费类型为**Prepaid**则该参数必须传入。
    * @example `2`
    */ "UsedTime"?: string;
    /**
    * 指定预付费实例为包年或者包月类型，取值：
    * * **Year**：包年；
    * * **Month**：包月。
    * > 若付费类型为**Prepaid**则该参数必须传入。
    * @example `Year`
    */ "Period"?: string;
    "ResourceGroupId"?: string;
    /**
    * 实例存储类型，取值：
    * * **local_ssd**：本地SSD盘（推荐）；
    * * **cloud_ssd**：SSD云盘。
    * @example `cloud_ssd`
    */ "DBInstanceStorageType"?: string;
    "TunnelId"?: string;
    /**
    * 业务扩展参数。
    * @example `121436975448952`
    */ "BusinessInfo"?: string;
    "EncryptionKey"?: string;
    "RoleARN"?: string;
    "AutoRenew"?: string;
    "Category"?: string;
}
export { CreateDBInstanceRequest };