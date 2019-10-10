interface ListStacksRequest {
    /**
    * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "Status"?: string[];
    /**
    * 分页查询时设置的每页行数，最大值 100。
    * 默认为 10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 父资源栈 ID。用于列出嵌套资源栈。
    * @example `xxxx`
    */ "ParentStackId"?: string;
    "StackName"?: string[];
    /**
    * 资源栈列表的页码，起始值为 1。
    * 默认值为 1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 是否列出嵌套资源栈。仅当指定ParentStackId时生效。
    * @example `true`
    */ "ShowNestedStack"?: boolean;
}
export { ListStacksRequest };