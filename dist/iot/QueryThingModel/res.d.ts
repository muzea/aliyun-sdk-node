export interface QueryThingModelResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 产品的**ProductKey**。
     * @example `a1BwAGV****`
     */
    ProductKey: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 物模型的功能定义。默认模块和自定义模块的物模型数据格式不同。
         * ThingModelJson取值的数据格式说明，请参见[ThingModelJson数据说明](~~150457~~)。
         * @example `{   "productKey":"a1Jw4id***",   "_ppk":{      "version":"1.1",      "description":"xxx"   },   "properties":[     {       "identifier": "SimCardType",       "dataSpecs": {         "max": "1",         "dataType": "INT",         "unit": "mmHg",         "min": "0",         "step": "1"       },       "std": false,       "custom": true,       "dataType": "INT",       "rwFlag": "READ_ONLY",       "productKey": "a1Jw4idFWHX",       "required": false,       "customFlag": true,       "name": "sim卡类型"     }   ],   "services":[],   "events":[]  }`
         */
        ThingModelJson: string;
    };
}
