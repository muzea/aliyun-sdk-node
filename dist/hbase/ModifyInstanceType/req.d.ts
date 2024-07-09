export interface ModifyInstanceTypeRequest {
    /**
     * 目标实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `hb-bp1x940uh********`
     */
    "ClusterId": string;
    /**
     * 修改后的Master节点规格。可调用[DescribeInstanceType](~~145796~~)接口获取。
     * > MasterInstanceType参数和CoreInstanceType参数需要填写其中一个。
     * @example `hbase.sn1.large`
     */
    "MasterInstanceType"?: string;
    /**
     * 修改后的Core节点规格。可调用[DescribeInstanceType](~~145796~~)接口获取。
     * > MasterInstanceType参数和CoreInstanceType参数需要填写其中一个。
     * @example `hbase.sn1.8xlarge`
     */
    "CoreInstanceType"?: string;
}
