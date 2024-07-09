export interface DescribeVpcAccessesRequest {
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 自定义授权名称，需要保持唯一，不能重复
     * @example `wuying-edm-svc`
     */
    "Name"?: string;
    /**
     * Vpc授权ID
     * @example `vpc-*****ssds24`
     */
    "VpcAccessId"?: string;
    /**
     * 是否进行精准查询
     * @example `false`
     */
    "AccurateQuery"?: boolean;
    /**
     * 专用网络ID
     * @example `vpc-uf657qec7lx42paw3qxxx`
     */
    "VpcId"?: string;
    /**
     * VPC授权中的实例ID或IP
     * @example `10.199.26.***`
     */
    "InstanceId"?: string;
    /**
     * 服务端口。
     * @example `8080`
     */
    "Port"?: string;
    /**
     * 端口号
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `appname`
         */
        Key: string;
        /**
         * 标签值
         * @example `product`
         */
        Value: string;
    }[];
}
