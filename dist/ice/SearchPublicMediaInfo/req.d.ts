export interface SearchPublicMediaInfoRequest {
    /**
     * IMS媒资ID。
     * - 多个用英文逗号分隔。
     * @example `****20b48fb04483915d4f2cd8ac****,****15d4a4b0448391508f2cb486****`
     */
    "MediaIds"?: string;
    /**
     * 动态元数据搜索匹配条件
     * @example `"ApprovalStatus='Available'&amp;MaterialBags='boutiquemusic'&amp;Mood='Nervous'"`
     */
    "DynamicMetaDataMatchFields"?: string;
    /**
     * 用户是否收藏了该媒资。
     * @example `true`
     */
    "Favorite"?: boolean;
    /**
     * 用户是否已购买了包含此媒资的资源包。
     * @example `true`
     */
    "Authorized"?: boolean;
    /**
     * 结果排序方式 <field>:<order>。取值范围：
     * field:
     * - "UsageCount" 使用量
     * - "UnitPrice" 单价
     * order:
     * - "Desc" 倒序
     * - "Asc" 正序
     * @example `UsageCount:Desc,UnitPrice:Asc`
     */
    "SortBy"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页行数大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实体ID，用来标识不同种类的公共版权媒资。取值：
     * - Copyright_Music: 公共版权音乐
     * @example `Copyright_Music`
     */
    "EntityId"?: string;
}
