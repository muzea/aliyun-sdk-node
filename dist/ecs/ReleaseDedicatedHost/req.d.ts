interface ReleaseDedicatedHostRequest {
    /**
    * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 专有宿主机ID。
    * @example `dh-xxxxxxxxxxxxxxxxx`
    */ "DedicatedHostId": string;
    /**
    * @example `cn-beijing`
    */ "SourceRegionId"?: string;
    "OwnerId"?: number;
}
export { ReleaseDedicatedHostRequest };