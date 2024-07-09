export interface GetTemplateEstimateCostResponse {
    /**
     * 请求ID。
     * @example `6DEA36EF-C97D-5658-A4AC-4F5DB08D1A89`
     */
    RequestId: string;
    /**
     * 资源详情。
     * @example `{
      "NewEip": {
        "Type": "ALIYUN::VPC::EIP",
        "Success": true,
        "Result": {
          "Order": {
            "TaxAmount": 0.0,
            "Currency": "CNY",
            "RuleIds": [
              "102204102264****"
            ],
            "TradeAmount": 87.5,
            "OriginalAmount": 125.0,
            "DiscountAmount": 37.5
          },
          "OrderSupplement": {
            "ChargeType": "PrePaid",
            "Period": 1,
            "Quantity": 1,
            "PriceType": "Total",
            "PeriodUnit": "Month"
          },
          "InquiryType": "Buy",
          "Rules": {
            "Rule": [
              {
                "RuleDescId": "102204102264****",
                "Name": "合同优惠_整单_7.0折"
              }
            ]
          }
        }
      }
    }`
     */
    Resources: any;
}
