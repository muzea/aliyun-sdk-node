export interface DescribeDomainRecordsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名名称。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**500**，默认为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 关键字。
     * @example `test`
     */
    "KeyWord"?: string;
    /**
     * 主机记录的关键字，按照 RRKeyWord（前后模糊匹配）模式搜索，不区分大小写。
     * @example `www`
     */
    "RRKeyWord"?: string;
    /**
     * 解析类型的关键字，按照全匹配搜索，不区分大小写。
     * @example `MX`
     */
    "TypeKeyWord"?: string;
    /**
     * 记录值的关键字，按照 ValueKeyWord（前后模糊匹配）模式搜索，不区分大小写。
     * @example `com`
     */
    "ValueKeyWord"?: string;
    /**
     * 排序方式。按照解析添加的时间从新到旧排序。
     * @example `default`
     */
    "OrderBy"?: string;
    /**
     * 排序方向。取值范围：DESC、ASC。默认为：DESC。
     * @example `DESC`
     */
    "Direction"?: string;
    /**
     * 搜索模式，取值：**LIKE/EXACT/ADVANCED。**
     * - 填入LIKE或EXACT时，请使用KeyWord参数。（传入RRKeyWord、TypeKeyWord、ValueKeyWord、Type、Line、Status参数无效）
     * - 填入ADVANCED时，请使用RRKeyWord、TypeKeyWord、ValueKeyWord、Type、Line、Status
     * - 不传值：
     *     - keyWord传值，搜索模式取”LIKE“值。
     *     - keyWord不传值，RRKeyWord和ValueKeyWord支持模糊查询，TypeKeyWord和Type、Line、Status支持精确查询。
     * @example `LIKE`
     */
    "SearchMode"?: string;
    /**
     * 指域名分组ID
     * - 如不传GroupId，则在全部域名下查询。
     * - 如GroupId为0，则返回空数据。
     * - 如GroupId为-1，则在默认分组（指未设置分组的域名）下查询。
     * - 如GroupId为-2，则在全部域名下查询。
     * - 如GroupId不符合上述条件，则按GroupId查询并返回结果。
     * @example `2223`
     */
    "GroupId"?: number;
    /**
     * 解析记录类型，参见：
     * <props="china">[解析记录类型格式](https://help.aliyun.com/document_detail/29805.html)</props>
     * <props="intl">[解析记录类型格式](https://www.alibabacloud.com/help/zh/doc-detail/29805.htm)</props>
     * @example `A`
     */
    "Type"?: string;
    /**
     * 解析线路，默认为**default**。
     * 参见：
     * <props="china">[解析线路枚举](https://help.aliyun.com/document_detail/29807.html)。</props>
     * <props="intl">[解析线路枚举](https://www.alibabacloud.com/help/zh/doc-detail/29807.htm)</props>
     * @example `cn_mobile_anhui`
     */
    "Line"?: string;
    /**
     * 解析记录状态，取值：**Enable/Disable**。
     * @example `Enable`
     */
    "Status"?: string;
}
