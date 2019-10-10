interface ModifyDBInstanceConnectionStringRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 实例当前的某个连接地址，可以是内外网地址，或者混访模式下的经典网络地址。
    * >不支持修改读写分离地址。
    * @example `rm-uf6wjk5xxxxxxx.mysql.rds.aliyuncs.com`
    */ "CurrentConnectionString": string;
    /**
    * 目标连接地址的前缀，即只能修改**CurrentConnectionString**参数的前缀部分。
    * >长度5~40，不能包含汉字和非法字符（~!#%^&amp;*=+\|{};:&#x27;&quot;,&lt;&gt;/?），建议由字母、数字、短横线（-）组成。
    * @example `m-xxxxbn5c23qo`
    */ "ConnectionStringPrefix": string;
    /**
    * 目标端口。
    * @example `3306`
    */ "Port": string;
    "OwnerId"?: number;
}
export { ModifyDBInstanceConnectionStringRequest };