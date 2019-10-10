interface DetachInstanceRamRoleRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 指定收回的实例ID的集合。最多支持一次查询100台实例。
    * @example `["instanceId1", "instanceId2", "instanceId3"…]`
    */ "InstanceIds": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 收回赋予了某一实例RAM角色的所有ECS实例。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
    * @example `RamRoleTest`
    */ "RamRoleName"?: string;
}
export { DetachInstanceRamRoleRequest };