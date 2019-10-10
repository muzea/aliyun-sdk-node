interface ListClusterServiceQuickLinkRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-4DBD656F20CE****`
    */ "ClusterId": string;
    /**
    * 服务名称。
    * @example `SPARK`
    */ "ServiceName"?: string;
}
export { ListClusterServiceQuickLinkRequest };