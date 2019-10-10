interface DescribeInvocationResultsRequest {
    /**
    * 地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 命令执行ID。命令进程执行ID。您可以通过接口 [DescribeInvocations](~~64840~~) 查询InvokeId。
    * @example `t-7d2a745b412b4601b2d47f6a768d3***`
    */ "InvokeId"?: string;
    /**
    * 实例ID。
    * @example `i-uf614fhehhzmx***`
    */ "InstanceId"?: string;
    /**
    * 命令ID。
    * @example `c-4d34302d02424c5c8e10281e3a315***`
    */ "CommandId"?: string;
    /**
    * 命令执行状态。
    * @example `Finished`
    */ "InvokeRecordStatus"?: string;
    "IncludeHistory"?: boolean;
    /**
    * 当前页码，起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值：50
    * 默认值：10
    * @example `5`
    */ "PageSize"?: number;
}
export { DescribeInvocationResultsRequest };