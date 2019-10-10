interface DescribeCommandsRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `cn-hangzhou`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 命令 ID。
    * @example `c-7d2a745b412b4601b2d47f6a768d3***`
    */ "CommandId"?: string;
    /**
    * 命令的名称，暂不支持模糊查询。
    * @example `Test1`
    */ "Name"?: string;
    /**
    * 命令描述。
    * @example `test`
    */ "Description"?: string;
    /**
    * 命令的类型。取值范围：
    * - RunBatScript：命令为在Windows实例中运行的Bat脚本
    * - RunPowerShellScript：命令为在Windows实例中运行的PowerShell脚本
    * - RunShellScript：命令为在Linux实例中运行的Shell脚本
    *
    * @example `RunShellScript`
    */ "Type"?: string;
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
export { DescribeCommandsRequest };