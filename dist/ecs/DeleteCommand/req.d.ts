interface DeleteCommandRequest {
    /**
    * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 命令 ID。您可以通过接口 [DescribeCommands](~~64843~~) 查询所有可用的 CommandId。
    * @example `c-4d34302d02424c5c8e10281e3a315***`
    */ "CommandId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DeleteCommandRequest };