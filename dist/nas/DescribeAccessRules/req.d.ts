interface DescribeAccessRulesRequest {
    "RegionId"?: string;
    /**
    * 权限组名称
    * @example `classic-test`
    */ "AccessGroupName": string;
    /**
    * 规则序号
    * @example `1`
    */ "AccessRuleId"?: string;
    /**
    * 每个分页包含的权限规则个数（默认 10）
    * @example `1`
    */ "PageSize"?: number;
    /**
    * 列表的分页页码（从 1 开始计数）
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 文件系统类型，可选值：standard、extreme，默认值：standard
    * @example `standard`
    */ "FileSystemType"?: string;
}
export { DescribeAccessRulesRequest };