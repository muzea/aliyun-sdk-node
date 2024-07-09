export interface RecognizeBankAcceptanceResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"data": {"issueDate": "2021-03-31", "validToDate": "2021-06-30", "draftStatus": "提示收票已签收", "draftNumber": "130659500009820xxxx", "issuerName": "广东格林精密部件股份有限公司", "issuerAccountNumber": "955088001663180xxxx", "issuerAccountBank": "广发银行股份有限公司惠州江北支行", "payeeName": "", "payeeAccountNumber": "200802200920026xxxx", "payeeAccountBank": "中国工商银行惠州仲恺高新区支行", "totalAmountInWords": "贰拾万捌仟捌佰肆拾伍元整", "totalAmount": "208845.00", "acceptorName": "广发银行股份有限公司惠州江北支行", "acceptorAccountNumber": "0", "acceptorBankNumber": "30659500xxxx", "acceptorAccountBank": "广发银行股份有限公司惠州江北支行", "agreementNumber": "", "assignability": "可转让", "acceptanceDate": "2021-03-31"}, "ftype": 0, "height": 570, "orgHeight": 570, "orgWidth": 631, "prism_keyValueInfo": [{"key": "issueDate", "keyProb": 100, "value": "2021-03-31", "valuePos": [{"x": 149, "y": 39}, {"x": 149, "y": 50}, {"x": 87, "y": 50}, {"x": 87, "y": 39}], "valueProb": 100}, {"key": "validToDate", "keyProb": 100, "value": "2021-06-30", "valuePos": [{"x": 151, "y": 56}, {"x": 151, "y": 68}, {"x": 87, "y": 68}, {"x": 87, "y": 56}], "valueProb": 100}, {"key": "draftStatus", "keyProb": 100, "value": "提示收票已签收", "valuePos": [{"x": 467, "y": 37}, {"x": 467, "y": 52}, {"x": 379, "y": 51}, {"x": 379, "y": 36}], "valueProb": 100}, {"key": "draftNumber", "keyProb": 97, "value": "130659500009820xxxx", "valuePos": [{"x": 511, "y": 57}, {"x": 511, "y": 68}, {"x": 380, "y": 68}, {"x": 380, "y": 56}], "valueProb": 97}, {"key": "issuerName", "keyProb": 100, "value": "广东格林精密部件股份有限公司", "valuePos": [{"x": 275, "y": 75}, {"x": 275, "y": 90}, {"x": 103, "y": 90}, {"x": 103, "y": 75}], "valueProb": 100}, {"key": "issuerAccountNumber", "keyProb": 100, "value": "955088001663180xxxx", "valuePos": [{"x": 221, "y": 96}, {"x": 221, "y": 108}, {"x": 105, "y": 108}, {"x": 105, "y": 96}], "valueProb": 100}, {"key": "issuerAccountBank", "keyProb": 100, "value": "广发银行股份有限公司惠州江北支行", "valuePos": [{"x": 298, "y": 120}, {"x": 298, "y": 136}, {"x": 106, "y": 136}, {"x": 106, "y": 119}], "valueProb": 100}, {"key": "payeeName", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "payeeAccountNumber", "keyProb": 100, "value": "200802200920026xxxx", "valuePos": [{"x": 536, "y": 97}, {"x": 536, "y": 108}, {"x": 420, "y": 108}, {"x": 420, "y": 97}], "valueProb": 100}, {"key": "payeeAccountBank", "keyProb": 100, "value": "中国工商银行惠州仲恺高新区支行", "valuePos": [{"x": 421, "y": 115}, {"x": 587, "y": 115}, {"x": 587, "y": 140}, {"x": 421, "y": 140}], "valueProb": 98}, {"key": "totalAmountInWords", "keyProb": 100, "value": "贰拾万捌仟捌佰肆拾伍元整", "valuePos": [{"x": 300, "y": 164}, {"x": 300, "y": 180}, {"x": 154, "y": 180}, {"x": 154, "y": 164}], "valueProb": 100}, {"key": "totalAmount", "keyProb": 99, "value": "208845.00", "valuePos": [{"x": 300, "y": 164}, {"x": 300, "y": 180}, {"x": 154, "y": 180}, {"x": 154, "y": 164}], "valueProb": 100}, {"key": "acceptorName", "keyProb": 100, "value": "广发银行股份有限公司惠州江北支行", "valuePos": [{"x": 309, "y": 208}, {"x": 310, "y": 233}, {"x": 180, "y": 234}, {"x": 179, "y": 210}], "valueProb": 100}, {"key": "acceptorAccountNumber", "keyProb": 100, "value": "0", "valuePos": [{"x": 188, "y": 249}, {"x": 188, "y": 260}, {"x": 181, "y": 260}, {"x": 181, "y": 249}], "valueProb": 100}, {"key": "acceptorBankNumber", "keyProb": 100, "value": "30659500xxxx", "valuePos": [{"x": 494, "y": 218}, {"x": 494, "y": 229}, {"x": 421, "y": 229}, {"x": 421, "y": 218}], "valueProb": 100}, {"key": "acceptorAccountBank", "keyProb": 100, "value": "广发银行股份有限公司惠州江北支行", "valuePos": [{"x": 587, "y": 241}, {"x": 587, "y": 266}, {"x": 420, "y": 266}, {"x": 420, "y": 241}], "valueProb": 100}, {"key": "agreementNumber", "keyProb": 100, "value": "", "valueProb": 100}, {"key": "assignability", "keyProb": 100, "value": "可转让", "valuePos": [{"x": 144, "y": 309}, {"x": 144, "y": 324}, {"x": 106, "y": 324}, {"x": 106, "y": 309}], "valueProb": 100}, {"key": "acceptanceDate", "keyProb": 100, "value": "2021-03-31", "valuePos": [{"x": 466, "y": 317}, {"x": 466, "y": 329}, {"x": 404, "y": 329}, {"x": 404, "y": 317}], "valueProb": 100}], "sliceRect": {"x0": 10, "y0": 90, "x1": 616, "y1": 88, "x2": 616, "y2": 498, "x3": 10, "y3": 499}, "width": 631}`
     */
    Data: string;
    /**
     * 错误码
     * @example `noPermission`
     */
    Code: string;
    /**
     * 错误提示
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
}