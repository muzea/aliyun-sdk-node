export interface PrintByTemplateRequest {
    /**
     * 打印参数，您可以在寄雁传书服务控制台获取打印参数的模板，然后在模板中填入本次需要动态打印的内容。
     * @example `{   "orderTable": [     {       "number": "1",       "price": "33.00",       "name": "糖醋排骨"     }   ],   "orderTime": "2021-01-25 10:20:00",   "address": "地址：浙江省杭州市西湖区阿里云飞天园区",   "phone": "13********",   "price": "? 74.00",   "distributionFee": "5.00",   "shopName": "XX食品商店",   "title": "XX外卖单",   "status": "--已在线支付--" }`
     */
    "ParamsJsonString"?: string;
    /**
     * 设备ID。
     * > 如果传入该参数，则无需传入**ProductKey**和**DeviceName**。**IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * @example `4de2c367****8c585e5992**`
     */
    "IotId"?: string;
    /**
     * 实例ID。
     * <props="china">您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。</props>
     * <props="china">
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。</props>
     * <props="intl">无需传入此参数。</props>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 模板标识，您可以在寄雁传书服务的控制台获取模板标识。
     * @example `test`
     */
    "TemplateBizCode": string;
    /**
     * 产品的唯一标识。
     * > 如果传入**ProductKey**，则必须同时传入**DeviceName**。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 设备名称。
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 是否下发历史的Topic给打印设备。
     * - false（默认）：下发设备的Topic格式为**​/ext/rrpc/+/{pk}/{dn}/user/print**
     * - true：下发设备的Topic格式为**​/ext/rrpc/+/{pk}/{dn}/print**
     * @example `true`
     */
    "HistoryPrintTopic"?: boolean;
}
