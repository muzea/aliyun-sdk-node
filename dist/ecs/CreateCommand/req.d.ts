interface CreateCommandRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 命令名称，支持全字符集。长度不得超过128个字符。
    * @example `Test`
    */ "Name": string;
    /**
    * 命令的类型。取值范围：
    * - RunBatScript：创建一个在Windows实例中运行的 Bat 脚本
    * - RunPowerShellScript：创建一个在Windows实例中运行的PowerShell脚本
    * - RunShellScript：创建一个在Linux实例中运行的Shell脚本
    *
    * @example `RunShellScript`
    */ "Type": string;
    /**
    * 命令Base64编码后的内容。
    * - 该参数的值必须使用Base64编码后传输，且脚本内容的大小在Base64编码之后不能超过16KB。
    * - 命令内容支持使用自定义参数形式，具体通过指定参数`EnableParameter=true`启用自定义参数功能：
    *     - 自定义参数用`{{}}`包含的方式定义，在`{{}}`内参数名前后的空格以及换行符会被忽略
    *     - 自定义参数个数不能超过20个
    *     - 自定义参数名允许a-zA-Z0-9-_的组合，不支持其余字符，参数名不区分大小写
    *     - 单个参数名不能超过64字节
    * @example `ZWNobyAxMjM=`
    */ "CommandContent": string;
    /**
    * @example `cn-hangzhou`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 命令描述，支持全字符集。长度不得超过512个字符。
    * @example `Test1`
    */ "Description"?: string;
    /**
    * 您创建的命令在ECS实例中运行的目录。默认值：
    * - 对于Linux实例，默认在管理员root用户的home目录下，具体为/root目录。
    * - 对于Windows实例，默认在云助手客户端进程所在目录，例如，C:\ProgramData\aliyun\assist\$(version)。
    *
    * @example `/home/`
    */ "WorkingDir"?: string;
    /**
    * 您创建的命令在ECS实例中执行时最大的超时时间，单位为秒。当因为某种原因无法运行您创建的命令时，会出现超时现象。超时后，会强制终止命令进程，即取消命令的PID。
    * 默认值：3600
    * @example `3600`
    */ "Timeout"?: number;
    /**
    * 创建的命令是否使用自定义参数。
    * 默认值：false
    * @example `false`
    */ "EnableParameter"?: boolean;
}
export { CreateCommandRequest };