export interface AddVirtualNumberRelationRequest {
    /**
     * 产品名称。默认取值：**dyvms**。
     * @example `dyvms`
     */
    "ProdCode"?: string;
    /**
     * 公司名列表。多个公司之间用半角逗号（,）分隔。
     * @example `公司1,公司2`
     */
    "CorpNameList"?: string;
    /**
     * 真实号码列表。多个号码之间使用半角逗号（,）分隔。
     * @example `1321111****,1322222****`
     */
    "NumberList": string;
    /**
     * 路由类型。取值：
     * - **0**：归属地优先。
     * - **1**：随机。
     * @example `0`
     */
    "RouteType": number;
    /**
     * 虚拟号码。
     * @example `05516214****`
     */
    "PhoneNum": string;
}
