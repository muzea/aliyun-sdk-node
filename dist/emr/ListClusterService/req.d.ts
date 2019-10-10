interface ListClusterServiceRequest {
    /**
    * 区域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-F32FB31D82954C64`
    */ "ClusterId": string;
    /**
    * 分页查询的查询页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询的每页记录数。
    * @example `100`
    */ "PageSize"?: number;
}
export { ListClusterServiceRequest };