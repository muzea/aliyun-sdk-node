interface ReleaseEipAddressRequest {
    /**
    * 弹性公网IP所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * @example `123`
    */ "OwnerId"?: number;
    /**
    * 要释放的弹性公网IP的ID。
    * @example `eip-2zeerraiwb7uj6i0d0fo3`
    */ "AllocationId": string;
}
export { ReleaseEipAddressRequest };