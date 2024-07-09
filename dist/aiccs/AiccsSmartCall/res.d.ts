export interface AiccsSmartCallResponse {
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A90E4451-FED7-49D2-87C8-00700A8C4D0D`
     */
    RequestId: string;
    /**
     * 请求状态码。返回OK代表请求成功。
     * @example `OK`
     */
    Data: string;
    /**
     * 此次通话的唯一回执ID。
     * @example `116012854210^10281427****`
     */
    Code: string;
}
