export interface CreateStorageGatewayRequest {
    /**
     * 订单数组。
     */
    "OrderDetails": {
        /**
         * 节点ID。
         * @example `cn-shenzhen-3`
         */
        EnsRegionId: string;
        /**
         * 网关类型。当前仅支持取值为**1**，**1**代表iSCSI。
         * @example `1`
         */
        GatewayType: string;
        /**
         * 专有网络ID。
         * @example `n-123`
         */
        VpcId: string;
        /**
         * 网关的显示名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
         * @example `testGatewayName`
         */
        GatewayName: string;
        /**
         * 网关的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
         * @example `testDescription`
         */
        Description: string;
    }[];
}
