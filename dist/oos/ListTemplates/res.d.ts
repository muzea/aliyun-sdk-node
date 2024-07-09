export interface ListTemplatesResponse {
    /**
     * 对查询结果进行翻页时需要传入的Token值，如有则获取自当前页的返回值。
     * @example `xxx`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `BEF54BA-17B6-449F-A219-49ACB157E3`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 模板元信息
     */
    Templates: {
        /**
         * 模板内容的SHA256
         * @example `4bc7d7a21b3e003434b9c223f6e6d2578b5ebfeb5be28c1fcf8a8a1b11907bb4`
         */
        Hash: string;
        /**
         * 模板更新时间
         * @example `2019-05-16T10:26:14Z`
         */
        UpdatedDate: string;
        /**
         * 模板更新者
         * @example `root(13092000)`
         */
        UpdatedBy: string;
        /**
         * 模版类型
         * @example `private`
         */
        TemplateType: string;
        /**
         * 标签键及值，键值对数量限制为1至20。
         * @example `{"k1":"v1","k2":"v2"}`
         */
        Tags: any;
        /**
         * 模板名称
         * @example `MyTemplate`
         */
        TemplateName: string;
        /**
         * 模板版本。以“v”+数字的形式，数字从1开始。
         * @example `v1`
         */
        TemplateVersion: string;
        /**
         * 模板格式。系统字段判断，为JSON或YAML。
         * @example `JSON`
         */
        TemplateFormat: string;
        /**
         * 公共模板受欢迎程度。范围是**1-10**，数字越高表示越受欢迎。若**ShareType**为**Private**，该字段值为`-1`。
         * > 该字段在**ShareType**为**Public**时有意义。
         * @example `8`
         */
        Popularity: number;
        /**
         * 私有模板总执行次数。若**ShareType**为**Public**，该字段值为`-1`。
         * > 该字段在**ShareType**为**Private**时有意义。
         * @example `5`
         */
        TotalExecutionCount: number;
        /**
         * 模板说明
         * @example `Describe instances of given status`
         */
        Description: string;
        /**
         * 资源组ID
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 模板创建者
         * @example `root(1309200)`
         */
        CreatedBy: string;
        /**
         * 模板创建时间
         * @example `2019-05-16T10:26:14Z`
         */
        CreatedDate: string;
        /**
         * 模版类型
         * @example `TimerTrigger`
         */
        Category: string;
        /**
         * 是否成功触发
         * @example `true`
         */
        HasTrigger: boolean;
        /**
         * 模板ID
         * @example `t-94753deed38`
         */
        TemplateId: string;
        /**
         * 模板共享类型。目前用户创建的模板的共享类型均为 **Private**。取值范围：
         * - **Public**
         * - **Private**
         * @example `Public`
         */
        ShareType: string;
        /**
         * 是否已收藏
         * @example `true`
         */
        IsFavorite: boolean;
        /**
         * 发布者
         * @example `aliyun`
         */
        Publisher: string;
        /**
         * 约束条件
         * @example `{
          "InstanceTypeFamilies": ["ecs.g8y", "ecs.c8y"],
          "ImageTypes": ["system"],
          "OSPlatforms": ["CentOS", "Ubuntu"],
          "OSVersions": ["CentOS7.9 64bit"]
        }`
         */
        Constraints: string;
    }[];
}
