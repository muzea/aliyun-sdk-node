interface DescribeContactListRequest {
    "RegionId"?: string;
    /**
    * 每页显示的记录条数，默认100。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 当前页码，默认1.
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 报警联系人姓名。只支持精确查询，暂不支持模糊查询。
    * @example `我的报警联系人`
    */ "ContactName"?: string;
}
export { DescribeContactListRequest };