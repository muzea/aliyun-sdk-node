export interface CreateJobDataParsingTaskResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 上传的任务id
     * @example `d004cfd2-6a81-491c-83c6-cbe186620c95`
     */
    JobDataParsingTaskId: string;
}
