interface DescribeInstanceRamRoleRequest {
    /**
    * 实例RAM角色所在的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 查询接口返回资源信息列表的页码。
    * 起始值：1。
    * 默认值：1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页展示响应信息时设置的每页行数，单位：行。
    * 最大值：50。
    * 默认值：10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 指定查询的实例ID的集合。最多支持一次查询100台实例。
    * @example `["instanceId1", "instanceId2", "instanceId3"…]`
    */ "InstanceIds"?: string;
    /**
    * 查询赋予了某一实例RAM角色的所有ECS实例。您可以使用RAM API [ListRoles](~~28713~~)查询您已创建的实例RAM角色。
    * @example `FinanceDeptOnly`
    */ "RamRoleName"?: string;
}
export { DescribeInstanceRamRoleRequest };