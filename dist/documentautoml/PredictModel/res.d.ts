export interface PredictModelResponse {
    /**
     * Id of the request
     * @example `3EAC98E6-8DD6-511F-8764-DEE8B6EB6BB4`
     */
    RequestId: string;
    /**
     * 请求结果状态，200为成功
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 接口返回信息
     * @example `{
          "RequestId": "0C066DD3-F55D-18F7-8577-DE533E04054D",
          "Message": "",
          "Data": {
                "code": 200,
                "data": {
                      "姓名": "xxx",
                      "证号": "xxx",
                      "性别": "女"
                },
                "specificType": "ocr_infoExtractBill",
                "originalFileUrl": "https://doc-automl-public.oss-cn-hangzhou.aliyuncs.com/demo/extractBill.png",
                "message": "",
                "type": "卡证",
                "version": "1.0.9",
                "predictFile": "",
                "tim_img": "17",
                "score": 1.05,
                "wid": "1544",
                "hgt": "1054",
                "imageUrl": "",
                "angle": "0",
                "orig_hgt": "1054",
                "orig_wid": "1544",
                "tim_ocr": "97",
                "classType": "model",
                "info": [
                      {
                            "value_loc": "595,314,595,399,398,399,398,314",
                            "key_prob": 1,
                            "key_loc": "",
                            "value_prob": 1,
                            "value": "XXX",
                            "key": "姓名"
                      },
                      {
                            "value_loc": "1256,234,1256,312,678,312,678,233",
                            "key_prob": 1,
                            "key_loc": "",
                            "value_prob": 1,
                            "value": "440305198305101408",
                            "key": "证号"
                      },
                      {
                            "value_loc": "965,321,965,394,851,394,851,321",
                            "key_prob": 1,
                            "key_loc": "",
                            "value_prob": 1,
                            "value": "女",
                            "key": "性别"
                      }
                ]
          },
          "Code": 200
    }`
     */
    Data: any;
}
