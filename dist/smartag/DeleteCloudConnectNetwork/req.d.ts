interface DeleteCloudConnectNetworkRequest {
    /**
    * 云连接网的所属区域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 云连接网ID。
    * @example `ccn-bxuau4ezctts2*****`
    */ "CcnId": string;
}
export { DeleteCloudConnectNetworkRequest };