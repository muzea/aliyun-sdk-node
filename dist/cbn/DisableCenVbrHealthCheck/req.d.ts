interface DisableCenVbrHealthCheckRequest {
    "RegionId"?: string;
    /**
    * 云企业网实例的ID。
    * @example `cen-sjfoejfghhjgghjghkg****`
    */ "CenId": string;
    /**
    * VBR所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口查询地域ID。
    * @example `cn-shenzhen`
    */ "VbrInstanceRegionId": string;
    /**
    * VBR的ID。
    * @example `vbr-wz95o9aylj181n5****`
    */ "VbrInstanceId": string;
    "OwnerId"?: number;
    /**
    * VBR所属账户的UID。
    * @example `12345656677888`
    */ "VbrInstanceOwnerId"?: number;
}
export { DisableCenVbrHealthCheckRequest };