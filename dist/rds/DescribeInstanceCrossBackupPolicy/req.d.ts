interface DescribeInstanceCrossBackupPolicyRequest {
    /**
    * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
}
export { DescribeInstanceCrossBackupPolicyRequest };