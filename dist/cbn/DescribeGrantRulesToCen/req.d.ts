interface DescribeGrantRulesToCenRequest {
    /**
    * 网络实例所在的地域。
    * @example `cn-hangzou`
    */ "RegionId": string;
    /**
    * 云企业网实例的ID。
    * @example `cen-7qthudw0ll6jmxx****`
    */ "CenId": string;
    /**
    * 产品类型。
    * @example `VPC`
    */ "ProductType": string;
    "OwnerId"?: number;
}
export { DescribeGrantRulesToCenRequest };