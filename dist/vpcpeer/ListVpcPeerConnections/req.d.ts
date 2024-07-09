export interface ListVpcPeerConnectionsRequest {
    /**
     * 需要查询详细信息的VPC对等连接的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要查询详细信息的VPC对等连接实例ID。
     * @example `pcc-lnk0m24khwvtkm****`
     */
    "InstanceId"?: string;
    /**
     * 根据两端vpcid过滤，不区分发起端和接收端。如果只传入一个，则根据一端过滤
     */
    "VpcId"?: string[];
    /**
     * 需要查询详细信息的VPC对等连接的名称。
     * @example `vpcpeer`
     */
    "Name"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
         * 一个标签键最多支持 128 个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 一个标签值最多支持 128 个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
}
