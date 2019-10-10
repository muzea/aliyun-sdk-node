interface DescribeUisesRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 查询指定实例的详细信息。
    * @example `UIS-xxxk7k971za1h6gx****`
    */ "UisId"?: string;
    /**
    * 实例的名称。
    * @example `test_uis_modify`
    */ "Name"?: string;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeUisesRequest };