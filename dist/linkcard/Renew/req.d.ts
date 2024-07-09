export interface RenewRequest {
    /**
     * 接口Code。
     * @example `linkcard`
     */
    "ApiProduct"?: string;
    /**
     * 接口版本。
     * @example `2021-05-20`
     */
    "ApiRevision"?: string;
    /**
     * 物联网卡的ICCID。
     * 您可在物联网卡上查看ICCID，或者在物联网SIM服务控制台的卡管理页面，查看ICCID。
     * @example `89860321******15668`
     */
    "Iccid": string;
    /**
     * 充值类型。
     * - STANDARD：续订套餐。
     * - OVERLAY ：订购叠加包。
     * @example `STANDARD`
     */
    "RechargeType": string;
    /**
     * 自定义的订单编号，编号需唯一且保持幂等性。
     * 如果您的充值，涉及自有平台的订单管理，如给下游客户充值等，您可填入自有平台已生成的外部订单编号，该接口调用成功后，会生成一个订单编号（OrderNo）。该参数可以方便您将生成的订单编号与外部订单号关联起来。如果非此场景，你可填入任意正整数，例如0。
     * @example `12345678`
     */
    "SerialNo": string;
    /**
     * 充值类型为订购叠加包时需填写。
     * 具体Code请咨询技术对接人员。
     * @example `COM***0203`
     */
    "OfferCode"?: string;
    /**
     * 订购份数。根据物联网卡本身的套餐类型选择订购份数。
     * - 续订月套餐：支持1、2、3、6、9、12。
     * - 续订年套餐：支持1、2、3。
     * - 订购叠加包：支持1、2、3。
     * @example `12`
     */
    "BuyNum": number;
}
