interface DescribeDBInstanceIpHostnameRequest {
    /**
    * RDS实例的地域ID，可以通过接口[DescribeRegions](~~26243~~)查看。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * RDS实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
}
export { DescribeDBInstanceIpHostnameRequest };