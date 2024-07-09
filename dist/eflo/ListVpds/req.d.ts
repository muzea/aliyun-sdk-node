export interface ListVpdsRequest {
    /**
     * 灵骏网段（VPD）实例名称。
     * @example `vpd-1`
     */
    "VpdName"?: string;
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网段（VPD）实例ID。
     * @example `vpd-fuliephf`
     */
    "VpdId"?: string;
    /**
     * 实例状态。可能值：
     * - **Available**：正常 。
     * - **Not Available**：不可用。
     * - **Executing**：执行中。
     * - **Deleting**：删除中。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 是否带依赖资源信息，建议分页查询的时候不查询依赖信息，删除的时候可以单独查询,可能值：
     * - **true** : 带依赖信息。
     * - **false** ：不带依赖信息。
     * @example `false`
     */
    "WithDependence"?: boolean;
    /**
     * 下拉选择时使用，只返回基础信息（包括实例ID、实例名称），可能值：
     * - **true** ：下拉选择查询使用。
     * - **false** ：正常查询使用。
     * @example `true`
     */
    "ForSelect"?: boolean;
    /**
     * 查询未绑定VCC（灵骏连接）的VPD（灵骏网段）信息，可能值：
     * - **true** : 过滤掉已绑定过VCC的VPD
     * - **false** ：不过滤已绑定过VCC的VPD
     * @example `true`
     */
    "WithoutVcc"?: boolean;
    /**
     * 查询未绑定过指定灵骏HUB的灵骏网段信息。
     * @example `er-kkopgtne`
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
         * @example `tag-vpd-region`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以aliyun或者acs:开头，不能包含http://或者https://。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `wulanchabu`
         */
        Value: string;
    }[];
    /**
     * 当前页码。起始值：1默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 是否开启分页查询。
     * @example `false`
     */
    "EnablePage"?: boolean;
}
