export interface GetLiveEditingIndexFileResponse {
    /**
     * 请求ID
     * @example `4E84BE44-58A7-****-****-FBEBEA16EF94`
     */
    RequestId: string;
    /**
     * 索引文件地址
     * @example `https://bucket.oss-cn-shanghai.aliyuncs.com/test/live1.m3u8?<鉴权>&x-oss-process=hls/sign`
     */
    IndexFile: string;
}
