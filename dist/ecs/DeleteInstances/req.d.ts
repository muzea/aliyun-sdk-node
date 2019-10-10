interface DeleteInstancesRequest {
    /**
    * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "InstanceId": string[];
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 是否只预检此次请求。
    * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
    * - false（默认值）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
    * @example `false`
    */ "DryRun"?: boolean;
    /**
    * 是否强制释放**运行中**（`Running`）的ECS实例。
    * -   true：强制释放**运行中**（`Running`）的实例。强制释放相当于断电，实例内存以及存储中的临时数据都会被擦除，无法恢复。
    * -   false（默认值）：正常释放实例，此时实例必须处于**已停止**（`Stopped`）状态。
    * @example `false`
    */ "Force"?: boolean;
    /**
    * 是否释放已到期的包年包月实例。
    * 默认值：false。
    * @example `false`
    */ "TerminateSubscription"?: boolean;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
}
export { DeleteInstancesRequest };