export interface CreatePickUpWaybillRequest {
    /**
     * HTTP请求内容类型。
     * 非必填，如果填，请填写application/json;chatset=UTF-8
     * @example `application/json;chatset=UTF-8`
     */
    "Content-Type"?: string;
    /**
     * 外部订单号。
     * @example `143234234266****`
     */
    "OuterOrderCode": string;
    /**
     * 外部渠道来源。
     * @example `YUN_DIAN_SHANG`
     */
    "OrderChannels": string;
    /**
     * 快递公司编码。
     * @example `YTO`
     */
    "CpCode"?: string;
    /**
     * 寄件人姓名。
     * @example `王XX`
     */
    "SendName": string;
    /**
     * 寄件人手机号。
     * > SendMobile和SendPhone必须任选其一。
     * @example `1596714****`
     */
    "SendMobile"?: string;
    /**
     * 寄件人电话。
     * > SendMobile和SendPhone必须任选其一。
     * @example `05718845****`
     */
    "SendPhone"?: string;
    /**
     * 寄件人地址。
     */
    "SendAddress": {
        /**
         * 省。
         * @example `陕西省`
         */
        ProvinceName: string;
        /**
         * 市。
         * @example `西安`
         */
        CityName: string;
        /**
         * 区。
         * @example `未央区`
         */
        AreaName: string;
        /**
         * 街道。
         * @example `XX街道`
         */
        TownName: string;
        /**
         * 详细地址。
         * @example `XX小区XX号`
         */
        AddressDetail: string;
    };
    /**
     * 收货人姓名。
     * @example `张XX`
     */
    "ConsigneeName": string;
    /**
     * 收货人手机号。
     * > ConsigneeMobile和ConsigneePhone必须任选其一。
     * @example `1580000****`
     */
    "ConsigneeMobile"?: string;
    /**
     * 收货人电话。
     * > ConsigneeMobile和ConsigneePhone必须任选其一。
     * @example `0570000****`
     */
    "ConsigneePhone"?: string;
    /**
     * 收货人地址。
     */
    "ConsigneeAddress": {
        /**
         * 省。
         * @example `浙江`
         */
        ProvinceName: string;
        /**
         * 市。
         * @example `杭州`
         */
        CityName: string;
        /**
         * 区。
         * @example `西湖区`
         */
        AreaName: string;
        /**
         * 街道。
         * @example `XX街道`
         */
        TownName: string;
        /**
         * 详细地址。
         * @example `XX小区XX号`
         */
        AddressDetail: string;
    };
    /**
     * 备注。打印在面单上的备注内容。
     * @example `易碎物品`
     */
    "Remark"?: string;
    /**
     * 商品列表。
     */
    "GoodsInfos"?: {
        /**
         * 物品名称。
         * @example `鞋子`
         */
        Name: string;
        /**
         * 重量。单位：克。
         * @example `1000`
         */
        Weight: string;
        /**
         * 数量。
         * @example `1`
         */
        Quantity: string;
    }[];
    /**
     * 预约上门取件开始时间。
     * **AppointGotStartTime**的值，请从[CreatePickUpWaybillPreQuery](~~428594~~)接口返回参数**CpTimeSelectList**中**AppointTimes**的**StartTime**获取。
     * > 当**bizType**为**1**时必填。
     * @example `2021-01-01 10:00:00`
     */
    "AppointGotStartTime"?: string;
    /**
     * 预约上门取件结束时间。
     * **AppointGotEndTime**的值，请从[CreatePickUpWaybillPreQuery](~~428594~~)接口返回参数**CpTimeSelectList**中**AppointTimes**的**EndTime**获取。
     * > 当**bizType**为**1**时必填。
     * @example `2021-01-01 12:00:00`
     */
    "AppointGotEndTime"?: string;
    /**
     * 寄件模式。取值：
     * - **0**：实时订单（默认值）。
     * - **1**：预约订单。
     * @example `0`
     */
    "BizType"?: number;
}
