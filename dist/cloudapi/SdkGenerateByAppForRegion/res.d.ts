export interface SdkGenerateByAppForRegionResponse {
    /**
     * SDK的base64后的编码，通过base64解码可以得到文件
     * @example `UEsDBBQACAAIADdwnFQAAAAAAAAAAAAAAAA2AAAAQ0FTREtfSkFWQV8xMjI3NDY2NjY0MzM0MTMzXzE2NTExMjU3MD......`
     */
    DownloadLink: string;
    /**
     * 本次请求的ID。
     * @example `CE5722A6-AE78-4741-A9B0-6C817D360510`
     */
    RequestId: string;
}
