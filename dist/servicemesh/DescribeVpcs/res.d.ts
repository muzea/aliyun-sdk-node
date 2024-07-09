export interface DescribeVpcsResponse {
    /**
     * 本次请求条件下的数据总量，此参数为可选参数，默认可不返回
     * @example `10`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
    /**
     * 表示当前调用返回读取到的位置，空代表数据已经读取完毕
     * @example `""`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数
     * @example `10`
     */
    MaxResults: number;
    /**
     * 指定区域内可用VPC列表
     */
    Vpcs: {
        /**
         * VPC的ID
         * @example `vpc-bp1qkf2o3xmqc2519****`
         */
        VpcId: string;
        /**
         * VPC名称
         * @example `vpc-test`
         */
        VpcName: string;
        /**
         * VPC的状态，取值：
         * - `Pending`：配置中
         * - `Available`：可用
         * @example `Available`
         */
        Status: string;
        /**
         * 是否是该地域的默认VPC，取值：
         * - `true`：默认VPC
         * - `false`：不是默认VPC
         * @example `false`
         */
        IsDefault: boolean;
    }[];
}
