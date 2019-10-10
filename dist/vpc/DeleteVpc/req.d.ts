interface DeleteVpcRequest {
    /**
    * VPC所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 要删除的VPC ID。
    * @example `vpc-bp1m7v25emi1h5mtc****`
    */ "VpcId": string;
}
export { DeleteVpcRequest };