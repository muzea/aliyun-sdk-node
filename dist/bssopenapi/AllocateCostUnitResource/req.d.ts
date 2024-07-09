export interface AllocateCostUnitResourceRequest {
    /**
     * 源财务单元的属主用户ID（必传）。
     * @example `273394581313325532`
     */
    "FromUnitUserId": number;
    /**
     * 源财务单元ID（必传）。
     * - 0表示未分配财务单元ID
     * - 大于0表示已分配的财务单元ID
     * @example `0`
     */
    "FromUnitId": number;
    /**
     * 目标财务单元属主用户ID。
     * @example `241021678450941490`
     */
    "ToUnitUserId": number;
    /**
     * 目标财务单元ID，取值：
     * - -1表示已分配资源移除到未分配。
     * - 大于0表示分配到指定财务单元。
     * @example `186419`
     */
    "ToUnitId": number;
    /**
     * 资源实例列表。
     */
    "ResourceInstanceList": {
        /**
         * 分拆型实例的分拆型，只有分拆型产品实例才需要传这个参数。
         * - 目前分拆项产品有八种商品，其商品code分别是oss、dcdn、snapshot、vod、cdn、live、cbwp、pcdn。
         * - 这个分拆项字段一般是通过QueryCostUnitResource获取用户的某一个财务单元（包含未分配）下的所有账单实例（包括分拆型实例会带分拆项）。
         * @example `qwer1-cn-beijing`
         */
        ApportionCode: string;
        /**
         * 账单实例的商品code（必传）。
         * @example `oss`
         */
        CommodityCode: string;
        /**
         * 账单实例的属主用户ID（必传）。
         * @example `273394581313325532`
         */
        ResourceUserId: number;
        /**
         * 账单的实例ID（必传）。
         * @example `cn-hangzhou;standard`
         */
        ResourceId: string;
    }[];
}
