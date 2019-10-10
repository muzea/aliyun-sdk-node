interface DescribeInstanceVncUrlRequest {
    /**
    * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。
    * @example `i-AY121018033933eaxxxxxxx`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DescribeInstanceVncUrlRequest };