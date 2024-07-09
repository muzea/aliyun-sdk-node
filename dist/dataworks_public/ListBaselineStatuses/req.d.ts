export interface ListBaselineStatusesRequest {
    /**
     * 分页的页数。默认值为1，最小值为1，最大值为30。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的条数，默认值为10，最大值为100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 业务日期，需要使用UTC格式（yyyy-MM-dd'T'HH:mm:ssZ）。
     * @example `2020-07-07T00:00:00+0800`
     */
    "Bizdate": string;
    /**
     * 基线的优先级，取值范围为{1,3,5,7,8}。多个优先级之间使用英文逗号（,）分隔。
     * @example `1,3,5,7,8`
     */
    "Priority"?: string;
    /**
     * 基线名称搜索关键字。
     * @example `基线名称搜索关键字`
     */
    "SearchText"?: string;
    /**
     * 基线责任人的阿里云UID。
     * @example `9527952795****`
     */
    "Owner"?: string;
    /**
     * 相关事件的ID。
     * @example `1234`
     */
    "TopicId"?: number;
    /**
     * 基线实例是否完成，包括UNFINISH（未完成）、FINISH（已完成）。多个状态之间使用英文逗号（,）分隔。
     * @example `FINISH,UNFINISH`
     */
    "FinishStatus"?: string;
    /**
     * 基线的状态，包括ERROR（异常）、SAFE（安全）、DANGROUS（预警）和OVER（破线）。多个状态之间使用英文逗号（,）分隔。
     * @example `SAFE,DANGROUS,OVER`
     */
    "Status"?: string;
    /**
     * 基线的类型，包括DAILY（天基线）和HOURLY（小时基线）。多个类型之间使用英文逗号（,）分隔。
     * @example `DAILY,HOURLY`
     */
    "BaselineTypes"?: string;
}
