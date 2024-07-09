export interface SubmitIProductionJobResponse {
    /**
     * 请求ID。
     * @example `5210DBB0-E327-4D45-ADBC-0B83C8796E26`
     */
    RequestId: string;
    /**
     * 作业ID。建议您保存此ID便于后续调用其他接口时使用。
     * @example `39f8e0bc005e4f309379701645f4****`
     */
    JobId: string;
    /**
     * 返回结果。不同算法返回结果不同，更多信息请参见[智能生产接口参数补充说明](~~352026~~)。
     * @example `{ "Code":"Success", "Details":[], "FunctionName":"ImageCartoonize", "JobId":"39f8e0bc005e4f309379701645f4****", "Message":"success", "State":"Success", "Type":"IProduction" }`
     */
    Result: string;
}
