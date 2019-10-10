interface ListClusterHostGroupRequest {
    /**
    * 区域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-D7958B72E59B****`
    */ "ClusterId": string;
    /**
    * 机器组ID。
    * @example `G-76D09CF110A3****`
    */ "HostGroupId"?: string;
    /**
    * 待查询的机器组名称。
    * @example `core_group`
    */ "HostGroupName"?: string;
    /**
    * 待查询的机器组类型，枚举值：**MASTER**、**CORE**和**TASK**。
    * @example `CORE`
    */ "HostGroupType"?: string;
    "StatusList"?: string[];
    /**
    * 分页查询的页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询的每页数据量。
    * @example `10`
    */ "PageSize"?: number;
}
export { ListClusterHostGroupRequest };