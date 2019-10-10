interface DescribeUisNetworkInterfacesRequest {
    /**
    * Uis实例所在的地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * Uis节点ID
    * @example `UISNODE-xxxccvrtiviatdroh92pm`
    */ "UisNodeId"?: string;
    /**
    * Uis弹性网卡ID
    * @example `UISENI-xxxfunml63xpaz0tzbev0`
    */ "UisEniId"?: string;
    /**
    * 列表的页码，默认值为1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeUisNetworkInterfacesRequest };