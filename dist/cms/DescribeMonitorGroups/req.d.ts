interface DescribeMonitorGroupsRequest {
    "RegionId"?: string;
    /**
    * 返回结果中是否需要包含报警联系人组。
    * @example `true`
    */ "SelectContactGroups"?: boolean;
    /**
    * 分页页码， 默认1 。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页大小，默认10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 应用分组名称。可根据应用分组名称模糊查询。
    * @example `test`
    */ "Keyword"?: string;
    /**
    * 资源实例ID。查询指定实例所在的应用分组。
    * @example `xxx-1`
    */ "InstanceId"?: string;
    /**
    * 应用分组名称。
    * @example `我的组`
    */ "GroupName"?: string;
}
export { DescribeMonitorGroupsRequest };