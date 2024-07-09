export interface ListVccsRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId"?: string;
    /**
     * 灵骏网段实例ID
     * @example `vpd-omqutbff`
     */
    "VpdId"?: string;
    /**
     * 专有网络ID；[什么是专有网络](https://help.aliyun.com/document_detail/34217.html)
     * 可调用[DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0)接口查询指定VPC。
     * @example `vpc-bp1nrtkmamy329u6a1z0i`
     */
    "VpcId"?: string;
    /**
     * 云企业网实例的ID；[什么是云企业网?](https://help.aliyun.com/document_detail/181681.html)
     * 你可用调用[DescribeCens](https://help.aliyun.com/document_detail/468215.htm)查询当前阿里云账号下的云企业网实例信息。
     * @example `cen-95iwtpyvj3kk1v0ao0`
     */
    "CenId"?: string;
    /**
     * 灵骏连接实例的带宽峰值，单位mbps。取值范围：1000~400000
     * @example `5000`
     */
    "Bandwidth"?: number;
    /**
     * 实例状态
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 把指定状态的数据全部排除掉，如果status参数存在那么ExStatus就不会生效
     * @example `Prepaid`
     */
    "ExStatus"?: string;
    /**
     * 灵骏连接实例ID
     * @example `vcc-cn-zvp2w222001`
     */
    "VccId"?: string;
    /**
     * 通过灵骏HUB实例ID过滤查询
     * @example `er-a7rqv1rq`
     */
    "FilterErId"?: string;
    /**
     * 资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu)。
     * @example `rg-aeky5f3qx6ceapq`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 一次最多支持输入20个标签的标签键。
         * @example `tag-vcc`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `vcc-group-1`
         */
        Value: string;
    }[];
    /**
     * 当前页码。起始值：1默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。默认值：20
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 是否开启分页查询，可选值：
     * - **true**  ：开启分页查询
     * - **false** ：不开启分页查询
     * @example `false`
     */
    "EnablePage"?: boolean;
}
