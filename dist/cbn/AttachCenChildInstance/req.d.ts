interface AttachCenChildInstanceRequest {
    "RegionId"?: string;
    /**
    * 云企业网实例的ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    /**
    * 指定待加载的网络实例的ID。
    * @example `vpc-bp18sth14qii3pnvx****`
    */ "ChildInstanceId": string;
    /**
    * 网络实例的类型，取值：
    * - **VPC**。
    * - **VBR**。
    * - **CCN**。
    * @example `VPC`
    */ "ChildInstanceType": string;
    /**
    * 网络实例所在的地域。
    * @example `cn-hangzhou`
    */ "ChildInstanceRegionId": string;
    "OwnerId"?: number;
    /**
    * 跨账号加载网络实例场景下，网络实例所属账号的UID。
    * @example `1231579085529123`
    */ "ChildInstanceOwnerId"?: number;
}
export { AttachCenChildInstanceRequest };