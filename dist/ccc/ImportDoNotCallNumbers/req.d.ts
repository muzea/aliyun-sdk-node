export interface ImportDoNotCallNumbersRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 禁止外呼号码列表，格式为JSON数组的字符串，数组元素是禁呼号码。
     * @example `["1900000****","1312121****"]`
     */
    "NumberList"?: string;
    /**
     * 禁呼号码的备注信息。
     * @example `测试`
     */
    "Remark"?: string;
    /**
     * OSS文件的Key，可从GetDoNotCallFileUploadParameters接口返回值中获取，仅在文件上传方式导入时需要填写此参数。
     * @example `temp/blacklist/import/15772471154xxxx/ccc-test/20220315100340/blacklist.xlsx`
     */
    "FilePath"?: string;
}
