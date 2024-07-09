export interface GetCapacityRequest {
    /**
     * 项目ID。
     * @example `d9a8****`
     */
    "ProjectId"?: string;
    /**
     * 应用ID。
     * @example `13027****`
     */
    "AppId"?: string;
    /**
     * 应用版本ID。
     * @example `35067****`
     */
    "AppVersion"?: string;
    /**
     * 区域ID。取值：
     * - huadong
     * - xinan
     * - huanan
     * - huabei
     * - huazhong
     * @example `huadong`
     */
    "DistrictId"?: string;
    /**
     * 分页时每页显示的数据行数。最大值：100，默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页码。起始值：1，默认值：1。
     * @example `1`
     */
    "PageNum"?: number;
}
