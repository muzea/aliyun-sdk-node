export interface QueryVideoPlayProgressResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
    /**
     * 返回结果的提示信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回结果详情。
     * - progress：当前播放时长，单位毫秒
     * - duration：文件总时长
     * > 播放进度百分比可以通过progress除以duration获得。
     */
    Data: any;
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码详见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
}
