interface DescribeDnatEntriesRequest {
    /**
    * UIS实例所在的地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * UIS节点的ID
    * @example `UISNODE-xxxpucur6tfhpzok5u2mi`
    */ "UisNodeId"?: string;
    /**
    * DNAT规则的ID
    * @example `UISDNAT-xxxxlpa9jojfuvvxtvob1`
    */ "UisDnatId"?: string;
    /**
    * 列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeDnatEntriesRequest };