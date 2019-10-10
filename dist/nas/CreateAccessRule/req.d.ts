interface CreateAccessRuleRequest {
    "RegionId"?: string;
    /**
    * 地址或地址段（格式必须为单一IP地址或者CIDR网段格式，如：12.1.1.1 或 13.1.1.1/25）
    * @example `10.0.0.1/32`
    */ "SourceCidrIp": string;
    /**
    * 权限组名称
    * @example `classic-test`
    */ "AccessGroupName": string;
    /**
    * 读写权限类型：RDWR（默认）和 RDONLY
    * @example `RDWR`
    */ "RWAccessType"?: string;
    /**
    * 用户权限类型：no_squash（默认）、root_squash 和 all_squash
    * @example `no_squash`
    */ "UserAccessType"?: string;
    /**
    * 优先级，范围 1-100，默认值为 1
    * @example `1`
    */ "Priority"?: number;
    /**
    * 文件系统类型，可选值：standard、extreme，默认值：standard
    * @example `standard`
    */ "FileSystemType"?: string;
}
export { CreateAccessRuleRequest };