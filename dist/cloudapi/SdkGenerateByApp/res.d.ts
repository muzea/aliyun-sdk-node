export interface SdkGenerateByAppResponse {
    /**
     * SDK的base64后的编码，通过base64解码可以得到文件
     * @example `UEsDBBQACAAIADdwnFQAAAAAAAAAAAAAAAA2AAAAQ0FTREtfSkFWQV8xMjI3NDY2NjY0MzM0MTMzXzE2NTExMjU3MD......`
     */
    DownloadLink: string;
    /**
     * 请求ID。
     * @example `61A16D46-EC04-5288-8A18-811B0F536CC2`
     */
    RequestId: string;
}
