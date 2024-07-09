export interface ListBaselinesRequest {
    /**
     * 责任人
     * @example `3726346****`
     */
    "Owner"?: string;
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `123456`
     */
    "ProjectId": number;
    /**
     * 基线的优先级，取值范围为{1,3,5,7,8}。
     * @example `1`
     */
    "Priority"?: string;
    /**
     * 是否开启基线，包括true（可用）和false（不可用）。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 基线的类型，包括DAILY（天基线）和HOURLY（小时基线）。多个类型之间使用英文逗号（,）分隔。
     * @example `DAILY`
     */
    "BaselineTypes"?: string;
    /**
     * 基线名称的搜索关键字。
     * @example `baselineName`
     */
    "SearchText"?: string;
    /**
     * 分页查询页码。大于等于1的正整数，默认为1，最大为30。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `100`
     */
    "PageSize": number;
}
