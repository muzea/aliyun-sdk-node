interface ListStackEventsRequest {
    /**
    * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源栈ID。
    * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
    */ "StackId": string;
    "Status"?: string[];
    /**
    * 分页查询时设置的每页行数，最大值 100 行，默认为 10。
    * @example `10`
    */ "PageSize"?: number;
    "ResourceType"?: string[];
    /**
    * 事件列表的页码，起始值为 1，默认值为 1。
    * @example `1`
    */ "PageNumber"?: number;
    "LogicalResourceId"?: string[];
}
export { ListStackEventsRequest };