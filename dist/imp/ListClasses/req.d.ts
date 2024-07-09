export interface ListClassesRequest {
    /**
     * 应用唯一标识，由6位小写字母、数字组成。
     * @example `lq****cu`
     */
    "AppId": string;
    /**
     * 课程状态
     * - 0-未开课
     * - 1-上课中
     * - 2-已下课
     * - 不传则返回所有课程。
     * @example `2`
     */
    "Status"?: number;
    /**
     * 查询页码，从1开始，传空默认查询第1页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示个数，最大支持50，参数为空默认显示个数为10。
     * @example `25`
     */
    "PageSize"?: number;
}
