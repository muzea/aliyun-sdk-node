export interface CreateCardSmsTemplateRequest {
    /**
     * 卡片短信模板名称。
     * @example `阿里云图文类模板`
     */
    "TemplateName": string;
    /**
     * 卡片短信的模板内容。
     * > - Template、ExtendInfo、TemplateContent、TmpCard、Action等字段说明，请参见[卡片短信模板参数字段说明](~~434929~~)。
     * > - 不同类型的卡片短信模板的内容结构不同，详情请参见[卡片短信模板示例](~~435361~~)。
     * @example `{
           "extendInfo":{
                  "scene":"HMOVM图文",
                  "purpose":"2",
                  "userExt":{
                         "outId":"1234554321"
                  }
           },
           "templateContent":{
                  "pages":[
                         {
    "tmpCards":[
                                       {
                                              "type":"IMAGE",
                                              "srcType":1,
                                              "src":"28755",
                                              "actionType":"OPEN_APP",
                                              "action":{
                                                     "target":"https://s.tb.cn/c.KxzZ",
                                                     "merchantName":"测试-图文模板",
                                                     "packageName":[
                                                            "com.taobao.taobao"],
                                                     "floorUrl":"https://s.tb.cn/c.KxzZ"
                                              },
                                              "positionNumber":1
                                       },
                                       {
                                              "type":"TEXT",
                                              "content":"测试- BENZ AMG 2020 试驾邀请",
                                              "isTextTitle":true,
                                              "positionNumber":2
                                       },
                                       {
                                              "type":"TEXT",
                                              "content":"测试-梅赛德斯-奔驰，创新激情永不灭。作为汽车 XXXX",
                                              "isTextTitle":false,
                                              "positionNumber":3
                                       },
                                       {
                                              "type":"BUTTON",
                                              "content":"预约试驾",
                                              "actionType":"OPEN_BROWSER",
                                              "action":{
                                                     "target":"https://www.mercedes-benz.com.cn",
                                                     "merchantName":"测试-正在跳转梅赛德斯-奔驰"
    },
                                              "positionNumber":4
                                       }]
                         }]
           },
           "cardSignName":"阿里云",
           "cardType":5
    }`
     */
    "Template": any;
    /**
     * 对上传模板的描述。
     * @example `图文类模板`
     */
    "Memo"?: string;
    /**
     * 模板提交的厂商。厂商类型取值：
     * - **HuaWei**：表示华为厂商。
     * - **XiaoMi**：表示小米厂商。
     * - **OPPO**：表示OPPO厂商。
     * - **VIVO**：表示VIVO厂商。
     * - **MEIZU**：表示魅族厂商。
     * > 该参数不填时，系统自动匹配模板支持的手机厂商。
     * @example `["HuaWei","XiaoMi"] `
     */
    "Factorys"?: string;
}
