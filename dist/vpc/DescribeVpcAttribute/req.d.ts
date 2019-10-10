interface DescribeVpcAttributeRequest {
    /**
    * VPC的所属地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 要查询的VPC ID。
    * @example `vpc-bp18sth14qii3pnv****`
    */ "VpcId": string;
    "OwnerId"?: number;
    "DryRun"?: boolean;
    /**
    * 是否为默认VPC，取值：
    * * **false**：不是默认VPC。
    * * **true**：是默认VPC。
    *
    * @example `false`
    */ "IsDefault"?: boolean;
}
export { DescribeVpcAttributeRequest };