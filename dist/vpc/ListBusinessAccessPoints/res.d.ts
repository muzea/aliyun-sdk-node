export interface ListBusinessAccessPointsResponse {
    /**
     * 请求ID。
     * @example `611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F`
     */
    RequestId: string;
    /**
     * 物理专线所有接入点信息列表。
     */
    BusinessAccessPoints: {
        /**
         * 物理专线接入点的ID。
         * @example `ap-cn-hangzhou-xs-B`
         */
        AccessPointId: string;
        /**
         * 物理专线接入点的名称。
         * @example `杭州-萧山-B`
         */
        AccessPointName: string;
        /**
         * 支持接入物理线路的运营商。取值：
         * - **CT**：中国电信。
         * - **CU**：中国联通。
         * - **CM**：中国移动。
         * - **CO**：中国其他。
         * - **Equinix**：Equinix。
         * - **Other**：境外其他。
         * @example `CT`
         */
        SupportLineOperator: string;
        /**
         * 物理专线接入点支持购买的端口类型。取值：
         * - **100Base-T**：百兆电口。
         * - **1000Base-T**：千兆电口。
         * - **1000Base-LX**：千兆单模光口（10千米）。
         * - **10GBase-T**：万兆电口。
         * - **10GBase-LR**：万兆单模光口（10千米）。
         * - **40GBase-LR**：四万兆单模光口。
         * - **100GBase-LR**：十万兆单模光口。
         * >  40GBase-LR和100GBase-LR需要根据实际后台端口水位情况进行创建，具体水位情况请联系商务经理。
         * @example `1000Base-T`
         */
        SupportPortTypes: string;
        /**
         * 云盒实例ID。
         * > 当查询的物理专线和接入点为云盒物理专线和云盒接入点时，该参数可以查询。
         * @example `cb-****`
         */
        CloudBoxInstanceIds: string;
        /**
         * 接入点的经度。
         * @example `120.247514`
         */
        Longitude: number;
        /**
         * 接入点的纬度。
         * @example `30.198416`
         */
        Latitude: number;
    }[];
}
