export interface GetAutoResourceOptimizeRulesRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "ConsoleContext"?: string;
    /**
     * 数据库实例ID。
     * - 数据格式为JSONArray，例如`['实例ID1','实例ID2']`，实例ID间用英文逗号（,）分隔。
     * - 不输入数据库实例ID时，默认返回当前账号曾经开启过空间碎片自动回收功能的全部数据库实例信息，包括：
     *     - 正在使用该功能的数据库实例。
     *     - 已关闭该功能的数据库实例（包含已经关闭了DAS企业版数据库实例，但不包含已经释放的数据库实例）。
     * @example `['rm-2ze8g2am97624****','rm-2vc54m2a6pd6p****','rm-2ze9xrhze0709****','rm-2ze8g2am97627****']`
     */
    "InstanceIds"?: string;
}
