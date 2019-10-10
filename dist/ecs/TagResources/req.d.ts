interface TagResourcesRequest {
    /**
    * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源类型定义。取值范围：
    * - instance：ECS实例
    * - disk：磁盘
    * - snapshot：快照
    * - image：镜像
    * - securitygroup：安全组
    * - volume：存储卷
    * - eni：弹性网卡
    * - ddh：专有宿主机
    * - keypair：SSH密钥对
    * - launchtemplate：启动模板
    * @example `instance`
    */ "ResourceType": string;
    "ResourceId": string[];
    "Tag": string[];
    /**
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { TagResourcesRequest };