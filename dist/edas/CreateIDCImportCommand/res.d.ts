export interface CreateIDCImportCommandResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 导入命令。
     * @example `wget -q -O /tmp/install.sh http://edas-hz.oss-cn-hangzhou-internal.aliyuncs.com/install.sh && sh /tmp/install.sh -idcToken xxxx-xxxxx-xxxxx-xxxxxxx -edasId xxxxxxxxxxxxxx`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
}
