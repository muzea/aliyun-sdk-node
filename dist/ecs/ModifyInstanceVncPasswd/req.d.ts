interface ModifyInstanceVncPasswdRequest {
    /**
    * ECS实例所在的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * ECS实例。
    * @example `i-AY121018033933eae8***`
    */ "InstanceId": string;
    /**
    * 新的ECS实例管理终端连接密码。
    * @example `123456`
    */ "VncPassword": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { ModifyInstanceVncPasswdRequest };