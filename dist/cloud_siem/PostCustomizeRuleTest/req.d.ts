export interface PostCustomizeRuleTestRequest {
    /**
     * 自定义规则ID。
     * @example `123456789`
     */
    "Id"?: number;
    /**
     * 测试类型。取值：
     * - simulate：模拟数据测试
     * - business：业务数据测试
     * @example `simulate`
     */
    "TestType"?: string;
    /**
     * 模拟测试数据，只有在测试类型为simulate情况下赋值。
     * @example `[{"key1":"value1","key2":"value2","key3":"value3","key4":"value4","key5":"value5"}]`
     */
    "SimulatedData"?: string;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
