interface JoinResourceGroupRequest {
    /**
    * 资源所在的地域ID。您可以调用 [**DescribeRegions**](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * ECS资源的类型。取值范围： instance（实例）|disk（磁盘）|snapshot（快照）|image（镜像）|securitygroup（安全组）|ddh（专有宿主机）|eni（弹性网卡）|keypair（密钥对）|launchtemplate（启动模板）
    * 以上参数取值均大小写敏感。
    * @example `instance`
    */ "ResourceType"?: string;
    /**
    * 资源类型的ID标识符。例如，当ResourceType=instance时，则ResourceId可以理解为InstanceId。
    * @example `i-instanceid1`
    */ "ResourceId"?: string;
    "SourceRegionId"?: string;
    /**
    * 目标资源组ID。
    * @example `rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
}
export { JoinResourceGroupRequest };