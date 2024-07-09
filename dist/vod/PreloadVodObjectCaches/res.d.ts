export interface PreloadVodObjectCachesResponse {
    /**
     * 预热返回的任务ID。多个任务ID用半角逗号（,）分隔。
     * @example `9524****`
     */
    PreloadTaskId: string;
    /**
     * 请求ID。
     * @example `E5BD4B50-7A02-493A-*****-97B9024B4135`
     */
    RequestId: string;
}
