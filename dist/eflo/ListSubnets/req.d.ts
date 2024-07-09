export interface ListSubnetsRequest {
    /**
     * 地域
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 可用区
     * @example `cn-wulanchabu-a`
     */
    "ZoneId"?: string;
    /**
     * 灵骏子网实例ID
     * @example `subnet-anhtskts`
     */
    "SubnetId"?: string;
    /**
     * 灵骏子网实例名称
     * @example `subnet-1`
     */
    "SubnetName"?: string;
    /**
     * 所属灵骏网段实例ID
     * @example `vpd-fuliephf`
     */
    "VpdId"?: string;
    /**
     * 实例状态。可能值：
     * - **Available**：正常
     * - **Not Available**：不可用
     * - **Executing**：执行中
     * - **Deleting**：删除中
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 灵骏子网使用类型；非必选；可选值：
     * - **通用类型不填**
     * - **OOB**：OOB类型
     * - **LB**： LB类型
     * @example `Null`
     */
    "Type"?: string;
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
         * @example `rg-subnet`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `subnet-group-1`
         */
        Value: string;
    }[];
    /**
     * 当前页数。 取值范围：大于0。 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页返回值的个数。 取值范围：1~100。 默认值：20
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 是否分页查询，可选值：
     * - **true**  ：开启分页查询
     * - **false** ：不开启分页查询
     * @example `false`
     */
    "EnablePage"?: boolean;
}
