interface EnableCenVbrHealthCheckRequest {
    "RegionId"?: string;
    /**
    * 云企业网实例的ID。
    * @example `cen-hahhfskfkseig****`
    */ "CenId": string;
    /**
    * VBR所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口查询地域ID。
    * @example `cn-shenzhen`
    */ "VbrInstanceRegionId": string;
    /**
    * VBR的ID。
    * @example `vbr-wz95o9aylj181n5mzk****`
    */ "VbrInstanceId": string;
    /**
    * 健康检查的源IP地址。
    * @example `192.168.1.xx`
    */ "HealthCheckSourceIp": string;
    /**
    * 健康检查的目的IP地址。
    * @example `10.0.0.xx`
    */ "HealthCheckTargetIp": string;
    "OwnerId"?: number;
    /**
    * VBR所属账户的UID。
    * @example `1233233323445689999`
    */ "VbrInstanceOwnerId"?: number;
}
export { EnableCenVbrHealthCheckRequest };