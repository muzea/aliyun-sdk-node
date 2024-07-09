export interface CreatePickUpWaybillPreQueryRequest {
    /**
     * HTTP请求内容类型。
     * 非必填，如果填，请填写application/json;chatset=UTF-8
     * @example `application/json;chatset=UTF-8`
     */
    "Content-Type"?: string;
    /**
     * 寄件人信息。
     */
    "SenderInfo": {
        /**
         * 寄件人姓名。
         * @example `王XX`
         */
        Name: string;
        /**
         * 寄件人手机号。
         * @example `1390000****`
         */
        Mobile: string;
        /**
         * 寄件人地址信息。
         */
        AddressInfo: {
            /**
             * 寄件人所在省份。
             * @example `浙江省`
             */
            ProvinceName: string;
            /**
             * 寄件人所在市。
             * @example `杭州市`
             */
            CityName: string;
            /**
             * 寄件人所在区。
             * @example `西湖区`
             */
            AreaName: string;
            /**
             * 寄件人所在街道。
             * @example `XX街道`
             */
            TownName: string;
            /**
             * 寄件人详细地址。
             * @example `XX小区XX号`
             */
            AddressDetail: string;
        };
    };
    /**
     * 收件人信息。
     */
    "ConsigneeInfo": {
        /**
         * 收件人姓名。
         * @example `李XX`
         */
        Name: string;
        /**
         * 收件人手机号。
         * @example `1390000****`
         */
        Mobile: string;
        /**
         * 收件人地址信息。
         */
        AddressInfo: {
            /**
             * 收件人所在省份。
             * @example `陕西省`
             */
            ProvinceName: string;
            /**
             * 收件人所在市。
             * @example `西安市`
             */
            CityName: string;
            /**
             * 收件人所在区。
             * @example `长安区`
             */
            AreaName: string;
            /**
             * 收件人所在街道。
             * @example `XX街道`
             */
            TownName: string;
            /**
             * 收件人详细地址。
             * @example `XX小区XX号`
             */
            AddressDetail: string;
        };
    };
    /**
     * 快递公司编码。不指定快递公司时由系统进行分配。
     * @example `YTO`
     */
    "CpCode"?: string;
    /**
     * 预估重量（单位：克）。
     * > 若您需要查询预估价格，该参数必传。
     * @example `2000`
     */
    "PreWeight"?: string;
    /**
     * 接入方系统的订单编号。
     * @example `787DFHHDS989****`
     */
    "OuterOrderCode"?: string;
    /**
     * 外部渠道来源标识，不可包含下划线。接入时与系统约定取值。
     * @example `Test`
     */
    "OrderChannels": string;
}
