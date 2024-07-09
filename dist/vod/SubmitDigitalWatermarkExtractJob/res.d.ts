export interface SubmitDigitalWatermarkExtractJobResponse {
    /**
     * 水印提取作业ID。可作为[GetDigitalWatermarkExtractResult](~~GetDigitalWatermarkExtractResult~~)接口的请求参数。
     * @example `ad90a501b1b9472374ad005046****`
     */
    JobId: string;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-****-6C044FE73368`
     */
    RequestId: string;
}
