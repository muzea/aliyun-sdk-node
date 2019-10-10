interface StopInvocationRequest {
    /**
    * 地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 命令进程执行ID。您可以通过接口 [DescribeInvocations](~~64840~~) 查询所有的InvokeId。
    * @example `t-7d2a745b412b4601b2d47f6a768d3***`
    */ "InvokeId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    "InstanceId"?: string[];
}
export { StopInvocationRequest };