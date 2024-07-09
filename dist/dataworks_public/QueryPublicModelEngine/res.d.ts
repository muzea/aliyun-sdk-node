export interface QueryPublicModelEngineResponse {
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `4CFB2DED-7D9B-4C42-B4AA-CFF4991DFFF4`
     */
    RequestId: string;
    /**
     * 是通过FML语句查询返回的列表信息。
     */
    ReturnValue: any[];
}
