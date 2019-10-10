interface InvokeCommandRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 命令ID。您可以通过接口[DescribeCommands](~~64843~~)查询所有可用的CommandId。
    * @example `c-e996287206324975b5fbe1d********`
    */ "CommandId": string;
    "InstanceId": string[];
    /**
    * @example `cn-hangzhou`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 命令是否为周期执行。
    * 默认值：false
    * @example `true`
    */ "Timed"?: boolean;
    /**
    * 周期任务的执行周期，两次周期任务的时间间隔不能低于10秒。当参数Timed的值为True时，参数Frequency为必需参数。
    * 该参数取值遵循Cron表达式，请参见[设置定时执行命令](~~64769~~)。
    * @example `0 *​/20 * * * *`
    */ "Frequency"?: string;
    /**
    * 启用自定义参数功能时，执行命令时传入的自定义参数的键值对。自定义参数的个数范围：0~10
    * - Map的键不允许为空字符串，最多支持64个字符。
    * - Map的值允许为空字符串。
    * - 自定义参数与原始命令内容在Base64编码后，综合长度不能超过16KB。
    * - 设置的自定义参数名集合必须为创建命令时定义的参数集的子集。对于未传入的参数，您可以使用空字符串代替。
    * 您可以取消设置该参数从而禁用自定义参数。
    * @example `{"name":"Jack", "accessKey":"LTAIdyv******aRY"}`
    */ "Parameters"?: string;
}
export { InvokeCommandRequest };