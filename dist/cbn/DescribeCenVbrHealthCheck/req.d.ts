interface DescribeCenVbrHealthCheckRequest {
    "RegionId"?: string;
    /**
    * VBR所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "VbrInstanceRegionId": string;
    "OwnerId"?: number;
    /**
    * 云企业网实例的ID。
    * @example `cen-kojok19x3j0q****`
    */ "CenId"?: string;
    /**
    * VBR的ID。
    * @example `vbr-wz95o9aylj181****`
    */ "VbrInstanceId"?: string;
    /**
    * VBR所属账户的UID。
    * @example `123465253556777`
    */ "VbrInstanceOwnerId"?: number;
    /**
    * 列表的页码，默认值为**1**。
    * @example `2`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `2`
    */ "PageSize"?: number;
}
export { DescribeCenVbrHealthCheckRequest };