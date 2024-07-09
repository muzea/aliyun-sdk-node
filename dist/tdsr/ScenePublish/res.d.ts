export interface ScenePublishResponse {
    /**
     *
     * @example `344794c32937474a9c59eb1309366493`
     */
    RequestId: string;
    /**
     *
     * @example `200`
     */
    Code: number;
    /**
     *
     * @example `true`
     */
    Success: boolean;
    /**
     *
     * @example `success`
     */
    Message: string;
    /**
     *
     * @example `https://lyj.aliyun.com/xxx`
     */
    PreviewUrl: string;
}
