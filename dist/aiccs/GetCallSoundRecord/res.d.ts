export interface GetCallSoundRecordResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 通话录音文件URL。
     * @example `http://aliccrec-shvpc.oss-cn-shanghai.aliyuncs.com/accrec_tmp/1001067****.wav`
     */
    Data: string;
    /**
     * 请求状态码。返回OK代表请求成功。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
