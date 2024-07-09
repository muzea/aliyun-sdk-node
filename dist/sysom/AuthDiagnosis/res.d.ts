export interface AuthDiagnosisResponse {
    /**
     * 状态码
     * - `code == Success` 则代表授权成功；
     * - 其它状态码代表授权失败，授权失败时查看 `message` 字段获取详细的错误信息；
     * @example `Success`
     */
    code: string;
    /**
     * 错误信息
     * - 如果 `code == Success`，则本字段为空；
     * - 否则本字段包含请求错误信息。
     * @example `SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom`
     */
    message: string;
    /**
     * 本接口没有返回数据
     * @example `{}`
     */
    data: any;
    /**
     * 请求 RequestId
     * @example `35F91AAB-5FDF-5A22-B211-C7C6B00817D0`
     */
    request_id: string;
}
