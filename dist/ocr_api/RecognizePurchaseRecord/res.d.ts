export interface RecognizePurchaseRecordResponse {
    /**
     * 请求唯一ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data": {"orderNumber": "917147491700055357", "transactionTime": "", "deliveryInfo": "", "totalAmount": "104.50", "shopName": "百分新娘", "shoppingDetails": [{"name": "新娘手套结婚蕾丝婚纱手套2020新款长款女式红色手套短款白色冬夏[交易快用]", "specification": "颜色:A款", "price": "￥16.93", "quantity": "1"}, {"name": "新娘盘发造型U型插针韩式结婚礼头饰品头花发汉发饰发簪中式红色[交易供司]", "specification": "颜色分类:白色(3支价)", "price": "￥8.83", "quantity": "1"}, {"name": "新娘主婚纱头炒头饰超仙森系网红拍照道具气质复古结婚韩式蕾丝白[交易快照]", "specification": "长度:60cm-80cm颜色:白色双层发箍款", "price": "￥25.21", "quantity": "1"}, {"name": "新娘头亡婚纹配饰发饰皇冠结婚礼饰品三件套韩式水钻项链耳环套装[交是快照]", "specification": "颜色分类:B款三件套(耳夹)(礼盘+赠品)", "price": "￥40.53", "quantity": "工"}]}, "ftype": 0, "height": 793, "orgHeight": 1760, "orgWidth": 1616, "prism_keyValueInfo": [{"key": "orderNumber", "keyProb": 100, "value": "917147491700055357", "valuePos": [{"x": 260, "y": 43}, {"x": 260, "y": 23}, {"x": 461, "y": 27}, {"x": 460, "y": 46}], "valueProb": 100}, {"key": "transactionTime", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "deliveryInfo", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "totalAmount", "keyProb": 100, "value": "104.50", "valuePos": [{"x": 1002, "y": 151}, {"x": 1002, "y": 131}, {"x": 1109, "y": 133}, {"x": 1109, "y": 153}], "valueProb": 100}, {"key": "shopName", "keyProb": 99, "value": "百分新娘", "valuePos": [{"x": 632, "y": 52}, {"x": 632, "y": 29}, {"x": 720, "y": 33}, {"x": 719, "y": 55}], "valueProb": 99}, {"key": "shoppingDetails", "keyProb": 100, "value": "[{\"name\":\"新娘手套结婚蕾丝婚纱手套2020新款长款女式红色手套短款白色冬夏[交易快用]\",\"specification\":\"颜色:A款\",\"price\":\"￥16.93\",\"quantity\":\"1\"},{\"name\":\"新娘盘发造型U型插针韩式结婚礼头饰品头花发汉发饰发簪中式红色[交易供司]\",\"specification\":\"颜色分类:白色(3支价)\",\"price\":\"￥8.83\",\"quantity\":\"1\"},{\"name\":\"新娘主婚纱头炒头饰超仙森系网红拍照道具气质复古结婚韩式蕾丝白[交易快照]\",\"specification\":\"长度:60cm-80cm颜色:白色双层发箍款\",\"price\":\"￥25.21\",\"quantity\":\"1\"},{\"name\":\"新娘头亡婚纹配饰发饰皇冠结婚礼饰品三件套韩式水钻项链耳环套装[交是快照]\",\"specification\":\"颜色分类:B款三件套(耳夹)(礼盘+赠品)\",\"price\":\"￥40.53\",\"quantity\":\"工\"}]", "valueProb": 100}], "sliceRect": {"x0": 53, "y0": 929, "x1": 1511, "y1": 931, "x2": 1520, "y2": 1721, "x3": 50, "y3": 1720}, "width": 1471}`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}
