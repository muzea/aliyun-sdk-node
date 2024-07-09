export interface GetServiceEstimateCostResponse {
    /**
     * 请求ID。
     * @example `E73F09DC-6C13-5CB1-A10F-7A4E125ABD2C`
     */
    RequestId: string;
    /**
     * 资源列表。
     * @example `{
          "ECSInstances":{
            "Type":"ALIYUN::ECS::InstanceGroup",
            "Success":true,
            "Result":{
              "Order":{
                "Currency":"CNY",
                "RuleIds":[
                  1752723
                ],
                "DetailInfos":{
                  "ResourcePriceModel":[
                    {
                      "Resource":"bandwidth",
                      "TradeAmount":0.0,
                      "SubRuleIds":[],
                      "OriginalAmount":0.0,
                      "DiscountAmount":0.0
                    },
                    {
                      "Resource":"image",
                      "TradeAmount":0.0,
                      "SubRuleIds":[],
                      "OriginalAmount":0.0,
                      "DiscountAmount":0.0
                    },
                    {
                      "Resource":"instanceType",
                      "TradeAmount":0.006966,
                      "SubRuleIds":[],
                      "OriginalAmount":0.45,
                      "DiscountAmount":0.443034
                    },
                    {
                      "Resource":"systemDisk",
                      "TradeAmount":0.000867,
                      "SubRuleIds":[],
                      "OriginalAmount":0.056,
                      "DiscountAmount":0.055133
                    },
                    {
                      "Resource":"dataDisk",
                      "TradeAmount":0.002167,
                      "SubRuleIds":[],
                      "OriginalAmount":0.14,
                      "DiscountAmount":0.137833
                    }
                  ]
                }`
     */
    Resources: any;
    /**
     * 云市场购买订单时间信息。
     * @example `{\"PayPeriodUnit\":Month,\"PayPeriod\":1}`
     */
    Commodity: any;
}
