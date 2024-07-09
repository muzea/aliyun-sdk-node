export interface RecognizeNonTaxInvoiceResponse {
    /**
     * 请求唯一ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data": {"title": "中央非税收入统一票据(电子)", "invoiceCode": "00010120", "payerCreditCode": "", "payerName": "上饶市合诚娱乐设备有限公司", "invoiceNumber": "0026421031", "validationCode": "656aa9", "invoiceDate": "2021-03-19", "totalAmountInWords": "陆佰元整", "totalAmount": "600.00", "additionalInfo": "申请号:2012306329368 缴费日期:2021-03-17 缴费方式:网上支付 订单号:1105000114740512", "payeeName": "国家知识产权局专利局", "reviewer": "胡文举", "recipient": "刘代彬", "invoiceDetails": [{"number": "056990126100", "name": "外观设计专利第10年年费", "unit": "元", "quantity": "0.3", "specification": "2,000.00", "amount": "600.00", "remark": ""}]}, "ftype": 0, "height": 1800, "orgHeight": 1800, "orgWidth": 2977, "prism_keyValueInfo": [{"key": "title", "keyProb": 100, "value": "中央非税收入统一票据(电子)", "valuePos": [{"x": 680, "y": 63}, {"x": 1618, "y": 62}, {"x": 1618, "y": 139}, {"x": 681, "y": 141}], "valueProb": 100}, {"key": "invoiceCode", "keyProb": 100, "value": "00010120", "valuePos": [{"x": 421, "y": 228}, {"x": 421, "y": 276}, {"x": 242, "y": 276}, {"x": 242, "y": 228}], "valueProb": 100}, {"key": "payerCreditCode", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "payerName", "keyProb": 100, "value": "上饶市合诚娱乐设备有限公司", "valuePos": [{"x": 189, "y": 357}, {"x": 664, "y": 356}, {"x": 664, "y": 403}, {"x": 190, "y": 404}], "valueProb": 100}, {"key": "invoiceNumber", "keyProb": 100, "value": "0026421031", "valuePos": [{"x": 1934, "y": 222}, {"x": 1935, "y": 272}, {"x": 1718, "y": 274}, {"x": 1718, "y": 224}], "valueProb": 100}, {"key": "validationCode", "keyProb": 100, "value": "656aa9", "valuePos": [{"x": 1800, "y": 303}, {"x": 1800, "y": 349}, {"x": 1666, "y": 351}, {"x": 1665, "y": 304}], "valueProb": 100}, {"key": "invoiceDate", "keyProb": 100, "value": "2021-03-19", "valuePos": [{"x": 1924, "y": 382}, {"x": 1924, "y": 431}, {"x": 1711, "y": 431}, {"x": 1711, "y": 382}], "valueProb": 100}, {"key": "totalAmountInWords", "keyProb": 100, "value": "陆佰元整", "valuePos": [{"x": 607, "y": 1110}, {"x": 607, "y": 1167}, {"x": 417, "y": 1167}, {"x": 417, "y": 1110}], "valueProb": 100}, {"key": "totalAmount", "keyProb": 100, "value": "600.00", "valuePos": [{"x": 1702, "y": 1113}, {"x": 1702, "y": 1163}, {"x": 1576, "y": 1163}, {"x": 1576, "y": 1113}], "valueProb": 100}, {"key": "additionalInfo", "keyProb": 100, "value": "申请号:2012306329368 缴费日期:2021-03-17 缴费方式:网上支付 订单号:1105000114740512", "valuePos": [{"x": 121, "y": 1197}, {"x": 1869, "y": 1194}, {"x": 1870, "y": 1252}, {"x": 122, "y": 1254}], "valueProb": 100}, {"key": "payeeName", "keyProb": 100, "value": "国家知识产权局专利局", "valuePos": [{"x": 886, "y": 1645}, {"x": 886, "y": 1698}, {"x": 424, "y": 1700}, {"x": 423, "y": 1646}], "valueProb": 100}, {"key": "reviewer", "keyProb": 100, "value": "胡文举", "valuePos": [{"x": 1559, "y": 1653}, {"x": 1559, "y": 1708}, {"x": 1418, "y": 1708}, {"x": 1418, "y": 1653}], "valueProb": 100}, {"key": "recipient", "keyProb": 100, "value": "刘代彬", "valuePos": [{"x": 2090, "y": 1653}, {"x": 2090, "y": 1708}, {"x": 1947, "y": 1708}, {"x": 1947, "y": 1653}], "valueProb": 100}, {"key": "invoiceDetails", "keyProb": 100, "value": "[{\"number\":\"056990126100\",\"name\":\"外观设计专利第10年年费\",\"unit\":\"元\",\"quantity\":\"0.3\",\"specification\":\"2,000.00\",\"amount\":\"600.00\",\"remark\":\"\"}]", "valueProb": 100}], "sliceRect": {"x0": 288, "y0": 0, "x1": 2669, "y1": 0, "x2": 2669, "y2": 1800, "x3": 287, "y3": 1800}, "width": 2977}`
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
