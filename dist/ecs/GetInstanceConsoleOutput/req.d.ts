interface GetInstanceConsoleOutputRequest {
    /**
    * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-shenzhen-finance-1`
    */ "RegionId": string;
    /**
    * 实例ID。
    * @example `i-myInstance`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { GetInstanceConsoleOutputRequest };