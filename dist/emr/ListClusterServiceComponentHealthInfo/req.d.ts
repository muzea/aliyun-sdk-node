interface ListClusterServiceComponentHealthInfoRequest {
    /**
    * 地域ID。
    * @example `ccn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-F32FB31D82954C64`
    */ "ClusterId": string;
    /**
    * 服务名称。
    * @example `TEZ`
    */ "ServiceName"?: string;
}
export { ListClusterServiceComponentHealthInfoRequest };