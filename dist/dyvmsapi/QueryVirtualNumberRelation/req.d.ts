export interface QueryVirtualNumberRelationRequest {
    /**
     * 产品名称。默认取值：**dyvms**。
     * @example `dyvms`
     */
    "ProdCode"?: string;
    /**
     * 当前页码。默认取值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页显示的条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 路由类型。取值：
     * - **0**：归属地优先。
     * - **1**：随机。
     * @example `0`
     */
    "RouteType"?: number;
    /**
     * 资质ID。此参数可不填。
     * @example `1000000542****`
     */
    "QualificationId"?: number;
    /**
     * 真实号码归属地。
     * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/number/list/normal)**真实号管理**页面，查询号码归属地。
     * @example `浙江/杭州`
     */
    "RegionNameCity"?: string;
    /**
     * 号码类型。取值：
     * - **1**：虚商号码。
     * - **2**：运营商号码。
     * - **3**：95开头的号码。
     * @example `1`
     */
    "SpecId"?: number;
    /**
     * 真实号码。
     * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/number/list/normal)**真实号管理**页面，获取真实号。
     * @example `0213144****`
     */
    "RelatedNum"?: string;
    /**
     * 虚拟号码。
     * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/virtual/list)**虚拟号管理**页面，获取虚拟号。
     * @example `05710000****`
     */
    "PhoneNum"?: string;
}
