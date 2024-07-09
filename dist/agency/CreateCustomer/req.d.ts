export interface CreateCustomerRequest {
    /**
     * 客户姓名
     * @example `DoorBell Marketing`
     */
    "CustomerName": string;
    /**
     * 客户行业名称
     * 请使用Customer Trade枚举
     * @example `0205`
     */
    "CustomerTrade": string;
    /**
     * 客户子行业
     * 请使用Customer Sub Trade枚举
     * @example `020501`
     */
    "CustomerSubTrade"?: string;
    /**
     * 客户来源
     * 请使用Customer Source枚举
     * @example `website`
     */
    "CustomerSource": string;
    /**
     * 客户所属区域 请使用ListCountries获取当前UID可作业区域列表
     * @example `AR`
     */
    "Nation": string;
}
