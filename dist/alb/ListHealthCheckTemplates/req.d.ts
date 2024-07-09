export interface ListHealthCheckTemplatesRequest {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 健康检查模版ID列表。
     */
    "HealthCheckTemplateIds"?: string[];
    /**
     * 健康检查模板名称列表。
     */
    "HealthCheckTemplateNames"?: string[];
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `product`
         */
        Value: string;
    }[];
}
