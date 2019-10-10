interface DescribeVpcsRequest {
    /**
    *  VPC所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "Tag"?: string[];
    "OwnerId"?: number;
    /**
    * VPC的ID。
    * 最多支持指定20个VPC ID，多个VPC ID之间用半角逗号隔开。
    * @example `vpc-257gq64****`
    */ "VpcId"?: string;
    /**
    * VPC的名称。
    * @example `Vpc-1`
    */ "VpcName"?: string;
    /**
    *  是否查询指定地域下的默认VPC，取值：
    * - **true**（默认值）：查询指定地域下的所有VPC。
    * - **false**：不查询默认VPC。
    * @example `false`
    */ "IsDefault"?: boolean;
    "DryRun"?: boolean;
    /**
    * 要查询的VPC所属资源组ID。
    * @example `rg-acfmxazb4p****`
    */ "ResourceGroupId"?: string;
    /**
    *  列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeVpcsRequest };