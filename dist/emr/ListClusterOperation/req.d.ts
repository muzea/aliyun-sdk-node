interface ListClusterOperationRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-F32FB31D8295****`
    */ "ClusterId": string;
    /**
    * 服务名。
    * @example `YARN`
    */ "ServiceName"?: string;
    /**
    * 状态。
    * @example `SUCCESS`
    */ "Status"?: string;
    /**
    * 分页查询的查询页码。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询的每页记录数。
    * @example `100`
    */ "PageSize"?: number;
}
export { ListClusterOperationRequest };