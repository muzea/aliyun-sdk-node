interface DescribeDedicatedHostAutoRenewRequest {
    /**
    * 专有宿主机所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 专有宿主机ID。最多可以输入100个包年包月专有宿主机ID，ID之间用半角逗号（,）隔开。
    * @example `dh-dedicatedhost1,dh-dedicatedhost2`
    */ "DedicatedHostIds": string;
    /**
    * @example `cn-beijing`
    */ "SourceRegionId"?: string;
    "OwnerId"?: number;
}
export { DescribeDedicatedHostAutoRenewRequest };