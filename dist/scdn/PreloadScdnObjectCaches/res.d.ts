export interface PreloadScdnObjectCachesResponse {
    /**
     * 预热返回的任务ID，多个任务ID用逗号（半角）分隔
     * @example `9524****`
     */
    PreloadTaskId: string;
    /**
     * 请求ID
     * @example `E5BD4B50-7A02-493A-AE0B-97B9024B413`
     */
    RequestId: string;
}
