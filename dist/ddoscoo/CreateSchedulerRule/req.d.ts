export interface CreateSchedulerRuleRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 通用联动规则的详细信息，使用JSON格式的字符串表述，具体结构如下。
     * - **Type**：String类型，必选，联动资源的地址格式。取值：
     *     - **A**：IP地址
     *     - **CNAME**：域名
     * - **Value**：String类型，必选，联动资源的地址。
     * - **Priority**：Integer类型，必选，规则优先级。取值范围：**0**~**100**，取值越大，优先级越高。
     * - **ValueType**：Integer类型，必选，联动资源的类型。取值：
     *     - **1**：DDoS高防IP
     *     - **2**：（阶梯防护）云资源IP
     *     - **3**：（出海加速）加速线路IP
     *     - **5**：（CDN联动）加速域名
     *     - **6**：（云产品联动）云资源IP
     * - **RegionId**：String类型，可选（**ValueType**为**2**时必选），地域ID。
     * @example `[{"Type":"A", "Value":"1.1.XX.XX", "Priority":80,"ValueType":2, "RegionId":"cn-hangzhou" },{"Type":"A", "Value":"203.199.XX.XX", "Priority":80,"ValueType":1}]`
     */
    "Rules": string;
    /**
     * 规则名称。
     * @example `testrule`
     */
    "RuleName": string;
    /**
     * 规则类型。取值：
     * - **2**：阶梯防护
     * - **3**：出海加速
     * - **5**：CDN联动
     * - **6**：云产品联动
     * - **8**：安全加速
     * @example `2`
     */
    "RuleType": number;
    /**
     * CDN联动规则的详细信息，使用JSON格式的字符串表达，具体结构如下。
     * - **ParamType**：必选，String类型，CDN联动类型。取值：**cdn**，表示CDN联动。
     * - **ParamData**：必选，Map类型，CDN联动参数。具体结构如下。
     *     - **Domain**：必选，String类型，CDN加速域名。
     *     - **Cname**：必选，String类型，加速域名CNAME地址。
     *     - **AccessQps**：必选，Integer类型，访问QPS阈值。超过阈值切换到DDoS高防。
     *     - **UpstreamQps**：可选，Integer类型，回源QPS阈值。低于阈值切换到CDN。
     * @example `{"ParamType":"cdn","ParamData":{"Domain":"example.aliyundoc.com","Cname":"demo.aliyundoc.com","AccessQps":100,"UpstreamQps":100}}`
     */
    "Param"?: string;
}
