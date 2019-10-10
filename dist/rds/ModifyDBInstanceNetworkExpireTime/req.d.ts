interface ModifyDBInstanceNetworkExpireTimeRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    *
    * 要延期的经典网络连接地址，经典网络连接地址有两种：
    * * 经典网络内网地址；
    * * 经典网络读写分离地址。
    * @example `rm-uf6wjk5xxxxx.mysql.rds.aliyuncs.com`
    */ "ConnectionString": string;
    /**
    * 经典网络连接地址保留天数，取值：**1-120**，单位：天。
    * @example `7`
    */ "ClassicExpiredDays": number;
    "OwnerId"?: number;
}
export { ModifyDBInstanceNetworkExpireTimeRequest };