export interface ListTemplatesRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板名称。列出含所填模板名称的所有模板。
     * @example `MyTemplate`
     */
    "TemplateName"?: string;
    /**
     * 模板格式。取值范围：
     * - **JSON**
     * - **YAML**
     * @example `YAML`
     */
    "TemplateFormat"?: string;
    /**
     * 分享类型。取值范围：
     * - **Public**
     * - **Private**
     * @example `Private`
     */
    "ShareType"?: string;
    /**
     * 模板创建者。
     * - 对于阿里云官方提供的模板，为**ACS**
     * - 对于用户个人创建的模板，可填写 **UID** 进行筛选，或填写 **用户名称** 进行筛选
     * @example `ACS`
     */
    "CreatedBy"?: string;
    /**
     * 创建时间小于等于指定时间的模板。
     * 格式为：YYYY-MM-DDThh:mm::ssZ
     * @example `2019-05-16T10:26:14Z`
     */
    "CreatedDateBefore"?: string;
    /**
     * 创建时间大于等于指定时间的模板。
     * 格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2019-05-16T10:26:14Z`
     */
    "CreatedDateAfter"?: string;
    /**
     * 标签键及值，键值对数量限制为1至20。
     * @example `{"k1":"k2","k2":"v2"}`
     */
    "Tags"?: any;
    /**
     * 模版类型如TimerTrigger，EventTrigger，AlarmTrigger，Other。
     * @example `TimerTrigger`
     */
    "Category"?: string;
    /**
     * 分页大小。取值范围：10-100。默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 对查询结果进行翻页时需要传入的Token值，如有则获取自当前页的返回值。
     * @example `xxx`
     */
    "NextToken"?: string;
    /**
     * 排序字段。取值范围：
     * - **TotalExecutionCount**（默认值）：总执行次数
     * - **Popularity**：受欢迎程度
     * - **TemplateName**：模板名称
     * - **CreatedDate**：创建时间
     * - **UpdatedDate**：更新时间
     * @example `Popularity`
     */
    "SortField"?: string;
    /**
     * 排序方向。取值范围：
     * - **Ascending**：升序
     * - **Descending**（默认值）：降序
     * @example `Descending`
     */
    "SortOrder"?: string;
    /**
     * 是否触发
     * @example `true`
     */
    "HasTrigger"?: boolean;
    /**
     * 模版类型：
     * - Automation：自动化
     * - State：配置清单
     * - Package：软件包
     * @example `Automation`
     */
    "TemplateType"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否已收藏
     * @example `true`
     */
    "IsFavorite"?: boolean;
}
