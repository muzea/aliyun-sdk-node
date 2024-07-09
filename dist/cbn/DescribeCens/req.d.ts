export interface DescribeCensRequest {
    /**
     * 待查询的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 云企业网实例所属的资源组ID。
     * @example `rg-acfm3unpnuw****`
     */
    "ResourceGroupId"?: string;
    /**
     * 过滤条件的信息。
     * 一次最多支持输入5个过滤条件。
     */
    "Filter"?: {
        /**
         * 过滤条件。取值：
         * - **CenId**：云企业网实例ID。
         * - **Name**：云企业网实例名称。
         * 多个过滤条件之间默认是**与**的关系，即必须符合所有过滤条件，才视为匹配过滤条件。
         * 一次最多支持输入5个过滤条件。
         * @example `CenId`
         */
        Key: string;
        /**
         * 过滤条件的值。
         * 根据**Key**指定过滤值。一个**Key**支持指定多个过滤值，多个过滤值之间是**或**的关系，即只要符合其中一个过滤值，则视为匹配该过滤条件。
         * 一个过滤条件最多支持输入5个过滤值。
         * @example `cen-0xyeagctz5sfg9****`
         */
        Value: string[];
    }[];
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `tagtest`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `tagtest`
         */
        Value: string;
    }[];
}
