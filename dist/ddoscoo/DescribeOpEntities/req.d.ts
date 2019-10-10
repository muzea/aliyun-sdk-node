interface DescribeOpEntitiesRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * 结束时间时间戳，单位：毫秒。
    * @example `1536715558000`
    */ "EndTime": number;
    /**
    * 页号，即从第几页开始显示。
    * @example `1`
    */ "PageNo": number;
    /**
    * 分页大小，即每页显示多少条结果。最大值50。
    * @example `10`
    */ "PageSize": number;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 开始时间时间戳，单位：毫秒。
    * @example `1534123558000`
    */ "StartTime": number;
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
    /**
    * @example `1`
    */ "EntityType"?: number;
    /**
    * @example `xx`
    */ "EntityObject"?: string;
}
export { DescribeOpEntitiesRequest };