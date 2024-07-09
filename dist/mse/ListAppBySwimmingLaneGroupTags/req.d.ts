export interface ListAppBySwimmingLaneGroupTagsRequest {
    /**
     * 要查询的标签。
     */
    "Tags"?: string[];
    /**
     * 泳道组id。
     * @example `1`
     */
    "GroupId": number;
    /**
     * 需要查询的MSE命名空间名字。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
