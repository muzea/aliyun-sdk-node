interface ModifyDTCSecurityIpHostsForSQLServerRequest {
    /**
    * RDS实例的地域ID，可以通过接口[DescribeRegions](~~26243~~)查看。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * ECS实例的IP地址和Windows系统的计算机名。格式：ip,hostname。多个实例之间以英文分号（;）隔开。
    * >计算机名查看方式请参见[设置分布式事务白名单](~~124321~~)。
    * @example `192.168.1.100,k3ecstest`
    */ "SecurityIpHosts": string;
    /**
    * 白名单分组名称。
    * @example `test1`
    */ "WhiteListGroupName": string;
    /**
    * RDS实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
}
export { ModifyDTCSecurityIpHostsForSQLServerRequest };