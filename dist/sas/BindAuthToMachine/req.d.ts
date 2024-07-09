export interface BindAuthToMachineRequest {
    /**
     * 设置搜索资产的条件。该参数JSON格式，输入参数时注意大小写。
     * > 支持使用资产的实例ID、实例名称、所属VPC ID、地域、公网IP地址等条件搜索资产。您可以调用[DescribeCriteria](~~DescribeCriteria~~)接口查询支持的搜索条件。
     * @example `
    [{"name":"riskStatus","value":"YES"},{"name":"internetIp","value":"1.2.XX.XX"}]`
     */
    "Criteria"?: string;
    /**
     * 设置多个搜索条件间生效的逻辑关系。默认**OR**，取值：
     * - **OR**：表示多个条件间为**或**的关系。
     * - **AND**：表示多个条件间为**与**的关系。
     * @example `OR`
     */
    "LogicalExp"?: string;
    /**
     * 是否全量绑定。默认**false**，取值：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    "BindAll"?: boolean;
    /**
     * 资产的授权版本。取值：
     * - **6**：防病毒版
     * - **5**：高级版
     * - **3**：企业版
     * - **7**：旗舰版
     * - **10**：增值服务版
     * @example `6`
     */
    "AuthVersion"?: number;
    /**
     * 开启自动绑定。取值：
     * - **0**：关闭
     * - **1**：开启
     * @example `1`
     */
    "AutoBind"?: number;
    /**
     * 是否预绑定操作。取值：
     * - **0**：否
     * - **1**：是
     * >  开启预绑定后，会在完成购买后自动为指定服务器绑定对应版本的授权数。
     * @example `1`
     */
    "IsPreBind"?: number;
    /**
     * 预绑定关联的订单编号。
     * @example `233016**0482`
     */
    "PreBindOrderId"?: number;
    /**
     * 预绑定关联的订单版本。取值：
     * - **level7**：防病毒版
     * - **level3**：高级版
     * - **level2**：企业版
     * - **level8**：旗舰版
     * - **level10**：仅采购增值服务
     * @example `level2`
     */
    "NtmVersion"?: string;
    /**
     * 绑定的UUID集合。
     * > **Bind**和**UnBind**不能同时为空。
     */
    "Bind"?: string[];
    /**
     * 解绑的UUID集合。
     * > **Bind**和**UnBind**不能同时为空。
     */
    "UnBind"?: string[];
}
