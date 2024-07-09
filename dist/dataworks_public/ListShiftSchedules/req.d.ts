export interface ListShiftSchedulesRequest {
    /**
     * 根据关键字模糊查询
     * @example `值班表名称关键字`
     */
    "ShiftScheduleName"?: string;
    /**
     * 阿里云账号ID。您可以登录DataWorks控制台，鼠标悬停至顶部菜单栏右侧的用户头像，查看账号ID。
     * @example `1933790683****`
     */
    "Owner"?: string;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码数，用于翻页。最小值为1，最大值为100，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
}
