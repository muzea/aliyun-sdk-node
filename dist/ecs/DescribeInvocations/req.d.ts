interface DescribeInvocationsRequest {
    /**
    * ECS 实例所在的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
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
    * 命令进程执行 ID。
    * @example `t-7d2a745b412b4601b2d47f6a768d3b53`
    */ "InvokeId"?: string;
    /**
    * 命令 ID。您可以通过接口 [DescribeCommands](~~64843~~) 查询所有可用的 CommandId。
    * @example `c-4d34302d02424c5c8e10281e3a315a05`
    */ "CommandId"?: string;
    /**
    * 命令名称。
    * @example `Test1`
    */ "CommandName"?: string;
    /**
    * 命令类型。
    * @example `RunShellScript`
    */ "CommandType"?: string;
    /**
    * 命令是否为周期执行。默认值：False
    * @example `true`
    */ "Timed"?: boolean;
    /**
    * 指定的命令总的执行状态。总的执行状态取决于指定命令管理的所有目标实例中的命令进程执行状态 InstanceInvokeStatus。取值范围：
    *
    * - Running：命令进程进行中
    *     - 周期执行：未手动停止周期执行命令前，命令进程一直为 进行中（Running）。
    *     - 单次执行：指定命令管理的所有目标实例中一旦有 进行中（Running）的命令进程，总的执行状态为 进行中（Running）。
    *
    * - Finished：命令进程执行完成
    *     - 周期执行：命令进程不可能为 执行完成（Finished）。
    *     - 单次执行：指定命令管理的所有目标实例全部执行完成，总的执行状态为 执行完成（Finished）。  或者 手动停止（Stopped）部分目标实例的命令进程，其余目标实例全部执行完成，总的执行状态为 执行完成（Finished）。
    *
    * - Failed：命令进程执行失败，命令进程出现超时情况或者其他异常
    *     - 周期执行：命令进程不可能为 执行失败（Failed）。
    *     - 单次执行：指定命令管理的所有目标实例全部执行失败，总的执行状态为 执行失败（Failed）。
    *
    * - PartialFailed：命令进程执行部分失败
    *     - 周期执行：命令进程不可能为 部分失败（PartialFailed）。
    *     - 单次执行：指定命令管理的所有目标实例中个别有 执行失败（Failed）的命令进程，总的执行状态为 部分失败（PartialFailed）。
    *
    * - Stopped：命令进程被手动停止
    *
    * @example `Finished`
    */ "InvokeStatus"?: string;
    /**
    * 实例 ID。当您传入了该参数，将查询该实例所有的命令执行记录。
    * @example `i-uf614fhehhzxx`
    */ "InstanceId"?: string;
    "ContentEncoding"?: string;
    /**
    * 当前页码，起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值：50
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeInvocationsRequest };