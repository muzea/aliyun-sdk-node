export interface ModifyStrategyRequest {
    /**
     * 访问源IP地址。
     * @example `192.168.X.X`
     */
    "SourceIp"?: string;
    /**
     * 修改基线检查的周期。取值：
     * - **1**：每隔1天。
     * - **3**：每隔3天。
     * - **7**：每隔7天。
     * - **30**：每隔30天。
     * @example `1`
     */
    "CycleDays": string;
    /**
     * 修改基线检查策略的名称。
     * @example `testStrategy`
     */
    "Name": string;
    /**
     * 修改基线检查开始的时间。取值：
     * - **0**：表示基线检查开始时间为0:00~6:00。
     * - **6**：表示基线检查开始时间为6:00~12:00。
     * - **12**：表示基线检查开始时间为12:00~18:00。
     * - **18**：表示基线检查开始时间为18:00~24:00。
     * > 此参数作废。
     * @example `18`
     */
    "CycleStartTime"?: string;
    /**
     * 查询[DescribeRiskType](~~DescribeRiskType~~)接口获取检测项子类型。
     * @example `hc_exploit_redis`
     */
    "RiskSubTypeName": string;
    /**
     * 基线策略ID。
     * @example `245`
     */
    "Id"?: string;
    /**
     * 支持自定义基线检查项配置。该值为JSON格式，包含以下参数：
     * - **typeName**：基线名称。
     * - **checkDetails**：检测详情，该值为JSON格式。
     *     - **checkId**：检测项编号。
     *     - **rules**：策略配置，该值为JSON格式。
     *         - **ruleId**：策略配置编号。
     *         - **paramList**：策略参数配置集合，该值为JSON格式。
     *             - **paramName**：参数名称。
     *             - **value**：参数配置值。
     * @example `[{"typeName":"hc_centos_6_custom","checkDetails":[{"checkId":4,"rules":[{"ruleId":"pass_min_days_login_defs.must.cus","paramList":[{"paramName":"range_val","value":"7"}]}]}]}]`
     */
    "RiskCustomParams"?: string;
    /**
     * 策略类型。取值：
     * - **custom**：自定义策略。
     * - **common**：标准策略。
     * @example `common`
     */
    "CustomType": string;
    /**
     * 策略扫描方式。取值：
     * - **groupId**：群组扫描。
     * - **uuid**：资产扫描。
     * @example `groupId`
     */
    "TargetType": string;
    /**
     * 策略执行开始的时间。格式为hh:mm:ss。
     * @example `00:01:00`
     */
    "StartTime": string;
    /**
     * 策略执行结束时间。格式为hh:mm:ss。
     * @example `05:00:00`
     */
    "EndTime": string;
}
