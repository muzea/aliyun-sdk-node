interface SetCenInterRegionBandwidthLimitRequest {
    "RegionId"?: string;
    /**
    * 云企业网实例的ID。
    * @example `cen-7qthudw0ll6jmx****`
    */ "CenId": string;
    /**
    * 本端地域的ID。
    * @example `cn-hangzhou`
    */ "LocalRegionId": string;
    /**
    * 对端地域的ID。
    * @example `us-west-1`
    */ "OppositeRegionId": string;
    /**
    * 两个地域之间的跨地域互通带宽。
    * @example `8`
    */ "BandwidthLimit": number;
    "OwnerId"?: number;
}
export { SetCenInterRegionBandwidthLimitRequest };