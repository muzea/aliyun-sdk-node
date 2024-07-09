export interface ListBaselineConfigsRequest {
    /**
     * 分页的页数。默认值为1，最小值为1，最大值为30。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页返回的数据行数。默认值为10，最小值为1，最大值为100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 基线责任人的阿里云UID。
     * @example `95279527****`
     */
    "Owner"?: string;
    /**
     * 工作空间的ID。您可以通过ListProjects接口获取工作空间ID。
     * @example `1234`
     */
    "ProjectId": number;
    /**
     * 基线的优先级，取值范围为{1,3,5,7,8} 。多个优先级之间使用英文逗号（,）分隔。
     * @example `1,3,5,7,8`
     */
    "Priority"?: string;
    /**
     * 是否开启，包括true（开启）和false（未开启）。
     * @example `true`
     */
    "Useflag"?: boolean;
    /**
     * 基线类型，包括DAILY（天基线）和HOURLY（小时基线）。多个类型之间使用英文逗号（,）分隔。
     * @example `DAILY,HOURLY`
     */
    "BaselineTypes"?: string;
    /**
     * 基线名称的搜索关键字。
     * @example `基线名称搜索关键字`
     */
    "SearchText"?: string;
}
