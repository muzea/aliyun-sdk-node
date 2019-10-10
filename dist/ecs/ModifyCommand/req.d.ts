interface ModifyCommandRequest {
    /**
    * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 命令 ID。您可以通过接口 [DescribeCommands](~~64843~~) 查询所有可用的 CommandId。
    * @example `c-4d34302d02424c5c8e10281e3a315a05`
    */ "CommandId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 命令名称，支持全字符集。长度不得超过 30 个字符。
    * @example `AlibabaCommand`
    */ "Name"?: string;
    /**
    * 命令描述，支持全字符集。长度不得超过100个字符。
    * @example `UserGuide`
    */ "Description"?: string;
    /**
    * 命令内容。
    * @example `c2VydmljZSB0b21jYXQgc3RhcnQ=`
    */ "CommandContent"?: string;
    /**
    * 执行路径。
    * @example `/home/`
    */ "WorkingDir"?: string;
    /**
    * 超时时间。
    * @example `120`
    */ "Timeout"?: number;
}
export { ModifyCommandRequest };